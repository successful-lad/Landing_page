
let buts = document.querySelectorAll('.answer-page');    
let togs = document.querySelectorAll('.answer-subpage')
    for (let i = 0; i < buts.length; i++) {
        buts[i].addEventListener('click',() => Addclass(i));
        
    }
function Addclass (i) {

    togs[i].classList.toggle("active")
}
