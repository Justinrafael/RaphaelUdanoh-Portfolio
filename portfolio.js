/*const textElement = document.getElementById('changing-text');
const texts = [' Web Developer', ' Programmer', ' Virtual Assistant', ' Poet'];
let index = 0;

setInterval(() => {
    textElement.textContent = texts[index];
    index = (index + 1) %
    texts.length;
}, 1000);*/

/* HOME SECTION */

const typeTextSpan = document.querySelector('.type-text')
const cursor =document.querySelector('.cursor')

const words = [ 'Web Developer', 'Programmer', 'Virtual Assistant', 'Poet'];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 200;
let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    if (words.length) {
        setTimeout(type, newLetterDelay);
    }
})

function type() {
    if (charIndex < words[index].length) {
        typeTextSpan.textContent += words[index].charAt(charIndex);
        charIndex ++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typeTextSpan.textContent = words[index].substring(0, charIndex -1)
        charIndex--;
        setTimeout(erase, erasingDelay)
    } else {
        index++;
        if (index >= words.length) {
            index = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}



/* RESPONSIVE NAVIGATION DROPDOWN MENU */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

/** FORM SECTION */
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    alert("Message sent! Thanks for reaching out!");

    this.reset();
});