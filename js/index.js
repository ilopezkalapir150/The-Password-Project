//on the website loading up, load json rules and display in button dropdowns 
function loadRules(){
    //get list of buttons inside of rightside button container
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


    //load in passwords to page 2 table 
    let p = passwords;
    let table = document.getElementById("page2-table");

    for (let i = 0; i < 200; i++) {
        let item = document.createElement("tr");
        item.setAttribute("id", "p-" + (i + 1));
        item.addEventListener("click", function () {
            selectPassword(this)});

        let row1 = document.createElement("td");
        row1.innerText = p[0].rank[i];
        let row2 = document.createElement("td");
        row2.innerText = p[0].password[i];
        let row3 = document.createElement("td");
        row3.innerText = p[0].users[i];

        item.appendChild(row1);
        item.appendChild(row2);
        item.appendChild(row3);
        table.appendChild(item);

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
            //p.setAttribute() set attribute that matches id from specific rule
            p.classList.add('invalid');
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
    // console.log("password selected");
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

// function validate(){
//     //need whatever output from rule checker js
//     // or sub this code directly into that func
//     //for loop... item = getelementbyid (id of each li checklist item)
//     // if (match) {
//     //     item.classList.remove("invalid");
//     //     item.classList.add("valid");
//     // } else {
//     //     item.classList.remove("valid");
//     //     item.classList.add("invalid");
//     // }
// }


