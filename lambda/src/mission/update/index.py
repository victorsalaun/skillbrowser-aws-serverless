from __future__ import print_function  # Python 2/3 compatibility
import boto3
from botocore.exceptions import ClientError
import json


def lambda_handler(event, context):
    print("Received event: " + json.dumps(event, indent=2))
    try:
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table('Mission')
        table.update_item(
            Key={
                'id': event['mission']['id']
            },
            UpdateExpression="SET #mission_name = :n",
            ExpressionAttributeValues={
                ':n': event['mission']['name'],
            },
            ExpressionAttributeNames={
                "#mission_name": "name"
            },
            ReturnValues="UPDATED_NEW"
        )
        return True
    except ClientError as e:
        print(e.response['Error']['Message'])
        return False
