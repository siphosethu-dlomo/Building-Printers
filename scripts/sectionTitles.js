import { titles, generateTitles } from "./titlesGenerator.js";


export function servicesSectionHeading() {
  const {servicesTitle} = titles;
  const servicesSectionTitle = generateTitles(servicesTitle);
  document.querySelector('.services-section-container').prepend(servicesSectionTitle);
};

export function quotesSectionHeading() {
  const {quotesTitle} = titles;
  const quotesSectionTitle = generateTitles(`${quotesTitle}`);
  document.querySelector('.quotes-section-container').prepend(quotesSectionTitle);
};

export function teamSectionHeading() {
  const {teamTitle} = titles;
  const teamSectionTitle = generateTitles(`${teamTitle}`);
  document.querySelector('.team-section-container').prepend(teamSectionTitle);
};

export function aboutSectionHeading() {
  const {aboutTitle} = titles;
  const aboutSectionTitle = generateTitles(`${aboutTitle}`);
  document.querySelector('.about-section-container').prepend(aboutSectionTitle);
};

export function aboutPage() {
  const {aboutPageTitle} = titles;
  const aboutPageMainTitle = generateTitles(`${aboutPageTitle}`);
  document.querySelector('.about-us-page-container').prepend(aboutPageMainTitle);
};
