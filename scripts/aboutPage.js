import hamburgerMenu from "./hamburgerMenu.js";
import intersectionObserver from "./intersectionObserver.js";
import {aboutPage} from "./sectionTitles.js";

// hamburger menu
hamburgerMenu();

// navbar intersection observer
intersectionObserver();

// about page title
aboutPage();


// about page main content
const companyCardInformation = [
  {
    cardImageScr: "images/consult.jpg",
    cardImageAlt: "Two people talking to each other",
    cardTitle: "Who Are We",
    cardInfoText: "Builders Printers (B.P.R.) is an organisation that deals with building and civil works. As representatives, our main goal is to ensure that all of our services are of the highest quality. We serve both public and private sectors."
  },

  {
    cardImageScr: "images/wood.jpg",
    cardImageAlt: "Pile of wood",
    cardTitle: "Our Vision",
    cardInfoText: "To become a green production company be focusing on recyclable construction materials forour projects. This also includes an advancement in timber construction in South Africa."
  },
  
  {
    cardImageScr: "images/engineer.jpg",
    cardImageAlt: "An engineer taking measurements",
    cardTitle: "Our Mission",
    cardInfoText: "To improve construction by cuttting both cost and time with the use of cutting edge technology."
  },
];

// generating team members cards
const companyInformationCardGenerator = companyCardInformation.map((card) => {
  return `
  <div class="about-page-card-flex">
    <div class="about-page-card-image-holder">
      <img src="${card.cardImageScr}" alt="${card.cardImageAlt}">
    </div>
    <div class="cart-text-container">
      <span class="card-text about-page-card-text"><b><span>${card.cardTitle}</span></b></span>
      <span class="card-text about-page-card-text"><span>${card.cardInfoText}</span></span>
    </div>
  </div>
  `
}).join('');

document.querySelector('.about-page-main-content').innerHTML = companyInformationCardGenerator;
