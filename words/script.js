let quest = document.getElementById('quest');
let scoreEle = document.getElementById('score');
let dimond = document.getElementById('dimond');
let choice = document.getElementsByClassName('choice');

// let Cat = new Audio(); let Cock = new Audio(); let Cow = new Audio(); let Dog = new Audio(); let Eggs = new Audio(); let Goat = new Audio(); let Hen = new Audio(); let Pig = new Audio(); let Sheep = new Audio();

// let Lion = new Audio(); let Rabbit = new Audio(); let Rat = new Audio();

// let Broccoli = new Audio(); let Cabbage = new Audio(); let Garlic = new Audio(); let Mushroom = new Audio(); let Onion = new Audio(); let Potato = new Audio(); let Sweetpotato= new Audio();

// let Apple = new Audio();let Avocado = new Audio();let Beans = new Audio();let Carrot = new Audio();let Cherry = new Audio();let Cucumber = new Audio();
// let Grapes = new Audio();let Orange = new Audio();let Lemon = new Audio();let Mango = new Audio();let Nectarine = new Audio();

// let Breed = new Audio();let Butter = new Audio();let Cheese = new Audio();let Pizza = new Audio();let Sandwich = new Audio();

// let  = new Audio();let  = new Audio();let  = new Audio();let  = new Audio();let  = new Audio();

let good = new Audio('../HelloTeacher/sounds/Interface.mp3');
let veryGood= new Audio("../HelloTeacher/sounds/kids-clapping.mp3");
let bad = new Audio('../HelloTeacher/sounds/woo.mp3');

let musics = ['music.mp3'];

let dir = '../sentence/music/';
let domdir = '<img src="./image/Domestic/';
let wildir = '<img src="./image/Wild/';
let vegedir = '<img src="./image/Vegetables/';
let frudir = '<img src="./image/Fruit/';
let foodir = '<img src="./image/Food/';
let homdir = '<img src="./image/Home/';
let clodir = '<img src="./image/Cloth/';
let seadir = '<img src="./image/Time/';
let coldir = '<img src="./image/Color/';

let JPG = '.JPG">';
let jpg = '.jpg">'

