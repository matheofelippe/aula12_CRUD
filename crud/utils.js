
const urlServer = "https://66302735c92f351c03d923d2.mockapi.io/cliente";

let btns = document.querySelectorAll('a','.menuLink');
let currentUrl = window.location.href;

for (let btn of btns) {
    
    if (btn.href === currentUrl) {
        btn.classList.add('active');
        break;
    }
}