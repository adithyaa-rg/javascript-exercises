const removeFromArray = function() {
    let array = arguments[0];
    for (var i = 1; i < arguments.length ; i++){
        if (array.includes(arguments[i])){
            var j = 0;
            while (j < array.length){
                if (array[j] === arguments[i]){
                    array.splice(j, 1);
                }
                j+=1;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
