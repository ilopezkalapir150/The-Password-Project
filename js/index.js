function sendPasswordOnClick(btn){
    setRules(btn); 
    var passwordInput = document.getElementById("password-input");
    console.log(passwordInput); 
    testingPasswords(passwordInput.value); 
    
}

//highlights password on page 2 in "select password" table
function selectPassword(row){
    const previousSelection = document.querySelector('tr.selected');
    if (previousSelection) {
        previousSelection.classList.remove('selected');
    }
    row.classList.add('selected');
    var page2password = row.children[1].innerText; //this is the password we will be checking
    testingPasswords(page2password);
}

function sendPasswordOnClickP2(btn){
    setRules(btn); 
    let page2password = document.querySelectorAll(".selected"); 
    console.log(page2password); 
    console.log(page2password[0].children[1]); 
    testingPasswords(page2password[0].children[1].innerText);
} 

function sendPasswordOnInput(password){
    let pswrd = password.target.value;
    testingPasswords(pswrd);
}

function testingPasswords(pswrd) {
    //need to add event listener, any time a password is entered
    //and changed (page 1) or a new password is selected (page 2)
    //console.log("hello"); 
    
    // const passwordInput = document.getElementById('password-input');
    //passwordInput.addEventListener('input', testingPasswords(passwordInput.value));
    
    //console.log(passwordInput.value);
    let array = document.querySelectorAll('.btn-selected');
    let current_id = "";
    console.log(array);
    for (let i = 0; i < array.length; i++){
        current_id = array[i].children[1].children[0].id;
        console.log(typeof rules_new); 
        let group = getCurrentRules(rules_new, current_id);
        let n = array[i].id.slice(-1);
        for (let j = 0; j < group.rules.length; j++) {
            let p = document.getElementById("p-rule-" + n + "-" + j);
            let decision = group.rules[j].decide(pswrd);
            if (decision == true){
                p.classList.remove('invalid');
                p.classList.add('valid');
                console.log("cleared rule "+n+ "-"+j+"!");
            } else {
                p.classList.remove('valid');
                p.classList.add('invalid');
            }
        }
    }
}

function loadInput(){
    //load get live password input 
    console.log("loaded text input");
    var passwordInput = document.getElementById("password-input");
    passwordInput.addEventListener("input", sendPasswordOnInput);
    console.log(passwordInput); 
}

//on the website loading up, load json rules and display in button dropdowns 
function loadRules(){
    //loadInput();
    // passwordInput.addEventListener('input', testingPasswords(passwordInput.value));
    //get list of buttons inside of rightside button container
    let buttons = document.querySelectorAll("div.button-container button");
    let data = rules_new;
    //loop through dropdown items and update with new rules
    //from json, match groupID to dd-[i]]
    //there must be an easier way to do this...
    for (let i = 0; i < buttons.length; i++ ){
        //console.log(rules_new[i].groupId);
        let content = document.getElementById(rules_new[i].groupId).parentElement;
        let group = parseGroup(data[i]);
        let item = document.createElement("li");
        item.setAttribute("id", "dd-rules-"+i);

        for (let i = 0; i < group.rules.length; i++) {
            item.innerHTML+= "- " + group.rules[i].displayName + "<br />";
        }
        content.appendChild(item);
    }
}

function loadCommonPasswords(){
    //load in passwords to page 2 table 
    let p = passwords;
    console.log(p);
    let table = document.getElementById("page2-table");

    for (let i = 0; i < 200; i++) {
        let item = document.createElement("tr");
        item.setAttribute("id", "p-" + (i + 1));
        item.addEventListener("click", function () {
            selectPassword(this)
        });

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
}

function loadPageOne(){
    loadRules();
    loadInput();
    console.log("page 1 loaded");
}

function loadPageTwo() {
    loadRules();
    loadCommonPasswords();
    console.log("page 2 loaded");
}

//when school button clicked, load rules wherever they need to go to be applied to password
//this may include checklist display (bottom of page), perhaps to an exterior password checker func?
function setRules(btn) {
    let table = document.getElementById("school-list");
    let current_id = btn.children[1].children[0].id;
    let n = btn.id.slice(-1);
    let rule_box = document.querySelector("#dd-rules-" + n);

    let group = getCurrentRules(rules_new, current_id);
    //console.log(btn.id.slice(-1)); //this returns the number after logo-button-<NUM>


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
        data.innerHTML = group.displayName;
        for (let i = 0; i < group.rules.length; i++) {
            let p = document.createElement("li");
            // console.log("p-rule-" + n + "-" + i); //come back
            p.setAttribute("id", "p-rule-" + n + "-" + i);
            p.innerHTML = group.rules[i].displayName;
            // p.setAttribute("id", current_rules.groupRules[i].ruleId);
            p.classList.add('invalid');
            data.append(p);
        }
        row.appendChild(data);
        table.appendChild(row);
    }

    //handle placeholder text
    if (document.getElementById('table-placeholder')) {
        document.getElementById('table-placeholder').remove()
    } else if (table.childNodes.length == 2) { //2 bcause of exterior tr and tr 
        let row = document.createElement('tr');
        let plcholder = document.createElement('td');
        row.setAttribute("id", "table-placeholder");
        plcholder.innerText = "No rules selected!";
        row.appendChild(plcholder);
        table.appendChild(row);
    }
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

//Given a list of rules and a school id to match,
//Returns the parsed set of rules for that particular school 
function getCurrentRules(rules, id) {
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].groupId == id) {
            current_rules = rules[i];
        }
    }
    return parseGroup(current_rules);
}





