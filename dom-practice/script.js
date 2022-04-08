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
    // let output = document.getElementById('output');
    output.innerHTML = '<h2>' + e.target + '</h2>';

    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
}

let button = document.getElementById('button').addEventListener('click', doSomething);
let btn1 = document.getElementById('btn1').addEventListener('click', clickTester)
