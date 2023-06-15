import './style.css';
import {generateAboutUs} from './home'
import {generateMenu} from './menu';
import {generateContactUs} from './contact';


generateAboutUs();

const aboutUsBtn = document.querySelector("#about-us");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact-us");

const toggleOff = () => {
    const btnArray = [
        aboutUsBtn,
        menuBtn,
        contactBtn,
    ];
    btnArray.forEach((item) => {
        item.classList.toggle("on", false);
    });
};


menuBtn.classList.toggle("on");
contactBtn.classList.toggle("on");

aboutUsBtn.addEventListener("click", () => {
    generateAboutUs();
    toggleOff();
    aboutUsBtn.classList.toggle("on");
});

menuBtn.addEventListener("click", () => {
    generateMenu();
    toggleOff();
    menuBtn.classList.toggle("on");
});


contactBtn.addEventListener("click", () => {
    generateContactUs();
    toggleOff();
    contactBtn.classList.toggle("on");
});