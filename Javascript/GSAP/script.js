// gsap.to("#box",{
//     x:1000,
//     rotate:360,
//     backgroundColor:"blue",
//     duration:2,
//     delay:1
// }) 

// gsap.from("#box",{
//     x:1000,
//     rotate:360,
//     backgroundColor:"blue",
//     duration:2,
//     delay:1
// }) 
var t1 = gsap.timeline

t1.to("#box1",{
    x:1200,
    rotate:180,
    scale:0.5,
    duration:2,
    delay:1
})
  
t1.to("#box2",{
    x:1200,
    rotate:180,
    scale:0.5,
    duration:3,
    delay:1
})
 
t1.to("#box3",{
    x:1200,
    rotate:180,
    scale:0.5,
    duration:3,
    delay:1
})