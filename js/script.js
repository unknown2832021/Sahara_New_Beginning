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
    }, 200)
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
