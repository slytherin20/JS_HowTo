const slides = document.querySelectorAll(".slide")
const slideNo = document.querySelector(".slide-no")
const caption = document.querySelector(".caption")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const buttons = document.querySelectorAll(".btn")

left.addEventListener("click",showPrevSlide);
right.addEventListener("click",showNextSlide);
buttons.forEach((btn,index)=>{
    btn.addEventListener("click",()=>showAnySlide(index))
})
let selectedSlide = 0;
let beforeSelected = -1;

function showPrevSlide(){
    beforeSelected = selectedSlide;
    selectedSlide = selectedSlide - 1;
    if(selectedSlide<0) selectedSlide = 3
    showSelectedImage()
    selectButton()
}

function showNextSlide(){
    beforeSelected = selectedSlide;
    selectedSlide = selectedSlide + 1;
    if(selectedSlide>3) selectedSlide = 0
    showSelectedImage()
    selectButton()
}

function showAnySlide(index){
    beforeSelected = selectedSlide;
    selectedSlide = index
    showSelectedImage()
    selectButton()
}

function showSelectedImage(){
    slides[selectedSlide].classList.remove("hide");
    slides[beforeSelected].classList.add("hide");
    slideNo.innerText = `${selectedSlide+1}/4`
    caption.innerText = slides[selectedSlide].getAttribute("alt")
}

function selectButton(){
    buttons[selectedSlide].style.backgroundColor = "gray";
    buttons[beforeSelected].style.backgroundColor = "gainsboro";
}

window.setInterval(showNextSlide,3000)