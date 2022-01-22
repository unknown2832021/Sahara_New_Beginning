let text    = document.querySelector('.liningText');

let count   = -1;
function counting(){
    count++
    text.innerHTML += text.dataset.texting.charAt(count);
    if(count == text.innerHTML.length){
        count = -1;
        text.innerHTML = '';
    }
}
let stop = setInterval(function(){
    counting();
}, 300);