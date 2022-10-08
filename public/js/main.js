import { observer } from './utilities/intersectionObserver.js';
import { showActiveNav } from './utilities/showActiveNav.js';

/* IMPORT COMPONENTS */
import header from './components/header.js';
import blogpostsService from './api/blog.api.js';
import sendMessage from './utilities/sendMessage.js';
import Footer from './components/footer.js';
import populateClients from './components/client.js';
import clientsData from '../../data/clients.js';
import populateAchievements from './components/achievement.js';
import achievements from '../../data/achievements.js';

/* API VARIABLES SETUP */
const DEVTO_USERNAME = 'mrpaulishaili';
const BLOG_URL = `https://dev.to/api/articles?username=${DEVTO_USERNAME}`;

const initApp = async () => {
  header();
  showActiveNav();
  Footer();

  const sections = document.querySelectorAll('section');
  sections.forEach((el) => observer.observe(el));

  if (!location.pathname.includes('pages')) {
    populateClients(clientsData);
    populateAchievements(achievements);
  }

  if (location.pathname.includes('blog')) {
    await blogpostsService(BLOG_URL);
  }

  if (location.href.includes('contact')) {
    sendMessage();
    console.log(location);
  }
};

document.addEventListener('DOMContentLoaded', initApp);
