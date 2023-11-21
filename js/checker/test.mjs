////////////////////////////////////////////////////////////////////////////////
//
// 2023-11-21: Generating UUID.
//
////////////////////////////////////////////////////////////////////////////////

import { getUUID } from "./uuid.mjs";
console.log(getUUID());

////////////////////////////////////////////////////////////////////////////////
//
// 2023-11-21: Testing Group and Rule modules.
//
////////////////////////////////////////////////////////////////////////////////
/*
import { Group, parseGroup } from "./group.mjs";

import * as fs from "fs";
import * as path from "path";

const jsonDir = "./json";

const jsons = fs.readdirSync(jsonDir).filter(file => path.extname(file) === ".json" && path.basename(file)[0] !== "_");
jsons.forEach(file => {
    const jsonData = fs.readFileSync(path.join("./json", file));
    const json = JSON.parse(jsonData.toString());

    var group = parseGroup(json);
    console.log("Successfully Parsed:", group.name);
});
*/