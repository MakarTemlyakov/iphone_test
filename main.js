import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="banner">
  <div class="container">
    <a href="#" target="_blank" class="banner-icon-link">
      <span class="close-icon"/>
    </a>
    <h1 class="banner__title">Get Unlimited Access</h1>
    <ul class="access-list">
      <li class="access-list__item">
        <img class="access-list__img" href="#" src="./images/f1.png" srcset="./images/f1@2x.png 2x" srcset="./images/f1@3x.png 3x"/>
        <p class="access-list__text">Unlimited Art Creation </p>
      </li>
      <li class="access-list__item">
        <img class="access-list__img" href="#" src="./images/f2.png" srcset="./images/f2@2x.png 2x" srcset="./images/f2@3x.png 3x"/>
        <p class="access-list__text">Exclusive Styles</p>
      </li>
      <li class="access-list__item">
        <img class="access-list__img" href="#" src="./images/f3.png" srcset="./images/f3@2x.png 2x" srcset="./images/f3@3x.png 3x"/>
        <p class="access-list__text">Magic Avatars With 20% Off </p>
      </li>
    </ul>
   <ul class="option">
    <li class="option-item--active">
      <div class="per-year-wrapper">
        <h2 class="option-item__title">Yearly access</h2>
        <p classs="option-item__per-year">Just $39.99 per year</p>
      </div>
      <div class="per-week-wrapper">
        <p class="option-item__week-price">$0.48</p>
        <p class="option-item__week-label">per week</p>
      </div>
      <span class="option-item__best-offer">best offer</span>
    </li>
    <li class="option-item">
      <div class="per-year-wrapper">
      <h2 class="option-item__title">Weekly access</h2>
      </div>
      <div class="per-week-wrapper">
        <p class="option-item__week-price">$6.99</p>
        <p class="option-item__week-label">per week</p>
      </div>
    </li>
   </ul>
   <button class="button">Continue</button>
   <footer class="footer">
   <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list__item"><a href="#" class="navigation-link">Terms of Use</a></li>
      <li class="navigation-list__item"><a href="#" class="navigation-link">Privacy Policy</a></li>
      <li class="navigation-list__item"><a href="#" class="navigation-link">Restore</a></li>
    </ul>
   </nav>
   </footer>
   </div>
  </div>
`;

console.log(navigator.language);
