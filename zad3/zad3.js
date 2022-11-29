function range(a,b){
    let array = [];
    while(a <= b){
        array.push(a++);
    }
    return array;
}

console.log(range(1,4));