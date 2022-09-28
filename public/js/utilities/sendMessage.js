const sendMessage = () => {
  const form = document.querySelector('form');

  const handleSubmit = (e) => {
    e.preventDefault();

    form.reset();

    alert('updates loading...');
  };
  form.addEventListener('submit', handleSubmit);
};

export default sendMessage;
