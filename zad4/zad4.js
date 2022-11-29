function sum(x){
    let result = 0;
    x.forEach((x) => result += x);
    return result;
}

console.log(sum([1,2,3,4]));