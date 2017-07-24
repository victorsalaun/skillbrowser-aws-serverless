# Skillbrowser Serverless on AWS

## Prerequisites

- aws-cli (latest)
- 1 Amazon Cognito users pool

## Deploy

### Master

Create Stack

    ~ cloudformation
    aws cloudformation create-stack --stack-name skillbrowser-master --template-body file://skillbrowser-master.yml

Stack Outputs

    aws cloudformation describe-stacks --stack-name skillbrowser-master

### DynamoDB

Create Stack

    ~ cloudformation
    aws cloudformation create-stack --stack-name skillbrowser-dynamodb --template-body file://skillbrowser-dynamodb.yml --parameters file://skillbrowser-dynamodb.parameters.json

Stack Outputs

    aws cloudformation describe-stacks --stack-name skillbrowser-dynamodb

### Lambda

Zip

    ~ lambda
    
    // For Windows use PowerShell
    zip.ps1
    
    // For Unix
    zip.sh

Create Stack

    ~ lambda
        
    // For Windows use PowerShell
        // Set lambdas3 variable inside deploy.ps1 script
        deploy.ps1
        
    // For Unix
        // Set lambdas3 variable inside deploy.sh script
        deploy.sh
    
    // Check, modify LAMBDA-S3
    aws s3 ls s3://LAMBDA-S3
    
Fill skillbrowser-lambda.parameters.json with Master outputs and DynamoDB outputs

    ~ cloudformation
    aws cloudformation create-stack --stack-name skillbrowser-lambda --template-body file://skillbrowser-lambda.yml --parameters file://skillbrowser-lambda.parameters.json --capabilities CAPABILITY_IAM

Stack Outputs

    aws cloudformation describe-stacks --stack-name skillbrowser-lambda

### API Gateway

Create Stack

Fill skillbrowser-apigateway.parameters.json with Lambda outputs

    aws cloudformation create-stack --stack-name skillbrowser-apigateway --template-body file://skillbrowser-apigateway.yml --parameters file://skillbrowser-apigateway.parameters.json

Stack Outputs

    aws cloudformation describe-stacks --stack-name skillbrowser-apigateway

Deployment to a stage

    // Get API id
    aws apigateway get-rest-apis
    
    // Replace REST_API_ID with the skillbrower api newly created
    aws apigateway create-deployment --rest-api-id REST_API_ID --stage-name "dev"

### Static

Create Stack

    ~ cloudformation
    aws cloudformation create-stack --stack-name skillbrowser-static --template-body file://skillbrowser-static.yml --parameters file://skillbrowser-static.parameters.json

Stack Outputs

    aws cloudformation describe-stacks --stack-name skillbrowser-static
    
Deploy static

    ~ static
    npm run build
    aws s3 cp dist s3://skillbrowser-static-s3 --recursive

## Clean

    // Static
    aws s3 rm s3://skillbrowser-static-s3 --recursive
    aws cloudformation delete-stack --stack-name skillbrowser-static
    
    // API Gateway
    aws cloudformation delete-stack --stack-name skillbrowser-apigateway
    
    // Lambda
    aws s3 rm s3://skillbrowser-lambda-s3 --recursive
    aws cloudformation delete-stack --stack-name skillbrowser-lambda
    
    // DynamoDB
    aws cloudformation delete-stack --stack-name skillbrowser-dynamodb
    
    // Master
    aws cloudformation delete-stack --stack-name skillbrowser-master