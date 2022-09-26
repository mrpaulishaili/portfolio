export const logo = () => {
  let logoEl = document.createElement('a');

  logoEl.classList.add('logo');
  logoEl.textContent = 'mrp';
  logoEl.href = !location.href.includes('localhost' && '127.0.0.1')
    ? `/portfolio`
    : `/dist`;
  document.querySelector('header').prepend(logoEl);
};
