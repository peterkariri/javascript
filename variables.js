//variables are a way for our programmes to store data needed to run effectively 
//there are three ways to store variables usig var,const and let with an assignment operator


let userName ="peter njuguna"

var age=30

const height=185
const units="cm"

console.log(userName+ " "+ "is" + " "+ height+ units+" tall")
//let ad const were introduced to solve the bug problem in ecs(6)
//they are block scope (only access their values in the blocks they have been assigned)
{
    var varone=50;
    let vartwo=90;
    const varthree=40;
}
console.log(varone+ "units");
console.log(vartwo+ "units");
