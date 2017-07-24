#!/usr/bin/env bash

zip createClientFunction.zip    src/client/create/index.py
zip deleteClientFunction.zip    src/client/delete/index.py
zip readClientFunction.zip      src/client/read/index.py
zip updateClientFunction.zip    src/client/update/index.py

zip createEmployeeFunction.zip  src/employee/create/index.py
zip deleteEmployeeFunction.zip  src/employee/delete/index.py
zip readEmployeeFunction.zip    src/employee/read/index.py
zip updateEmployeeFunction.zip  src/employee/update/index.py

zip createMissionFunction.zip   src/mission/create/index.py
zip deleteMissionFunction.zip   src/mission/delete/index.py
zip readMissionFunction.zip     src/mission/read/index.py
zip updateMissionFunction.zip   src/mission/update/index.py

zip createSkillFunction.zip     src/skill/create/index.py
zip deleteSkillFunction.zip     src/skill/delete/index.py
zip readSkillFunction.zip       src/skill/read/index.py
zip updateSkillFunction.zip     src/skill/update/index.py