import { observer } from './utilities/intersectionObserver.js';
import { showActiveNav } from './utilities/showActiveNav.js';

/* IMPORT COMPONENTS */
import header from './components/header.js';
import blogpostsService from './api/blog.api.js';
import sendMessage from './utilities/sendMessage.js';
import populateProjects from './components/project.js';
import { projectsData } from '../../data/projects.js';
import Footer from './components/footer.js';
import populateClients from './components/client.js';
import clientsData from '../../data/clients.js';

/* API VARIABLES SETUP */
const DEVTO_USERNAME = 'mrpaulishaili';
const BLOG_URL = `https://dev.to/api/articles?username=${DEVTO_USERNAME}`;

const initApp = async () => {
  header();
  showActiveNav();
  Footer();

  populateClients(clientsData);

  const sections = document.querySelectorAll('section');
  sections.forEach((el) => observer.observe(el));

  if (location.pathname.includes('blog')) {
    await blogpostsService(BLOG_URL);
  }

  if (location.href.includes('contact')) {
    sendMessage();
    console.log(location);
  }

  if (location.href.includes('projects')) {
    let results = projectsData;
    populateProjects(results);
  }
};

document.addEventListener('DOMContentLoaded', initApp);
