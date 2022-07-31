GetRecipient = (input, position) => {
    let key = 1;
    let userDict = { key: "" };
    const messageArray = input.split(" ");
    for (let text of messageArray) {
        if (text.charAt(0) == '@') {
            text = text.slice(1);
            if ((!text[text.length - 1].match(/[\w-]+/))) {
                var txt = text.slice(0, -1);
                userDict[key] = txt;
            } else {
                userDict[key] = text;
            }
            key++;
        }
    }
    return (userDict[position] != undefined) ? userDict[position] : '""';
}
var message = "@User_One @UserABC! Have you seen this from @Userxyz";
var test = GetRecipient(message, 1);
var test1 = GetRecipient(message, 2);
var test2 = GetRecipient(message, 3);
var test3 = GetRecipient(message, 4);
console.log(test);
console.log(test1);
console.log(test2);
console.log(test3);