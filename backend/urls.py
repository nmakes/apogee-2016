from django.conf.urls import include, url
from backend import views

urlpatterns = [
    url(r'^register/', views.user_register),
    url(r'^verify/(?P<token>\w+)/$', views.email_confirm),
    url(r'^user/', views.login_check),
    url(r'^login/', views.user_login),
    url(r'^logout/', views.user_logout),
    url(r'^emailverified/', views.email_check),
    url(r'^events/status/', views.events_check),
    url(r'^events/register/(?P<eventid>[0-9]+)/$', views.register_single, name='register_single'),
    url(r'^events/register/(?P<eventid>[0-9]+)/(?P<teamid>[0-9]+)/$', views.register_team, name='register_team'),
]
