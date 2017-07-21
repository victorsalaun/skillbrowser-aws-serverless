# Skillbrowser Serverless on AWS

## Prerequisites

- aws-cli (latest)
- 1 Amazon Cognito users pool

## Deploy

### Master

Deploy :

    cd cloudformation
    aws cloudformation deploy --template-file skillbrowser-master.yml --stack-name skillbrowser-master --region eu-central-1

Outputs :

    aws cloudformation describe-stacks --stack-name skillbrowser-master --region eu-central-1

### DynamoDB

Deploy :

    cd cloudformation
    aws cloudformation deploy --template-file skillbrowser-dynamodb.yml --stack-name skillbrowser-dynamodb --region eu-central-1

Outputs :

    aws cloudformation describe-stacks --stack-name skillbrowser-dynamodb --region eu-central-1

### Lambda

Zip :

    cd lambda
    
    // For Windows use PowerShell
    zip.ps1
    
    // For Unix
    zip.sh

Deploy :

Fill skillbrowser-lambda.parameters.json with Master outputs and DynamoDB outputs

    cd lambda
        
    // For Windows use PowerShell
    deploy.ps1
        
    // For Unix
    deploy.sh
    
    cd cloudformation
    aws cloudformation create-stack --template-body file://skillbrowser-lambda.yml --parameters file://skillbrowser-lambda.parameters.json --stack-name skillbrowser-lambda --capabilities CAPABILITY_IAM --region eu-central-1
