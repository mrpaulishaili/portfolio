import BaseURL from '../../utilities/BaseURL.js';

const svg = (type, name) => {
  let el = document.createElement('svg');
  let child = document.createElement('use');

  el.onload = child.setAttribute(
    'xlink:href',
    `./public/sprites/${type}.svg#${name}`
  );

  el.append(child);

  return el;
};

export default svg;
