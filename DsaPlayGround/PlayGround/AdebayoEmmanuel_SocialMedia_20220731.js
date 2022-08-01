GetRecipient = (input, position) => {
    let key = 1;
    let userDict = { key: "" };
    const messageArray = input.split(" ");
    for (let text of messageArray) {
        if (text.charAt(0) == '@') {
            text = text.slice(1);
            for (let i = 0; i < text.length; i++) {
                if (text.charAt(i).match(/[^\w-]+/))
                    text = text.slice(0, i);
            }
            userDict[key] = text;
            key++;
        }
    }
    return (userDict[position] != undefined) ? userDict[position] : '""';
}
var message = "I am @Em!manuel wha@t do you want @Bis56_78!sd";
var test = GetRecipient(message, 1);
var test1 = GetRecipient(message, 2);
message = "@Joe_Bloggs yo";
var test2 = GetRecipient(message, 1);
message = "Hey @Joe_Bloggs what time are we meeting @FredBloggs?";
var test3 = GetRecipient(message, 2);
console.log(test);
console.log(test1);
console.log(test2);
console.log(test3);