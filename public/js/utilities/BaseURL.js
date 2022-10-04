const BaseURL = () => {
  return !location.href.includes('localhost') &&
    !location.href.includes('127.0.0.1')
    ? `/portfolio`
    : `/dist`;
};

export default BaseURL;
