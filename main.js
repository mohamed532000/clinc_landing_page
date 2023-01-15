let websiteTitle = document.getElementById("websiteTitle");

    titleText = "Hospital in your pocket..";

     i = 0;

    titleEnterval = setInterval(function() {

        websiteTitle.textContent += titleText[i];

        i++
        if(i > titleText.length-1) {
            clearInterval(titleEnterval)
        }
    },200);


let buttonUp = document.getElementById("up");

aboutSection = document.getElementById("myAbout");
aboutTextBoxes = document.querySelectorAll(".about-text .about-text-box")

doctors = document.getElementById("myDoctors");

boxes = document.querySelectorAll("#box")

departmentsBoxes = document.querySelectorAll("#dep");

departments = document.getElementById("myDepartment");

let testmnialsSection = document.getElementById("myTestmonials");
let testmnialsBoxes = document.querySelectorAll(".container .opinion-box");

    window.onscroll = function() {

        if(window.scrollY >= 500) {
            buttonUp.style.display = "block"
            buttonUp.style.zIndex = 1000
        }else {
            buttonUp.style.display = "none"
        }


        if(window.scrollY >= aboutSection.offsetTop) {
            aboutTextBoxes.forEach((box)=>{
                box.style.opacity = 1;
            })
        }

        if(window.scrollY >= doctors.offsetTop) {
            boxes.forEach((e)=>{
                e.style.left = 0
                e.style.transition = ".7s"
            }) 
        }else {
            boxes.forEach((e)=>{
                e.style.left = "-1200px"
            })
            
        }

        if(window.scrollY >= departments.offsetTop-100) {
            departmentsBoxes.forEach((d)=>{
                d.style.opacity = 1;
                d.style.transition = ".3s"
            })
        }else {
            departmentsBoxes.forEach((d)=>{
                d.style.opacity = 0;
                d.style.transition = ".3s"
            })
        }

        if(window.scrollY >= testmnialsSection.offsetTop) {
            testmnialsBoxes.forEach((box)=>{
                box.style.transform = "translateY(0)";
                box.style.opacity = 1
            }) 
        }

    }

    buttonUp.addEventListener("click" , function() {
        window.scroll (
            {
                top:0
            }
        )
    })

myInputs = document.querySelectorAll(".contact-form input");

myInputs.forEach((input)=>{
    input.onclick = function() {
        this.setAttribute("data-place" , this.getAttribute("placeholder"))
        this.setAttribute("placeholder" , " ")
    }
    input.onblur = function() {
        this.setAttribute("placeholder" , this.getAttribute("data-place"))
    }
})

myTextArea = document.getElementById("contact-ariea");

myTextArea.onfocus = function() {
    this.setAttribute("data-place" , this.getAttribute("placeholder"))
    this.placeholder = " "
}
myTextArea.onblur = function() {
    this.placeholder = this.getAttribute("data-place")
}

let showButton = document.getElementById("show");
let ulLinks = document.getElementById("ulLinks");
let navLinks = document.getElementById("navLinks");





showButton.onclick = ()=>{
    ulLinks.classList.toggle("down");
}

    // showButton.onclick = function() {
    //     if(showButton.textContent == "Show links") {
    //         showButton.addEventListener("click" , function() {
    //             ulLinks.style.height = "300px";
    //             showButton.textContent = "Hidden links"
    //         })
    //     }
    //     if(showButton.textContent == "Hidden links") {
    //         showButton.addEventListener("click" , function() {
    //             ulLinks.style.height = 0;
    //             showButton.textContent = "Show links"  
    //         })
    //     }
    // }

window.onresize = function() {
    if(ulLinks.offsetHeight == 0) {
        showButton.textContent = "Show links" 
    }
    if(navLinks.offsetWidth >= 745) {
        ulLinks.style.height = "auto"
    }else {
        ulLinks.style.height = 0
    }
}



    // showButton.onclick = function() {
    //     navLinks.style.height = "300px"
    //     navLinks.style.transition = ".5s"
    // }

/* start hover of my links */

// let links = document.querySelectorAll("ul li");

//     links.forEach((e)=> {
        

//         e.onclick = function() {
//             links.forEach((e)=> {
//                 e.classList.remove("active")
//             })
//             this.classList.add("active")
//         }

//     });

/* end hover of my links */



