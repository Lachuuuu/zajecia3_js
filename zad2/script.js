const addButton = document.getElementById("addButton");
const colorButton = document.getElementById("colorButton");
const element = document.getElementById("liczba");

function add(){
    document.getElementById("liczba").innerText++;
}

function changeColor(){
    if(element.style.color != "red") element.style.color = "red";
    else element.style.color = "black";
}

addButton.addEventListener('click', () => add() );
colorButton.addEventListener('click',() => changeColor() );

