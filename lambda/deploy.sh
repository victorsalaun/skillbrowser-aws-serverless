#!/usr/bin/env bash

lambda_s3 = "skillbrowser-lambda-s3"
region = "eu-central-1"

aws s3 cp createClientFunction.zip      s3://${lambda_s3}/createClientFunction.zip      --region ${region}
aws s3 cp deleteClientFunction.zip      s3://${lambda_s3}/deleteClientFunction.zip      --region ${region}
aws s3 cp readClientFunction.zip        s3://${lambda_s3}/readClientFunction.zip        --region ${region}
aws s3 cp updateClientFunction.zip      s3://${lambda_s3}/updateClientFunction.zip      --region ${region}

aws s3 cp createEmployeeFunction.zip    s3://${lambda_s3}/createEmployeeFunction.zip    --region ${region}
aws s3 cp deleteEmployeeFunction.zip    s3://${lambda_s3}/deleteEmployeeFunction.zip    --region ${region}
aws s3 cp readEmployeeFunction.zip      s3://${lambda_s3}/readEmployeeFunction.zip      --region ${region}
aws s3 cp updateEmployeeFunction.zip    s3://${lambda_s3}/updateEmployeeFunction.zip    --region ${region}

aws s3 cp createMissionFunction.zip     s3://${lambda_s3}/createMissionFunction.zip     --region ${region}
aws s3 cp deleteMissionFunction.zip     s3://${lambda_s3}/deleteMissionFunction.zip     --region ${region}
aws s3 cp readMissionFunction.zip       s3://${lambda_s3}/readMissionFunction.zip       --region ${region}
aws s3 cp updateMissionFunction.zip     s3://${lambda_s3}/updateMissionFunction.zip     --region ${region}

aws s3 cp createSkillFunction.zip       s3://${lambda_s3}/createSkillFunction.zip       --region ${region}
aws s3 cp deleteSkillFunction.zip       s3://${lambda_s3}/deleteSkillFunction.zip       --region ${region}
aws s3 cp readSkillFunction.zip         s3://${lambda_s3}/readSkillFunction.zip         --region ${region}
aws s3 cp updateSkillFunction.zip       s3://${lambda_s3}/updateSkillFunction.zip       --region ${region}