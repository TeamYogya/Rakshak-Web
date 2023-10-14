# import os
# import cv2
# import easyocr
# from django.shortcuts import render
# from django.http import HttpResponse
# from .models import DetectedText
# import numpy as np
#
#
# def detect_text(request):
#     result = None
#
#     if request.method == 'POST' and 'file' in request.FILES:
#         image = request.FILES['file']
#         img_content = image.read()
#         img_path = os.path.join('media', 'images', image.name)
#
#         # Ensure the media directory exists
#         os.makedirs(os.path.dirname(img_path), exist_ok=True)
#
#         with open(img_path, 'wb') as img_file:
#             img_file.write(img_content)
#
#         # Convert the image content to a numpy array
#         nparr = np.frombuffer(img_content, np.uint8)
#         img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
#
#         # Specify a different language model
#         reader = easyocr.Reader(['en'], model_storage_directory='easyocr_models', gpu=False)
#         text_data = reader.readtext(img_np)
#
#         detected_texts = []
#         for bbox, text, confidence in text_data:
#             if confidence > 0.25:
#                 # Remove spaces and save the text
#                 clean_text = ''.join(text.split())
#                 detected_texts.append(DetectedText(image=image, text=clean_text, confidence=confidence))
#
#         DetectedText.objects.bulk_create(detected_texts)
#
#         # Filter texts with only numbers and exactly 12 digits
#         result = [text.text for text in detected_texts if text.text.isdigit() and len(text.text) == 12]
#
#     return render(request, 'text_detector/combined_template.html', {'result': result})


#
# import os
# import cv2
# import easyocr
# from django.shortcuts import render
# from django.http import HttpResponse
# from .models import DetectedText
# import numpy as np
# from pdf2image import convert_from_path
#
#
# def detect_text(request):
#     result = None
#
#     if request.method == 'POST' and 'file' in request.FILES:
#         image = request.FILES['file']
#         img_content = image.read()
#         img_path = os.path.join('media', 'images', image.name)
#
#         # Check if the file is a PDF
#         if image.name.endswith('.pdf'):
#             # Save the PDF content to a temporary file
#             with open('temp.pdf', 'wb') as temp_file:
#                 temp_file.write(img_content)
#
#             # Convert PDF to images
#             pdf_images = convert_from_path('temp.pdf', 500)  # Adjust the DPI as needed
#
#             # Process each page
#             for i, pdf_image in enumerate(pdf_images):
#                 img_content = cv2.imencode('.jpg', np.array(pdf_image))[1].tobytes()
#                 img_path = os.path.join('media', 'images', f'page_{i + 1}.jpg')
#
#                 with open(img_path, 'wb') as img_file:
#                     img_file.write(img_content)
#
#         # Process the image or PDF content
#         nparr = np.frombuffer(img_content, np.uint8)
#         img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
#
#         reader = easyocr.Reader(['en'], model_storage_directory='easyocr_models', gpu=False)
#         text_data = reader.readtext(img_np)
#
#         detected_texts = []
#         for bbox, text, confidence in text_data:
#             if confidence > 0.25:
#                 clean_text = ''.join(text.split())
#                 detected_texts.append(DetectedText(image=img_path, text=clean_text, confidence=confidence))
#
#         DetectedText.objects.bulk_create(detected_texts)
#
#         # Filter texts with only numbers and exactly 12 digits
#         result = [text.text for text in detected_texts if text.text.isdigit() and len(text.text) == 12]
#
#     return render(request, 'text_detector/combined_template.html', {'result': result})

# Update the views.py

#actual code
#
import os
import cv2
import easyocr
from django.shortcuts import render
from .models import DetectedText

def detect_text(request):
    result = None

    if request.method == 'POST':
        image = request.FILES['file']
        img_path = f'media/images/{image.name}'

        # Ensure the media directory exists
        os.makedirs(os.path.dirname(img_path), exist_ok=True)

        with open(img_path, 'wb') as img_file:
            img_file.write(image.read())

        img = cv2.imread(img_path)
        # Specify a different language model
        reader = easyocr.Reader(['en'], model_storage_directory='easyocr_models', gpu=False)
        text_data = reader.readtext(img)

        detected_texts = []
        for bbox, text, confidence in text_data:
            if confidence > 0.25:
                # Remove spaces and save the text
                clean_text = ''.join(text.split())
                detected_texts.append(DetectedText(image=image, text=clean_text, confidence=confidence))

        DetectedText.objects.bulk_create(detected_texts)

        # Filter texts with only numbers and exactly 12 digits
        result = [text.text for text in detected_texts if text.text.isdigit() and len(text.text) == 12]

    return render(request, '../../../../frontend/src/pages/Signup/Signup.js', {'result': result})

# import os
# import cv2
# import easyocr
# import fitz  # PyMuPDF
# from django.shortcuts import render
# from django.http import HttpResponse
# from .models import DetectedText
#
#
# def extract_text_from_image(img_path):
#     img = cv2.imread(img_path)
#     reader = easyocr.Reader(['en'], model_storage_directory='easyocr_models', gpu=False)
#     text_data = reader.readtext(img)
#
#     detected_texts = []
#     for bbox, text, confidence in text_data:
#         if confidence > 0.25:
#             clean_text = ''.join(text.split())
#             detected_texts.append(DetectedText(image=img_path, text=clean_text, confidence=confidence))
#
#     return detected_texts
#
#
# def extract_text_from_pdf(pdf_path):
#     pdf_texts = []
#     doc = fitz.open(pdf_path)
#
#     for page_num in range(doc.page_count):
#         page = doc[page_num]
#         text = page.get_text("text")
#
#         # Assuming 12-digit numbers are separated by spaces
#         numbers = [word for word in text.split() if word.isdigit() and len(word) == 12]
#         pdf_texts.extend(numbers)
#
#     doc.close()
#     return pdf_texts
#
#
# def detect_text(request):
#     result = None
#
#     if request.method == 'POST':
#         file = request.FILES['file']
#         file_path = f'media/files/{file.name}'
#
#         # Ensure the media directory exists
#         os.makedirs(os.path.dirname(file_path), exist_ok=True)
#
#         with open(file_path, 'wb') as file_content:
#             file_content.write(file.read())
#
#         if file.name.endswith('.pdf'):
#             # Extract text from PDF
#             pdf_texts = extract_text_from_pdf(file_path)
#             result = pdf_texts
#         else:
#             # Extract text from image
#             image_texts = extract_text_from_image(file_path)
#             result = [text.text for text in image_texts if text.text.isdigit() and len(text.text) == 12]
#
#             # Save image texts to the database
#             DetectedText.objects.bulk_create(image_texts)
#
#     return render(request, 'text_detector/combined_template.html', {'result': result})
