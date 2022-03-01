export default function intersectionObserver() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const navListItems = document.querySelectorAll('.primary-nav li');
  
  const hoverOnNavListItems = {
  
    addHoverNavOnListItems() {
      navListItems.forEach( navListItem => {
        navListItem.addEventListener('mouseover', (e) => {
          e.target.style.backgroundColor = 'var(--primary-700)';
          
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
      hoverOnNavListItems.addHoverNavOnListItems();
    } else {
      nav.classList.remove('active');
      hoverOnNavListItems.removeHoverNavOnListItems();
    }
  };
  
  const observerOptions = {
    rootMargin: '-550px 0px 0px 0px',
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(header);
};
