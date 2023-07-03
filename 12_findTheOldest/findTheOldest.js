const findTheOldest = function(people) {
    var Ages = [];
    for (let i = 0; i<people.length; i++){
        if (typeof people[i].yearOfDeath === 'undefined'){
            Ages[i] = 2023 - people[i].yearOfBirth;
        }
        else{
        Ages[i] = people[i].yearOfDeath - people[i].yearOfBirth;
    }
    }
    maxAge = Ages[0];
    for (let i = 0; i<people.length; i++){
        if (Ages[i] > maxAge){
            maxAge = Ages[i];
        }
    }
    for (let i = 0; i<people.length; i++){
        if (Ages[i] == maxAge){
            return people[i]
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
