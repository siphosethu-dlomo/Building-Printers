export default function teamSectionMainContent() {
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
};