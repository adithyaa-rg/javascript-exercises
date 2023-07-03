const repeatString = function(name, num) {
    let repeatStr = ''
    if (num < 0){
        return 'ERROR';
    }
    else{
        let i = 0;
        while (i < num){
            repeatStr += name;
            i+=1;
        }
        return repeatStr;
    }
};
// Do not edit below this line
module.exports = repeatString;
