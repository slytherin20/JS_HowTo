const btns = document.querySelectorAll(".btn");
const paras = document.querySelectorAll(".text");

btns.forEach((el,index)=> el.addEventListener("click",()=>showText(index)))

const showText = (i)=>{
    btns[i].classList.toggle("color-gray")
    paras[i].classList.toggle("show");
}