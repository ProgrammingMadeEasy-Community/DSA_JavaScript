/**
 *  collect input
 * if input % 3 == 0 Fizz
 * if input % 5 == 0 Buzz
 * if input % 3 == 0 && input % 5 == 0 FizzBuzz
 * else return str(input)
 */
var prompt = require('prompt-sync')();
var input = prompt('Kindly enter an integer: ');
function fizzBuzz(input) {
        input = parseInt(input);
        if (input % 3 == 0 && input % 5 == 0)
            return "FizzBuzz";
        else if (input % 3 == 0)
            return "Fizz";
        else if (input % 5 == 0)
            return "Buzz";
        else
        return input.toString();
}
console.log(fizzBuzz(input));