// console.log(this);



// function abcd(){
//     console.log(this);
// }
// abcd();

// // method - object

// var obj = {
//     name:function(){
//         console.log(this);
//     },
//     age:25,
//     email:"ajbghskac"
// }

// obj.name();


//fun inside method (es5) - window
// var obj2 = {
//     sayName:function(){
//         console.log(this.age);
//         function childfnc(){
//             console.log(this.age);
//         }        
//         childfnc();
//     },
//     age:25
// }
// obj2.sayName();


//Event Listener
// document.querySelector("button")
// .addEventListener("click",function(){
//     console.log(this);
// })



//call apply bind

//  const obj = {name: "harsh"}
//   function abcd(){ 
//     console.log(this);
//   }
//   abcd.call(obj)




//prototype Inheritance
// function makeHuman(name,age){
//     this.name = name;
//     this.age = age;
// }

// makeHuman.prototype.printMyName = function(){
//     console.log(this.name);
// }

// const human1 = new makeHuman("harsh" , 25);
// const human2 = new makeHuman("harsha" , 34);


//closures
// function abcd(){
//     var a =12;
//     return function(){
//         console.log(a);
//     }
// }
// var ans = abcd();
// ans(); 
  

// function timer(){
//     var a = 12;
//     return setTimeout(function(){
//         console.log(a);
//     },2000)
// }

// var ans = timer();


// Event deligation

// var parent = document.querySelector("#parent");
// parent.addEventListener("click",function(details){
//     if(details.target.id === "play"){
//         console.log("play song");
//         }
//     else if(details.target.id === "pause"){
//         console.log("pause song");
//     }
//     })
 

// Higher order function

//
// try catch

// function divide(a,b){
//     try{
//         if(b === 0){
//             throw Error("koi gadbad hai");
//         }
//         console.log(a/b);
//     }
//     catch(err){
//         console.error(err);
//     }
// }
// divide(12,0);

// const evt = new Event("chacha");
// document.querySelector("button")
// .addEventListener("chacha", function(){
//     alert("chacha event hua");
// })
// document.querySelector("button").dispatchEvent(evt)

