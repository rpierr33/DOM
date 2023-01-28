// let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {
//     let buttonElement = document.querySelectorAll(".drum");
//     buttonElement[i].addEventListener("click", function() {
//         let buttonInnerHTML = this.innerHTML
//         makeSound(buttonInnerHTML);
//     })
// }


document.querySelectorAll(".drum").forEach(function(drumButtons){
      drumButtons.addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        makeSound(buttonInnerHTML);
      });
})
    
    

  

document.addEventListener("keypress", function(event){
            makeSound(event.key);
        console.log(event.key);

})

function makeSound(value){

        let soundMap = {
            w:"sounds/tom-1.mp3",
            a:"sounds/tom-2.mp3",
            s:"sounds/tom-3.mp3",
            d:"sounds/tom-4.mp3",
            j:"sounds/snare.mp3",
            k:"sounds/crash.mp3",
            l:"sounds/kick-bass.mp3"

        };

        if (!soundMap[value]) {
          console.log(value);
          return;
        }
        let sound = new Audio(soundMap[value]);
            sound.play();


    // switch (key) {
    //     case "w":
    //         let tom1 = new Audio("sounds/tom-1.mp3");
    //         tom1.play()
    //         console.log("W have been selected");
    //         break;
    //     case "a":
    //         let tom2 = new Audio("sounds/tom-2.mp3");
    //         tom2.play()
    //         console.log("a have been selected");
    //         break;
    //     case "s":
    //         let tom3 = new Audio("sounds/tom-3.mp3");
    //         tom3.play()
    //         console.log("s have been selected");
    //         break;
    //     case "d":
    //         let tom4 = new Audio("sounds/tom-4.mp3");
    //         tom4.play()
    //         console.log("d have been selected");
    //         break;
    //     case "j":
    //         let snare = new Audio("sounds/snare.mp3");
    //         snare.play();
    //         console.log("j have been selected");
    //         break;
    //     case "k":
    //         let crash = new Audio("sounds/crash.mp3");
    //         crash.play();
    //         console.log("k have been selected");
    //         break;
    //     case "l":
    //         let kick = new Audio("sounds/kick-bass.mp3");
    //         kick.play();
    //         console.log("l have been selected");
    //         break;
    //         default: console.log(key)
    // }

}

// console.log(numberOfDrumButtons);