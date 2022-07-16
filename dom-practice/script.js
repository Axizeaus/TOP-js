function doSomething(){
    document.getElementById('button').textContent = 'changed';
    document.getElementById('button').style.width = '100px';
    document.getElementById('button').style.backgroundColor = 'green';
}

function clickTester(e){
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.altKey);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    
    output.innerHTML = '<h2>' + e.target + '</h2>';

    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
}

let button = document.getElementById('button').addEventListener('click', doSomething);
let btn1 = document.getElementById('btn1').addEventListener('click', clickTester)

function runEvent(e){
    e.preventDefault();
    console.log("event type: " + e.type);
    // output.innerHTML = '<h1> mouseX:' + e.offsetX + '</h1><h1> mouseY:' + e.offsetY + '</h1>';
    // //box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + "," + 50;
    // document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + "," + 50;
    console.log(e.target.value);
}

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');


// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent); 
// itemInput.addEventListener('focus', runEvent); 
// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('cut', runEvent); 
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);
form.addEventListener('submit', runEvent);

// let btn2 = document.getElementById('btn2');

// // btn2.addEventListener('click', runEvent);
// // btn2.addEventListener('dblclick', runEvent);
// // btn2.addEventListener('mouseup', runEvent);

// let output = document.getElementById('output');
// let box = document.getElementById('box');
// // box.addEventListener('mouseenter', runEvent);
// // box.addEventListener('mouseleave', runEvent);
// // box.addEventListener('mouseover', runEvent);
// // box.addEventListener('mouseout',runEvent);
// box.addEventListener('mousemove', runEvent);