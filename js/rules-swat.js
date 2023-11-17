var rules_swat =
[
    {
        "groupId": 1,
        "groupName": "swarthmore",
        "groupDisplayName": "Swarthmore College",
        "groupLogo": "",
        "groupActive": true,
        "groupUrl": "www.swarthmore.edu",
        "groupCaseSensitive": true,
        "groupRules": [
            {
                "ruleId": 0,
                "ruleName": "rule0",
                "ruleDisplayName": "Minimum password length 8 characters",
                "ruleParent": 0,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "minimumLength",
                "ruleValues": [8],
                "ruleCreatedDateTime": 0,
                "ruleModifiedDateTime": 0
            },
            {
                "ruleId": 1,
                "ruleName": "rule1",
                "ruleDisplayName": "Require one uppercase letter",
                "ruleParent": 0,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "containUpper",
                "ruleValues": [],
                "ruleCreatedDateTime": 0,
                "ruleModifiedDateTime": 0
            },
            {
                "ruleId": 2,
                "ruleName": "rule2",
                "ruleDisplayName": "Require one lowercase letter",
                "ruleParent": 0,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "containLower",
                "ruleValues": [],
                "ruleCreatedDateTime": 0,
                "ruleModifiedDateTime": 0
            },
            {
                "ruleId": 3,
                "ruleName": "rule3",
                "ruleDisplayName": "Require one numeric character",
                "ruleParent": 0,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "containNumber",
                "ruleValues": [],
                "ruleCreatedDateTime": 0,
                "ruleModifiedDateTime": 0
            },
            {
                "ruleId": 4,
                "ruleName": "rule4",
                "ruleDisplayName": "Require one special character",
                "ruleParent": 0,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "containSpecial",
                "ruleValues": [["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]",
                "}","|","\\",";",":","\"","'",",","<",".",">","/","?"]],
                "ruleCreatedDateTime": 0,
                "ruleModifiedDateTime": 0
            },
            {
                "ruleId": 5,
                "ruleName": "rule5",
                "ruleDisplayName": "Password can never be reused",
                "ruleParent": 0,
                "ruleDeterministic": false,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "nondeterministicRule",
                "ruleValues": [],
                "ruleCreatedDateTime": 0,
                "ruleModifiedDateTime": 0
            }
        ],
        "groupCreatedDateTime": 0,
        "groupModifiedDateTime": 0
    }
];