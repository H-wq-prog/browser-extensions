let input =document.querySelectorAll('.switch input[type="checkbox"]');
let all = document.getElementById('all');
let active = document.getElementById('active');
let inactive = document.getElementById('inactive');
let card = document.querySelectorAll('.icone-card');
let but = document.getElementById('butt');
let cont = document.getElementById('cont');
let img = document.getElementById('mg-icon');
let title =document.getElementById('log');
let bare =document.getElementById('bare');
let bartext =document.getElementById('bar-text');
let mysun = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
let mymoon = "linear-gradient(180deg, #040918 0%, #091540 100%)";
let darkColor="#09153e";
let liteColor="#fbfdfeff";


input.forEach(function(chack){
    chack.addEventListener('change',function(){

        let slider = this.nextElementSibling; 
        if(this.checked){
          slider.style.backgroundColor=" hsl(3, 71%, 56%)";

        }else{
          slider.style.backgroundColor="  hsl(225, 23%, 24%)";

        }
    })

})

all.onclick=function(){
  card.forEach(card => {
    card.style.display='block';
  })
}

active.onclick = showActive;

function showActive() {
  card.forEach(card => {
    // التحقق مما إذا كان المؤشر داخل البطاقة في حالة "checked"
    let checkbox = card.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function showInactive() {
  card.forEach(card => {
    // التحقق مما إذا كان المؤشر داخل البطاقة في حالة "checked"
    let checkbox = card.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      card.style.display = 'none';
    } else {
      card.style.display = 'block';
    }
  });
}

inactive.onclick = showInactive;

let isDarkMode  = false;


but.addEventListener('click', function() {
  if (isDarkMode) {
cont.style.backgroundImage = mysun;

    img.src = "images/icon-moon.svg"; 
    title.style.color=darkColor;
    bare.style.backgroundColor=liteColor;
    but.style.backgroundColor='#d6e2f5';
    all.style.color=darkColor
    all.style.backgroundColor=liteColor;
    active.style.color=darkColor
    active.style.backgroundColor=liteColor;
    inactive.style.color=darkColor
    inactive.style.backgroundColor=liteColor;
    bartext.style.color=darkColor;
    
    isDarkMode = false;
  } else {
    // إذا كان الوضع نهاري، حوله إلى ليلي
cont.style.backgroundImage = mymoon;
    img.src = "images/icon-sun.svg"; // مسار أيقونة القمر
    title.style.color=liteColor;
    bare.style.backgroundColor="#212636";
    but.style.backgroundColor="#2f364b";
    all.style.color=liteColor;
    all.style.backgroundColor="#212636";
    active.style.color=liteColor;
    active.style.backgroundColor="#212636";
    inactive.style.color=liteColor;
    inactive.style.backgroundColor="#212636";
    bartext.style.color=liteColor;

    isDarkMode = true;
  }
});