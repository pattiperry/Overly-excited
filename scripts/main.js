console.log("Welcome to the main module")


//Example:
function sayGoodMorning(){
    console.log("Good Morning")
}

sayGoodMorning()


// //this function will only print "hello,world"
// function addExcitement(){
//     console.log("hello, world")
// }

// addExcitement()





// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, symbol, times) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        // Print buildMeUp to the console
        // console.log(buildMeUp += ' ' + theWordArray[i])
        
        if ((i+1) % 3 === 0 ){
            console.log(buildMeUp += " " +theWordArray[i] + symbol)
        // } else {
        //     // buildMeUp += " " +theWordArray[i]
        // } 
                
        }
         if ((i+1)%3===0){
            for (let j=0; j<times; j++){
            buildMeUp+=symbol 
            }
        }
    
        
        console.log(buildMeUp += ' ' + theWordArray[i])
    }


// Invoke the function and pass in the array
addExcitement(sentence, "!")
