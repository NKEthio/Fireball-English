let A = new Audio('./sounds/A.wav');let B = new Audio('./sounds/B.wav');let C = new Audio('./sounds/C.wav');let D = new Audio('./sounds/D.wav');let E = new Audio('./sounds/E.wav');let F = new Audio('./sounds/F.wav');
let G = new Audio('./sounds/G.wav');let H = new Audio('./sounds/H.wav');let I = new Audio('./sounds/I.wav');let J = new Audio('./sounds/J.wav');let K = new Audio('./sounds/K.wav');let L = new Audio('./sounds/L.wav');
let M = new Audio('./sounds/M.wav');let N = new Audio('./sounds/N.wav');let O = new Audio('./sounds/O.wav');let P = new Audio('./sounds/P.wav');let Q = new Audio('./sounds/Q.wav');let R = new Audio('./sounds/R.wav');
let S = new Audio('./sounds/S.wav');let T = new Audio('./sounds/T.wav');let U = new Audio('./sounds/U.wav');let V = new Audio('./sounds/V.wav');let W = new Audio('./sounds/W.wav');let X = new Audio('./sounds/X.wav');
let Y = new Audio('./sounds/Y.wav');let Z = new Audio('./sounds/Z.wav');
let sing = new Audio("./sounds/Alphabet Song.m4a");
let musics = ['music1.mp3','music2.mp3','music3.mp3','music4.mp3','music5.mp3',
'music6.mp3','music7.mp3','music8.mp3','music9.mp3','music10.mp3','music11.mp3',
'music12.mp3','music13.mp3','music14.mp3','music15.mp3'];

let good = new Audio('./sounds/Interface.mp3');
let bad = new Audio('./sounds/woo.mp3');

let One = new Audio("./sounds/One.m4a");
let Two = new Audio("./sounds/Two.m4a");
let Three = new Audio("./sounds/Three.m4a");
let Four = new Audio("./sounds/Four.m4a");
let Five = new Audio("./sounds/Five.m4a");
let Six = new Audio("./sounds/Six.m4a");
let Seven = new Audio("./sounds/Seven.m4a");
let Eight = new Audio("./sounds/Eight.m4a");
let Nine = new Audio("./sounds/Nine.m4a");
let Ten = new Audio("./sounds/Ten.m4a");


// ######################################################################################

let quest = document.getElementById('quest');
let scoreEle = document.getElementById('score');
let choice = document.getElementsByClassName('choice');


let veryGood= new Audio("../HelloTeacher/sounds/kids-clapping.mp3");

let dir = '../sentence/music/';
let buy = 0;
let questions = [
    [
        [A,'A'],[B,'B'],[C,'C'],[D,'D'],[E,'E'],[F,'F'],[G,'G'],[H,'H'],[I,'I'],[J,'J'],
        [K, 'K'],[L,'L'],[M,'M'],[N,'N'],[O,'O'],[P,'P'],[Q,'Q'],[R,'R'],[S,'S'],[T,'T'],
        [U,'U'],[V,'V'],[W,'W'],[X,'X'],[Y,'Y'],[Z,'Z']
    ],
    [
    [A,'a'],[B,'b'],[C, 'c'], [D, 'd'], [E, 'e'], [F, 'f'],[G, 'g'], [H, 'h'],[I, 'i'],[J, 'j'],[K, 'k'],[L, 'l'],[M, 'm'],
    [N, 'n'], [O, 'o'], [P, 'p'], [Q, 'q'], [R, 'r'], [S, 's'], [T, 't'],[U, 'u'],[V, 'v'],[W, 'w'],[X, 'x'],[Y, 'y'],[Z, 'z']
    ],
    [
        [One, '1'], [Two, '2'], [Three, '3'], [Four, '4'], [Five, '5'], [Six, '6'], [Seven, '7'], [Eight, '8'], [Nine, '9'], [Ten, '10']
    ]];

let question = questions[Math.floor(Math.random()*questions.length)];
score = 0;
scoreEle.innerHTML = score;
function ask(){
    veryGood.pause();
    let ran = Math.floor(Math.random() * question.length);
    let que = question[ran][0];
    ans = question[ran][1];
    let choices= [];
    que.play();
    
    choices[0] = ans;
    if (ran+1 < question.length) {
        choices[1] = question[ran + 1][1];
    }
    else {
        choices[1]= question[ran - 3][1];
    }

    if (ran + 2 < question.length) {
        choices[2] = question[ran + 2][1];
    }
    else {
        choices[2] = question[ran - 2][1];
    }

    if (ran + 3 < question.length) {
        choices[3] = question[ran + 3][1];
    }
    else {
        choices[3] = question[ran - 1][1];
    }
    let rand = Math.floor(Math.random()*4);

    choice[rand].innerHTML = choices[0];
    answer = rand;
    if (rand + 1 < 4){choice[rand+1].innerHTML = choices[1];}
    else {choice[rand - 3].innerHTML = choices[1];}
    if (rand + 2 < 4) {choice[rand + 2].innerHTML = choices[2];}
    else {choice[rand - 2].innerHTML = choices[2];}
    if (rand + 3 < 4) {choice[rand + 3].innerHTML = choices[3];}
    else {choice[rand - 1].innerHTML = choices[3];}

    
}

function check(n) {
    let win = false;
    if(n == answer) {
        good.play();
        score++;
        scoreEle.innerHTML = score;
        answer = -1;
        if (score == 10 || score == 20 || score == 30 || score == 40 || score == 50 || score == 60) {
            veryGood.play();
        }
        if (score == 20 || score == 40 || score == 60 || score == 80){
            musicBuy();
        }
        win = true;
    }
    else {
        bad.play();
        win = false
    }

    if(win) {
        ask();
    }

}


function musicBuy() {
        let luck = Math.floor(Math.random() *musics.length);
        let music = new Audio(dir+musics[luck]);
        music.play();
}