class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    static countUsers(){
        console.log('There are 50 users');
    }
    
    register(){
        console.log(`${this.username} is now registered`)
    }
}

//let jim = new User('jim','jim@mail.com','12345');
//jim.register();
//
//User.countUsers();


class Member extends User{
    constructor(Username, email,password,memberPackage){
        super(Username,email,password);
        this.package = memberPackage;
    }
    getPackage(){
        console.log(this.username+' is scribed to the '+this.package+' package');
    }
}


let mike = new Member('mike','mike@mail.com','123','Standard');
mike.getPackage();
mike.register();