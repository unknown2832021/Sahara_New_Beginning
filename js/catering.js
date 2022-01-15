let type    = document.querySelector('.typingText');
let count   = 0;

console.log(type.dataset.typed.charAt(2))


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
