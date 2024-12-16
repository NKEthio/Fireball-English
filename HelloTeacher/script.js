const audioFiles = [
    './sounds/A.wav', './sounds/B.wav', './sounds/C.wav', './sounds/D.wav',
    './sounds/E.wav', './sounds/F.wav', './sounds/G.wav', './sounds/H.wav',
    './sounds/I.wav', './sounds/J.wav', './sounds/K.wav', './sounds/L.wav',
    './sounds/M.wav', './sounds/N.wav', './sounds/O.wav', './sounds/P.wav',
    './sounds/Q.wav', './sounds/R.wav', './sounds/S.wav', './sounds/T.wav',
    './sounds/U.wav', './sounds/V.wav', './sounds/W.wav', './sounds/X.wav',
    './sounds/Y.wav', './sounds/Z.wav',
    "./sounds/Alphabet Song.m4a",
    './sounds/Interface.mp3', './sounds/woo.mp3',
    "./sounds/One.m4a", "./sounds/Two.m4a", "./sounds/Three.m4a",
    "./sounds/Four.m4a", "./sounds/Five.m4a", "./sounds/Six.m4a",
    "./sounds/Seven.m4a", "./sounds/Eight.m4a", "./sounds/Nine.m4a",
    "./sounds/Ten.m4a","../HelloTeacher/sounds/kids-clapping.mp3"
];

const Audios = audioFiles.map(file => new Audio(file));

// ######################################################################################

let quest = document.getElementById('quest');
let scoreEle = document.getElementById('score');
let choice = document.getElementsByClassName('choice');


let veryGood= new Audio("../HelloTeacher/sounds/kids-clapping.mp3");

let dir = '../sentence/music/';
let buy = 0;
let questions = [
    [
        [Audios[0],'A'],[Audios[1],'B'],[Audios[2],'C'],[Audios[3],'D'],[Audios[4],'E'],[Audios[5],'F'],[Audios[6],'G'],[Audios[7],'H'],[Audios[8],'I'],[Audios[9],'J'],
        [Audios[10], 'K'],[Audios[11],'L'],[Audios[12],'M'],[Audios[13],'N'],[Audios[14],'O'],[Audios[15],'P'],[Audios[16],'Q'],[Audios[17],'R'],[Audios[18],'S'],[Audios[19],'T'],
        [Audios[20],'U'],[Audios[21],'V'],[Audios[22],'W'],[Audios[23],'X'],[Audios[24],'Y'],[Audios[25],'Z']
    ],
    [
        [Audios[0],'a'],[Audios[1],'b'],[Audios[2],'c'],[Audios[3],'d'],[Audios[4],'e'],[Audios[5],'f'],[Audios[6],'g'],[Audios[7],'h'],[Audios[8],'i'],[Audios[9],'j'],
        [Audios[10], 'k'],[Audios[11],'l'],[Audios[12],'m'],[Audios[13],'n'],[Audios[14],'o'],[Audios[15],'p'],[Audios[16],'q'],[Audios[17],'r'],[Audios[18],'s'],[Audios[19],'t'],
        [Audios[20],'u'],[Audios[21],'v'],[Audios[22],'w'],[Audios[23],'x'],[Audios[24],'y'],[Audios[25],'z']
    ],
    [
        [Audios[29], '1'], [Audios[30], '2'], [Audios[31], '3'], [Audios[32], '4'], 
        [Audios[33], '5'], [Audios[34], '6'], [Audios[35], '7'], [Audios[36], '8'], [Audios[37], '9'], [Audios[38], '10']
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
        Audios[27].play();
        score++;
        scoreEle.innerHTML = score;
        answer = -1;
        if (score == 10 || score == 20 || score == 30 || score == 40 || score == 50 || score == 60) {
            Audios[39].play();
        }
        if (score == 20 || score == 40 || score == 60 || score == 80){
            musicBuy();
        }
        win = true;
    }
    else {
        Audios[28].play();
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