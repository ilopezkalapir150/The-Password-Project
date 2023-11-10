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

class containNumberRule extends Rule {
    decide(password = "") {
        let expression = /\w*\d\w*/;
        return expression.test(password);
    }
}

class containLowerRule extends Rule {
    decide(password = "") {
        let expression = 
    }
}

class containUpperRule extends Rule {

}

class containSpecialRule extends Rule {

}

// Test code. Please delete before deployment.
var rule = new containNumberRule();
console.log(rule.decide(""));

//var rule = 1;
//console.log(typeof rule == "number");