const achievement = (data) => {
  let el = document.createElement('img');

  el.setAttribute('src', data.imgSrc);
  el.setAttribute('alt', data.name);
  el.setAttribute('height', 120);
  el.setAttribute('width', 120);
  el.setAttribute('loading', 'lazy');

  return el;
};

const populateAchievements = (data) => {
  let el = document.querySelector('.achievements');

  for (const d of data) {
    let Item = achievement(d);

    el.append(Item);
  }

  return el;
};

export default populateAchievements;
