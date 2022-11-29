function palindrom(word){
    let length = word.length/2 + 1
    for(let i=0; i<length; i++){
        if(word.at(i) != word.at(-i-1)) return false;
    }
    return true;
}

console.log(palindrom("aabb"));
console.log(palindrom("aba"));
console.log(palindrom("abba"));
console.log(palindrom("abbaa"));