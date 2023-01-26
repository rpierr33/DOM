// initialize randomNumber for first dice

let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  // 0-6.99999
// console.log(randomNumber1)
// attach random generated number to dice img
let randomDiceImage = 'dice' + randomNumber1 + ".png"

// create image source path
let randomImageSource = "images/" + randomDiceImage

// grab the first image
let image1 = document.querySelectorAll("img")[0];
// set attributes to image
image1.setAttribute('src', randomImageSource)

// repeat for dice 2
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



// comparison statement to check who wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "🚩 DRAW";
}