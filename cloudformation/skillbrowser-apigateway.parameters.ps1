aws cloudformation describe-stacks --stack-name skillbrowser-lambda > skillbrowser-lambda.outputs.json

$ouputs = Get-Content skillbrowser-lambda.outputs.json | ConvertFrom-Json
$parameters = Get-Content skillbrowser-apigateway.parameters.json | ConvertFrom-Json

$parameters | 
Foreach-Object {
    $key = $_.ParameterKey.Substring(0, $_.ParameterKey.length - 4)
    $el = $ouputs.Stacks.Outputs | where { $_.OutputKey -eq $key }
    $function = $el.OutputValue
    $index = $function.LastIndexOf(":")
    $_.ParameterValue = $function.Substring($index + 1)
}

$parameters | ConvertTo-Json | set-content skillbrowser-apigateway.parameters.json