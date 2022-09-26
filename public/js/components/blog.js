export const BlogCard = (container, title, description, cover_image, url) => {
  const blogElement = document.createElement('div'),
    blogLink = document.createElement('a'),
    blogDescription = document.createElement('p'),
    blogTitle = document.createElement('h3'),
    blogIllustration = document.createElement('img');

  blogLink.href = url;
  blogLink.target = '_blank';
  blogLink.rel = 'noopener noreferrer';
  blogLink.textContent = 'Read more';
  blogLink.classList.add('button');

  blogTitle.textContent = title;
  blogDescription.textContent = description;
  cover_image !== null ? (blogIllustration.src = cover_image) : '';
  blogIllustration.height = 200;
  blogIllustration.width = 160;

  blogElement.append(blogIllustration, blogTitle, blogDescription, blogLink);

  container.append(blogElement);
};
