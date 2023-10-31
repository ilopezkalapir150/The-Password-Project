function myFunc() {
    alert("You clicked it!");
}

// this is not currently working, need to figure out CORS error
async function getRules() {
    console.log("beep");
    // const response = await fetch("../json/swat-sample.json");
    // const data = await response.json();
    // const obj = JSON.parse(data);

    let swatRules =
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
                "ruleType": "",
                "ruleValues": [],
                "ruleCreatedDateTime": 0,
                "ruleModifiedDateTime": 0
            }
        ],
        "groupCreatedDateTime": 0,
        "groupModifiedDateTime": 0
    }
    // console.log(swatRules);
    // console.log(swatRules.groupRules[0].ruleDisplayName);
    document.getElementById("rules0").innerHTML = "<b>Your current rules:</b> " + swatRules.groupRules[0].ruleDisplayName;
    document.getElementById("rules1").innerHTML = swatRules.groupRules[0].ruleDisplayName;

}

