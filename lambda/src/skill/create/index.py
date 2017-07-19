from __future__ import print_function  # Python 2/3 compatibility
import boto3
from botocore.exceptions import ClientError
import json
import uuid


def lambda_handler(event, context):
    print("Received event: " + json.dumps(event, indent=2))
    try:
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table('Skill')
        event['skill']['id'] = str(uuid.uuid4())
        table.put_item(
            Item=event['skill']
        )
        return True
    except ClientError as e:
        print(e.response['Error']['Message'])
        return False
