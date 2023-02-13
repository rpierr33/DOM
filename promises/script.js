// runtime error

// parse 


// try{
//     a = b + 5
//     a = b + 5
//     a = b + 5
//     a = b + 5
// }
// catch (e){
//     // handle error here
//     console.log("Error: " + e)
// }
// finally {
//     console.log("Error did not stop my code")
// }

// throw  new SyntaxError("such and such is not defined")

// SyntaxError
// ReferenceError
// TypeError
// RangeError
// EvaluationError
// internalError


// let jsonString = '{"name": "John Doe", "age": 35, "city": "Miami"}'

//  let obj = JSON.parse(jsonString);






// console.log(jsonString);
// // console.log(obj)

// let stringedJson = JSON.stringify(obj)

// console.log(stringedJson)






// let json = '{"age": 25}'

// try {
//     let user = JSON.parse(json)
//     if(!user.name){
//         throw new RangeError("Missing Information: there is no name")
//     }
// }
// catch (e){
//     console.log("Json Error: " + e)
// }
// finally{
//     console.log("code gets executed regardless")
// }



const uno = () => {
  return "I am One";
};

// const dos = () => {
//   setTimeout(() => {
//     return "Wooohoooo";
//   }, 3000);
//   return"I am Two";
// };

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am two");
        }, 3000) 
    });
}
// pending
const tres = () => {
  return "I am Three";
};


const callMe = async function (){
    let valOne = uno();
    console.log(valOne);
    let valTwo = await dos();
    console.log(valTwo);
    let valThree = tres();
    console.log(valThree);
}

callMe()


// Promise()
// .then()
// .then()
// .then()

