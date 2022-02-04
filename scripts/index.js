// hamburger menu

const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', (e) => {
  const visibility = primaryNav.getAttribute('data-visible');
  if(visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

// navbar intersection observer

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navListItems = document.querySelectorAll('.primary-nav li');

const hoverOnNavListItems = {

  addingHover: addHoverNavOnListItems = () => {
    navListItems.forEach( navListItem => {
      navListItem.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'var(--primary-700)';
        
        setTimeout(() => {
          e.target.style.backgroundColor = '';
        }, 500)
      });
    });
  },

  removingHover: removeHoverNavOnListItems = () => {
    navListItems.forEach( navListItem => {
      navListItem.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = '';
      });
    });
  }

};

const observerCallback = entries => {
  if(!entries[0].isIntersecting) {
    nav.classList.add('active');
    hoverOnNavListItems.addingHover();
  } else {
    nav.classList.remove('active');
    hoverOnNavListItems.removingHover();
  }
};

const observerOptions = {
  rootMargin: '-550px 0px 0px 0px',
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(header);



const serviceCardInformation = [
  {
    cardImageScr: "images/reno.jpg",
    cardImageAlt: "Renovations",
    cardText: "Renovations"
  },
  {
    cardImageScr: "images/foundation.jpg",
    cardImageAlt: "Foundatons",
    cardText: "Foundatons"
  },
  {
    cardImageScr: "images/capenters.jpg",
    cardImageAlt: "Capentry & Joinery",
    cardText: "Capentry & Joinery"
  },
];

const teamSectionCardInformation = [
  {
    cardImageScr: "images/alex-starnes.jpg",
    cardImageAlt: "Zukhanye May",
    teamMember: "Zukhanye May",
    position: "CEO",

  },

  {
    cardImageScr: "images/may-gauthier.jpg",
    cardImageAlt: "May Gauthier",
    teamMember: "Jane Doe",
    position: "COO",
  },
  
  {
    cardImageScr: "images/john doe.jpg",
    cardImageAlt: "John Doe",
    teamMember: "John Doe",
    position: "CFO",
  },
];

// SERVICES SECTION

// section titles
const titles = {
  servicesTitle: 'Our Services',
  quotesTitle: 'Need A Quote?',
  teamTitle: 'Meet The Team',
  aboutTitle: 'About us',
};

const{servicesTitle, quotesTitle, teamTitle, aboutTitle} = titles;

function generateTitles(title) {
  const titleContainer = document.createElement('div');
  const titleElement = document.createElement('h2');
  const titleUnderline = document.createElement('div');
  titleContainer.appendChild(titleElement);
  titleContainer.appendChild(titleUnderline);
  titleContainer.classList.add('title');
  titleUnderline.classList.add('title-underline');
  titleElement.textContent = title;
  return titleContainer;
}

const servicesSectionTitle = generateTitles(`${servicesTitle}`);

document.querySelector('.services-section-container').prepend(servicesSectionTitle);

// generating services cards
const serviceCardGenerator = serviceCardInformation.map((card) => {
  return `
  <div class="card-container">
    <div class="card-image-holder">
      <img src="${card.cardImageScr}" alt="${card.cardImageAlt}">
    </div>
    <div class="card-text"><span>${card.cardText}</span></div>
  </div>
  `
}).join('');

document.querySelector('.services-card-grid').innerHTML = serviceCardGenerator;

// more services button
const buttonContainer = document.createElement('div');
const button = document.createElement('a');
button.setAttribute('href', '#');
buttonContainer.classList.add('button-container');
button.textContent = 'more services';
buttonContainer.appendChild(button);

document.querySelector('.services-section-container').appendChild(buttonContainer);

// QUOTES SECTIONS

const quotesSectionTitle = generateTitles(`${quotesTitle}`);
document.querySelector('.quotes-section-container').prepend(quotesSectionTitle);

// Form Validation
const inputs = document.querySelectorAll('input');

// regex patterns
const patterns = {
  name: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
};

function validate(field, regex) {
  if(regex.test(field.value)) {
    field.classList.add('is-valid');
    field.classList.remove('is-invalid');
  } else {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
  }
};

inputs.forEach(input => {
  input.addEventListener('keyup', e => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

// TEAM SECTION

const teamSectionTitle = generateTitles(`${teamTitle}`);
document.querySelector('.team-section-container').prepend(teamSectionTitle);

// generating team members cards
const teamMembersCardGenerator = teamSectionCardInformation.map((card) => {
  return `
  <div class="card-container">
    <div class="card-image-holder">
      <img src="${card.cardImageScr}" alt="${card.cardImageAlt}">
    </div>
    <div class="card-text"><b><span>${card.teamMember}</span></b></div>
    <div class="card-text"><span>${card.position}</span></div>
  </div>
  `
}).join('');

document.querySelector('.team-card-grid').innerHTML = teamMembersCardGenerator;

// ABOUT SECTION

const aboutSectionTitle = generateTitles(`${aboutTitle}`);
document.querySelector('.about-section-container').prepend(aboutSectionTitle);

// FOOTER


