export const nav = (navData) => {
  const navEl = document.createElement('nav');
  const navList = document.createElement('ul');
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');

  for (const { name, path } of navData) {
    navLink.textContent = name;
    navLink.href = path;

    navItem.appendChild(navLink);

    navList.append(navItem);
  }

  navEl.append(navList);
};
