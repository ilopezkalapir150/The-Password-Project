export var groups = [
    {
        "groupId": "b33808b1-a4d2-4b8e-b6d5-396cd67a3a98",
        "groupName": "Berkeley",
        "groupDisplayName": "University of California, Berkeley",
        "groupLogo": "",
        "groupActive": true,
        "groupUrl": "https://www.berkeley.edu/",
        "groupRules": [
            {
                "ruleId": "3d0ff324-189d-40fd-b769-29bc785b5f22",
                "ruleName": "rule0",
                "ruleDisplayName": "Minimum password length 12 characters",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "minimumLength",
                "ruleValues": [12],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "df71d080-5e01-4dd1-9522-a108d11756d3",
                "ruleName": "rule1",
                "ruleDisplayName": "Maximum password length 255 characters",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "maximumLength",
                "ruleValues": [255],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "6856f21e-c460-46bd-8d25-29816fc752c2",
                "ruleName": "rule2",
                "ruleDisplayName": "Contains three different character classes",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "containTypes",
                "ruleValues": [3, ["`", "~", "!", "@", "#", "$", "%", "^", "&", 
                    "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", 
                    "\\", ";", ":", "\"", "'", ",", "<", ".", ">", "/", "?"]],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "ed57f713-0ac7-462a-8ebd-49cfc98888d9",
                "ruleName": "rule3",
                "ruleDisplayName": "Cannot contain name or CalNet ID",
                "ruleParent": null,
                "ruleDeterministic": false,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "nondeterministicRule",
                "ruleValues": [],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "3e77974a-0984-419e-9367-0086204061f3",
                "ruleName": "rule4",
                "ruleDisplayName": "Cannot contain leading spaces",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "bannedStartChar",
                "ruleValues": [1, [" "]],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "1ed78165-7e7d-44f5-872e-af0b88197898",
                "ruleName": "rule5",
                "ruleDisplayName": "Cannot contain trailing spaces",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "bannedEndChar",
                "ruleValues": [1, [" "]],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            }
        ],
        "groupCreatedDateTime": 1700568000,
        "groupModifiedDateTime": 1700568000
    },
    {
        "groupId": "ee12ff16-c474-4cfc-afc2-d04d7a732217",
        "groupName": "Brown",
        "groupDisplayName": "Brown University",
        "groupLogo": "",
        "groupActive": true,
        "groupUrl": "https://www.brown.edu/",
        "groupRules": [
            {
                "ruleId": "7e3d6dfa-b57a-46c6-8ed7-a5caff13a7ae",
                "ruleName": "rule0",
                "ruleDisplayName": "Minimum password length 10 characters",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "minimumLength",
                "ruleValues": [10],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "7ec4cf75-785e-4f45-9a2f-28e18406fdcb",
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
                "ruleId": 2,
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
                "ruleId": "7f20fab6-ea90-465b-9fdb-7f5b32fc9b09",
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
                "ruleId": "ae02565d-7998-4815-af28-eea219891866",
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
                "ruleId": "fce50b5f-d5a1-404a-aa63-cd5187268477",
                "ruleName": "rule5",
                "ruleDisplayName": "Cannot contain name or username",
                "ruleParent": null,
                "ruleDeterministic": false,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "nondeterministicRule",
                "ruleValues": [],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "0fe19e85-292a-49a2-bb74-dc7d33eaf041",
                "ruleName": "rule6",
                "ruleDisplayName": "Cannot be the same as previous 4 passwords",
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
    },
    {
        "groupId": "a529754b-cf4a-4a55-ae66-e963435e620c",
        "groupName": "CMU",
        "groupDisplayName": "Carnegie Mellon University",
        "groupLogo": "",
        "groupActive": true,
        "groupUrl": "https://www.cmu.edu/",
        "groupRules": [
            {
                "ruleId": "a8778db9-8238-4200-9f97-165e62ff9bf9",
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
                "ruleId": "9039db4a-042b-4fe9-bc8a-331df9432c20",
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
                "ruleId": "f633686a-fadd-4c6d-9854-e0bafa79ef60",
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
                "ruleId": "0e014cf9-2165-488c-812a-90ce897ac8c5",
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
                "ruleId": "f4b2cb49-905d-4d68-adac-a68be50f5495",
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
                "ruleId": "752b9867-8e14-47d6-976a-d38623ae1d69",
                "ruleName": "rule5",
                "ruleDisplayName": "Cannot contain personal information such as name or userid.",
                "ruleParent": null,
                "ruleDeterministic": false,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "nondeterministicRule",
                "ruleValues": [],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "3af46753-0058-482b-b837-c1541fc15d91",
                "ruleName": "rule6",
                "ruleDisplayName": "Cannot contain a word in the dictionary",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "noDictWords",
                "ruleValues": [5],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            }
        ],
        "groupCreatedDateTime": 1700568000,
        "groupModifiedDateTime": 1700568000
    },
    {
        "groupId": "b01b6a68-4436-46da-b9c5-0d292508ca83",
        "groupName": "Columbia",
        "groupDisplayName": "Columbia University",
        "groupLogo": "",
        "groupActive": true,
        "groupUrl": "https://www.columbia.edu/",
        "groupRules": [
            {
                "ruleId": "ee22d0ea-248f-43d8-90e8-cfdc78028ffe",
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
                "ruleId": "f9f03916-c9ed-4efa-bbe1-4409d99b3597",
                "ruleName": "rule1",
                "ruleDisplayName": "Maximum password length 64 characters",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "maximumLength",
                "ruleValues": [64],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "156ae2e9-8813-4bff-a6c8-2b62e8e41f0a",
                "ruleName": "rule2",
                "ruleDisplayName": "Contains three different character classes",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "containTypes",
                "ruleValues": [3, ["`", "~", "!", "@", "#", "$", "%", "^", "&", 
                    "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", 
                    "\\", ";", ":", "\"", "'", ",", "<", ".", ">", "/", "?"]],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "45cba224-471f-4e48-9228-543867590c45",
                "ruleName": "rule3",
                "ruleDisplayName": "Cannot contain name",
                "ruleParent": null,
                "ruleDeterministic": false,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "nondeterministicRule",
                "ruleValues": [],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "17ce0e21-ccfb-49ca-a524-efc46e27f0cd",
                "ruleName": "rule4",
                "ruleDisplayName": "Cannot contain a word in the dictionar if less than 12 characters",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [
                    {
                            "ruleId": "686baa89-3220-4dd5-848b-ad526e4e1f27",
                            "ruleName": "rule4.1",
                            "ruleDisplayName": "Maximum password length 12 characters",
                            "ruleParent": "17ce0e21-ccfb-49ca-a524-efc46e27f0cd",
                            "ruleDeterministic": true,
                            "ruleActive": true,
                            "ruleActiveRequirements": [],
                            "ruleType": "maximumLength",
                            "ruleValues": [12],
                            "ruleCreatedDateTime": 1700568000,
                            "ruleModifiedDateTime": 1700568000
                    }
                ],
                "ruleType": "noDictWords",
                "ruleValues": [5],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            }
        ],
        "groupCreatedDateTime": 1700568000,
        "groupModifiedDateTime": 1700568000
    },
    {
        "groupId": "919b5000-a462-43e6-9464-125fb2af76c4",
        "groupName": "MIT",
        "groupDisplayName": "Massachusetts Institute of Technology",
        "groupLogo": "",
        "groupActive": true,
        "groupUrl": "https://www.mit.edu/",
        "groupRules": [
            {
                "ruleId": "9490a8bd-fab2-4b9d-b7d1-67c8132b8c23",
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
                "ruleId": "cae650ef-dcc0-45d7-8f7e-be2b73b7aa1c",
                "ruleName": "rule1",
                "ruleDisplayName": "Contains two different character classes",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "containTypes",
                "ruleValues": [2, ["`", "~", "!", "@", "#", "$", "%", "^", "&", 
                    "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", 
                    "\\", ";", ":", "\"", "'", ",", "<", ".", ">", "/", "?"]],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "f6a0d8b2-10f5-4788-8be9-d269a72d9628",
                "ruleName": "rule2",
                "ruleDisplayName": "Cannot be the same as current password or based on Kerberos username",
                "ruleParent": null,
                "ruleDeterministic": false,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "nondeterministicRule",
                "ruleValues": [],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "242a3139-4a43-489a-acdf-8ab9a2f77cf7",
                "ruleName": "rule3",
                "ruleDisplayName": "Cannot contain a word in the dictionary",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "noDictWords",
                "ruleValues": [5],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            }
        ],
        "groupCreatedDateTime": 1700568000,
        "groupModifiedDateTime": 1700568000
    },
    {
        "groupId": "601c4f73-0801-4dcf-8f51-9945f2bcab7d",
        "groupName": "Princeton",
        "groupDisplayName": "Princeton University",
        "groupLogo": "",
        "groupActive": true,
        "groupUrl": "https://www.princeton.edu/",
        "groupRules": [
            {
                "ruleId": "389fd42e-d52c-4296-aef6-1c3766846ffb",
                "ruleName": "rule0",
                "ruleDisplayName": "Minimum password length 16 characters",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "minimumLength",
                "ruleValues": [16],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "77129220-2ce3-436e-976b-0d481004c948",
                "ruleName": "rule1",
                "ruleDisplayName": "Maximum password length 256 characters",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "maximumLength",
                "ruleValues": [256],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            }
        ],
        "groupCreatedDateTime": 1700568000,
        "groupModifiedDateTime": 1700568000
    },
    {
        "groupId": "a20347da-80b7-4757-93af-d961aec69aab",
        "groupName": "Stanford",
        "groupDisplayName": "Stanford University",
        "groupLogo": "",
        "groupActive": true,
        "groupUrl": "https://www.stanford.edu/",
        "groupRules": [
            {
                "ruleId": "0f144e88-49b2-4582-a212-dd82fe6fc076",
                "ruleName": "rule0",
                "ruleDisplayName": "Minimum length is 8",
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
                "ruleId": "39e03ba5-52d7-4857-a89d-a3c8f3763913",
                "ruleName": "rule1",
                "ruleDisplayName": "Uppercase required for length 8-19",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [{
                    "ruleId": "c448fc77-cf2e-4f60-8563-3e6930956e8a",
                    "ruleName": "rule1.1",
                    "ruleDisplayName": "Maximum length is 19",
                    "ruleParent": "39e03ba5-52d7-4857-a89d-a3c8f3763913",
                    "ruleDeterministic": true,
                    "ruleActive": true,
                    "ruleActiveRequirements": [],
                    "ruleType": "maximumLength",
                    "ruleValues": [19],
                    "ruleCreatedDateTime": 1700568000,
                    "ruleModifiedDateTime": 1700568000
                }],
                "ruleType": "containUpper",
                "ruleValues": [],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "34f4785e-b09e-47b3-af65-c2b0cd9f4e0e",
                "ruleName": "rule2",
                "ruleDisplayName": "Lowercase required for length 8-19",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [{
                    "ruleId": "fa2732b0-9526-44bb-b51a-4b82b525fc12",
                    "ruleName": "rule1.1",
                    "ruleDisplayName": "Maximum length is 19",
                    "ruleParent": "34f4785e-b09e-47b3-af65-c2b0cd9f4e0e",
                    "ruleDeterministic": true,
                    "ruleActive": true,
                    "ruleActiveRequirements": [],
                    "ruleType": "maximumLength",
                    "ruleValues": [19],
                    "ruleCreatedDateTime": 1700568000,
                    "ruleModifiedDateTime": 1700568000
                }],
                "ruleType": "containLower",
                "ruleValues": [],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "62fa0f9f-dc92-4781-acb8-8a7d197462ad",
                "ruleName": "rule3",
                "ruleDisplayName": "Numbers required for length 8-15",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [{
                    "ruleId": "5189b724-729b-4cb0-b209-5b560d5d5799",
                    "ruleName": "rule3.1",
                    "ruleDisplayName": "Maximum length is 15",
                    "ruleParent": "62fa0f9f-dc92-4781-acb8-8a7d197462ad",
                    "ruleDeterministic": true,
                    "ruleActive": true,
                    "ruleActiveRequirements": [],
                    "ruleType": "maximumLength",
                    "ruleValues": [15],
                    "ruleCreatedDateTime": 1700568000,
                    "ruleModifiedDateTime": 1700568000
                }],
                "ruleType": "containNumber",
                "ruleValues": [],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "6bf2cbd5-2298-496a-bcfc-051e7ca91666",
                "ruleName": "rule4",
                "ruleDisplayName": "Contain symbol for maximum length of 11",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [{
                    "ruleId": "4237fd55-f729-425d-9f72-2a72b9e96ed5",
                    "ruleName": "rule4.1",
                    "ruleDisplayName": "Maximum length is 11",
                    "ruleParent": "6bf2cbd5-2298-496a-bcfc-051e7ca91666",
                    "ruleDeterministic": true,
                    "ruleActive": true,
                    "ruleActiveRequirements": [],
                    "ruleType": "maximumLength",
                    "ruleValues": [11],
                    "ruleCreatedDateTime": 1700568000,
                    "ruleModifiedDateTime": 1700568000
                }],
                "ruleType": "containTypes",
                "ruleValues": [3, ["`", "~", "!", "@", "#", "$", "%", "^", "&", 
                    "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", 
                    "\\", ";", ":", "\"", "'", ",", "<", ".", ">", "/", "?"]],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "b0cf30a4-ddec-4d1a-9042-8e8f6a278a36",
                "ruleName": "rule3",
                "ruleDisplayName": "Cannot contain current password, previous passwords, SUNet ID, or password reset answer",
                "ruleParent": null,
                "ruleDeterministic": false,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "nondeterministicRule",
                "ruleValues": [],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "6f12f9f2-0050-4c5b-b9cb-f9edefec5e31",
                "ruleName": "rule4",
                "ruleDisplayName": "Cannot contain a word in the dictionary",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "noDictWords",
                "ruleValues": [5],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            }
        ],
        "groupCreatedDateTime": 1700568000,
        "groupModifiedDateTime": 1700568000
    },
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
    },
    {
        "groupId": "494384e8-ccf1-4b6f-80de-aca415feca8d",
        "groupName": "Texas at Austin",
        "groupDisplayName": "University of Texas at Austin",
        "groupLogo": "",
        "groupActive": true,
        "groupUrl": "https://www.utexas.edu/",
        "groupRules": [
            {
                "ruleId": "c76d06e5-725e-474f-9bbf-365ccbadc741",
                "ruleName": "rule0",
                "ruleDisplayName": "Minimum password length 9 characters",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "minimumLength",
                "ruleValues": [9],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "47b3406c-75ce-4764-9941-2b692119a2eb",
                "ruleName": "rule1",
                "ruleDisplayName": "Contains case sensitive letter",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "containLetter",
                "ruleValues": [],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "fcbda109-33ed-4b78-9671-8f7ed722a126",
                "ruleName": "rule2",
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
                "ruleId": "109c8f61-d1ad-458b-915a-418dbb09cf89",
                "ruleName": "rule3",
                "ruleDisplayName": "Cannot contain personal information such as name or userid.",
                "ruleParent": null,
                "ruleDeterministic": false,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "nondeterministicRule",
                "ruleValues": [],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            },
            {
                "ruleId": "772327d0-40a2-4547-899d-cd5efaf94a96",
                "ruleName": "rule4",
                "ruleDisplayName": "Cannot contain a word in the dictionary",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "noDictWords",
                "ruleValues": [5],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            }
        ],
        "groupCreatedDateTime": 1700568000,
        "groupModifiedDateTime": 1700568000
    },
    {
        "groupId": "4ecaae4c-a180-4ff7-b663-aa04d10bbc2b",
        "groupName": "UCLA",
        "groupDisplayName": "University of California Los Angeles",
        "groupLogo": "",
        "groupActive": true,
        "groupUrl": "https://www.ucla.edu/",
        "groupRules": [
            {
                "ruleId": "5ca7bb22-2331-4061-ad48-61dae1cb6615",
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
                "ruleId": "409b4a83-e983-45d3-89d1-32bfacbbb927",
                "ruleName": "rule1",
                "ruleDisplayName": "Contains two different character classes",
                "ruleParent": null,
                "ruleDeterministic": true,
                "ruleActive": true,
                "ruleActiveRequirements": [],
                "ruleType": "containBroadTypes",
                "ruleValues": [2, ["`", "~", "!", "@", "#", "$", "%", "^", "&", 
                    "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", 
                    "\\", ";", ":", "\"", "'", ",", "<", ".", ">", "/", "?", " "]],
                "ruleCreatedDateTime": 1700568000,
                "ruleModifiedDateTime": 1700568000
            }
        ],
        "groupCreatedDateTime": 1700568000,
        "groupModifiedDateTime": 1700568000
    }
]