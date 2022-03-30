export default function intersectionObserver() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const navListItems = document.querySelectorAll('.primary-nav li');
  
  const hoverOnNavListItems = {
  
    addHoverNavOnListItems(color) {
      navListItems.forEach( navListItem => {
        navListItem.addEventListener('mouseover', (e) => {
          e.target.style.backgroundColor = color;
          
          setTimeout(() => {
            e.target.style.backgroundColor = '';
          }, 500)
        });
      });
    },
  
    removeHoverNavOnListItems() {
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
      hoverOnNavListItems.addHoverNavOnListItems('var(--primary-700)');

      // removing hover on smaller screen sizes 
      const hoverMediaQuery = window.matchMedia('(max-width: 576px)');
      if(hoverMediaQuery.matches) {
        hoverOnNavListItems.removeHoverNavOnListItems();
      };
    } else {
      nav.classList.remove('active');
      hoverOnNavListItems.removeHoverNavOnListItems();
    }
  };
  
  let observerOptions = {
    rootMargin: '-550px 0px 0px 0px',
  };

  // changing the intersetion observer's rootMargin on diffrent screen size 
  const marginMediaQuery = window.matchMedia('(max-width: 576px)');

  if(marginMediaQuery.matches) {
    observerOptions = {
      rootMargin: '-500px 0px 0px 0px',
    };
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(header);
};

