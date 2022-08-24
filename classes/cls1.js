let user = {
    username : 'John Doe',
    age : 32,

    get data(){
        return this.username + this.age
    },

    set name(newUserName){
        this.username = newUserName
    },

    set age(newAge){
        this.age = newAge
    }
}