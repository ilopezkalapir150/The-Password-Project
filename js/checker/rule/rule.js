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

class minimumLengthRule extends Rule{
    decide(password = "") {
        if(password.length >= this.values[0]) {
            return true;
        } else {
            return false;
        }
    }
}

class maximumLengthRule extends Rule{
    decide(password = "") {
        if(password.length <= this.values[0]) {
            return true;
        } else {
            return false;
        }
    }
}

class exactLengthRule extends Rule{
    decide(password = "") {
        if(password.length == this.values[0]) {
            return true;
        } else {
            return false;
        }
    }
}

class containNumberRule extends Rule {
    decide(password = "") {
        let expression = /\d/;
        return expression.test(password);
    }
}

class containLowerRule extends Rule {
    decide(password = "") {
        let expression = /[a-z]/;
        return expression.test(password);
    }
}

class containUpperRule extends Rule {
    decide(password = "") {
        let expression = /[A-Z]/;
        return expression.test(password);
    }
}

class containLetterRule extends Rule {
    decide(password = "") {
        let expression = /[a-zA-Z]/;
        return expression.test(password);
    }
}

class containSpecialRule extends Rule {
    decide(password = "") {
        // The following characters have special meaning in RegEx.
        // Therefore, they need to be prepended by "\" before added.
        let reserved = ["+", "*", "?", "^", "$", "\\", ".", "[", "]", "{", 
                        "}", "(", ")", "|", "/"];
        
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

class nondeterministicRule extends Rule {
    get active() {
        return false;
    }

    decide(password = "") {
        return true;
    }
}

function parseRule(jsonString) {
    const ruleType = ["allowedChars", "minimumLength", "maximumLength", 
        "exactLength", "containNumber", "containLower", "containUpper", 
        "containLetter", "containSpecial", "containTypes", "containBroadTypes", 
        "bannedPasswords", "bannedCaseSensitivePasswords", "bannedWords", 
        "bannedCaseSensitiveWords", "bannedChar", "bannedStartChar", 
        "bannedEndChar", "noRepeated", "notBadPassword", "noDictWords", 
        "nondeterministicRule"]
    
    // Parsing JSON and checking required values in the JSON.
    const json = JSON.parse(jsonString);
    if(!(json.ruleId && json.ruleName && ruleDisplayName && ruleParent && 
        ruleDeterministic && ruleActive && ruleActiveRequirements && 
        ruleType && ruleValues && ruleCreatedDateTime && 
        ruleModifiedDateTime)) {
        throw new Error("parseRule: JSON format incorrect.");
    }
    if(!(Number.isInteger(json.ruleCreatedDateTime) && 
        Number.isInteger(json.ruleModifiedDateTime))) {
        throw new Error("parseRule: rule date and time format incorrect.");
    }
    if(!ruleType.includes(json.ruleType)) {
        throw new Error("parseRule: rule type not supported.");
    }
    
    // Initializing rule object.
}

// Test code. Please delete before deployment.
//var rule = new containNumberRule();
//console.log(rule.decide("1"));

// Testing containSpecialRule.
//var rule = new containSpecialRule();
//rule.values = [["!", "?", "\\"]];
//console.log(rule.decide("12\\!3"));

// Testing containTypesRule and containBroadTypesRule.
//var rule = new containTypesRule();
//rule.values = [4, ["!", "?", "\\", " "]];
//console.log(rule.decide("12aA 34"));
//var rule = new containBroadTypesRule();
//rule.values = [3, ["!", "?", "\\", " ", "^", "$", "%"]];
//console.log(rule.decide("12a A"))

// Testing allowedCharsRule.
//var rule = new allowedCharsRule();
//rule.values = [["4", "a", "!"]];
//console.log(rule.decide("4 a1"));

// Testing minimumLengthRule, maximumLengthRule, exactLengthRule.
//var rule = new exactLengthRule();
//rule.values = [2];
//console.log(rule.decide("你好"));
//console.log("你好".length);

var test = -1;
console.log(Boolean(test))