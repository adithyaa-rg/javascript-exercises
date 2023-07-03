const palindromes = function (words) {
    modifiedString = '';
    for (let i = 0; i < words.length; i++){
        if (words[i].toUpperCase() != words[i].toLowerCase() || ['1','2','3','4','5','6','7','8','9','0'].includes(words[i]) ){
            modifiedString += words[i];
        }
    }
    console.log(modifiedString);
    if (modifiedString.toLowerCase() === modifiedString.toLowerCase().split("").reverse().join("")){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
