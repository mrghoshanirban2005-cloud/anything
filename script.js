const form = document.querySelector('#workshop-form');
const feedback = document.querySelector('#feedback');
const characterCount = document.querySelector('#character-count');
const thankYou = document.querySelector('#thank-you');
const newResponse = document.querySelector('#new-response');

feedback.addEventListener('input', () => {
  characterCount.textContent = `${feedback.value.length} / 500`;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.hidden = true;
  document.querySelector('.content-grid').querySelector('.section-intro').hidden = true;
  thankYou.hidden = false;
  thankYou.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

newResponse.addEventListener('click', () => {
  form.reset();
  characterCount.textContent = '0 / 500';
  form.hidden = false;
  document.querySelector('.content-grid').querySelector('.section-intro').hidden = false;
  thankYou.hidden = true;
  document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
});