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