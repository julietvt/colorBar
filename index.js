"use strict"; 
const body = document.body;
const COLORS = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".item");
const menuBorder = menu.querySelector(".border");
let activeItemMenu = menu.querySelector(".active");

function clickItemMenu(item, index) {
    menu.style.removeProperty("--timeOut");    
    if (activeItemMenu == item) return;    
    if (activeItemMenu) {
        activeItemMenu.classList.remove("active");
    }    
    item.classList.add("active");
    body.style.backgroundColor = COLORS[index];
    activeItemMenu = item;
    offsetMenuBorder(activeItemMenu, menuBorder);      
}

function offsetMenuBorder(element, menuBorder) {
    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItemMenu, menuBorder);

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItemMenu(item, index));    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItemMenu, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});