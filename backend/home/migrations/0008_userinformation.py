# Generated by Django 2.2.23 on 2021-07-27 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_height'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserInformation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField()),
                ('operating_system', models.CharField(max_length=64)),
                ('browser_version', models.CharField(max_length=64)),
                ('device', models.CharField(max_length=64)),
                ('fcm', models.TextField()),
            ],
        ),
    ]
