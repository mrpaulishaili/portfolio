import { observer } from './utilities/intersectionObserver.js';
import { showActiveNav } from './utilities/showActiveNav.js';

/* IMPORT COMPONENTS */

import header from './components/header.js';
import { BlogList } from './components/blog.js';
import blogpostsService from './api/blog.api.js';

/* API VARIABLES SETUP */

const DEVTO_USERNAME = 'mrpaulishaili';
const BLOG_URL = `https://dev.to/api/articles?username=${DEVTO_USERNAME}`;

const sections = document.querySelectorAll('section');

if (location.pathname.includes('blog')) {
  await blogpostsService(BLOG_URL);

  let blogsDOM = document.querySelector('.blogs'),
    blogs;

  setTimeout(() => {
    blogs = blogsDOM.querySelectorAll('.blog');
    blogs.forEach((el) => observer.observe(el));
  }, 500);
  clearTimeout;
}

const initApp = () => {
  // HEADER NAV
  header();
  // logo();
  showActiveNav();

  sections.forEach((el) => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', initApp);
