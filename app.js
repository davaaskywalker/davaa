// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, 2-р тоглогчийг 1 гэж нэрлэе
var activePlayer = 1;



//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores= [
    0, 0
];



// Идэвхтэй тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;



//Шооны аль талаараа буусныг хадгалагч, 1-6 хүртэлх шоог аль талаараа буухыг хадгална.
var dice = Math.floor(Math.random()*6)+1;


//<div class="player-score" id="score-0">43</div>
// document.querySelector("#score-0").textContent= dice;

//<div class="player-score" id="score-1">43</div>
// document.querySelector("#score-1").textContent= dice;




//Програм эхлэхэд бэлтгэх
document.querySelector("#score-0").textContent= 0;
document.querySelector("#score-1").textContent= 0;

document.querySelector("#current-0").textContent=10;
document.querySelector("#current-1").textContent=5;

document.querySelector(".dice").style.display="none";

console.log("Шоо " + dice);



//Шоог шид

document.querySelector(".btn-roll").
