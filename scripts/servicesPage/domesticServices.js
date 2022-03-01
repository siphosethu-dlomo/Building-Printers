export default function domesticServicesCards() {
  const domesticServicesCardInformation = [
    {
      cardImageScr: "images/pricing.jpg",
      cardImageAlt: "Picture of a calcualtor",
      cardTitle: "Pricing",
      cardInfoText: "For tender and general quotations"
    },
    {
      cardImageScr: "images/reno.jpg",
      cardImageAlt: "People working near a house roof",
      cardTitle: "Renovations",
      cardInfoText: "For tender and general pricing"
    },
    {
      cardImageScr: "images/electrician-rep.jpg",
      cardImageAlt: "Electrician installing a plug socket",
      cardTitle: "Repairs",
      cardInfoText: "For tender and general pricing"
    },
  ];
  
  // generating services cards
  const domesticServicesCardGenerator = domesticServicesCardInformation.map((card) => {
    return `
    <div class="card-container">
      <div class="card-image-holder">
        <img src="${card.cardImageScr}" alt="${card.cardImageAlt}">
      </div>
      <div class="cart-text-container">
        <span class="card-text services-page-card-text"><b><span>${card.cardTitle}</span></b></span>
        <span class="card-text services-page-card-text"><span>${card.cardInfoText}</span></span>
      </div>
    </div>
    `
  }).join('');
  
  document.querySelector('.domestic-services-grid').innerHTML = domesticServicesCardGenerator;
  
};