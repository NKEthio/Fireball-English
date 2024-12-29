let som = document.getElementsByClassName('container');
let morning = new Audio('Good morning.m4a');
let afternoon = new Audio('Good afternoon.m4a');
let evening = new Audio('Good Evening.m4a');
let m ='';
window.addEventListener('load',()=>{
let d = new Date();
h = d.getHours();
if(h>=6 && h<12){
    // morning.play();
    console.log("Good Morning");
    m = 'morning'
}
else if (h>=12 && h<18){
    // afternoon.play();
    console.log('Good Afternoon');
    m = 'afternoon'
}
else if(h>=18){
    // evening.play();
    console.log("Good Evening");
    m = 'evening';
}
else {
    console.log("Welcome");
    m = 'welcome';
}
});

if(m == 'evening'){
    evening.play();
    console.log("Good Evening");
}