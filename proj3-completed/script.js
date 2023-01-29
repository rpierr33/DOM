let red = document.querySelector(".red")
let cyan = document.querySelector(".cyan");
let violet = document.querySelector(".violet");
let orange = document.querySelector(".orange");
let pink = document.querySelector(".pink");

let center = document.querySelector(".center");

// console.log(getComputedStyle(violet).backgroundColor);

let getBGColor = (selectedElement) => {
    return getComputedStyle(selectedElement).backgroundColor;
}

let colorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.backgroundColor = color
    })
}

// colorChanger(violet, getBGColor(violet));
// colorChanger(red, getBGColor(red));
// colorChanger(cyan, getBGColor(cyan));
// colorChanger(orange, getBGColor(orange));
// colorChanger(pink, getBGColor(pink));

let elements = [red, cyan, violet, orange, pink];
elements.forEach((element)=>  {
colorChanger(element , getBGColor(element));
})