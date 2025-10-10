// var a = 12;
// var b = 22;


//console alert prompt = parts of browser
// console.log
//console.log("hello");

// console.warn
//console.warn("harsh sharma");

// console.error
//console.error("harsh sharma");

// alert("hello")


// prompt("hello");



//  var a = 12;
//  var b = 22;

// var discont = 10;
// discount = 22;

// const discount = 12; 
//not changeble
 

// Window
//there are many features which are frequently used in js and they are not the part of js, they are not the part of js the language but they are available in the browser when use them in js they called from the browser and not js


//Data types
//harsh = string
//12 = integer
//"we234dfej" = string

//12,14.3 , harsh, true,a ,null, undefined - primitive dt
//[] () {} -reference dt

// var a = 12;
// var b = a;

// var arr = [1,2,3,4,5,6];
// var b =arr;

// b.pop(); 


//spread operator

// var ar = [12,13,14,15];
// var ba = [... ar];

// conditionals = if, else, else-if ternary oprator switch case

//
/*var age = 18;
if(age >= 18){
    
}*/


//truthy and falsy values
//falsy
//null undefined NaN 0 "" '' document.all false
//other are truthy ex., "hello",true,12,45
   
/*if(12 > 13){
    console.log("hey");
}
else {
    console.log("hello");
} */


// loops
 
//for while do-while foreach forin forof
//for, while ,foreach

/*for(var num = 5;num < 10; num++){
    console.log(num);
}*/
     

//while
/*start;
while(end){
  change;
}*/
 
/*var i = 1;
while(i<=10){
   i++;  
   console.log(i);
}*/

/*var i = 12;
while(i>0){
    i--;
    console.log(i);
}*/


//function
//es5 and es6  

//what is fun -> the part of code whilch is often used in program.

/*function abcd(){ 
console.log("hello bhai");
console.log("hello friends");  
}
abcd();*/


/*var dateofbirth = 7;
var todaysdate = 7
function happybirthday() {
    console.log("Happy Birthday!");
}

if(dateofbirth === todaysdate){
    happybirthday();
} */


// how to use 
// function abcd(){your code}


//parameter and arguments
/*function abcd(val){ //param
   console.log(12 + val);
}
abcd(12);//arguments */


/*function abcd(){
     // function statement
}

var abcd = function(){
    //function expression
}

function(){
   // anonymous function
}*/

// fat arrow
/*var a = ()=>{}; 
var b = ()=>{};//basic fat arrow */

/*var g = ab =>{}
g(12)*/


//var abcd = () => "harsh";
    


//return
/*function abcd(){
    return ;
}
// var ans = abcd();
console.log(abcd());  */


//implicit return
/* var a = () => 12;
var b = a(); */

//fat arrow
/* var a = ()=>{
    return 12;
}
var b = a(); */

//undefinrd is a value
//not defined is an error


//null is also a value
//this is a value which resolve like , not found
//null is recieved when something is not found


//Arrays
//when you want to store one or many elements collect together.
//square brackets

/*var users = ["harsh","harshika","harshita","akanksha","nishi"]; 
console.log(users[2]); */

//we can mix
//var arr = [1,2,"3",function(){},[],4];

//a lot of times in the shape of more than number ,to contain all data altogether, save it in an array


//loop with array
//var arr = [1,2,3,4,5];

//how to loop an array
/*arr.forEach(function(val){
    console.log(val);
}) */


/*arr.forEach(function(val){
    console.log(val+1)
})*/



//objects
 
/*var obj = {};
var obj2 = new Object(); */

/*var obj = {
   name:"harsh",
   age:25,
   email:"abc@abc.com",
   contact:123456789
}; */


/*var battery = {
    company: "canon",
    price:1200,
    for:"camera",
    isWorking:true
}     

battery.for */



//Synchronous and Asynchronous

//synchronous madhe code line by line chalto async code line by line madhe nahi chalat sara async code sobat suru kela jato jo lavkar sampel tyach ans dil jat. 

 

//this call apply bind
//this keyword js madhe one of the most suspenseful keyword
//this chi value vegveglyathikani vegvegli aste.

//global  - window
/*console.log(this);
not in any func and other so it is in global scope */


//function - window
/*function abcd(){
    console.log(this);
}
 abcd(); */


 //method  - object
/*var obj = {
    name: function(){
        console.log(this);
    },
    age:25,
    email:"abcdefg"
}
obj.name(); */


//fun inside method (es5) - window
/*var obj2 = {
    sayName:function(){
        console.log(this.age);
        function childfun(){
            console.log(this.age);
        }
        childfun();
    },
    age: 25
}
obj2.sayName(); */



//fun inside method (es6)  - object


//constructor fun madhe this chi value - new blank object
//event listener madhe this chi value - that element jyavar event listener lagla ahe
