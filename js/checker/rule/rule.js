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

    }
    
    set setRequirements(requirements) {

        this.requirements = requirements;
    }

    active(password = "") {
        for(let i = 0; i < this.requirements.length; i++) {
            
        }
    }

    /**
     * 
     */
    decide(password = "") {
        throw new Error("Rule.decide(): method not implemented.");
    }
  
    eat() {
        console.log("eating");
    }
}



myObject.id = 1
myObject.id