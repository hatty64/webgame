var point = 0

var ball = document.getElementById("ball")

var number = document.getElementById("number")

var click_sound = new Audio('./audio/click.mp3')

var times_two = document.getElementById("times_two")

var times_ten = document.getElementById("times_ten")

var times_twenty = document.getElementById("times_twenty")

var times_thirty = document.getElementById("times_thirty")

var times_fifty = document.getElementById("times_fifty")

var times_eighty = document.getElementById("times_eighty")

var auto_click_five = document.getElementById("auto_click_five")

var auto_click_ten = document.getElementById("auto_click_ten")

var auto_click_twenty = document.getElementById("auto_click_twenty")

var auto_click_thirty = document.getElementById("auto_click_thirty")

var auto_click_fifty = document.getElementById("auto_click_fifty")

var auto_click_eighty = document.getElementById("auto_click_eighty")

var bronze = document.getElementById("bronze")

var silver = document.getElementById("silver")

var gold = document.getElementById("gold")

var clicks = 0

var ninety_medal = document.getElementById("ninety_medal")

var timer = setInterval(() => {
    clicks = 0
    console.log('reset')
}, 60000);



function clicked() 
{ 
    clicks++
    console.log(clicks)
    if (clicks >= 90) {

        ninety_medal.style.display = "grid"
    }
    
    ball.src = "./images/ball_happy.png"
    setTimeout(() => {
        ball.src = "./images/ball_normal.png"
    }, 500);
    
    point += 1
    if (point >= 50) {
        point += 2
        times_two.innerHTML = "click +2"
        times_two.style.display = "grid"
    }

    if (point >= 150) {
        point += 10
        times_ten.innerHTML = "click +10"
        times_ten.style.display = "grid"
    }

    if (point >= 500) {
        point += 20
        times_twenty.innerHTML = "click +20"
        times_twenty.style.display = "grid"
    }

    if (point >= 3000) {
        point += 30
        times_thirty.innerHTML = "click +30"
        times_thirty.style.display = "grid"
    }

    if (point >= 6000) {
        point += 50
        times_fifty.innerHTML = "click +50"
        times_fifty.style.display = "grid"
    }

    if (point >= 10000) {
        point += 80
        times_eighty.innerHTML = "click +80"
        times_eighty.style.display = "grid"
    }

    if (point >= 100000) {
        bronze.innerHTML = "100k"
        bronze.style.display = "grid"
    }

    if (point >= 500000) {
        silver.innerHTML = "500k"
        silver.style.display = "grid"
    }

    if (point >= 1000000) {
        gold.innerHTML = "1mil"
        gold.style.display = "grid"
    }

    number.innerHTML = point


}


setInterval(() => {
    if (point >= 15000) {
        point += 5
        number.innerHTML = point
        auto_click_five.innerHTML = "auto +5"
        auto_click_five.style.display = "grid"
    }
}, 500);

setInterval(() => {
    if (point >= 20000) {
        point += 10
        number.innerHTML = point
        auto_click_ten.innerHTML = "auto +10"
        auto_click_ten.style.display = "grid"
    }
}, 500);

setInterval(() => {
    if (point >= 25000) {
        point += 20
        number.innerHTML = point
        auto_click_twenty.innerHTML = "auto +20"
        auto_click_twenty.style.display = "grid"
    }
}, 500);

setInterval(() => {
    if (point >= 30000) {
        point += 30
        number.innerHTML = point
        auto_click_thirty.innerHTML = "auto +30"
        auto_click_thirty.style.display = "grid"
    }
}, 500);

setInterval(() => {
    if (point >= 35000) {
        point += 50
        number.innerHTML = point
        auto_click_fifty.innerHTML = "auto +50"
        auto_click_fifty.style.display = "grid"
    }
}, 500);

setInterval(() => {
    if (point >= 40000) {
        point += 80
        number.innerHTML = point
        auto_click_eighty.innerHTML = "auto +80"
        auto_click_eighty.style.display = "grid"
    }
}, 500);

  
//   document.addEventListener("DOMContentLoaded", () => {
//     number = localStorage.getItem("point") || 0;
//   }) 


  

  function populateStorage() {
    localStorage.setItem("point", number.innerHTML);
  }


