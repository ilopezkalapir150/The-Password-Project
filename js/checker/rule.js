/**
 * Abstract class Rule.
 * @class Rule
 */
class Rule {
    constructor() {
        // Variables needed by a typical Rule.
        this._id = 0;
        this._name = "";
        this._displayName = "";

        this._parent = 0;

        // deterministic labels if a rule can be decided by the class.
        // If a rule is not deterministic, the decider should return false.
        this._deterministic = true;
        this._active = true;

        // requirements has to be a list of other Rules.
        this._requirements = [];
        this._values = [];
        this._createdDateTime = 0;
        this._modifiedDateTime = 0;

        if(this.constructor == Rule) {
            throw new Error("Rule: attempted instantiation of abstract class.");
        }
    }

    set id(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set displayName(displayName) {
        this._displayName = displayName;
    }

    get displayName() {
        return this._displayName;
    }

    set parent(parent) {
        this._parent = parent;
    }

    get parent() {
        return this._parent;
    }

    set deterministic(deterministic) {
        this._deterministic = deterministic;
    }

    get deterministic() {
        return this._deterministic;
    }

    set active(active) {
        this._active = active;
    }

    get active() {
        return this._active;
    }

    set requirements(requirements) {
        // Check if the passed in argument is an array.
        if(!Array.isArray(requirements)) {
            throw new Error("Rule.requirements: setter argument not an array.");
        }

        // Check if each element in the array is a Rule.
        for(let i = 0; i < requirements.length; i++) {
            if(!(requirements[i] instanceof Rule)) {
                throw new Error("Rule.requirements: setter argument " + 
                    "contains objects that is not a Rule.");
            }
        }

        this._requirements = requirements;
    }

    get requirements() {
        return this._requirements;
    }

    set values(values) {
        this._values = values;
    }

    get values() {
        return this._values;
    }

    set createdDateTime(createdDateTime) {
        this._createdDateTime = createdDateTime;
    }

    get createdDateTime() {
        return this._createdDateTime;
    }

    set modifiedDateTime(modifiedDateTime) {
        this._modifiedDateTime = modifiedDateTime;
    }

    get modifiedDateTime() {
        return this._modifiedDateTime;
    }

    /**
     * Validate if this rule is usable with all necessary values included.
     * @return true (Rule object is valid) / false (not valid).
     */
    validate() {
        if(!(this.id && this.name && this.displayName && 
            this.createdDateTime && this.modifiedDateTime)) {
            return false;
        }
        if(!(Number.isInteger(this.createdDateTime) && 
            Number.isInteger(this.modifiedDateTime))) {
            return false;
        }

        return this.validateValues();
    }

    validateValues() {
        throw new Error("Rule.validateValues: method not implemented.");
    }

    active(password = "") {
        if(!this.active) {
            return false;
        }
        for(let i = 0; i < this.requirements.length; i++) {
            if(!this.requirements[i].decide(password)) {
                return false;
            }
        }
        return true;
    }

    /**
     * 
     */
    decide(password = "") {
        throw new Error("Rule.decide: method not implemented.");
    }
}

class allowedCharsRule extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Array.isArray(this.values[0])) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        for(let i = 0; i < password.length; i++) {
            if(!this.values[0].includes(password[i])) {
                return false;
            }
        }
        return true;
    }
}

class minimumLengthRule extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Number.isInteger(this.values[0])) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        if(password.length >= this.values[0]) {
            return true;
        } else {
            return false;
        }
    }
}

class maximumLengthRule extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Number.isInteger(this.values[0])) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        if(password.length <= this.values[0]) {
            return true;
        } else {
            return false;
        }
    }
}

class exactLengthRule extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Number.isInteger(this.values[0])) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        if(password.length == this.values[0]) {
            return true;
        } else {
            return false;
        }
    }
}

class containNumberRule extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 0) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        let expression = /\d/;
        return expression.test(password);
    }
}

class containLowerRule extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 0) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        let expression = /[a-z]/;
        return expression.test(password);
    }
}

class containUpperRule extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 0) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        let expression = /[A-Z]/;
        return expression.test(password);
    }
}

class containLetterRule extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 0) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        let expression = /[a-zA-Z]/;
        return expression.test(password);
    }
}

