import './style.css';

import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="./logout_page.html" target="_blank">
      X
    </a>
    <h1>Get Unlimited Access</h1>
    <ul>
      <li>
        <img href="#" src=""/>
        <p>Unlimited Art Creation </p>
      </li>
      <li>
        <img href="#" src=""/>
        <p>Exclusive Styles</p>
      </li>
      <li>
        <img href="#" src=""/>
        <p>Magic Avatars With 20% Off </p>
      </li>
    </ul>
   <ul>
    <li>
      <h2>Yearly access</h2>
      <p>Just $39.99 per year</p>
      <p>$0.48 per week</p>
      <span>best offer</span>
    </li>
    <li>
      <h2>Yearly access</h2>
      <p>$0.48 per week</p>
    </li>
   </ul>
   <button>Continue</button>
   <footer>
   <ul>
      <li>Terms of Use </li>
      <li>Privacy Policy</li>
      <li>Restore</li>
   </ul>
   </footer>
  </div>
`;

setupCounter(document.querySelector('#counter'));