let questions = [
    [
        ['Cat',domdir+"cat"+jpg],
        ['Cock',domdir+"Cock"+jpg],
        ['Cow',domdir+"Cow"+JPG],
        ['Dog',domdir+"dog"+JPG],
        ['Eggs',domdir+"Eggs"+jpg],
        ['Goat',domdir+"Goat"+JPG],
        ['Hen',domdir+"Hen"+JPG],
        ['Pig',domdir+"Pig"+JPG],
        ['Sheep',domdir+"Sheep"+JPG]
    ],
    [
        ["Lion", wildir+"Lion"+JPG],
        ["Rabbit", wildir+"Rabbit"+JPG],
        ["Rabbit", wildir+"Rabbit"+JPG],
        ["Rat", wildir+"Rat"+JPG]
    ],
    [
        ["Broccoli",vegedir+"Broccoli"+jpg],
        ["Cabbage",vegedir+"Cabbage"+jpg],
        ["Garlic",vegedir+"Garlic"+jpg],
        ["Mushroom",vegedir+"Mushroom"+jpg],
        ["Onion",vegedir+"Onion"+jpg],
        ["Potato",vegedir+"Potato"+jpg],
        ["Sweet potato",vegedir+"Sweet potato"+jpg]
    ],
    [
        ["Apple", frudir+"Apple"+jpg],
        ["Avocado", frudir+"Avocado"+jpg],
        ["Beans", frudir+"Beans"+jpg],
        ["Carrot", frudir+"Carrot"+jpg],
        ["Cherry", frudir+"Cherry"+jpg],
        ["Cucumber", frudir+"Cucumber"+jpg],
        ["Grapes", frudir+"Grapes"+jpg],
        ["Orange", frudir+"Orange"+jpg],
        ["Lemon", frudir+"Lemon"+jpg],
        ["Mango", frudir+"Mango"+jpg],
        ["Nectarine", frudir+"Nectarine"+jpg],
        ["Watermelon", frudir+"Watermelon"+jpg]
    ],
    [
        ["Bread", foodir+"Bread"+jpg],
        ["Butter", foodir+"Butter"+jpg],
        ["Cheese", foodir+"Cheese"+jpg],
        ["Pizza", foodir+"Pizza"+jpg],
        ["Sandwich", foodir+"Sandwich"+jpg]
    ],
    [
        ["Belt", clodir + "Belt" + JPG],
        ["Cap", clodir + "Cap" + JPG],
        ["Dress", clodir + "Dress" + JPG],
        ["Hat", clodir + "Hat" + JPG],
        ["Jacket", clodir + "Jacket" + JPG],
        ["Shirt", clodir + "Shirt" + JPG],
        ["Shoes", clodir + "Shoes" + JPG],
        ["Shorts", clodir + "Shorts" + JPG],
        ["Socks", clodir + "Socks" + JPG],
        ["Sweater", clodir + "Sweater" + JPG]
    ],
    [
        ["Bed", homdir+"Bed"+JPG],
        ["Bedroom", homdir+"Bedroom"+JPG],
        ["Bench", homdir+"Bench"+JPG],
        ["Capboard", homdir+"CapBord"+JPG],
        ["Cup", homdir+"Cup"+JPG],
        ["Fork", homdir+"Fork"+JPG],
        ["Stair", homdir+"Stair"+JPG],
        ["Umbrella", homdir+"Umbrella"+JPG],
        ["Lamp", homdir+"Lamp"+JPG],
        ["Plate", homdir+"Plate"+JPG],
        ["Pot", homdir+"Pot"+JPG],
        ["Roof", homdir+"Roof"+JPG],
        ["Wall", homdir+"Wall"+JPG],
        ["Washroom", homdir+"Washroom"+JPG],
        ["Window", homdir+"Window"+JPG]
    ],
    [
        ["white", coldir+"white"+JPG],
        ["black", coldir+"black"+JPG],
        ["green", coldir+"green"+JPG],
        ["yellow", coldir+"yellow"+JPG],
        ["red", coldir+"red"+JPG],
        ["blue", coldir+"blue"+JPG],
        ["orange", coldir+"orange"+JPG]
    ],
    [
        ["Monday","ሰኞ"],
        ["Tuesday","ማክሰኞ"],
        ["Wednesday","ረቡዕ"],
        ["Thursday","ሀሙስ"],
        ["Friday","አርብ"],
        ["Saturday","ቅዳሜ"],
        ["Sunday","እሁድ"]
    ],
    [
        ["January","ጥር"],
        ["February","የካቲት"],
        ["March","መጋቢት"],
        ["April","ሚያዚያ"],
        ["May","ግንቦት"],
        ["June","ሰኔ"],
        ["July","ሃምሌ"],
        ["Auguest","ነሃሴ"],
        ["September","መስከረም"],
        ["October","ጥቅምት"],
        ["Novermber","ህዳር"],
        ["December","ታህሳስ"]
    ],
    [
        ["Autumn", seadir + "Fall" + '.jpeg">'],
        ["Spring", seadir + "Spring" + '.jpeg">'],
        ["Winter", seadir + "Summer" + '.jpeg">'],
        ["Summer", seadir + "Winter" + '.jpeg">']
    ]
];
let question= questions[Math.floor(Math.random()*questions.length)];

score = 0;
dimonds = 0;
stars = [];
scoreEle.innerHTML = score;
dimond.innerHTML = '';
function ask(){
    let ran = Math.floor(Math.random() * question.length);

    let que = question[ran][0];
    ans = question[ran][1];
    let choices= [];
    quest.innerHTML = que;
    
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
        win = true;
        if (score == 10 || score == 20 || score == 30 || score == 40 || score == 50) {
            veryGood.play();
            dimonds++;
            stars.push('<img src="./image/Other/Star.JPG" alt="O">');
            dimond.innerHTML += '<img src="./image/Other/Star.JPG" alt="O">';
            
        }
        
    }
    else {
        bad.play();
        win = false;
    }

    if(win) {
        ask();
    }
}

function musicBuy() {
    if (dimonds > 1) {
        dimonds-=2;
        stars.pop();
        stars.pop();
        dimond.innerHTML = '';
        for(let mal of stars){
            dimond.innerHTML += mal;
        }
        let luck = Math.floor(Math.random() *musics.length);
        let music = new Audio(dir+musics[luck]);
        music.play();
    }
    else {
        alert('You need at least 2 stars');
    }
}



let missing = document.getElementById('missing');
let start = document.getElementById('start');

let missed = document.getElementsByClassName('missed');
let mischoice = document.getElementsByClassName('mischoice');
let mischecker = document.getElementsByClassName('mischecker');

let space = '<input type="text" class="mischoice" maxlength="1">';
let missedAns = '<span class="mischecker"></span>';

