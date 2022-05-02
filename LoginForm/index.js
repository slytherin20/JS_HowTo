const loginBtn = document.querySelector(".btn");
const modalContainer = document.querySelector(".modal-container");
const modalCloseBtn = document.querySelector(".close-btn");
const formCloseBtn = document.querySelector(".close-form-btn")

loginBtn.addEventListener("click",showModal);
modalCloseBtn.addEventListener("click",closeModal);
formCloseBtn.addEventListener("click",closeModal);
modalContainer.addEventListener("click",closeModalFromOutside);

function showModal(){
    modalContainer.style.display="block";
}
function closeModal(){
    modalContainer.style.display = "none";
}

//When user clicks outside modal close the modal.
function closeModalFromOutside(e){
    if(e.target==modalContainer){
        closeModal()
    }
}