class containSpecialRule extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Array.isArray(this.values[0])) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        // The following characters have special meaning in RegEx.
        // Therefore, they need to be prepended by "\" before added.
        let reserved = ["+", "*", "?", "^", "$", "\\", ".", "[", "]", "{", 
                        "}", "(", ")", "|", "/", "-"];
        
        // Building the RegEx expression.
        let expression = "";
        for(let i = 0; i < this.values[0].length; i++) {
            if(reserved.includes(this.values[0][i])) {
                expression += "\\";
            }
            expression += this.values[0][i];
        }
        expression = "[" + expression + "]";
        expression = new RegExp(expression);

        return expression.test(password);
    }
}

class containTypesRule extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Number.isInteger(this.values[0])) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        // Instantiating and relying on the four contain checkers.
        let checkers = [];
        checkers.push(new containNumberRule());
        checkers.push(new containLowerRule());
        checkers.push(new containUpperRule());
        checkers.push(new containSpecialRule());
        checkers[3].values = [this.values[1]]

        let accumulator = 0;
        for(let i = 0; i < checkers.length; i++) {
            if(checkers[i].decide(password)) {
                accumulator++;
            }
        }

        if(accumulator >= this.values[0]) {
            return true;
        }
        else {
            return false;
        }
    }
}

class containBroadTypesRule extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Number.isInteger(this.values[0])) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        // Instantiating and relying on the three contain checkers.
        let checkers = [];
        checkers.push(new containNumberRule());
        checkers.push(new containLetterRule());
        checkers.push(new containSpecialRule());
        checkers[2].values = [this.values[1]]

        let accumulator = 0;
        for(let i = 0; i < checkers.length; i++) {
            if(checkers[i].decide(password)) {
                accumulator++;
            }
        }

        if(accumulator >= this.values[0]) {
            return true;
        }
        else {
            return false;
        }
    }
}

class bannedPasswords extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Array.isArray(this.values[0])) {
            return false;
        }
        return true;
    }
    decide(password = "") {
        for(let i = 0; i < this.values[0].length; i++) {
            if (password.toUpperCase() == this.values[0][i].toUpperCase()){
                return false;
            }
        }
        return true;
    }
}
class bannedCaseSensitivePasswords extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Array.isArray(this.values[0])) {
            return false;
        }
        return true;
    }
    decide(password = "") {
        for(let i = 0; i < this.values[0].length; i++) {
            if (password == this.values[0][i]){
                return false;
            }
        }
        return true;
    }
}

class bannedWords extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Array.isArray(this.values[0])) {
            return false;
        }
        return true;
    }
}

class bannedCaseSensitiveWords extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Array.isArray(this.values[0])) {
            return false;
        }
        return true;
    }

}

class bannedChar extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Array.isArray(this.values[0])) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        // The following characters have special meaning in RegEx.
        // Therefore, they need to be prepended by "\" before added.
        let reserved = ["+", "*", "?", "^", "$", "\\", ".", "[", "]", "{", 
                        "}", "(", ")", "|", "/", "-"];
        
        // Building the RegEx expression.
        let expression = "";
        for(let i = 0; i < this.values[0].length; i++) {
            if(reserved.includes(this.values[0][i])) {
                expression += "\\";
            }
            expression += this.values[0][i];
        }
        expression = "[" + expression + "]";
        expression = new RegExp(expression);

        return !expression.test(password);
    }
}

class bannedStartChar extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Array.isArray(this.values[0])) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        if(this.values[0].includes(password[0])) {
            return false;
        }
        return true;
    }
}

class bannedEndChar extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Array.isArray(this.values[0])) {
            return false;
        }
        return true;
    }

    decide(password = "") {
        if(this.values[0].includes(password[password.length - 1])) {
            return false;
        }
        return true;
    }
}

class noRepeated extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Number.isInteger(this.values[0])) {
            return false;
        }
        return true;
    }
    decide(password = "") {
        // Expression building.
        let expression = "(.)\\1{";
        expression += String(this.values[0]);
        expression += ",}"

        expression = new RegExp(expression);
        return !expression.test(password);
    }
}

class notBadPassword extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 0) {
            return false;
        }
        return true;
    }
}

class noDictWords extends Rule {
    validateValues() {
        if(!Array.isArray(this.values)) {
            return false;
        }
        if(!this.values.length == 1) {
            return false;
        }
        if(!Number.isInteger(this.values[0])) {
            return false;
        }
        return true;
    }

}

class nondeterministicRule extends Rule {
    set active(active) {
        this._active = false;
    }

    get active() {
        return false;
    }

    validateValues() {
        return true;
    }

    decide(password = "") {
        return true;
    }
}

