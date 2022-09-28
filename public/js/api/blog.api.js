import BlogList from '../components/blog.js';
import { observer } from '../utilities/intersectionObserver.js';

async function blogpostsService(URL) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => populateBlog(data))
    .catch((err) => console.warn('Something went wrong.', err));
}

const populateBlog = (data) => {
  if (location.pathname.includes('blog')) {
    const results = data.filter((d) => d.cover_image !== null);
    for (const result of results) {
      BlogList(result);
    }

    let blogsDOM = document.querySelector('.blogs'),
      blogs;

    setTimeout(() => {
      blogs = blogsDOM.querySelectorAll('.blog');
      blogs.forEach((el) => observer.observe(el));
    }, 500);
    clearTimeout;
  }
};

export default blogpostsService;
