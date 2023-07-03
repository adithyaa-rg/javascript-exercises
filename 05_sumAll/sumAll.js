const sumAll = function() {
    let num1, num2;
    if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number' && arguments[0] >= 0 && arguments[1] >= 0){
        if (arguments[0] >= arguments[1]){
            num1 = arguments[1];
            num2 = arguments[0];
        }
        else{
            num1 = arguments[0];
            num2 = arguments[1];
        }
        sum = 0;
        for (let i = num1; i <= num2 ; i++){
            sum +=i;
        }
        return sum;
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