let missingQuestions = [
    [
        ['a','C'+space+'t'+missedAns],
        ['c','Co'+space+'k'+missedAns],
        ['w','Co'+space+missedAns],
        ['o','D'+space+'g'+missedAns],
        ['g','E'+space+'g'+missedAns],
        ['o','G'+space+'at'+missedAns],
        ['e','H'+space+'n'+missedAns],
        ['g','Pi'+space+missedAns],
        ['e','S'+space+'ep'+missedAns]
    ],
    [
        ['p','A'+space+'ple'+missedAns],
        ['e',"B"+space+'ans'+missedAns],
        ['r',"Car"+space+'ot'+missedAns],
        ['h',"C"+space+"erry"+missedAns]
    ],
    [
        ['r','B'+space+'occoli'+missedAns],
        ['b','Cab'+space+'aged'+missedAns],
        ['r','Ga'+space+'lic'+missedAns],
        ['u','M'+space+'shroom'+missedAns],
        ['i','On'+space+'on'+missedAns]
    ],
    [
        ['r','B'+space+'ead'+missedAns],
        ['t','Bu'+space+'ter'+missedAns],
        ['e','Che'+space+'se'+missedAns],
        ['d','San'+space+'wich'+missedAns]
    ],
    [
        ["M",space+"onday"+missedAns],
        ['u',"T"+space+"esday"+missedAns],
        ['d',"We"+space+"nesday"+missedAns],
        ['h',"T"+space+"ursday"+missedAns]
    ]
];
let lists = [];
let answermis = [];

let right = '<img src="./image/Other/Right.JPG">';
let wrong = '<img src="./image/Other/Wrong.JPG">';

function askmissed(){
    let misQuestion = missingQuestions[Math.floor(Math.random()*missingQuestions.length)];
    let ran = Math.floor(Math.random() * misQuestion.length);

    answermis[0] = misQuestion[ran][0];
    
    lists[0] = misQuestion[ran][1];
    if (ran+1 < misQuestion.length) {
        lists[1] = misQuestion[ran + 1][1];
        answermis[1] = misQuestion[ran + 1][0];
    }
    else {
        lists[1]= misQuestion[ran - 3][1];
        answermis[1]= misQuestion[ran -1][0];
    }

    if (ran + 2 < misQuestion.length) {
        lists[2] = misQuestion[ran + 2][1];
        answermis[2]=misQuestion[ran + 2][0];
    }
    else {
        lists[2] = misQuestion[ran - 2][1];
        answermis[2] = misQuestion[ran-2][0];
    }

    if (ran + 3 < misQuestion.length) {
        lists[3] = misQuestion[ran + 3][1];
        answermis[3] = misQuestion[ran + 3][0];
    }
    else {
        lists[3] = misQuestion[ran - 1][1];
        answermis[3] = misQuestion[ran - 1][0];
    }

    missed[0].innerHTML = lists[0];
    missed[1].innerHTML = lists[1];
    missed[2].innerHTML = lists[2];
    missed[3].innerHTML = lists[3];
}


function checkmis(){
    if (answermis[0]==(mischoice[0].value).toLowerCase() || answermis[0]==(mischoice[0].value).toUpperCase()) {
        mischecker[0].innerHTML = right;
    }
    else {
        mischecker[0].innerHTML = wrong;
    }
    if (answermis[1]==(mischoice[1].value).toLowerCase() || answermis[1]==(mischoice[1].value).toUpperCase()) {
        mischecker[1].innerHTML = right;
    }
    else {
        mischecker[1].innerHTML = wrong;
    }
    if (answermis[2]==(mischoice[2].value).toLowerCase() || answermis[2]==(mischoice[2].value).toUpperCase()) {
        mischecker[2].innerHTML = right;
    }
    else {
        mischecker[2].innerHTML = wrong;
    }
    if (answermis[3]==(mischoice[3].value).toLowerCase() || answermis[3]==(mischoice[3].value).toUpperCase()) {
        mischecker[3].innerHTML = right;
    }
    else {
        mischecker[3].innerHTML = wrong;
    }
}

// ################################################################

let menu = document.getElementById('menu');
let tobe = document.getElementsByClassName('tobe');
let s0s = 1;
tobe[0].style.display = 'none';
menu.addEventListener('click',()=>{
    s0s++;
    if(s0s % 2 ==0){
        tobe[0].style.display = 'block';
    }
    else{
        tobe[0].style.display = 'none';
    }
});


