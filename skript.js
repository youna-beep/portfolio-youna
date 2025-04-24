const buttons = document.querySelectorAll(".menu__links")
const menu_button = document.querySelector(".mobile_menu")
const buttons_mobile = document.querySelectorAll(".open_menu > .menu__links")
const mobile_menu = document.querySelector(".open_menu")
const icon = document.querySelector(".icon")

function handlescroll() {
    const screenHeight = document.documentElement.clientHeight;
    
    const oldButton = document.querySelector(".main_activ_button")
    const oldButton_mobile = document.querySelector (".open_menu > .main_activ_button")
    let index = 0

    if (window.scrollY < screenHeight){
        index = 0
    } else if (window.scrollY >= screenHeight && window.scrollY < screenHeight*2){
        index = 1
    } else if (window.scrollY >=  screenHeight*2 && window.scrollY < screenHeight*3) {
        index = 2
    } else if (window.scrollY >= screenHeight*3 && window.scrollY < screenHeight*4) {
        index = 3
    } else {
        index = 4
    }
    
    let newButton = buttons[index]
    let newButton_mobile = buttons_mobile[index]

    oldButton.classList.remove("main_activ_button");
    newButton.classList.add("main_activ_button"); 
    oldButton_mobile.classList.remove("main_activ_button");
    newButton_mobile.classList.add("main_activ_button"); 
}

window.onscroll = handlescroll

function toggleMenu() {
    if (mobile_menu.classList.contains("open_menu_active")){
        icon.src = 'img/mobile_menu.png'
    } else {
        icon.src = "img/close_menu.png"
    }
    mobile_menu.classList.toggle("open_menu_active")
}
menu_button.onclick = toggleMenu
