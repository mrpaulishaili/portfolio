import navData from '../../../data/nav.js';
import { logo } from './logo.js';
import { navEl } from './nav.js';

const header = () => {
  const headerEl = document.querySelector('header');
  const navElem = navEl(navData);
  const logoElem = logo();

  headerEl.prepend(logoElem);
  headerEl.append(navElem);
};

export default header;

// customElements.define(
//   "header",
//   class extends HTMLElement{

//     constructor(){
//       super();

//       let el =  document.querySelector('header');
//     }
//   }
// )
