import { log } from "console";
import { readFileSync } from "fs";

let input = [];
try {
    input = readFileSync("C:/Users/geffr/Documents/GIT/codember/Challenge3/message.txt", "utf-8").split("\n");
    for (const message in input) {
        input[message] = input[message].replace("\r", "");
    }
    // input = readFileSync("https://codember.dev/data/encryption_policies.txt", "utf-8").split("\n");
} catch (error) {
    console.log(error);
    throw error;
}

let result = "";

function decrypt(message){
    let conditions = message.split(":")[0].trim();
    let value = message.split(":")[1].trim();
    let range = conditions.substring(0, conditions.indexOf(" ")).trim();
    let character = conditions.substring(conditions.indexOf(" "), conditions.length).trim();
    let minimun = Number(range.split("-")[0]);
    let maximun = Number(range.split("-")[1]);
    let counter = 0;
    for (let i = 0; i < value.length; i++) {
        if (value[i] == character) {
            counter++;
        }
    }
    if(counter >= minimun && counter <= maximun){
        return "";
    }
    return character;
}

let invalidKeys = [];
function decrypt2(message){
    let conditions = message.split(":")[0].trim();
    let value = message.split(":")[1].trim();
    let range = conditions.substring(0, conditions.indexOf(" ")).trim();
    let character = conditions.substring(conditions.indexOf(" "), conditions.length).trim();
    let minimun = Number(range.split("-")[0]);
    let maximun = Number(range.split("-")[1]);
    let counter = 0;
    for (let i = 0; i < value.length; i++) {
        if (value[i] == character) {
            counter++;
        }
    }
    if(counter >= minimun && counter <= maximun){
        return "";
    }
    invalidKeys.push(message);
}


input.forEach((message, index) => {
    result += decrypt2(message);
});
console.log(invalidKeys[41]);