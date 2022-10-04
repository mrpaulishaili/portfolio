import BaseURL from '../utilities/BaseURL.js';

const Footer = () => {
  let el = document.querySelector('footer'),
    baseURL = BaseURL();

  el.innerHTML = `
  <ul>
  <li>
    <a
      href="https://twitter.com/mrpaulishaili"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg>
        <use xlink:href=${baseURL}/public/sprites/brands.svg#twitter></use>
      </svg>
      Twitter</a
    >
  </li>
  <li>
    <a
      href="https://github.com/mrpaulishaili"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg>
        <use xlink:href="${baseURL}/public/sprites/brands.svg#github"></use>
      </svg>
      Github
    </a>
  </li>
  <li>
    <a
      href="https://linkedIn.com/in/mrpaulishaili"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg>
        <use xlink:href="${baseURL}/public/sprites/brands.svg#linkedin"></use>
      </svg>
      LinkedIn</a
    >
  </li>
</ul>
  `;

  return el;
};

export default Footer;
