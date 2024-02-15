//given an array of numbers ,write a function that finds the max number in array 
    //an array of numbers

    function findMaximumNumber(array){
        if (!array && array.length===0){
            return null;
        }
    //use typeof array(elements)to check if elements in array is a number
        let maxNumber = array[0];

        for (let i=0; i<array.length; i++){
            if (array[i]>maxNumber){
                maxNumber=array[i];
            }
            
        }
        return maxNumber;

    }
    const numbers= [12,22,44,6,43,25,67,89,94,322];
    const maximumNumber= findMaximumNumber(numbers);
    console.log(maximumNumber);
 

     /* let numberArray = [12,22,44,6,43,25,67,98,100,73,37]
     function maxNumInArray(numbers) {
          for(index=0;index<array.length;index++) {
            let currentNumber=array[index];
            console.log(currentNumber);
          }
     }
     maxNumInArray() 
 */

    //given an array of strings ,write  a function that removes duplicate and returns a new array containing the unique string

    const strings=["Peter", "Njuguna", "Stephen","Albert","Emmanuel","Peter","Peter","Scott","Peter","Emmanuel"]

             function removeDuplicate(array){
             if(!array && array.length===0){
                return null;
             }
              let unique=[];
             for(let i=0;i<array.length;i++){
                let currName=array[i];
                if(!unique.includes(currName)){
                    unique.push(currName);
                }
                
                    
     
    
                
             }
             console.log(unique)
             return unique;
             
           }
          removeDuplicate(strings)       
//block and assynchronous c
    // reverse string:write a function that takes a string as an argument and returns the string reversed.(split,reverse)


    


    let names =["cars","vehicles","boots","shoes","shirts"] 

    const reverse = names.reverse(names)

    let newNames=reverse

    console.log(newNames) 
    
//longest word in  a string:write a function that takes a sentence as an argument and returns
//the longest word in the sentence .you can use string methods such as split()and length
//to accomplish this

