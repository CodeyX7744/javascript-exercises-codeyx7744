const reverseString = function(input) {
    let reverseWord ="";
    for (let i=input.length-1; i>=0; i--) {
        reverseWord += input[i];
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
