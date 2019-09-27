# Generated by Django 2.2.3 on 2019-09-25 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('basic_app', '0003_auto_20190914_2251'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=25)),
                ('email', models.EmailField(max_length=254)),
                ('year', models.CharField(max_length=10)),
                ('branch', models.CharField(max_length=10)),
                ('section', models.CharField(max_length=1)),
                ('semester', models.CharField(max_length=4)),
            ],
        ),
    ]
