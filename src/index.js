import './style.css';
import {generateAboutUs} from './home'
import {generateMenu} from './menu';
import { generateContactUs } from './contact';


generateAboutUs();

const aboutUsBtn = document.querySelector("#about-us");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact-us")


aboutUsBtn.addEventListener("click", generateAboutUs);
menuBtn.addEventListener("click", generateMenu);
contactBtn.addEventListener("click", generateContactUs);