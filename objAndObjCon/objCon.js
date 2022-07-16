function Player(name, marker){
    this.name = name
    this.marker = marker
    this.toString = () =>{
        console.log ('name: ' + this.name + '\nmarker: ' + this.marker)
    }
}

const player = new Player('Steve', 'X')
console.log(player.toString())