// This function takes a parsed json object.
function parseRule(json) {
    // Checking required values in the JSON.
    if(!(json.hasOwnProperty("ruleId") && json.hasOwnProperty("ruleName") && 
        json.hasOwnProperty("ruleDisplayName") && 
        json.hasOwnProperty("ruleParent") && 
        json.hasOwnProperty("ruleDeterministic") && 
        json.hasOwnProperty("ruleActive") && 
        json.hasOwnProperty("ruleActiveRequirements") && 
        json.hasOwnProperty("ruleType") && 
        json.hasOwnProperty("ruleValues") && 
        json.hasOwnProperty("ruleCreatedDateTime") && 
        json.hasOwnProperty("ruleModifiedDateTime"))) {
        throw new Error("parseRule: keys missing from JSON.");
    }
    if(!(json.ruleId && json.ruleName && json.ruleDisplayName && 
        json.ruleType && json.ruleCreatedDateTime && 
        json.ruleModifiedDateTime)) {
        throw new Error("parseRule: JSON format incorrect.");
    }
    if(!(Number.isInteger(json.ruleCreatedDateTime) && 
        Number.isInteger(json.ruleModifiedDateTime))) {
        throw new Error("parseRule: rule date and time format incorrect.");
    }
    if(!(Array.isArray(json.ruleActiveRequirements) && 
        Array.isArray(json.ruleValues))) {
        throw new Error(
            "parseRule: rule requirements and/or values are not an array.");
    }
    
    // Initializing rule object.
    switch(json.ruleType) {
        case "allowedChars":
            var rule = new allowedCharsRule();
            break;
        case "minimumLength":
            var rule = new minimumLengthRule();
            break;
        case "maximumLength":
            var rule = new maximumLengthRule();
            break;
        case "exactLength":
            var rule = new exactLengthRule();
            break;
        case "containNumber":
            var rule = new containNumberRule();
            break;
        case "containLower":
            var rule = new containLowerRule();
            break;
        case "containUpper":
            var rule = new containUpperRule();
            break;
        case "containLetter":
            var rule = new containLetterRule();
            break;
        case "containSpecial":
            var rule = new containSpecialRule();
            break;
        case "containTypes":
            var rule = new containTypesRule();
            break;
        case "containBroadTypes":
            var rule = new containBroadTypesRule();
            break;
        case "bannedPasswords":
            //////////////////////////////////////////////////////////////////// NOT IMPLEMENTED YET!
            var rule = new nondeterministicRule();
            break;
        case "bannedCaseSensitivePasswords":
            //////////////////////////////////////////////////////////////////// NOT IMPLEMENTED YET!
            var rule = new nondeterministicRule();
            break;
        case "bannedWords":
            //////////////////////////////////////////////////////////////////// NOT IMPLEMENTED YET!
            var rule = new nondeterministicRule();
            break;
        case "bannedCaseSensitiveWords":
            //////////////////////////////////////////////////////////////////// NOT IMPLEMENTED YET!
            var rule = new nondeterministicRule();
            break;
        case "bannedChar":
            var rule = new bannedChar();
            break;
        case "bannedStartChar":
            var rule = new bannedStartChar();
            break;
        case "bannedEndChar":
            var rule = new bannedEndChar();
            break;
        case "noRepeated":
            var rule = new noRepeated();
            break;
        case "notBadPassword":
            //////////////////////////////////////////////////////////////////// NOT IMPLEMENTED YET!
            var rule = new nondeterministicRule();
            break;
        case "noDictWords":
            //////////////////////////////////////////////////////////////////// NOT IMPLEMENTED YET!
            var rule = new nondeterministicRule();
            break;
        case "nondeterministicRule":
            var rule = new nondeterministicRule();
            break;
        default:
            throw new Error("parseRule: rule type not supported.");
    }

    // Filling in values of the rule.
    rule.id = json.ruleId;
    rule.name = json.ruleName;
    rule.displayName = json.ruleDisplayName;
    rule.parent = json.ruleParent;
    rule.determinisitc = json.ruleDeterministic;
    rule.active = json.ruleActive;
    rule.values = json.ruleValues;
    rule.createdDateTime = json.ruleCreatedDateTime;
    rule.modifiedDateTime = json.ruleModifiedDateTime;

    // Adding active requirements, if present.
    for(let i = 0; i < json.ruleActiveRequirements.length; i++) {
        rule._requirements.push(parseRule(json.ruleActiveRequirements[i]));
    }

    if(!rule.validate()) {
        console.log(rule.id);
        throw new Error("parseRule: rule values have incorrect format.");
    }

    return rule;
}

//export { Rule, parseRule };