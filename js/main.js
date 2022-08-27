// PARALLAX ON HEADER AREA

let header = document.getElementById('header')
let slogan = document.getElementById('slogan')
let btn = document.getElementById('btn')
let persona = document.getElementById('truck')


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    btn.style.marginTop = value * 0.7 + 'px';
    slogan.style.marginBottom =   value* -1  + 'px';
    header.style.marginTop = value * 0.4 + 'px';
    persona.style.marginLeft = value* 4  + 'px';

})

const navigation = document.querySelector('nav')
document.querySelector('.menu').onclick = function (){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}

// PARALLAX ON THE BANNER

window.onscroll = function(){
    let scrollPosition = window.scrollY || document.elementFromPoint.scrollTop;

    let elementOne= document.getElementById("moveday")
    // let elementTwo= document.getElementById("contact-us")

    elementOne.style.bottom= scrollPosition * 0.08 + "px";
    // elementTwo.style.top= scrollPosition * 0.1 + "px";
}

// FAQ SECTION TOGGLE MODE
const accordionItemQuestions = document.querySelectorAll(".accordion-item-question");

accordionItemQuestions.forEach(accordionItemQuestion => {
  accordionItemQuestion.addEventListener("click", event => {
    
    // allow for the display of only one collapsed item at a time!
    
    const currentlyActiveAccordionItemQuestion = document.querySelector(".accordion-item-question.active");
    if(currentlyActiveAccordionItemQuestion && currentlyActiveAccordionItemQuestion!==accordionItemQuestion) {
      currentlyActiveAccordionItemQuestion.classList.toggle("active");
      currentlyActiveAccordionItemQuestion.nextElementSibling.style.maxHeight = 0;
    }

    // if is active toggle vs else the not active

    accordionItemQuestion.classList.toggle("active");
    const accordionItemBody = accordionItemQuestion.nextElementSibling;
    if(accordionItemQuestion.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});