//Question 1

// var btn = document.querySelector("button")
// var p = document.querySelector("p");
// btn.addEventListener("click",function(){
//    p.textContent = "hey hello";
// }) 

//Question 2

 
// var img1 = document.querySelector("#one");
// var img2 = document.querySelector("#two");

// document.querySelector("button")
// .addEventListener("click",function(){
//     var src1= img1.src;
//     var src2= img2.src;

//     img1.src=src2;
//     img2.src=src1;

// });


//question 3
  
var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
// var inp1 = document.querySelector('#inp1');
// var inp2 = document.querySelector('#inp2');
var h4 = document.querySelector("h4");
form.addEventListener("submit" , function(ev){
    ev.preventDefault();
    // console.log(inp1.value,inp2.value);
    // if(inp1.value === '' || inp2.value ===''){
    // //    console.log("blank");
    // h4.textContent = "error ,some fields are blank,";
    // h4.style.color = "red";
    // }
    // else{
    //      h4.textContent = "";
        //  h4.style.color = "black";

//    inps.forEach(function(inp){
//     if(inp.value === ''){  
//         document.querySelector("h4").textContent = "Error..";
//         h4.style.color = "red"; 
//     }

//       else{
//         h4.textContent = '';
//         h4.style.color = "black";
//      }
//    });
  
  for(var i =0; i<inps.length; i++){
    if(inps[i].value === ''){
        h4.textContent = "error ,some fields are blank,";
        h4.style.color = "red";
        break;
    }
  }
     
})
