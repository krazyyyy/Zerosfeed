# Generated by Django 3.2.6 on 2021-12-06 15:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rssReader', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country_name', models.CharField(max_length=64)),
                ('country_flag', models.CharField(blank=True, max_length=200, null=True)),
                ('country_code', models.CharField(blank=True, max_length=6, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='news',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='feed',
            name='country',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='country_feed', to='rssReader.country'),
        ),
        migrations.AddField(
            model_name='news',
            name='country',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='news_country', to='rssReader.country'),
        ),
    ]
