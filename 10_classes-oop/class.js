class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptpassword(){
        return `${this.password}ABC`

    }
}
const chai=user("chai","chai@gmail.com",123)
console.log(chai.encryptpassword())