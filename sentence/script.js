let quest = document.getElementById('quest');
let choice = document.getElementsByClassName('choice');
let scoreEle = document.getElementById('score');
let dimond = document.getElementById("dimond");
let buyer = document.getElementById('buy');

let good = new Audio('../HelloTeacher/sounds/Interface.mp3') 
let veryGood= new Audio("../HelloTeacher/sounds/kids-clapping.mp3");
let bad = new Audio('../HelloTeacher/sounds/woo.mp3');

let musics = ['music1.mp3','music2.mp3','music3.mp3'];

let dir = './music/';
let buy = 0;

let question = [['<span style="color:blue">Ali</span> loves playing football', 'Addis Ababa','Dog','Bus','Ethiopia','Water','cold'],
 ['He','She','It', 'We', 'You','They','I','her','him','mine','me'],
 ['I want <span style="color:blue">Want</span> to drink a water.','Sleep','Kill','Dance','Speak','Sit','Has'],
 ['Quickly','Fast','Very','Always','Quite','Clearly','alittle'],['and','or','either','nor','also','for','yet','still']];

answers = ['Noun','Pronoun','Verb','Adverb','Conjuction'];
score = 0;
dimonds = 0;
scoreEle.innerHTML = score;
dimond.innerHTML = dimonds;
buyer.innerHTML = ': '+ buy;

function ask(){
    let ran = Math.floor(Math.random() *Math.min(
        question[0].length,
        question[1].length,
        question[2].length,
        question[3].length)
    );
    ans = Math.floor(Math.random() *answers.length);
    let que = question[ans][ran];
    quest.innerHTML = que;
    let ansChoice = [];
    ansChoice[0] = answers[ans];

    if(ans + 1 < answers.length ){
        ansChoice[1] = answers[ans+1];
    }

    else {
        ansChoice[1] = answers[ans - 3];
    }

    if (ans+2 <answers.length){
        ansChoice[2] = answers[ans + 2];
    }
    else {
        ansChoice[2] = answers[ans - 2];
    }

    if (ans+3 < answers.length){
        ansChoice[3] = answers[ans + 3];
    }
    else {
        ansChoice[3] = answers[ans - 1];
    }

    let rand = Math.floor(Math.random()*4);
    ans = rand;

    choice[rand].innerHTML = ansChoice[0];
    if (rand < 3){choice[rand+1].innerHTML = ansChoice[1];}
    else {choice[rand - 3].innerHTML = ansChoice[1];}
    if (rand < 2) {choice[rand + 2].innerHTML = ansChoice[2];}
    else {choice[rand - 2].innerHTML = ansChoice[2];}
    if (rand < 1) {choice[rand + 3].innerHTML = ansChoice[3];}
    else {choice[rand - 1].innerHTML = ansChoice[3];}
}

function check(n) {
    let win = false;
    if(n == ans) {
        good.play();
        score++;
        scoreEle.innerHTML = score;
        win = true;
        if (score == 10 || score == 20 || score == 30 || score == 40 || score == 50) {
            veryGood.play();
            dimonds++;
            dimond.innerHTML = dimonds;
        }
    }
    else {
        score--;
        scoreEle.innerHTML = score;
        bad.play();
    }
    if(win){
        ask();
    }
}

luck = Math.floor(Math.random() *musics.length);
music = new Audio(dir+musics[luck]);
function musicBuy() {
    if (dimonds > 1) {
        console.log('bought');
        dimonds-=2;
        dimond.innerHTML = dimonds;
        music.play();
        buy++;
        buyer.innerHTML = ': '+ buy;
    }
    
}


let back = document.getElementById('back');
let next = document.getElementById('next');

let parts = document.getElementsByClassName('partsContent');

n = 0;
parts[0].style.display= 'block';
next.addEventListener('click',()=>{
    if (n>=0 && n<8){
        
        parts[n].style.display= 'none';
                 
        if(n<7){
        parts[n+1].style.display= 'block';
        }
        if(n==7){
        parts[n].style.display = 'block';
        }
        n++;
    }
    
});

back.addEventListener('click',()=>{
    if(n>=1 && n<8){
    parts[n].style.display = 'none';
    parts[n-1].style.display = 'block';
    n--;}
    if(n==8){
        parts[7].style.display = 'none';
        parts[6].style.display = 'block';
        n = 6;
    }
});