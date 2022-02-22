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

// section titles
export const titles = {
  servicesTitle: 'Our Services',
  quotesTitle: 'Need A Quote?',
  teamTitle: 'Meet The Team',
  aboutTitle: 'About us',
  aboutPageTitle: 'Welcome to Building Printers'
};

// export const{servicesTitle, quotesTitle, teamTitle, aboutTitle, aboutPageTitle} = titles;

export function generateTitles(title) {
  const titleContainer = document.createElement('div');
  const titleElement = document.createElement('h2');
  const titleUnderline = document.createElement('div');
  titleContainer.appendChild(titleElement);
  titleContainer.appendChild(titleUnderline);
  titleContainer.classList.add('title');
  titleUnderline.classList.add('title-underline');
  titleElement.textContent = title;
  return titleContainer;
};

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

// FOOTER 
footerSection();