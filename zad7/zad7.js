function isHappyNumber(x){
    let result = x;
    let numbers;
    let pastResults = [];

    while(result != 1) {
        numbers = result.toString().split('');
        result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result += numbers.at(i) * numbers.at(i);
        }
        if(pastResults.includes(result)) return false
        pastResults.push(result);
    }
    return true
}

console.log(isHappyNumber(19));
console.log(isHappyNumber(100));
console.log(isHappyNumber(4));
console.log(isHappyNumber(37));