import './style.css';
import { translation as tr } from './localization.js';
import { getFormatCurrencyByLocale as getCurrency } from './getFormatCurrency.js';

document.querySelector('#app').innerHTML = `
  <div class="banner">
  <div class="container">
    <a href="#" target="_blank" class="banner-icon-link">
      <span class="close-icon"/>
    </a>
    <h1 class="banner__title">${tr.getUnlimitedAccess}</h1>
    <ul class="access-list">
      <li class="access-list__item">
        <img class="access-list__img" href="#" src="./images/f1.png" srcset="./images/f1@2x.png 2x, ./images/f1@3x.png 3x" alt="art"/>
        <p class="access-list__text">${tr.unlimitedArtCreation}</p>
      </li>
      <li class="access-list__item">
        <img class="access-list__img" href="#" src="./images/f2.png" srcset="./images/f2@2x.png 2x, ./images/f2@3x.png 3x" alt="styles"/>
        <p class="access-list__text">${tr.exclusiveStyles}</p>
      </li>
      <li class="access-list__item">
        <img class="access-list__img" href="#" src="./images/f3.png" srcset="./images/f3@2x.png 2x, ./images/f3@3x.png 3x" alt="avatars"/>
        <p class="access-list__text">${tr.magicAvatarsWith20Off}</p>
      </li>
    </ul>
   <form class="option">
    <div class="form_radio_btn">
      <input id="radio-1" type="radio" name="radio" value="1" checked>
      <label for="radio-1">
        <div class="per-year-wrapper">
        <h2 class="option-item__title">${tr.yarlyAccess}</h2>
          <p classs="option-item__per-year">${tr.justPricePerYear.replace(
            '{{price}}',
            getCurrency(39.99),
          )}</p>
        </div>
        <p class="option-item__week-label">${tr.pricePerWeek.replace(
          '{{price}}',
          getCurrency(0.48),
        )}</p>
        <span class="option-item__best-offer">${tr.bestOffer}</span>
    </div>
    </label>
    <div class="form_radio_btn">
      <input id="radio-2" type="radio" name="radio" value="2">
      <label for="radio-2">
      <div class="per-year-wrapper">
      <h2 class="option-item__title">${tr.weaklyAccess}</h2>
      </div>
        <p class="option-item__week-label">${tr.pricePerWeek.replace(
          '{{price}}',
          getCurrency(0.48),
        )}</p>
      </label>
    </div>
    <button class="button">${tr.continue}</button>
   </form>
   <footer class="footer">
   <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list__item"><a href="#" class="navigation-link">${
        tr.termsofUse
      }</a></li>
      <li class="navigation-list__item"><a href="#" class="navigation-link">${
        tr.privacyPolicy
      }</a></li>
      <li class="navigation-list__item"><a href="#" class="navigation-link">${tr.restore}</a></li>
    </ul>
   </nav>
   </footer>
   </div>
  </div>
`;

const form = document.querySelector('form[class=option]');
const button = form.querySelector('.button');

button.addEventListener('click', () => {
  const optionValue = form.querySelector('input[name=radio]:checked')?.value;
  event.preventDefault();
  switch (optionValue) {
    case '1':
      window.location.replace('https://apple.com/');
      break;
    case '2':
      window.location.replace('https://google.com/');
      break;
  }
});
