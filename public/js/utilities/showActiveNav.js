import navData from '../../../data/nav.js';

export const showActiveNav = () => {
  let navId,
    locationPath = location.pathname;
  const addActiveClass = (el) => {
    const navDOM = document.querySelector('nav');
    const navList = document.querySelectorAll('nav li');

    navList.forEach((li) => {
      li.classList.remove('active');
    });

    navDOM.querySelector(`#${el}`).classList.add('active');
  };

  for (const nav of navData) {
    navId = nav.name.toLocaleLowerCase();
    if (locationPath.includes(navId)) {
      addActiveClass(navId);
    }
  }
};
