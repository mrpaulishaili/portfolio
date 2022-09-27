export const BlogCard = (
  container,
  title,
  description,
  cover_image,
  url,
  user,
  tag_list
) => {
  const blogElement = document.createElement('div'),
    blogLink = document.createElement('a'),
    blogDescription = document.createElement('p'),
    blogTitle = document.createElement('h3'),
    blogIllustration = document.createElement('img'),
    blogDate = document.createElement('p'),
    blogAuthor = document.createElement('div'),
    blogAuthorImage = document.createElement('img'),
    blogAuthorName = document.createElement('p'),
    blogTags = document.createElement('div');

  tag_list.slice(0, 2).forEach((tag) => {
    const blogTag = document.createElement('p');

    blogTag.classList.add('blog__tag');
    blogTag.textContent = tag;

    blogTags.append(blogTag);
  });

  blogTags.classList.add('blog__tags');

  blogAuthorImage.src = user.profile_image;
  blogAuthorImage.height = 20;
  blogAuthorImage.width = 20;
  blogAuthorImage.classList.add('blog__author--image');

  blogAuthorName.textContent = user.name;

  blogAuthor.classList.add('blog__author');

  blogAuthor.append(blogAuthorImage, blogAuthorName, blogDate);

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
  blogIllustration.classList.add('blog__illustration');

  blogElement.classList.add('blog');
  blogElement.append(
    blogIllustration,
    blogTags,
    blogTitle,
    blogDescription,
    blogAuthor,
    blogLink
  );

  return container.append(blogElement);
};
