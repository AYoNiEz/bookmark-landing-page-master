const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
const close = document.querySelector(".close");
const select1 = document.querySelector(".feature-box-1")
const select2 = document.querySelector(".feature-box-2")
const select3 = document.querySelector(".feature-box-3")
const form = document.querySelector(".get-start");
const email = document.querySelector(".email-input");

const bookmark1 = document.querySelector(".bookmark-1")
const bookmark2 = document.querySelector(".bookmark-2")
const bookmark3 = document.querySelector(".bookmark-3")



select1.addEventListener('click', openTab1);
select2.addEventListener('click', openTab2);
select3.addEventListener('click', openTab3);

function openTab1(){
    bookmark1.classList.remove("hide")
    bookmark2.classList.add("hide")
    bookmark3.classList.add("hide")
    select1.classList.add("active")
    select2.classList.remove("active")
    select3.classList.remove("active")
}
function openTab2(){
    bookmark1.classList.add("hide");
    bookmark2.classList.remove("hide");
    bookmark3.classList.add("hide");
    select1.classList.remove("active")
    select2.classList.add("active")
    select3.classList.remove("active")
}
function openTab3(){
    bookmark1.classList.add("hide");
    bookmark2.classList.add("hide");
    bookmark3.classList.remove("hide");
    select1.classList.remove("active")
    select2.classList.remove("active")
    select3.classList.add("active")
}


hamburger.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

function openMenu() {
    menu.classList.remove("hidden");
    hamburger.classList.add("hidden");
}
function closeMenu() {
    menu.classList.add("hidden");
    hamburger.classList.remove("hidden");
}

var faqs = document.querySelectorAll(".faq");
  faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});



form.addEventListener('submit', e =>{
    e.preventDefault();
    const emailVal = email.value;


    if(!validateEmail(emailVal)){
        form.classList.add('error');
    }else{
        form.classList.remove('error');
    }
});
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};



