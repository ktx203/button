console.log("javascript!!")

const theButton = document.getElementById("button")
let theBody = document.querySelector("body")
let thePara = document.querySelector("P")
let theHeadLine = document.querySelector("h1")

theButton.addEventListener('click", myFunction)

function myFunction(){
    console.log("button clicked!!")
    theBody.style.background = "pink"
    theBody.style.color = "white"
    thePara.textContent = "you pressed the button" 
}