# Generated by Django 2.2.9 on 2020-01-27 06:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lecture', '0004_auto_20200127_1516'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classinformation',
            name='class_thumbnail_path',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='lectureinformation',
            name='lecture_pdf_path',
            field=models.CharField(default='', max_length=100),
        ),
    ]
