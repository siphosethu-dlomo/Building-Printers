export default function subContractingCards() {
  const subContractingCardInformation = [
    {
      cardImageScr: "images/pipes.jpg",
      cardImageAlt: "Picture of a calcualtor",
      cardTitle: "Plumbling & Drainage",
      cardInfoText: "For tender and general pricing"
    },
    {
      cardImageScr: "images/roof.jpg",
      cardImageAlt: "People working near a house roof",
      cardTitle: "Roadworks",
      cardInfoText: "<p>Retaining</p> <p>Walls</p> <p>Kerbs Paving</p>"
    },
    {
      cardImageScr: "images/electrician.jpg",
      cardImageAlt: "Electrician installing a plug socket",
      cardTitle: "Mechanical & Electrical Installations",
      cardInfoText: "For tender and general pricing"
    },
    {
      cardImageScr: "images/roof.jpg",
      cardImageAlt: "Electrician installing a plug socket",
      cardTitle: "Roofing",
      cardInfoText: "Trussers Covering such as Tiles"
    },
    {
      cardImageScr: "images/foundation.jpg",
      cardImageAlt: "Electrician installing a plug socket",
      cardTitle: "Foundations",
      cardInfoText: "<p>Excavation Filling of foundation with concrete</p> <p>Foundation brickwork up to floor level</p>"
    },
    {
      cardImageScr: "images/capenter.jpg",
      cardImageAlt: "Electrician installing a plug socket",
      cardTitle: "Capentrey & Joinery",
      cardInfoText: "Filling of doors & windows"
    },
  ];
  
  // generating services cards
  const subContractingCardGenerator = subContractingCardInformation.map((card) => {
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
  
  document.querySelector('.subContract-services-grid').innerHTML = subContractingCardGenerator;
  
};