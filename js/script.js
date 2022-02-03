// ===================== Body Slider Start here ====================

let slides      = document.querySelectorAll('.image');
let slidesArray = Array.from(slides);


//====== Declaring positioning for the slides ======
function prevnext(){
    let currentSlide = document.querySelector('.image.active');
    let currentSlideIndex = slidesArray.indexOf(currentSlide);

    let prev;
    let next;

    if(currentSlideIndex == 0){
        prev = slidesArray[slidesArray.length - 1]
    } else{
        prev = slidesArray[currentSlideIndex - 1]
    }

    if(currentSlide == slidesArray[slidesArray.length - 1]){
        next = slidesArray[0]
    } else{
        next = slidesArray[currentSlideIndex + 1]
    }
    return { prev, next };
}
// ====== Sliding function for arranging the slides position ======
function sliding(){
    let currentSlide = document.querySelector('.image.active');
    let currentSlideIndex = slidesArray.indexOf(currentSlide);
    let textMessage = document.querySelector('.textMessage')
    let { prev, next } = prevnext()

// ====== Text Auto play start ====== 
    textMessage.innerHTML = currentSlide.dataset.mess
// ====== Text Auto play end ====== 

    slidesArray.map((image, index) => {
        if(currentSlideIndex == index){
            image.style.transform = 'translateX(0)'
        } else if(image == prev){
            image.style.transform = 'translateX(-100%)'
        } else if(image == next){
            image.style.transform = 'translateX(100%)'
        }
        image.addEventListener('transitionend', function(){
            image.classList.remove('smooth')
        })
    })
}
sliding()
// ====== Button start here =====
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

prevButton.addEventListener('click', function(){
    let currentSlide = document.querySelector('.image.active');
    let { prev } =  prevnext();

    clearInterval(stop);

    currentSlide.classList.add('smooth')
    prev.classList.add('smooth')
    currentSlide.classList.remove('active')
    currentSlide.style.transform = 'translateX(100%)'
    prev.classList.add('active')
    prev.style.transform = 'translateX(0)'
    sliding()
})

nextButton.addEventListener('click', function(){
    let currentSlide = document.querySelector('.image.active');
    let { next } =  prevnext();

    clearInterval(stop);

    currentSlide.classList.add('smooth')
    next.classList.add('smooth')
    currentSlide.classList.remove('active')
    currentSlide.style.transform = 'translateX(-100%)'
    next.classList.add('active')
    next.style.transform = 'translateX(0)'
    sliding()
})
// ====== Button end here =====
// ====== Auto play start here =====
function autoPlay(){
    let currentSlide = document.querySelector('.image.active');
    let { next } =  prevnext();

    currentSlide.classList.add('smooth')
    next.classList.add('smooth')
    currentSlide.classList.remove('active')
    currentSlide.style.transform = 'translateX(-100%)'
    next.classList.add('active')
    next.style.transform = 'translateX(0)'
    sliding()
}
let stop = setInterval(function(){
    autoPlay()
}, 4000)
// ====== Auto play end here =====

// ===================== Body Slider end here ====================

// ====================== Counter Part start here ==================
let counting    = document.querySelectorAll('.counting');
let arr         = Array.from(counting);


arr.map(function(item){ 
    let count       = 0
    function counter(){
        count++
        item.innerHTML= count
        if(item.innerHTML == item.dataset.number){
            clearInterval(stop)
        }
    }
let stop= setInterval(function(){
        counter()
    }, 9000/item.dataset.number)
})


// ====================== Counter part end here ====================

// ====================== Scrolling button start here===============
//Get the button
let mybutton  = document.getElementById('mybutton')

window.onscroll = function(){
    scrollFunction();
}
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = 'block'
    } else {
        mybutton.style.display = 'none'
    }
}
mybutton.addEventListener('click', function(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

// ====================== Scrolling button end here===============
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["one of the best service provider in Oman", "creating job opportunities for Omani Nationalities", 
                    "delivering the best services for our customers","a group of Shareholders"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; 
// Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
function type() {
    if (charIndex < textArray[textArrayIndex].length) {       
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");    
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);      
        charIndex++;   
        setTimeout(type, typingDelay);
    } else {       
        cursorSpan.classList.remove("typing");    
        setTimeout(erase, newTextDelay); 
}
}
function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");   
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);      
            charIndex--;     
            setTimeout(erase, erasingDelay);  
        } else {    
            cursorSpan.classList.remove("typing");
            textArrayIndex++;      
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;      
            setTimeout(type, typingDelay + 1100);    
}
}
document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
