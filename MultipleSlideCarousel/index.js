const slides = document.querySelectorAll(".slide")
const slideNoLeft = document.querySelector(".slide-no-left")
const slideNoRight = document.querySelector(".slide-no-right")
const caption = document.querySelector(".caption")
const left = document.querySelector(".left")
const right = document.querySelector(".right")

left.addEventListener("click",showPrevSlide);
right.addEventListener("click",showNextSlide);

let selectedSlides = [0,1];
let beforeSelected = [-1,-1];

function showPrevSlide(){
    beforeSelected[0] = selectedSlides[0];
    beforeSelected[1] = selectedSlides[1];
    [selectedSlides[1],selectedSlides[0]] = [selectedSlides[0],selectedSlides[0]-1]
    if(selectedSlides[0]<0) selectedSlides[0] = 3
    showSelectedImage()
}

function showNextSlide(){
    beforeSelected[0] = selectedSlides[0];
    beforeSelected[1] = selectedSlides[1];
    [selectedSlides[0],selectedSlides[1]] = [selectedSlides[1],selectedSlides[1]+1]
    if(selectedSlides[1]>3) selectedSlides[1] = 0
    console.log(selectedSlides[0],selectedSlides[1])
    showSelectedImage()
}


function showSelectedImage(){
    slides[beforeSelected[0]].classList.add("hide");
    slides[beforeSelected[1]].classList.add("hide");
    slides[selectedSlides[0]].classList.remove("hide");
    slides[selectedSlides[1]].classList.remove("hide");
    slideNoLeft.innerText = `${selectedSlides[0]+1}/4`;
    slideNoRight.innerText = `${selectedSlides[1]+1}/4`
    caption.innerText = slides[selectedSlides[0]].getAttribute("alt") + " and " +slides[selectedSlides[1]].getAttribute("alt")
}



window.setInterval(showNextSlide,3000)