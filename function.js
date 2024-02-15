//void function
function firstCode(){
       let age=100
       console.log(age/4);
}
//with stored arguments:could be an array ,string,function,bool
function getAge(yob){
    let age= 2024 - yob
    console.log("you are now" ," ", + age + " years old")
}
/* getAge(1990);
getAge(2003);
getAge(2001);

firstCode()
firstCode()
firstCode();
 */
function squareNumber(x,user){
   console.log("hello " + user);
    console.log("the square of " + x + " is " + x*x);
    //the return keyword is used to indicate the result of a functions operation.you need
    //to store the result in a varible for use of return
    return x*x
}
let result1=squareNumber(2,"peter");
let result2=squareNumber(98, "spectre");

console.log(result2);


