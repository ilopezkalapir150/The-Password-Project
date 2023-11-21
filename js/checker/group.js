/**
 * Group class.
 * @class Group
 */

//import { Rule, parseRule } from "./rule.mjs";

class Group {
    constructor() {
        // Variables needed by a typical Rule.
        this._id = 0;
        this._name = "";
        this._displayName = "";
        this._logo = "";
        this._active = true;
        this._url = "";
        this._rules = [];
        this._createdDateTime = 0;
        this._modifiedDateTime = 0;
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

    set logo(logo) {
        this._logo = logo;
    }

    get logo() {
        return this._logo;
    }

    set active(active) {
        this._active = active;
    }

    get active() {
        return this._active;
    }

    set rules(rules) {
        // Check if the passed in argument is an array.
        if(!Array.isArray(rules)) {
            throw new Error("Group.rules: setter argument not an array.");
        }

        // Check if each element in the array is a Rule.
        for(let i = 0; i < rules.length; i++) {
            if(!(rules[i] instanceof Rule)) {
                throw new Error("Group.rules: setter argument " + 
                    "contains objects that is not a Rule.");
            }
        }

        this._rules = rules;
    }

    get rules() {
        return this._rules;
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

    decide(password = "") {
        for(let i = 0; i < this.rules.length; i++) {
            if(this.rules[i].active && !this.rules[i].decide(password)) {
                return false;
            }
        }
        return true;
    }
}

function parseGroup(json) {
    // Checking required values in the JSON.
    if(!(json.hasOwnProperty("groupId") && json.hasOwnProperty("groupName") && 
        json.hasOwnProperty("groupDisplayName") && 
        json.hasOwnProperty("groupLogo") && 
        json.hasOwnProperty("groupActive") && 
        json.hasOwnProperty("groupUrl") && 
        json.hasOwnProperty("groupRules") && 
        json.hasOwnProperty("groupCreatedDateTime") && 
        json.hasOwnProperty("groupModifiedDateTime"))) {
        throw new Error("parseGroup: keys missing from JSON.");
    }
    if(!(json.groupId && json.groupName && json.groupDisplayName && 
        json.groupCreatedDateTime && json.groupModifiedDateTime)) {
        throw new Error("parseGroup: JSON format incorrect.");
    }
    if(!(Number.isInteger(json.groupCreatedDateTime) && 
        Number.isInteger(json.groupModifiedDateTime))) {
        throw new Error("parseGroup: group date and time format incorrect.");
    }
    if(!Array.isArray(json.groupRules)) {
        throw new Error("parseGroup: group rules not an array.");
    }

    var group = new Group();

    // Filling in values of the group.
    group.id = json.groupId;
    group.name = json.groupName;
    group.displayName = json.groupDisplayName;
    group.logo = json.groupLogo;
    group.active = json.groupActive;
    group.url = json.groupUrl;
    group.createdDateTime = json.groupCreatedDateTime;
    group.modifiedDateTime = json.groupModifiedDateTime;

    // Adding active requirements, if present.
    for(let i = 0; i < json.groupRules.length; i++) {
        group._rules.push(parseRule(json.groupRules[i]));
    }

    return group;
}

//export { Group, parseGroup };