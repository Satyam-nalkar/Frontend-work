// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var inp = document.querySelector("input");
// // var li = document.createElement('li');
// var ul = document.querySelector('ul');
// var li;

// add.addEventListener("click" , function(){
//     if(inp.value.trim() === ''){}
//     else{
//         var li = document.createElement('li');
//         li.textContent = inp.value;
//         // console.log(li);
//         ul.appendChild(li); 
//         inp.value = ""; 
//     }
// })

// remove.addEventListener("click" , function(){
//      ul.removeChild(li) ;  
// })




//question no 6

// var start = document.querySelector("#start");
// var stop = document.querySelector("#stop");
// var h3 = document.querySelector("h3");

// var int
// start.addEventListener("click" , function(){
// var count = 0;
//  int = setInterval(function(){
//    h3.textContent = count;
//     count++;
// },1000);
// });

// stop.addEventListener("click" , function(){
//     clearInterval(int);
// })


// var home = document.querySelector('#home');
// var about = document.querySelector('#about');
// var contact = document.querySelector('#contact');
  
// var hometext = document.querySelector('#hometext');
// var abouttext = document.querySelector('#abouttext');
// var contacttext = document.querySelector('#contacttext');
   

// hometext.style.display = "block";
// hometext.style.width = "50%";

// home.addEventListener("click",function(){
//     saretexthatao();
//     hometext.style.display = "block";
//     hometext.style.width = "50%";
// })
// about.addEventListener("click",function(){
//     saretexthatao();
//     abouttext.style.display = "block";
//     abouttext.style.width = "50%";
// })
// contact.addEventListener("click",function(){
//     saretexthatao(); 
//     contacttext.style.display = "block";
//     contacttext.style.width = "50%";
// })

// function saretexthatao(){
//     document.querySelectorAll("h3").forEach(function(ok){
//         ok.style.display = "none";
//     })
// }




// question no 7

// var prg = document.querySelector("#progress");
// var h3 = document.querySelector("h3");
// var count = 0;
// var int = setInterval(function(){
//   if(count === 100){
//     h3.style.opacity = 1; 
//     clearInterval(int);
//   }
//     count ++;
//     prg.style.width = count +'%';
// },100);


// question no 8


// var input = document.querySelector("input");

// var data = [
//     {name:"harsh" ,src:"https://media.istockphoto.com/id/692879918/photo/what-more-can-a-girl-ask-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=e7mkW_A4TTRtJhrzGEn3kpvA6JMyrcVpjqAPXgUG-UA="},
//     {name:"harshika" ,src:"https://media.istockphoto.com/id/930163632/photo/laughing-bearded-young-man-with-hat-and-smoker.webp?a=1&b=1&s=612x612&w=0&k=20&c=pwIHZsyp8Wh2UgcL546vtRw6hXMlQsFdsS4ZLzirQ30="},
//     {name:"harshita" ,src:"https://media.istockphoto.com/id/1205739566/photo/young-indian-man-wearing-orange-sweater-over-isolated-white-background-happy-face-smiling.webp?a=1&b=1&s=612x612&w=0&k=20&c=_Ob-24lRZaSZaOykwMU80LfaqG4TPJ5FogYIqYWlNT8="},
//     {name:"shyam" ,src:"https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"},
// ]


// var pers = "";
// data.forEach(function (elem){
//   pers += `<div class="person">
//                   <div class="img">    
//                     <img src="${elem.src}" alt="">
//                   </div> 
//                   <h4>${elem.name}</h4>                   
//                 </div>`;
// })

 
// document.querySelector(".people").innerHTML = pers; 
// input.addEventListener("input",function(){
//   var matching = data.filter(function(e){
//    return e.name.startsWith(input.value);
//   })
  
//   var newusers ="";   
//   matching.forEach(function (elem){
//   newusers += `<div class="person">
//                   <div class="img">    
//                     <img src="${elem.src}" alt="">
//                   </div> 
//                   <h4>${elem.name}</h4>                   
//                 </div>`;
// })
    
// document.querySelector(".people").innerHTML = newusers; 

// })




// question 9

var txtarea = document.querySelector("textarea");
var counter = document.querySelector("#counter");

txtarea.addEventListener("input",function(){
     counter.textContent = txtarea.value.length; 
})

