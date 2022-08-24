let user = {
    get name(){
        return this._name
    },

    set name(value){
        if (value.length < 4){
            console.log('name is too short, need at least 4 char');
            return;
        }
        this._name = value
    }
}

user.name = 'Pete';
console.log(user.name);
user.name = 'Ye';
console.log(user.name);