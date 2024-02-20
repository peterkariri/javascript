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
//reverse an array
    let names =["cars","vehicles","boots","shoes","shirts"] 
    

    const reverse =(name) => name.reverse()

    let newNames=reverse(names)

    console.log(newNames) 

    //reverse a string
    let sampleString="peter njuguna doing the magic"
    const reverseString=(words) => {
        let letterArray=words.split("")

        let reversed=letterArray.reverse()
        return reversed.join("");
    }

    let solution=reverseString(sampleString)
    console.log(`The Reversed String is ${solution}`)

    
/* longest word in  a string:write a function that takes a sentence as an argument and returns
the longest word in the sentence .you can use string methods such as split()and length
to accomplish this */
let sentence="this is a very fantabulous day to begin with on a weekend.it is fantabulous!"

function longestWord(sentence){
    let words = sentence.split(" ")//split sentence into  an array of words

    let longestWord="";// longest word variable null
     
    words.forEach(function(word){

        
        if(word.length > longestWord.length){
            longestWord=word;
        }
    }
    );
    return longestWord;
}
  console.log(`The Longest Word Is ${longestWord(sentence)}`);

      function cleanCode(word){
        if (word.endsWith(".")){
            word=word.slice(0,word.length-1)
        }
        if (word.endsWith("!")){
            word=word.slice(0,word.length-1)
        }
        if (word.startsWith("(")){
            word=word.slice(0,word.length-1)
        }
        if (word.endsWith(",")){
            word=word.slice(0)
        }
      }
       
    
    /* for(let i=0; i<word.length; i++){//looping through  array => length of each word compairing to longest array length
        let newWord=word[i]
        if(newWord> word.length){
            longestWord=newWord//if word is longer assign it as the new word
            maxLength=newWord.length
        }

    } */
/* 

    Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

function highestScoringWord(s) {
    function calculateScore(word) {
        return word.split('').reduce((score, char) => score + char.charCodeAt(0) - 'a'.charCodeAt(0) + 1, 0);
    }

    const words = s.split(' ');
    let maxScore = 0;
    let maxWord = '';

    words.forEach(word => {
        const currentScore = calculateScore(word);
        if (currentScore > maxScore || (currentScore === maxScore && s.indexOf(word) < s.indexOf(maxWord))) {
            maxScore = currentScore;
            maxWord = word;
        }
    });

    return maxWord;
}

// Example usage:
const inputString = "abad test coding zzzzera";
const result = highestScoringWord(inputString);
console.log(result);

  

