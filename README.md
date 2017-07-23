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

Outputs :

    aws cloudformation describe-stacks --stack-name skillbrowser-lambda --region eu-central-1

### API Gateway

Deploy :

    aws cloudformation create-stack --template-body file://skillbrowser-apigateway.yml --parameters file://skillbrowser-apigateway.parameters.json --stack-name skillbrowser-apigateway --region eu-central-1

Outputs :

    aws cloudformation describe-stacks --stack-name skillbrowser-apigateway --region eu-central-1

Deployment to a stage :

    aws apigateway create-deployment --rest-api-id REST_API_ID --stage-name "dev" --region eu-central-1

### Static

Deploy :

    cd cloudformation
    aws cloudformation create-stack --template-body file://skillbrowser-static.yml --parameters file://skillbrowser-static.parameters.json --stack-name skillbrowser-static --region eu-central-1

Outputs :

    aws cloudformation describe-stacks --stack-name skillbrowser-static --region eu-central-1
    
Deploy static :

    cd static
    npm run build
    aws s3 cp dist s3://skillbrowser-static-s3 --recursive --region eu-central-1

## Clean

    // Static
    aws s3 rm s3://skillbrowser-static-s3 --recursive --region eu-central-1
    aws cloudformation delete-stack --stack-name skillbrowser-static --region eu-central-1
    
    // API Gateway
    aws cloudformation delete-stack --stack-name skillbrowser-apigateway --region eu-central-1
    
    // Lambda
    aws s3 rm s3://skillbrowser-lambda-s3 --recursive --region eu-central-1
    aws cloudformation delete-stack --stack-name skillbrowser-lambda --region eu-central-1
    
    // DynamoDB
    aws cloudformation delete-stack --stack-name skillbrowser-dynamodb --region eu-central-1
    
    // Master
    aws cloudformation delete-stack --stack-name skillbrowser-master --region eu-central-1