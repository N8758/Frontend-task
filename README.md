
# Chat Application with Django Channels & Local File Handling

## Project Structure
project_root/ │── frontend/
│ ├── index.html
│ ├── styles.css
│ ├── script.js
│
│── backend/
│ ├── chatapp/
│ │ ├── init.py
│ │ ├── settings.py
│ │ ├── urls.py
│ │ ├── wsgi.py
│ │ ├── asgi.py
│ │ ├── views.py
│ │ ├── models.py
│ │ ├── consumers.py
│ │ ├── routing.py
│ │ ├── templates/
│ │ │ ├── chat.html
│ │ ├── static/
│ │ │ ├── chat.js
│
│── aws_lambda/
│ ├── add_numbers.py
│ ├── upload_to_s3.py
│
│── requirements.txt
│── manage.py
│── README.md

perl
Copy
Edit

## Requirements
Install dependencies:
```sh
pip install -r requirements.txt
Setting Up the Django Project
sh
Copy
Edit
cd backend
python manage.py migrate
python manage.py createsuperuser  # Create an admin user
python manage.py runserver  # Start the server
WebSocket Chat Setup
Ensure WebSockets work:

Check consumers.py for message handling.
Ensure routing.py includes:
python
Copy
Edit
from django.urls import re_path
from chatapp.consumers import ChatConsumer

websocket_urlpatterns = [
    re_path(r"ws/chat/$", ChatConsumer.as_asgi()),
]
Run the server and open frontend/index.html in the browser.
Running Local File Handling
Run upload_to_s3.py locally (without AWS):

sh
Copy
Edit
python aws_lambda/upload_to_s3.py
This will store the file in the uploaded_files/ directory.

Troubleshooting
If WebSocket messages don’t appear, check the browser console for WebSocket connection errors.
If files don’t upload, ensure the directory uploaded_files/ exists.
Summary
This project enables real-time chat using Django Channels and local file handling instead of AWS S3. 🚀

vbnet
Copy
Edit

This README includes **setup, WebSocket integration, file handling, and troubleshooting steps** in one single file. 🚀 Let me know if you need changes!
