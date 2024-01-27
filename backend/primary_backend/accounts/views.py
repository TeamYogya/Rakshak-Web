from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from accounts.serializers import (
    SendPasswordResetEmailSerializer,
    UserChangePasswordSerializer,
    UserLoginSerializer,
    UserPasswordResetSerializer,
    UserProfileSerializer,
    UserRegistrationSerializer,
SendMessageSerializer,
AlertSerializer,
)
from django.contrib.auth import authenticate
from accounts.models import User
from accounts.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from twilio.rest import Client
from django.conf import settings

# Generate Token Manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }


class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = get_tokens_for_user(user)
        return Response(
            {"token": token, "msg": "Registration Successful"},
            status=status.HTTP_201_CREATED,
        )


# class UserLoginView(APIView):
#     renderer_classes = [UserRenderer]
#
#     def post(self, request, format=None):
#         serializer = UserLoginSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         email = serializer.data.get("email")
#         password = serializer.data.get("password")
#         user = authenticate(email=email, password=password)
#         if user is not None:
#             token = get_tokens_for_user(user)
#             return Response(
#                 {"token": token, "msg": "Login Success"}, status=status.HTTP_200_OK
#             )
#         else:
#             return Response(
#                 {"errors": {"non_field_errors": ["Email or Password is not Valid"]}},
#                 status=status.HTTP_404_NOT_FOUND,
#             )
class UserLoginView(APIView):
    """
    API View for user login.
    """

    def post(self, request, *args, **kwargs):
        serializer = UserLoginSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data['email']
            user = User.objects.get(email=email)

            # Get tokens for the user
            tokens = get_tokens_for_user(user)

            # You can customize the response data as per your requirements
            return Response({
                'refresh': tokens['refresh'],
                'access': tokens['access'],
                'message': 'Login successful',
                'user': {
                    'id': user.id,
                    'email': user.email,
                    'name': user.name,
                    # Add other user fields as needed
                }
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AlertView(APIView):
    """
    API View for user login.
    """

    def post(self, request, *args, **kwargs):
        serializer = AlertSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data['email']
            user = User.objects.get(email=email)

            # Get tokens for the user
            tokens = get_tokens_for_user(user)

            # You can customize the response data as per your requirements
            return Response({
                'refresh': tokens['refresh'],
                'access': tokens['access'],
                'message': 'Login successful',
                'user': {
                    'id': user.id,
                    'email': user.email,
                    'name': user.name,
                    # Add other user fields as needed
                }
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = UserChangePasswordSerializer(
            data=request.data, context={"user": request.user}
        )
        serializer.is_valid(raise_exception=True)
        return Response(
            {"msg": "Password Changed Successfully"}, status=status.HTTP_200_OK
        )


class SendPasswordResetEmailView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = SendPasswordResetEmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(
            {"msg": "Password Reset link send. Please check your Email"},
            status=status.HTTP_200_OK,
        )


class UserPasswordResetView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, uid, token, format=None):
        serializer = UserPasswordResetSerializer(
            data=request.data, context={"uid": uid, "token": token}
        )
        serializer.is_valid(raise_exception=True)
        return Response(
            {"msg": "Password Reset Successfully"}, status=status.HTTP_200_OK
        )


class SendSMSView(APIView):
    serializer_class = SendMessageSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            message = serializer.validated_data.get('message')
            user_mobile_numbers = ['+919022183799',] #only registered mobile numbers

            for mobile_number in user_mobile_numbers:
                try:
                    account_sid = 'ACeaee77467852cfebe65111595bbcd798'
                    auth_token = '75f3e67f0568bc5bed73ec7a2af874c2'
                    client = Client(account_sid, auth_token)
                    message = client.messages.create(
                        from_='+12017199778',
                        to=mobile_number,
                        body=message
                    )
                except Exception as e:
                    return Response({'error': str(e)}, status=500)

            return Response({'message': 'SMS sent successfully'}, status=200)
        return Response(serializer.errors, status=400)