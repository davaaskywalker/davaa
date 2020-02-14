// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, 2-р тоглогчийг 1 гэж нэрлэе
var activePlayer = 1;



//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores= [
    0, 0
];



// Идэвхтэй тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;



//Шооны аль талаараа буусныг хадгалагч, 1-6 хүртэлх шоог аль талаараа буухыг хадгална.



//<div class="player-score" id="score-0">43</div>
// document.querySelector("#score-0").textContent= dice;

//<div class="player-score" id="score-1">43</div>
// document.querySelector("#score-1").textContent= dice;




//Програм эхлэхэд бэлтгэх

document.getElementById("score-0").textContent= 0;
document.getElementById("score-1").textContent= 0;

document.getElementById("current-0").textContent=0;
document.getElementById("current-1").textContent=0;

document.querySelector(".dice").style.display="none";


var diceDom = document.querySelector(".dice");
//Шоог шид

document.querySelector(".btn-roll").addEventListener("click", 
function (){
    var diceNumber = Math.floor(Math.random()*6)+1;
    diceDom.style.display="block";
    diceDom.src="dice-"+diceNumber+".png";
});

