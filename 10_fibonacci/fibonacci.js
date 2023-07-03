const fibonacci = function(inputNumber) {
    let fiboArray = [1, 1];
    if (inputNumber < 0){
        return "OOPS";
    }
    else{
        if (inputNumber == 0 || inputNumber == 1){
            return fiboArray[inputNumber];
        }
        for (let i = 0; i < inputNumber-2; i++){
        newNumber = fiboArray[0] + fiboArray[1];
        fiboArray[0] = fiboArray[1];
        fiboArray[1] = newNumber;
    }
    return fiboArray[1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
