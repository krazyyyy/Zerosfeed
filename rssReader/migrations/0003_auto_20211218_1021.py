# Generated by Django 3.2.6 on 2021-12-18 10:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rssReader', '0002_auto_20211206_1501'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='news',
            name='category',
        ),
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=228)),
                ('news', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='news_category', to='rssReader.news')),
            ],
        ),
    ]
