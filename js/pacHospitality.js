// ==================== catSlider Start here ================
let slides = document.querySelectorAll('.slide')
let slidesArray = Array.from(slides)

function prevnext(){
    let currentSlides = document.querySelector('.slide.active')
    let currentSlidesIndex = slidesArray.indexOf(currentSlides)
    
    let prev;
    let next;

    if(currentSlidesIndex == 0){
        prev = slidesArray[slidesArray.length - 1]
    } else{
        prev = slidesArray[currentSlidesIndex - 1]
    }

    if(currentSlides == slidesArray[slidesArray.length - 1]){
        next = slidesArray[0]
    } else{
        next = slidesArray[currentSlidesIndex + 1]
    }
    return { prev, next }
}

function sliding(){
    let currentSlides = document.querySelector('.slide.active')
    let currentSlidesIndex = slidesArray.indexOf(currentSlides)
    let { prev, next } = prevnext()

    slidesArray.map((slide, index) => {
        if(currentSlidesIndex == index){
            slide.style.transform = 'translateX(0)'
        } else if(slide == prev){
            slide.style.transform = 'translateX(-100%)'
        } else if(slide == next){
            slide.style.transform = 'translateX(100%)'
        }
        slide.addEventListener('transitionend', function(){
            slide.classList.remove('smooth')
        })
    })
}
sliding()

function autoplay(){
    let currentSlides = document.querySelector('.slide.active')
    let { prev, next } = prevnext()

    currentSlides.classList.add('smooth')
    next.classList.add('smooth')
    currentSlides.classList.remove('active')
    currentSlides.style.transform = 'translateX(-100%)'
    next.classList.add('active')
    next.style.transform = 'translateX(0)'
    sliding()
}
setInterval(function(){
    autoplay()
}, 3000)
// ==================== catSlider end here ==================

// =================== Typing design start here =============

let type    = document.querySelector('.typingText');
let count   = 0;

function typing(){
    type.innerHTML += type.dataset.typed.charAt(count)
    count++
    
    if(count == type.dataset.typed.length){
        clearInterval(stop)
    }
}

let stop  = setInterval(function(){
    typing()
}, 100)
// =================== Typing design end here ===============
