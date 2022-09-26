import { BlogCard } from './components/blog.js';
import navData from '../../data/nav.js';
import { navLists } from './components/nav.js';
import { logo } from './components/logo.js';

const DEVTO_USERNAME = 'mrpaulishaili';
const BLOG_URL = `https://dev.to/api/articles?username=${DEVTO_USERNAME}`;
const blogsDOM = document.querySelector('.blogs');

function blogpostsService() {
  fetch(BLOG_URL)
    .then((response) => response.json())
    .then((data) => {
      const results = data.filter((d) => d.cover_image !== null);
      for (const { title, description, cover_image, url } of results) {
        BlogCard(blogsDOM, title, description, cover_image, url);
      }
    })
    .catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
}

const initApp = async () => {
  blogpostsService();

  // HEADER NAV
  navLists(navData);
  logo();
  console.log(location.pathname);
};

document.addEventListener('DOMContentLoaded', initApp);
