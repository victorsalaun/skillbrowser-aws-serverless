#!/usr/bin/env bash

lambdas3=""

aws s3 cp createClientFunction.zip      s3://$lambdas3/createClientFunction.zip
aws s3 cp deleteClientFunction.zip      s3://$lambdas3/deleteClientFunction.zip
aws s3 cp readClientFunction.zip        s3://$lambdas3/readClientFunction.zip
aws s3 cp updateClientFunction.zip      s3://$lambdas3/updateClientFunction.zip

aws s3 cp createEmployeeFunction.zip    s3://$lambdas3/createEmployeeFunction.zip
aws s3 cp deleteEmployeeFunction.zip    s3://$lambdas3/deleteEmployeeFunction.zip
aws s3 cp readEmployeeFunction.zip      s3://$lambdas3/readEmployeeFunction.zip
aws s3 cp updateEmployeeFunction.zip    s3://$lambdas3/updateEmployeeFunction.zip

aws s3 cp createMissionFunction.zip     s3://$lambdas3/createMissionFunction.zip
aws s3 cp deleteMissionFunction.zip     s3://$lambdas3/deleteMissionFunction.zip
aws s3 cp readMissionFunction.zip       s3://$lambdas3/readMissionFunction.zip
aws s3 cp updateMissionFunction.zip     s3://$lambdas3/updateMissionFunction.zip

aws s3 cp createSkillFunction.zip       s3://$lambdas3/createSkillFunction.zip
aws s3 cp deleteSkillFunction.zip       s3://$lambdas3/deleteSkillFunction.zip
aws s3 cp readSkillFunction.zip         s3://$lambdas3/readSkillFunction.zip
aws s3 cp updateSkillFunction.zip       s3://$lambdas3/updateSkillFunction.zip