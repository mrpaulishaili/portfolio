import { BlogCard } from './components/blog.js';
import navData from '../../data/nav.js';
import { navLists } from './components/nav.js';
import { logo } from './components/logo.js';
import { observer } from './utilities/intersectionObserver.js';
import { showActiveNav } from './utilities/showActiveNav.js';

const DEVTO_USERNAME = 'mrpaulishaili';
const BLOG_URL = `https://dev.to/api/articles?username=${DEVTO_USERNAME}`;
const blogsDOM = document.querySelector('.blogs');

const sections = document.querySelectorAll('section');

async function blogpostsService() {
  fetch(BLOG_URL)
    .then((response) => response.json())
    .then((data) => {
      const results = data.filter((d) => d.cover_image !== null);
      for (const {
        title,
        description,
        cover_image,
        url,
        user,
        tag_list,
      } of results) {
        BlogCard(
          blogsDOM,
          title,
          description,
          cover_image,
          url,
          user,
          tag_list
        );
      }
    })
    .catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
}

if (location.pathname.includes('blog')) {
  await blogpostsService();
  let blogs;
  setTimeout(() => {
    blogs = blogsDOM.querySelectorAll('.blog');
    blogs.forEach((el) => observer.observe(el));
  }, 1000);
}

const initApp = () => {
  // HEADER NAV
  navLists(navData);
  logo();
  showActiveNav();

  sections.forEach((el) => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', initApp);
