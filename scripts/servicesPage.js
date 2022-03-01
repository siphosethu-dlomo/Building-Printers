import hamburgerMenu from "./hamburgerMenu.js";
import intersectionObserver from "./intersectionObserver.js";
import {domesticServices, subContractServices} from "./sectionTitles.js";
import domesticServicesCards from "./servicesPage/domesticServices.js";
import subContractingCards from "./servicesPage/subContracting.js";
import footerSection from "./footer.js"


// hamburger menu
hamburgerMenu();

// navbar intersection observer
intersectionObserver();

// domestic services page title
domesticServices();

// domestic services grid
domesticServicesCards();

// subcontracting title
subContractServices();

// subcontracting grid
subContractingCards();

// FOOTER 
footerSection();
