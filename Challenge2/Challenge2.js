let chain = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"

let counter = 0;
let result = "";

chain.split("").forEach((char) => {
    switch (char) {
        case "&":
            result += counter
            break;
        case "#":
            counter++;
            break;
        case "@":
            counter--;
            break;
        case "*":
            counter *= counter;
            break;
    }
});
console.log(result);