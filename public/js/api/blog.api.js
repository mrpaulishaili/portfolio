import { BlogList } from '../components/blog.js';

async function blogpostsService(URL) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => populateBlog(data))
    .catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
}

const populateBlog = (data) => {
  const results = data.filter((d) => d.cover_image !== null);
  for (const result of results) {
    BlogList(result);
  }
};

export default blogpostsService;
