let mybtn   = document.querySelector('.mybtn')
let names   = document.querySelector('.names')
let email   = document.querySelector('.email')
let texts   = document.querySelector('.texts')
let form    = document.querySelector('.contactForm')

let err1    = document.querySelector('.err1')
let err2    = document.querySelector('.err2')
let err3    = document.querySelector('.err3')

let sent    = document.querySelector('.messages')
let formValue   = document.querySelector('.formValue')

console.log(sent)

mybtn.addEventListener('click', function(){
    if(names.value == ''){
        err1.style.display = 'block'
    } else {
        err1.style.display = 'none'
    }
    if(email.value == ''){
        err2.style.display = 'block'
    } else {
        err2.style.display = 'none'
    }
    if(texts.value == ''){
        err3.style.display = 'block'
    } else {
        err3.style.display = 'none'
    }

if(names.value !== '' && email.value !== '' && texts.value !== ''){
    formValue.style.display = 'none'
    sent.style.display = 'block'
}



})


