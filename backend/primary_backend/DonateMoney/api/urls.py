from django.urls import path
from .api_razorpay import RazorpayOrderAPIView, TransactionAPIView

urlpatterns = [
    path("create/",
        RazorpayOrderAPIView.as_view(),
        name="razorpay-create-api"
    ),
    path("complete/",
        TransactionAPIView.as_view(),
        name="razorpay-complete-api"
    ),
]