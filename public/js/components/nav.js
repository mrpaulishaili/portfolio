const nav = (container, data) => {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');

  navLink.textContent = data.name;
  navLink.href = !location.href.includes('localhost')
    ? `/portfolio${data.path}`
    : `/dist${data.path}`;

  navItem.append(navLink);

  return container.append(navItem);
};

export const navLists = (d) => {
  const navList = document.createElement('ul');
  const navEl = document.createElement('nav');

  for (const data of d) {
    nav(navList, data);
    navEl.append(navList);
  }

  document.querySelector('header').append(navEl);
};
