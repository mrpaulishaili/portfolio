export const logo = () => {
  let logoEl = document.createElement('a');

  logoEl.classList.add('logo');
  logoEl.textContent = 'mrp';
  logoEl.href = '/';

  document.querySelector('header').prepend(logoEl);
};
