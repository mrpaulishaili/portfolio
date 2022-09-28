import { observer } from './utilities/intersectionObserver.js';
import { showActiveNav } from './utilities/showActiveNav.js';

/* IMPORT COMPONENTS */
import header from './components/header.js';
import blogpostsService from './api/blog.api.js';
import sendMessage from './utilities/sendMessage.js';

/* API VARIABLES SETUP */
const DEVTO_USERNAME = 'mrpaulishaili';
const BLOG_URL = `https://dev.to/api/articles?username=${DEVTO_USERNAME}`;

await blogpostsService(BLOG_URL);

const initApp = () => {
  header();
  showActiveNav();

  const sections = document.querySelectorAll('section');
  sections.forEach((el) => observer.observe(el));

  if (location.href.includes('contact')) {
    sendMessage();
  }
};

document.addEventListener('DOMContentLoaded', initApp);
