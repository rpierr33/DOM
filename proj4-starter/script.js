let courses = [
    {
        name: "Complete ReactJS course ",
        price: "6.30"
    },
    {
        name: "Complete Angular course ",
        price: "4.36"
    },
    {
        name: "Complete MERN course ",
        price: "8.10"
    },
    {
        name: "Complete C++ course ",
        price: "4.69"
    },
    {
        name: " Django course ",
        price: "7.90"
    }
]


function generateList(){
    let ul = document.querySelector(".list-group")
    ul.innerHTML = "";
    courses.forEach((course) => {
        let li = document.createElement("li");
         li.classList.add("list-group-item");

         let name = document.createTextNode(course.name)
        //  console.log(name)
         li.appendChild(name)
    
        let span = document.createElement("span");
        span.classList.add("float-right");

        let price = document.createTextNode("$" + course.price)    
        span.appendChild(price)    


        li.appendChild(span)
        ul.appendChild(li);
    })
}

window.addEventListener("load", generateList());


let button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price)
    generateList();
} )