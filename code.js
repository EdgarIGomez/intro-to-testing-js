// helloWorld function 
function helloWorld() {
   return "Hello, World!";
}
function sayHello(name) {
   if (typeof name == "string"){
     return "Hello, " + name + "!"
   } else {
   return "Hello, World!"
   }
}
function isFive(number){
   return parseInt(number) === 5
}
function isEven(num){
   return parseInt(num) % 2 === 0
}
function isVowel(letter) {
   if((typeof letter) == "string"){
      return (letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i"
          || letter.toLowerCase() === "o" || letter.toLowerCase() === "u")
   } else {
      return false
   }
}



/*function double(num) {
   return num * 2
}*/
