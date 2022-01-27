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

// services section

const serviceCardInformation = [
  {
    cardImageScr: "images/reno.jpg",
    cardImageAlt: "Renovations",
    cardText: "Renovations"
  },
  {
    cardImageScr: "images/foundation.jpg",
    cardImageAlt: "Foundations",
    cardText: "Foundations"
  },
  {
    cardImageScr: "images/capenters.jpg",
    cardImageAlt: "Capentry & Joinery",
    cardText: "Capentry & Joinery"
  },
];

const serviceCardGenerator = serviceCardInformation.map((card) => {
  return `
  <div class="card-container">
    <div class="card-image-holder">
      <img src="${card.cardImageScr}" alt="${card.cardImageAlt}">
    </div>
    <div class="card-text">${card.cardText}</div>
  </div>
  `
}).join('');

document.querySelector('.card-grid').innerHTML = serviceCardGenerator;

const buttonContainer = document.createElement('div');
const button = document.createElement('a');
button.setAttribute('href', '#');
buttonContainer.classList.add('button-container');
button.textContent = 'more services';
buttonContainer.appendChild(button);

document.querySelector('.services').appendChild(buttonContainer);
