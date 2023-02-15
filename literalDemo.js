class literalDemo{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}
function printName(user){
    console.log(`name : ${this.name}`)
}