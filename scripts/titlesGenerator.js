// section titles
export const titles = {
  servicesTitle: 'Our Services',
  quotesTitle: 'Need A Quote?',
  teamTitle: 'Meet The Team',
  aboutTitle: 'About us',
  aboutPageTitle: 'Welcome to Building Printers',
  domesticServicesTitle: 'What We Offer',
  subContractServicesTitle: 'Sub-Contracting',
};

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