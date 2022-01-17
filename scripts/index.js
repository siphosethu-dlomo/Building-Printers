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
