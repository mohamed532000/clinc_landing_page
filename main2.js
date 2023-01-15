let createInputs = document.querySelectorAll(".create-form .create");

    createInputs.forEach(function(e) {
        e.onfocus = function() {
            e.setAttribute("place-data" , this.getAttribute("placeholder"))
            e.setAttribute("placeholder" , " ")
        }

        e.onblur = function() {
            e.setAttribute("placeholder" , this.getAttribute("place-data"))
        }
    })








// function* generateLetters() {
//     // yield "A";
//     // yield "b";
//     // yield "c";
//     // yield "d";

//     return("z")
//     index = 0

//     while(true) {
//         yield index++
//     }
    
// }






// function generateNums() {

//     num = 0

//     while(true) {
//         return num++
//     }


// }

// generat = generateNums()
// // function* generateAll() {
// //     yield generateNums();

// // }



// // generat = generateAll()


// console.log(generat.next())
// console.log(generat.next())
// console.log(generat.next())
// console.log(generat.next())
// console.log(generat.next())
// console.log(generat.next())
// console.log(generat.next())
// console.log(generat.next())
// console.log(generat.next())




