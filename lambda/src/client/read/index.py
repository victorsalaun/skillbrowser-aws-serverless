from __future__ import print_function  # Python 2/3 compatibility
import boto3
from botocore.exceptions import ClientError
import json


def lambda_handler(event, context):
    print("Received event: " + json.dumps(event, indent=2))
    if 'client' in event:
        return getItem(event['client']['id'])
    else:
        return scan()


def getItem(id):
    try:
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table('Client')
        response = table.get_item(
            Key={
                'id': id
            }
        )
        return response['Item']
    except ClientError as e:
        print(e.response['Error']['Message'])
        return []


def scan():
    try:
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table('Client')
        response = table.scan()
        return response['Items']
    except ClientError as e:
        print(e.response['Error']['Message'])
        return []
