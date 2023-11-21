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

var rules_swat_new = 
{
    "groupId": "f60b25bd-ea2c-462c-9dc6-793a7059bdfe",
    "groupName": "Swarthmore",
    "groupDisplayName": "Swarthmore College",
    "groupLogo": "",
    "groupActive": true,
    "groupUrl": "https://www.swarthmore.edu/",
    "groupRules": [
        {
            "ruleId": "31195b64-2e8f-4fb1-80b6-86a651ce06a8",
            "ruleName": "rule0",
            "ruleDisplayName": "Minimum password length 8 characters",
            "ruleParent": null,
            "ruleDeterministic": true,
            "ruleActive": true,
            "ruleActiveRequirements": [],
            "ruleType": "minimumLength",
            "ruleValues": [8],
            "ruleCreatedDateTime": 1700568000,
            "ruleModifiedDateTime": 1700568000
        },
        {
            "ruleId": "6b37fce7-c3ff-4970-8545-6123658a14e8",
            "ruleName": "rule1",
            "ruleDisplayName": "Require one uppercase letter",
            "ruleParent": null,
            "ruleDeterministic": true,
            "ruleActive": true,
            "ruleActiveRequirements": [],
            "ruleType": "containUpper",
            "ruleValues": [],
            "ruleCreatedDateTime": 1700568000,
            "ruleModifiedDateTime": 1700568000
        },
        {
            "ruleId": "4ed44551-5c7e-467e-94c3-a7aaccdafd04",
            "ruleName": "rule2",
            "ruleDisplayName": "Require one lowercase letter",
            "ruleParent": null,
            "ruleDeterministic": true,
            "ruleActive": true,
            "ruleActiveRequirements": [],
            "ruleType": "containLower",
            "ruleValues": [],
            "ruleCreatedDateTime": 1700568000,
            "ruleModifiedDateTime": 1700568000
        },
        {
            "ruleId": "762d1481-20da-4fea-9060-dfd77b2343ca",
            "ruleName": "rule3",
            "ruleDisplayName": "Require one numeric character",
            "ruleParent": null,
            "ruleDeterministic": true,
            "ruleActive": true,
            "ruleActiveRequirements": [],
            "ruleType": "containNumber",
            "ruleValues": [],
            "ruleCreatedDateTime": 1700568000,
            "ruleModifiedDateTime": 1700568000
        },
        {
            "ruleId": "85ddd124-6394-4d28-b8ca-3ae92906d495",
            "ruleName": "rule4",
            "ruleDisplayName": "Require one special character",
            "ruleParent": null,
            "ruleDeterministic": true,
            "ruleActive": true,
            "ruleActiveRequirements": [],
            "ruleType": "containSpecial",
            "ruleValues": [["`", "~", "!", "@", "#", "$", "%", "^", "&", "*",
                "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", "\\",
                ";", ":", "\"", "'", ",", "<", ".", ">", "/", "?"]],
            "ruleCreatedDateTime": 1700568000,
            "ruleModifiedDateTime": 1700568000
        },
        {
            "ruleId": "7cfe4a3c-d4e8-4570-8cef-eeb13175a1ab",
            "ruleName": "rule5",
            "ruleDisplayName": "Password can never be reused",
            "ruleParent": null,
            "ruleDeterministic": false,
            "ruleActive": true,
            "ruleActiveRequirements": [],
            "ruleType": "nondeterministicRule",
            "ruleValues": [],
            "ruleCreatedDateTime": 1700568000,
            "ruleModifiedDateTime": 1700568000
        }
    ],
    "groupCreatedDateTime": 1700568000,
    "groupModifiedDateTime": 1700568000
}