const sendMessage = () => {
  const form = document.querySelector('form');
  console.log('loaded');
  const handleSubmit = (e) => {
    e.preventDefault();

    alert('updates loading...');
    form.reset();
  };
  form.addEventListener('submit', handleSubmit);
};

export default sendMessage;
