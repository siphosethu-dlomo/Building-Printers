export default function servicesSection() {
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
  button.setAttribute('href', './servicesPage.html');
  button.setAttribute('target', '_blank');
  buttonContainer.classList.add('button-container');
  button.textContent = 'more services';
  buttonContainer.appendChild(button);
  
  document.querySelector('.services-section-container').appendChild(buttonContainer);
};