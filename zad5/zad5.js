let init0 = [0];
let init1 = [0,1];

function fibo(x){
    if(x == 1) return init0;
    else if(x == 2) return init1;
    else if(x > 2){
        let result = init1;
        while(result.length < x){
            result.push( result.at(-1)+result.at(-2) );
        }
        return result;
    }
}

console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(9));