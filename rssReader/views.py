from django.shortcuts import render
from django.http import JsonResponse
from django.forms import model_to_dict
from django.core.paginator import Paginator
from datetime import timedelta
from django.utils import timezone
import datetime
from django.views.decorators.csrf import csrf_exempt
from bs4 import BeautifulSoup
import requests
import json
from itertools import chain
import operator


from .models import Feed, News, PRVINews, Categories

def delete(request):
    n = News.objects.all()[:1000]
    for i in n:
        i.delete()

# Create your views here.
def getNews(request):
    feeds = Feed.objects.all()
    li = []
    insert_list = []
    
    links_list = []
    news_dict = dict()
    for feed in feeds:
       
        try:
            url = requests.get(feed.website_url)
        except:
            continue
        soup = BeautifulSoup(url.content, 'xml')
        entries = soup.find_all('item')
        
        for i in entries:
            try:
                data = dict()
                chk = News.objects.filter(link__iexact=i.link.text)
                try:
                    img = i.enclosure['url'] 
                except:
                    try:
                        img = i.find("media:content")['url']
                    except:
                        try:
                            img = i.img.text
                        except:
                            try:
                                t = (i.find('description').text)
                                sp = BeautifulSoup(t, 'html5lib')
                                img = (sp.find("img")['src'])
                            except:
                                t = (i.find('content').text)
                                sp = BeautifulSoup(t, 'html5lib')
                                img = (sp.find("img")['src'])
                category = []
                categories = i.findAll("category")
                category.append(feed.category)
                for cat in categories:
                    if feed.category != cat.text:
                        category.append(cat.text)
                pub_ = i.pubDate.text.replace("+0000", "")
                try:
                    des = i.description.text
                except:
                    des = ""
                
                if not chk.exists() and i.link.text not in links_list:
                    links_list.append(i.link.text)
                    news_dict[i.link.text] = category
                    insert_list.append(News(title=i.title.text, link=i.link.text, description=des,  country=feed.country, source=feed.source, pub_date=pub_, img=img))
                data['title'] = i.title.text
                data['link'] = i.link.text
                data['category'] = category
                data['img'] = img
                li.append(data)
            except:
                pass
    News.objects.bulk_create(insert_list)
    # try:
    insert_list = []

    for key, value in news_dict.items():
        # try:
        n = News.objects.filter(link=key)
        if n:
            n = n[0]
        else:
            continue
        # except:
        #     continue
        for i in value:
            # try:
            if i != "" and i:
                insert_list.append(Categories(category=i, news=n))
            # except:
            #     pass
    Categories.objects.bulk_create(insert_list)
    # except:
    #     pass
    # feed = dict(feed=li)
    return JsonResponse({"message" : "success"})

def renderNews(request):
    news = News.objects.all()
    li = []
    for new in news:
        n = model_to_dict(new)
        li.append(n)
    feed = dict(feed=li)
    return JsonResponse(feed)


def renderByCategory(request, category):
    news = News.objects.filter(category__iexact=category)
    li = []
    for new in news:
        n = model_to_dict(new)
        li.append(n)
    feed = dict(feed=li)
    return JsonResponse(feed)

def randomNews(request, random_number):
    news = News.objects.all().order_by('?')[:random_number]
    li = []
    for new in news:
        n = model_to_dict(new)
        li.append(n)
    feed = dict(feed=li)
    return JsonResponse(feed)

def latestNews(request, random_number):
    news = News.objects.all().order_by('-id')[:random_number]
    li = []
    for new in news:
        n = model_to_dict(new)
        n['category'] = new.news_category.first().category
        li.append(n)
        
    feed = dict(feed=li)
    return JsonResponse(feed)

def getNewsCategory(request, random_number, category):
    # news = News.objects.filter(category__iexact=category).order_by('?')[:random_number]
    li = []
    i = 1
    while True:
        this_hour = timezone.now().replace(minute=0, second=0, microsecond=0)
        one_hour_later = this_hour + timedelta(hours=i)
        thetime = datetime.datetime.now() - timedelta(hours=i)
        news = News.objects.filter(news_category__category__iexact=category, time__gte=thetime).order_by("-id")[:random_number]
       
        if len(news) >= random_number or i > 200:
            break
        else:
            i += 1
    if random_number > 5 and len(news) < 5:
        news = News.objects.filter(news_category__category__iexact=category).order_by("-id")[:random_number]
        
    for new in news:
        n = model_to_dict(new)
        
        n['category'] = new.news_category.first().category
        li.append(n)
    feed = dict(feed=li)
    return JsonResponse(feed)


def randomNewsCategory(request, random_number, category):
    news = News.objects.filter(news_category__category__iexact=category).order_by('?')[:random_number]
    li = []
    for new in news:
        n = model_to_dict(new)
        n['category'] = new.news_category.first().category
        li.append(n)
    feed = dict(feed=li)
    return JsonResponse(feed)

@csrf_exempt
def newsCategory(request, category):
    if category == "latest":
        data = json.loads(request.body)
        news = News.objects.all().order_by("-id").order_by('-id')
        li = []
        paginator = Paginator(news, 30)
        page_number = data['page_no']
        news_pag = paginator.get_page(page_number)

        for new in news_pag:
            n = model_to_dict(new)
            n['category'] = new.news_category.first().category
            li.append(n)
        feed = dict(feed=li, next=news_pag.has_next())
        return JsonResponse(feed)

    data = json.loads(request.body)
    news = News.objects.filter(news_category__category__iexact=category).order_by('-id')

    li = []
    paginator = Paginator(news, 20)
    page_number = data['page_no']
    news_pag = paginator.get_page(page_number)

    for new in news_pag:
        n = model_to_dict(new)
        n['category'] = new.news_category.first().category
        li.append(n)
    feed = dict(feed=li, next=news_pag.has_next())
    return JsonResponse(feed)

@csrf_exempt
def newsSource(request, source):
    data = json.loads(request.body)
    news = News.objects.filter(source__iexact=source).order_by('-id')
    li = []
    paginator = Paginator(news, 20)
    page_number = data['page_no']
    news_pag = paginator.get_page(page_number)

    for new in news_pag:
        n = model_to_dict(new)
        n['category'] = new.news_category.first().category
        li.append(n)
    feed = dict(feed=li, next=news_pag.has_next())
    return JsonResponse(feed)

def countQuery(request, pk):
    news_count = News.objects.filter(category__iexact=pk).count()
    count = dict(total=news_count)
    return JsonResponse(count)

def randomSources(request):
    news = News.objects.values_list('source').order_by("?").distinct()[:6]

    li = []
    for new in news:
        
       
        li.append(new[0])
        
    feed = dict(feed=li)
    return JsonResponse(feed)