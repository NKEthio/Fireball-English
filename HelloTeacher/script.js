const audioFiles=["./sounds/A.wav","./sounds/B.wav","./sounds/C.wav","./sounds/D.wav","./sounds/E.wav","./sounds/F.wav","./sounds/G.wav","./sounds/H.wav","./sounds/I.wav","./sounds/J.wav","./sounds/K.wav","./sounds/L.wav","./sounds/M.wav","./sounds/N.wav","./sounds/O.wav","./sounds/P.wav","./sounds/Q.wav","./sounds/R.wav","./sounds/S.wav","./sounds/T.wav","./sounds/U.wav","./sounds/V.wav","./sounds/W.wav","./sounds/X.wav","./sounds/Y.wav","./sounds/Z.wav","./sounds/Alphabet Song.m4a","./sounds/Interface.mp3","./sounds/woo.mp3","./sounds/One.m4a","./sounds/Two.m4a","./sounds/Three.m4a","./sounds/Four.m4a","./sounds/Five.m4a","./sounds/Six.m4a","./sounds/Seven.m4a","./sounds/Eight.m4a","./sounds/Nine.m4a","./sounds/Ten.m4a","../HelloTeacher/sounds/kids-clapping.mp3"],Audios=audioFiles.map(s=>new Audio(s));let quest=document.getElementById("quest"),scoreEle=document.getElementById("score"),choice=document.getElementsByClassName("choice"),veryGood=new Audio("../HelloTeacher/sounds/kids-clapping.mp3"),dir="../sentence/music/",buy=0,questions=[[[Audios[0],"A"],[Audios[1],"B"],[Audios[2],"C"],[Audios[3],"D"],[Audios[4],"E"],[Audios[5],"F"],[Audios[6],"G"],[Audios[7],"H"],[Audios[8],"I"],[Audios[9],"J"],[Audios[10],"K"],[Audios[11],"L"],[Audios[12],"M"],[Audios[13],"N"],[Audios[14],"O"],[Audios[15],"P"],[Audios[16],"Q"],[Audios[17],"R"],[Audios[18],"S"],[Audios[19],"T"],[Audios[20],"U"],[Audios[21],"V"],[Audios[22],"W"],[Audios[23],"X"],[Audios[24],"Y"],[Audios[25],"Z"]],[[Audios[0],"a"],[Audios[1],"b"],[Audios[2],"c"],[Audios[3],"d"],[Audios[4],"e"],[Audios[5],"f"],[Audios[6],"g"],[Audios[7],"h"],[Audios[8],"i"],[Audios[9],"j"],[Audios[10],"k"],[Audios[11],"l"],[Audios[12],"m"],[Audios[13],"n"],[Audios[14],"o"],[Audios[15],"p"],[Audios[16],"q"],[Audios[17],"r"],[Audios[18],"s"],[Audios[19],"t"],[Audios[20],"u"],[Audios[21],"v"],[Audios[22],"w"],[Audios[23],"x"],[Audios[24],"y"],[Audios[25],"z"]],[[Audios[29],"1"],[Audios[30],"2"],[Audios[31],"3"],[Audios[32],"4"],[Audios[33],"5"],[Audios[34],"6"],[Audios[35],"7"],[Audios[36],"8"],[Audios[37],"9"],[Audios[38],"10"]]],question=questions[Math.floor(Math.random()*questions.length)];function ask(){veryGood.pause();let s=Math.floor(Math.random()*question.length),o=question[s][0];ans=question[s][1];let u=[];o.play(),u[0]=ans,s+1<question.length?u[1]=question[s+1][1]:u[1]=question[s-3][1],s+2<question.length?u[2]=question[s+2][1]:u[2]=question[s-2][1],s+3<question.length?u[3]=question[s+3][1]:u[3]=question[s-1][1];let d=Math.floor(4*Math.random());choice[d].innerHTML=u[0],answer=d,d+1<4?choice[d+1].innerHTML=u[1]:choice[d-3].innerHTML=u[1],d+2<4?choice[d+2].innerHTML=u[2]:choice[d-2].innerHTML=u[2],d+3<4?choice[d+3].innerHTML=u[3]:choice[d-1].innerHTML=u[3]}function check(s){let o=!1;s==answer?(Audios[27].play(),function randomInRange(n,a){return Math.random()*(a-n)+n},confetti({angle:randomInRange(55,125),spread:randomInRange(50,70),particleCount:randomInRange(50,100),origin:{y:.6}}),score++,scoreEle.innerHTML=score,answer=-1,(10==score||20==score||30==score||40==score||50==score||60==score)&&Audios[39].play(),(20==score||40==score||60==score||80==score)&&musicBuy(),o=!0):(Audios[28].play(),o=!1),o&&ask()}function musicBuy(){let s=Math.floor(Math.random()*musics.length);new Audio(dir+musics[s]).play()}score=0,scoreEle.innerHTML=score;