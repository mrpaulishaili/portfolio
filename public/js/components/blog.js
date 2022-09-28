const BlogCard = (title, description, cover_image, url, user, tag_list) => {
  let el = document.createElement('div'),
    Link = BlogLink(url),
    Illustration = BlogIllustration(cover_image),
    Title = BlogTitle(title),
    Description = BlogDescription(description),
    Author = BlogAuthor(user),
    Tags = BlogTags(tag_list, 2);

  el.classList.add('blog');
  el.append(Illustration, Tags, Title, Description, Author, Link);

  return el;
};

/* BLOG LISTS */
const BlogList = (result) => {
  let el = document.querySelector('.blogs'),
    { title, description, cover_image, url, user, tag_list } = result,
    Blog = BlogCard(title, description, cover_image, url, user, tag_list);

  return el.append(Blog);
};

/* ------------- COMPONENTS ----------------*/
const BlogIllustration = (cover_image) => {
  let el = Image(cover_image, 'blog__illustration', 160, 200, 'Blog Image');

  return el;
};

const BlogTitle = (title) => {
  let el = document.createElement('h3');
  el.textContent = title;

  return el;
};

const BlogDescription = (description) => {
  let el = document.createElement('p');
  el.textContent = description;

  return el;
};

const BlogAuthorImage = (user) => {
  let el = Image(
    user.profile_image,
    'blog__author--image',
    20,
    20,
    'Author Image'
  );

  return el;
};

const BlogAuthor = (user) => {
  let el = document.createElement('div'),
    AuthorName = BlogAuthorName(user),
    AuthorImage = BlogAuthorImage(user);

  el.setAttribute('class', 'blog__author');

  el.append(AuthorImage, AuthorName);

  return el;
};

const BlogAuthorName = ({ name }) => {
  let el = document.createElement('p');

  el.textContent = name;

  return el;
};

const BlogTags = (dataTags, limit = 2) => {
  let el = document.createElement('div');
  el.setAttribute('class', 'blog__tags');

  dataTags.slice(0, limit).forEach((data) => {
    let tagEl = tag(data);
    el.append(tagEl);
  });

  return el;
};

/* BLOG LINK */
const BlogLink = (url) => {
  let el = document.createElement('a');

  el.setAttribute('href', url);
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener noreferrer');
  el.setAttribute('class', 'button');

  el.textContent = 'Read more';

  return el;
};

const BlogDate = (date) => {
  let el = document.createElement('p');
  return el;
};

/* ---------------- GENERICS ----------------------- */

const tag = (text) => {
  let el = document.createElement('p');
  el.textContent = text;
  el.setAttribute('class', 'blog__tags');
  return el;
};

const Image = (src, classes, height = 100, width = 100, alt = 'image') => {
  let el = document.createElement('img');

  el.setAttribute('src', src);
  el.setAttribute('height', height);
  el.setAttribute('width', width);
  el.setAttribute('alt', alt);
  el.setAttribute('class', classes);

  return el;
};

/* ---------------- END OF GENERICS ----------------------- */

/* ---------------- END OF COMPONENTS ----------------------- */

export default BlogList;
