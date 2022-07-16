let myImage = document.querySelector('img');
let myBody = document.querySelector('body');
let myMessage = document.getElementsByClassName('message');
let myBtn = document.getElementsByClassName('change');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sad-cat.jpeg'){
        myImage.setAttribute('src', 'images/sus-cat.jpeg');
        myBody.setAttribute('background-color', 'blue');
    } else {
        myImage.setAttribute('src', 'images/sad-cat.jpeg');
        myBody.setAttribute('background-color', 'purple');
    }
}

function setUserName(){
    let myName = prompt('enter your name:');
    myMessage.textContent = 'My name is ' + myName;
}

myBtn.onclick = setUserName();