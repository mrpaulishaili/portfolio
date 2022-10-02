import { observer } from '../utilities/intersectionObserver.js';
import Image from './generics/Image.js';

const ProjectCard = (img, title, description, liveURL) => {
  let el = document.createElement('a'),
    Image = ProjectImage(img),
    Title = ProjectTitle(title),
    Description = ProjectDescription(description);

  el.setAttribute('href', liveURL);
  el.setAttribute('target', '_blank');
  el.setAttribute('class', 'project');

  el.append(Image, Title, Description);
  return el;
};

const ProjectImage = (img) => {
  let el = Image(img, 'project__image', '160', 200, 'project__image');
  return el;
};

const ProjectTitle = (title) => {
  let el = document.createElement('h3');
  el.textContent = title;
  return el;
};

const ProjectDescription = (description) => {
  let el = document.createElement('p');
  el.textContent = description;
  return el;
};

const ProjectsList = (data) => {
  let el = document.querySelector('.projects'),
    { img, title, description, liveURL } = data,
    Card = ProjectCard(img, title, description, liveURL);

  el.append(Card);
  return el;
};

const populateProjects = (data) => {
  data.forEach((elData) => {
    ProjectsList(elData);
  });

  let projects = document.querySelectorAll('.project');
  projects.forEach((el) => observer.observe(el));
};

const ProjectGithubIcon = () => {};

export default populateProjects;