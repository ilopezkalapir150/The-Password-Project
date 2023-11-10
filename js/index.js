function myFunc() {
    alert("You clicked it!");
}

//on the website loading up, load json rules and display in button dropdowns 
function loadRules(){
    //get list of buttons inside of rightside button container
    //still trying to figure out reading json file
    //the code below kind of works when running a local server w vscode extension

    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         // Do something here with this.responseText
    //         console.log(JSON.parse(JSON.stringify(this)));
    //     }
    // };
    // xhttp.open("GET", "json/swat-sample.json", true);
    // xhttp.send();
    // console.log("Request Sent");

    let buttons = document.querySelectorAll("div.button-container button");
    //loop through dropdown items and update with new rules
    //from json, match groupID to dd-[i]]
    //there must be an easier way to do this...
    for (let i = 0; i < buttons.length; i++ ){
        let content = document.getElementById("dd-"+i);
        let item = document.createElement("li");
        item.setAttribute("id", "dd-rules-"+i);
        item.innerText = "loaded!";
        content.appendChild(item);
    }
}

//when school button clicked, load rules wherever they need to go to be applied to password
//this may include checklist display (bottom of page), perhaps to an exterior password checker func?
async function setRules(btn) {
    console.log("beep");
    // const response = await fetch("../json/swat-sample.json");
    // const data = await response.json();
    // const obj = JSON.parse(data);

    let table = document.getElementById("school-list");

    //this is just example rule json, need to figure out importing json file
    //figure out CORS error
    let swatRules =
            {
                "groupId": 0,
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
                    },
                    {
                        "ruleId": 1,
                        "ruleName": "rule1",
                        "ruleDisplayName": "Require one uppercase letter",
                        "ruleParent": 0,
                        "ruleDeterministic": true,
                        "ruleActive": true,
                        "ruleActiveRequirements": [],
                        "ruleType": "",
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
                        "ruleType": "",
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
                        "ruleType": "",
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
    // console.log(swatRules.groupRules[0].ruleDisplayName)


    //button selection toggle and add/remove rules in table
    if (btn.classList.contains('btn-selected')) {
        btn.classList.remove('btn-selected');
        document.getElementById("school-item-"+swatRules.groupId).remove();
    }
    else {
        btn.classList.add('btn-selected');
        let row = document.createElement('tr');
        row.setAttribute("id", "school-item-" + swatRules.groupId);
        console.log("row");
        let data = document.createElement('td');
        data.innerHTML = swatRules.groupDisplayName;
        for (let i = 0; i < swatRules.groupRules.length; i++) {
            let p = document.createElement("li");
            p.innerHTML = swatRules.groupRules[i].ruleDisplayName;
            data.append(p);
        }
        row.appendChild(data);
        table.appendChild(row);
    }

    //handle placeholder text
    // console.log(table);
    if (document.getElementById('table-placeholder')) {
        document.getElementById('table-placeholder').remove()
    } else if (table.childNodes.length == 2) { //2 bcause of tr and tr 
        let row = document.createElement('tr');
        let plcholder = document.createElement('td');
        row.setAttribute("id", "table-placeholder");
        plcholder.innerText = "No rules selected!";
        row.appendChild(plcholder);
        table.appendChild(row);
    }
}

//highlights password on page 2 in "select password" table
function selectPassword(row){
    console.log("password selected");

    const previousSelection = document.querySelector('tr.selected');
    if (previousSelection) {
        previousSelection.classList.remove('selected');
    }
    row.classList.add('selected');
    console.log(row.children[1].innerText); //this is the password we will be checking

}

//page 1: toggle btw show/hide entered password
function togglePassword(){
    var x = document.getElementById("password-input");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


