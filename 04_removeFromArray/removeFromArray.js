const removeFromArray = function(arr, ...args) {
    
    let newArr = [];
    newArr = arr.filter(item => !args.includes(item));

    return newArr;   
}
    

//([1, 2, 3, 4], 3, 2)

// Do not edit below this line
module.exports = removeFromArray;
