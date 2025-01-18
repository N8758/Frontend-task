import os
import base64

def handle_file_upload(event):
    """
    Simulates a file upload handling function where the file is processed locally
    and stored in a folder called 'uploaded_files'.
    """
    # Retrieve event data (bucket_name, file_name, and file_data)
    bucket_name = event["bucket_name"]  # In this case, it's simulated as a folder name
    file_name = event["file_name"]
    file_data = event["file_data"]

    # Decode the base64 encoded file data
    file_data_decoded = base64.b64decode(file_data)

    # Simulate storing the file in the local system (in a folder called 'uploaded_files')
    upload_directory = "uploaded_files"
    if not os.path.exists(upload_directory):
        os.makedirs(upload_directory)  # Create folder if it doesn't exist

    # Write decoded file data to the local file system
    file_path = os.path.join(upload_directory, file_name)
    with open(file_path, "wb") as file:
        file.write(file_data_decoded)

    return {
        'statusCode': 200,
        'body': f"File '{file_name}' uploaded successfully to the bucket '{bucket_name}'!"
    }

# Example event data to simulate file upload
event = {
    "bucket_name": "my_local_bucket",  # Simulated as 'uploaded_files' directory
    "file_name": "example_file.txt",
    "file_data": base64.b64encode(b"This is a test file.").decode("utf-8")  # Base64 encoded file data
}

# Call the function to simulate file upload
response = handle_file_upload(event)

# Output the response
print(response)
