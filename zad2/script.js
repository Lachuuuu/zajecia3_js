const addButton = document.getElementById("addButton");
const colorButton = document.getElementById("colorButton");
const element = document.getElementById("liczba");
let value = 0

function add(){
    document.getElementById("liczba").innerText = ++value;
}

function changeColor(){
    if(element.style.color != "red") element.style.color = "red";
    else element.style.color = "black";
}

addButton.addEventListener('click', () => add() );
colorButton.addEventListener('click',() => changeColor() );

