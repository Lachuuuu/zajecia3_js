function isOdd(x){
    return (x%2) == 1;
}

const isEven = x => (x % 2) == 0;
const isEven2 = x => !isOdd(x);

console.log(isOdd(2));
console.log(isOdd(3));
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven2(2));
console.log(isEven2(3));
