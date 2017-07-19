Compress-Archive -Force -Path src\client\create\index.py -DestinationPath createClientFunction.zip
Compress-Archive -Force -Path src\client\delete\index.py -DestinationPath deleteClientFunction.zip
Compress-Archive -Force -Path src\client\read\index.py -DestinationPath readClientFunction.zip
Compress-Archive -Force -Path src\client\update\index.py -DestinationPath updateClientFunction.zip

Compress-Archive -Force -Path src\employee\create\index.py -DestinationPath createEmployeeFunction.zip
Compress-Archive -Force -Path src\employee\delete\index.py -DestinationPath deleteEmployeeFunction.zip
Compress-Archive -Force -Path src\employee\read\index.py -DestinationPath readEmployeeFunction.zip
Compress-Archive -Force -Path src\employee\update\index.py -DestinationPath updateEmployeeFunction.zip

Compress-Archive -Force -Path src\mission\create\index.py -DestinationPath createMissionFunction.zip
Compress-Archive -Force -Path src\mission\delete\index.py -DestinationPath deleteMissionFunction.zip
Compress-Archive -Force -Path src\mission\read\index.py -DestinationPath readMissionFunction.zip
Compress-Archive -Force -Path src\mission\update\index.py -DestinationPath updateMissionFunction.zip

Compress-Archive -Force -Path src\skill\create\index.py -DestinationPath createSkillFunction.zip
Compress-Archive -Force -Path src\skill\delete\index.py -DestinationPath deleteSkillFunction.zip
Compress-Archive -Force -Path src\skill\read\index.py -DestinationPath readSkillFunction.zip
Compress-Archive -Force -Path src\skill\update\index.py -DestinationPath updateSkillFunction.zip