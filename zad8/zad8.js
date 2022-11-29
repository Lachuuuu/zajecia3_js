function anagram(a,b){
    if(a.length != b.length) return false;

    const aLetters = a.split('').sort();
    const bLetters = b.split('').sort();

    for(let i=0; i<aLetters.length; i++)
        if(aLetters.at(i) != bLetters.at(i)) return false;

    return true;
}

function anagram2(a,b){
    const aLetters = a.split('').sort().join();
    const bLetters = b.split('').sort().join();

    return aLetters === bLetters;
}


console.log(anagram("listen","silent"));
console.log(anagram("val1","val"));
console.log(anagram("val1","va1l"));
console.log(anagram("val1","va1b"));
console.log("");
console.log(anagram2("listen","silent"));
console.log(anagram2("val1","val"));
console.log(anagram2("val1","va1l"));
console.log(anagram2("val1","va1b"));