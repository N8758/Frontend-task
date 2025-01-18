import json

def lambda_handler(event, context):
    # Retrieve num1 and num2 from the event dictionary, default to 0 if not provided
    num1 = event.get("num1", 0)
    num2 = event.get("num2", 0)
    
    # Add the two numbers
    result = num1 + num2
    
    # Return the result as a response
    return {
        'statusCode': 200,
        'body': json.dumps({'result': result})
    }

# Example event data to test the function
event = {
    "num1": 5,
    "num2": 7
}

response = lambda_handler(event, None)
print(response)
