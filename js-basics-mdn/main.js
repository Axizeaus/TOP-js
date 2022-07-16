const hello = document.querySelector('div')
hello.textContent = "Hello there";

document.getElementById('btn1').addEventListener('click', (e)=>{
    document.querySelector('html').style.backgroundColor = `rgb(100,${e.clientX},${e.clientY})`;
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(`rgb(100,${e.clientX},${e.clientY})`);
})