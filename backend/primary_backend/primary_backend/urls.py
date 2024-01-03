from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/user/", include("accounts.urls")),
    path("api/donate/", include("donate.urls")),
    path("api/stories/", include("disasterstories.urls")),
    path('api/emergency/', include('emergency_app.urls')),
]
