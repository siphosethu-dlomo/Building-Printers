import hamburgerMenu from "./hamburgerMenu.js";
import intersectionObserver from "./intersectionObserver.js";
import servicesSection from "./homePage/servicesSection.js";
import { 
  servicesSectionHeading,
  quotesSectionHeading,
  teamSectionHeading,
  aboutSectionHeading
 } 
from "./sectionTitles.js";
import formValidation from "./homePage/quotesSection.js";
import teamSection from "./homePage/teamSection.js";
import footerSection from "./footer.js";


// hamburger menu
hamburgerMenu();

// navbar intersection observer
intersectionObserver();

// SERVICES SECTION
servicesSectionHeading()
servicesSection();

// QUOTE SECTION
quotesSectionHeading();
formValidation();

// TEAM SECTION
teamSectionHeading();
teamSection();

// ABOUT SECTION
aboutSectionHeading();

let aboutQuestionTitle = document.querySelector('.about-question-title');
let mediaQuery = window.matchMedia('(max-width: 576px)');

if(mediaQuery.matches) {
  aboutQuestionTitle.innerHTML = '<h1 class="about-question-title"> Who We Are? </h1>';
}

// FOOTER 
footerSection();