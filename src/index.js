import './style.css';
import {generateAboutUs} from './home'



const aboutUsBtn = document.querySelector("#about-us");

aboutUsBtn.addEventListener("click", generateAboutUs);