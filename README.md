# Skillbrowser Serverless on AWS

## Prerequisites

- aws-cli

## Deploy

### Master

Deploy :

    aws cloudformation deploy --template-file cloudformation\skillbrowser-master.yml --stack-name skillbrowser-master --region eu-central-1

Outputs :

    aws cloudformation describe-stacks --stack-name skillbrowser-master --region eu-central-1

### DynamoDB

Deploy :

    aws cloudformation deploy --template-file cloudformation\skillbrowser-dynamodb.yml --stack-name skillbrowser-dynamodb --region eu-central-1

Outputs :

    aws cloudformation describe-stacks --stack-name skillbrowser-dynamodb --region eu-central-1