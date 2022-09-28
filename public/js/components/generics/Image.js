const Image = (src, classes, height = 100, width = 100, alt = 'image') => {
  let el = document.createElement('img');

  el.setAttribute('src', src);
  el.setAttribute('height', height);
  el.setAttribute('width', width);
  el.setAttribute('alt', alt);
  el.setAttribute('class', classes);
  el.setAttribute('loading', 'lazy');

  return el;
};

export default Image;
