import BlogList from '../components/blog.js';
import { observer } from '../utilities/intersectionObserver.js';

async function blogpostsService(URL) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => populateBlog(data))
    .catch((err) => console.warn('Something went wrong.', err));
}

const populateBlog = (data) => {
  const results = data.filter((d) => d.cover_image !== null);
  for (const result of results) {
    BlogList(result);
  }

  let blogsDOM = document.querySelector('.blogs');

  blogsDOM.querySelectorAll('.blog').forEach((el) => observer.observe(el));
};

export default blogpostsService;
