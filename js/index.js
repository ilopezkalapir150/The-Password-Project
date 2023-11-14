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
    let rules = rules_swat[0]
    //loop through dropdown items and update with new rules
    //from json, match groupID to dd-[i]]
    //there must be an easier way to do this...
    for (let i = 0; i < buttons.length; i++ ){
        let content = document.getElementById("dd-"+i);
        let item = document.createElement("li");
        item.setAttribute("id", "dd-rules-"+i);

        for (let i = 0; i < rules.groupRules.length; i++) {
            item.innerHTML+= "- " + rules.groupRules[i].ruleDisplayName + "<br />";
        }
        content.appendChild(item);
    }
    //console.log(rules.groupName);
    //console.log(rules.groupRules.length);

}

//when school button clicked, load rules wherever they need to go to be applied to password
//this may include checklist display (bottom of page), perhaps to an exterior password checker func?
function setRules(btn) {
    //console.log(btn.id.slice(-1)); //this returns the number after logo-button-<NUM>
    n = btn.id.slice(-1);
    rule_box = document.querySelector("#dd-rules-" + n);
    rule_school = document.querySelector("#name-" + n);
    // const response = await fetch("../json/swat-sample.json");
    // const data = await response.json();
    // const obj = JSON.parse(data);

    let table = document.getElementById("school-list");

    //ultimately do a for loop thru each rule in rules.js
    let rules = rules_swat[0]; //replace 0 with n
    

    //button selection toggle and add/remove rules in table
    if (btn.classList.contains('btn-selected')) {
        btn.classList.remove('btn-selected');
        document.getElementById("school-item-" + n).remove();
    }
    else {
        btn.classList.add('btn-selected');
        let row = document.createElement('tr');
        row.setAttribute("id", "school-item-" + n);
        let data = document.createElement('td');
        //data.innerHTML = rules.groupDisplayName;
        data.innerHTML = rule_school.innerText;
        for (let i = 0; i < rules.groupRules.length; i++) {
            let p = document.createElement("li");
            p.innerHTML = rules.groupRules[i].ruleDisplayName;
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
    var y = document.getElementById("eye-open"); 
    var z = document.getElementById("eye-closed"); 
    if (x.type === "password") {
        x.type = "text"; 
        z.style.display = "none"; 
        y.style.display = "inline"; 
    } else {
        x.type = "password";
        y.style.display = "none"; 
        z.style.display = "inline"; 
    }
}


