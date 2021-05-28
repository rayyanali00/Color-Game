var numSquares = 6
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var pickedColor = pickColor();
var changeBackground = document.querySelector("h1")
var resetButton = document.getElementById("reset");
// var easyButton = document.getElementById("easyBtn")
// var hardButton = document.getElementById("hardBtn")
var modeBtn = document.querySelectorAll(".mode")
for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function () {
        modeBtn[0].classList.remove("selected")
        modeBtn[1].classList.remove("selected")
        this.classList.add("selected")
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    })
}

function reset() {
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor
    resetButton.textContent = "New Color"
    messageDisplay.textContent = ""
    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.display = "block"
            square[i].style.backgroundColor = colors[i]
        }
        else {
            square[i].style.display = "none"
        }
    }
    changeBackground.style.backgroundColor = "steelblue"
}
// easyButton.addEventListener("click",function(){
//     hardButton.classList.remove("selected");
//     easyButton.classList.add("selected")
//     numSquares=3
//     colors = generateRandomColors(numSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor
//     changeBackground.style.backgroundColor="steelblue"
//     messageDisplay.textContent=""
//     for (var i = 0; i<square.length; i++){
//      if(colors[i]){
//          square[i].style.backgroundColor=colors[i]
//      }
//      else{
//          square[i].style.display="none"
//      }
//     }
// })

// hardButton.addEventListener("click",function(){
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected")
//     numSquares = 3
//     colors = generateRandomColors(numSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor
//     messageDisplay.textContent=""
//     changeBackground.style.backgroundColor="steelblue"
//     for (var i = 0; i<square.length; i++){
//         square[i].style.backgroundColor=colors[i]
//         square[i].style.display="block"
//     }
// })

resetButton.addEventListener("click", function () {
    reset()
})
colorDisplay.textContent = pickedColor
for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function () {
        var clickedColor = (this.style.backgroundColor)
        console.log(clickedColor, pickedColor)
        if (clickedColor === pickedColor) {
            resetButton.textContent = "Play Again?"
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor)
            changeBackground.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = '#263238';
            messageDisplay.textContent = "Try Again"
        }
    })
}
function changeColors(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
