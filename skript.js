const buttons = document.querySelectorAll(".menu__links")
const menu_button = document.querySelector(".mobile_menu")
const menu_open = document.querySelector(".open_menu")

function handlescroll() {
    const screenHeight = document.documentElement.clientHeight;
    let newButton = null;
    const oldButton = document.querySelector(".main_activ_button")

    if (window.scrollY < screenHeight){
       newButton = buttons[0]
    } else if (window.scrollY >= screenHeight && window.scrollY < screenHeight*2){
        newButton = buttons[1]
    } else if (window.scrollY >=  screenHeight*2 && window.scrollY < screenHeight*3) {
        newButton = buttons[2];
    } else if (window.scrollY >= screenHeight*3 && window.scrollY < screenHeight*4) {
        newButton = buttons[3];
    } else {
        newButton = buttons[4]; 
    }
    if ( newButton) {
        oldButton.classList.remove("main_activ_button");
        newButton.classList.add("main_activ_button");
    }
}

window.onscroll = handlescroll


