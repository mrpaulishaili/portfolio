const sendMessage = () => {
  const form = document.querySelector('form');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('updates loading...');
    form.reset();
  };
  form.addEventListener('submit', handleSubmit);
};

export default sendMessage;
