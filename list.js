function newItem(){
    let item= document.createElement("input");
    item.setAttribute("placeholder", "item");
    list.appendChild(item);
    item.focus();
};
function removeItem(){
    let lastItemNum= items.length-1;
    items[lastItemNum].remove();
};
function pickOneItem(){
    if( items.length<2){
        return alert("Put almost 2 items");
    };
    for (const element of items) {
        if(element.value==""){
            return alert("There can´t be empty items");
        };
    };//Verify have items empty and almost 2 of this
    const numOfItems= items.length;
    let randomNum= Math.floor(Math.random()*numOfItems);
    p.innerHTML= items[randomNum].value;
};
function randomList(){
    let numOfItems= items.length
    let list=[];
    for (const element of items) {
        list.push(element.value);
    };//Save values
    while (newList.length !== numOfItems) {
        let randomIndex= Math.floor(Math.random()* list.length);
        newList.push(list[randomIndex]);
        list.splice(randomIndex, 1);//Pick an item, insert in newList and remove it form  list
    };
    p.innerHTML= newList.join("<br>");
    newList=[];
};
let newList=[];
const list= document.getElementById("list");
const p= document.getElementsByTagName("p")[0];
let items= document.getElementsByTagName("input");