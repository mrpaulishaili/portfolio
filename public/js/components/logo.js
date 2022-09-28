export const logo = () => {
  let logoEl = document.createElement('a');

  logoEl.setAttribute('class', 'logo');
  logoEl.textContent = 'mrp';
  logoEl.href =
    !location.href.includes('localhost') && !location.href.includes('127.0.0.1')
      ? `/portfolio`
      : `/dist`;

  return logoEl;
};
