from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
import razorpay
from django.views.decorators.csrf import csrf_exempt
from donate.serializers import (
    DonateSerializer,
)
from django.contrib.auth import authenticate
from donate.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

# Generate Token Manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }

class DonateView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = DonateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get("email")
        pay = int(serializer.data.get("pay"))
        mobile = serializer.data.get("mobile")
        name = serializer.data.get("name")
        amount = pay*100
        client = razorpay.Client(auth=("rzp_test_btsBXoHN5Jw0Lq", "bepiNA4VzDNOQ5TPhUUxesJz"))
        payment = client.order.create({'amount': amount, 'currency': 'INR','payment_capture': '1'})
        return Response(
            {"msg": "Successful Donation"},
            status=status.HTTP_200_OK,
        )