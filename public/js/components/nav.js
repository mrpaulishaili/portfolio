import BaseURL from '../utilities/BaseURL.js';

const nav = (container, data) => {
  let Link = navLink(data),
    Item = navItem(data);

  Item.append(Link);

  return container.append(Item);
};

/* CREATE NAVLINK */
const navLink = (data) => {
  const link = document.createElement('a');
  link.textContent = data.name;
  link.setAttribute('href', `${BaseURL()}${data.path}`);

  return link;
};

/* CREATE NAVITEM */
const navItem = (data) => {
  const item = document.createElement('li'),
    id = data.name.toLocaleLowerCase();
  item.setAttribute('id', id);

  return item;
};

/* CREATE NAVLIST */
const navList = () => {
  const list = document.createElement('ul');
  return list;
};

export const navEl = (d) => {
  const El = document.createElement('nav');
  const List = navList();

  for (const data of d) {
    nav(List, data);
    El.append(List);
  }
  return El;
};
