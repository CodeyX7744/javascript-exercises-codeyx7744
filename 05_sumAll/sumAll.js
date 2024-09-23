const sumAll = function(start, end) {
    let sum = 0;
    let start1 = null;
    let end1 = null;
    if (start < 0 || end < 0) {
        return "ERROR";
    } else if(!Number.isInteger(start) || !Number.isInteger(end) ) {
        return "ERROR"; 
    } else if (typeof start !== "number" || typeof end !== "number"){
        return "ERROR"; 
    } 


    if (start > end) {
        start1 = arguments[1];
        end1 = arguments[0];
    } else {
        start1 = arguments[0];
        end1 = arguments[1];
    }
    
    for(let i=start1; i<=end1; i++) {
        sum += i;
    }
    return sum;
};
//sumAll(1, 4))
// Do not edit below this line
module.exports = sumAll;
