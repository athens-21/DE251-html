//DOM Manipulation
//const title = document.querySelector('#main-heading');

//title.style.color = 'red';

//console.log(title);

//const listItem = document.querySelectorAll('.list-item');
//for (let i = 0; i < listItem.length; i++){
 //   listItem[i].style.fontSize = '2rem';
//}

// creating element

//const ul = document.querySelector('ul');
//const li = document.createElement('li');
//adding element
//ul.append(li)

// modifying the text

//li.innerText = 'Hello';

// Modifying Attributes amd classes

//li.classList.add('list-item');

//console.log(li.classList.contents('list-item'));

//remove Elements
//li.remove();

//Parent Node Traversal
// let ul = document.querySelector(' ul');

// ul.childNodes[1].style.backgroundColor = 'pink';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);


//child node Traversal

//Sibling node Traversal

//Mouse Over
// const newBackgroundColor =  document.querySelector('ul');

 //function changeBgColor(){
 //   newBackgroundColor.style.backgroundColor = 'bule';
 //};

 //newBackgroundColor.addEventListener("mouseover", changeBgColor);

 //reveal event

 //const revealBtn = document.querySelector('.reveal-btn');

 //const hiddenContent = document.querySelector('.hidden-content');

 //function reveal(params) {
    
//  }

//event probagation
window.addEventListener("click",function() {
    console.log('Window');
},false);

document.addEventListener("click",function() {
    console.log('Document');
},false);

document.querySelector(".div2").addEventListener("click", function(){
    console.log('DIV 2');
},false);

document.querySelector(".div1").addEventListener("click", function(){
    console.log('DIV 1');
},false);

document.querySelector("button").addEventListener("click", function(e){
    console.log(e.target.innerText = 'clicked!');
},false);