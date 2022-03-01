export default function footerSection() {
  const currentYear = new Date().getFullYear();

  const footerContent = [
    {
      companyName: 'Building Printers',
      footerCompanyListItemOne: 'Who We Are',
      footerCompanyListItemTwo: 'Services',
      footerContactsHeading: 'Contact Us',
      companyEmail: 'bpr@buidersprinters.co.za',
      companyTel: '0000000000',
      copyright: 'copyright',
      year: currentYear,
      rights: 'All Rights Reserved',
      privacyPolicy: 'Privacy Policy'
    }
  ];
  
  const generateFooter = footerContent.map((content) => {
    return `
    <div class="footer-top-content">
      <div class="footer-company">
        <h4>${content.companyName}</h4>
        <ul>
          <li><a href="#">${content.footerCompanyListItemOne}</a></li>
          <li><a href="#">${content.footerCompanyListItemTwo}</a></li>
        </ul>
      </div>
      <div class="footer-contacts">
        <h4>${content.footerContactsHeading}</h4>
        <ul>
          <li>
            <i class="fas fa-envelope"></i>
            <a href="mailto:${content.companyEmail}">${content.companyEmail}</a>
          </li>
          <li>
            <i class="fas fa-phone"></i>
            <a href="tel:${content.companyTel}">${content.companyTel}</a>
          </li>
          <li class="location">
            <i class="fas fa-map-marker-alt"></i>
              <address>
                108 Kwa-Zenzele Street <br />
                Kwandle Road <br />
                South Africa
              </address>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom-content">
      <div class="social-media-icons">
        <a href=""><i class="fab fa-linkedin icon-1"></i></a>
        <a href=""><i class="fab fa-twitter icon-2"></i></a>
        <a href=""><i class="fab fa-facebook icon-3"></i></a>
        <a href=""><i class="fab fa-instagram icon-4"></i></a>
      </div>
      <p class="copyright">${content.copyright} &copy; ${content.companyName}. ${content.year}. ${content.rights}. <a href="#">${content.privacyPolicy}.</a></p>
    </div>
    `
  }).join('');
  
  document.querySelector('.footer-width-container').innerHTML = generateFooter;
};