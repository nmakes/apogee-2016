from django.conf.urls import patterns, url
from lacuna.views import *
urlpatterns = [
    url(r'^$', home),
    url(r'^status/$', status),
    url(r'^login/$', user_login),
    url(r'^filterpuzzle/$', dvm1verify),
]
