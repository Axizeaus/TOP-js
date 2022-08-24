class Button {
    constructor(value){
        this.value = value;
    }
    click(){
        console.log(this.value);
    }
}

let button = new Button('btn');

console.log(button);

function test(whatever){
    for (let i = 0; i < 10; i++){
        console.log(whatever)
    }
    
}

test(button.click);

setTimeout(button.click, 1000);

class CoolerButton{
    constructor(val){
        this.val = val;
    }

    click = () =>{
        console.log(this.val);
    }
}

let btn = new CoolerButton('Mwah');
test(btn);
setTimeout(btn.click, 1000);