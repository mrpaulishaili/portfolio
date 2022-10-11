import BaseURL from '../utilities/BaseURL.js';

const client = (name, logo, description, tasks, liveURL) => {
  let el = document.createElement('div'),
    Header = header(),
    Logo = clientLogo(logo, name),
    Description = clientDescription(description, liveURL);

  Header.append(Logo, Description);

  el.setAttribute('class', 'client');

  el.append(Header);

  return el;
};

const header = () => {
  let el = document.createElement('div');

  el.setAttribute('class', 'header');

  return el;
};

const clientLogo = (imgName, name) => {
  let el = document.createElement('img');

  el.setAttribute('class', 'client__logo');

  el.setAttribute('src', `${BaseURL()}/public/media/images/clients/${imgName}`);

  el.setAttribute('height', 100);
  el.setAttribute('width', 100);

  el.setAttribute('alt', `${name} logo`);

  return el;
};

const clientDescription = (desc, link) => {
  let el = document.createElement('div'),
    p = document.createElement('p'),
    Link = document.createElement('a');

  p.textContent = desc;

  Link.setAttribute('href', link);
  Link.innerHTML = `<svg>
  <use xlink:href="./public/sprites/solid.svg#eye"></use>
</svg>
See work</a
>`;
  Link.setAttribute('class', 'button cta');
  Link.setAttribute('rel', 'noopener noreferrer');
  Link.setAttribute('target', '_blank');

  el.setAttribute('class', 'client__description');
  el.append(p, Link);

  return el;
};

const taskItem = (d) => {
  let el = document.createElement('li');
  el.textContent = d;
  return el;
};

const populateClients = (allData) => {
  let el = document.querySelector('.clients');

  for (const data of allData) {
    let { name, logo, description, tasks, liveURL } = data;
    let Client = client(name, logo, description, tasks, liveURL);

    el.append(Client);
  }

  return el;
};

export default populateClients;
