from django.contrib import admin

import requests
from bs4 import BeautifulSoup

from .models import Feed, CustomUser, News, ADsCode, footerHTML, PRVINews, Country, Categories

# Register your models here.

class InLineCategory(admin.StackedInline):
    model = Categories
    classes = ['collapse']
    extra = 0



class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'source', "categories",) 
    search_fields = ['title', 'source']

    inlines = [InLineCategory]

    def categories(self, obj):
        li = []
        for i in obj.news_category.all():
            li.append(i.category)
        return li

    class Meta:
        verbose_name_plural = "News"

class FeedAdmin(admin.ModelAdmin):
    list_display = ('source', 'website_url', 'category',)
    search_fields = ['source']



    def save_model(self, request, obj, form, change):
        url = requests.get(obj.website_url)
        li = []
        insert_list = []
        soup = BeautifulSoup(url.content, 'xml')

        entries = soup.find_all('item')

        news_dict = dict()
        for i in entries:
            # try:
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
                            try:
                                t = (i.find('content:encoded').text)
                                sp = BeautifulSoup(t, 'html5lib')
                            
                                img = (sp.find("img")['src'])
                            except:
                                t = (i.find('content').text)
                                sp = BeautifulSoup(t, 'html5lib')
                                img = (sp.find("img")['src'])
            
            category = []
            categories = i.findAll("category")
            category.append(obj.category)
            for cat in categories:
                if obj.category != cat.text:
                    category.append(cat.text)
            try:
                des = i.description.text
            except:
                des = ""
            try:
                source = i.source.text
            except:
                source = obj.source
            pub_ = i.pubDate.text.replace("+0000", "")
            if not chk.exists():
                news_dict[i.link.text] = category
                insert_list.append(News(title=i.title.text, link=i.link.text, description=des,  country=obj.country, source=source, pub_date=pub_, img=img))
            data['title'] = i.title.text
            data['link'] = i.link.text
            data['category'] = category
            data['img'] = img
            li.append(data)
            # except:
            #     pass
        News.objects.bulk_create(insert_list)
        obj.save()
        insert_list = []
        for key, value in news_dict.items():
            n = News.objects.get(link=key)
            for i in value:
                insert_list.append(Categories(category=i, news=n))
        Categories.objects.bulk_create(insert_list)

        # for j in news_dict:
        #     print(j)
        # c = Categories(category=j, news=n)
        # c.save()
        super(FeedAdmin, self).save_model(request, obj, form, change)

admin.site.register(Feed, FeedAdmin)




admin.site.register(News, NewsAdmin)
admin.site.register(CustomUser)
admin.site.register(ADsCode)
admin.site.register(PRVINews)
admin.site.register(footerHTML)
admin.site.register(Country)
admin.site.register(Categories)
