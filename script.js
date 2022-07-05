var hero = document.querySelector(".hero");
var work = document.querySelector("#workNav");
var play = document.querySelector("#playNav");
var code = document.querySelector("#codeNav");
var hobbyDesc = document.querySelector(".hobby-description");
var hobbyPara = document.querySelector("#hobby-para");

//dynamically change bg 
//WORK
work.addEventListener('mouseover', function() {
  hero.style.backgroundColor = "var(--bg2)";
})
work.addEventListener('mouseout', function() {
  hero.style.backgroundColor = "var(--bg1)";
})
//PLAY
play.addEventListener('mouseover', function() {
  hero.style.backgroundColor = "var(--bg3)";
})
play.addEventListener('mouseout', function() {
  hero.style.backgroundColor = "var(--bg1)";
})
code.addEventListener('mouseover', function() {
  hero.style.backgroundColor = "var(--bg4)";
})
code.addEventListener('mouseout', function() {
  hero.style.backgroundColor = "var(--bg1)";
})

//hover to see hobby description 
hobbyPara.addEventListener('mouseover', function() {
  hobbyPara.innerHTML = "i love dogs and coffee. in my free time you can find me reading a novel, dancing in the rain or watching conspiracy theory documentaries!";
})