const carousels = document.querySelectorAll('.carousel');

carousels.forEach((c) => {
  c.dataset.index = 0;
  createIndicator(c);
  nextSlide(c);
  const imgs = c.querySelectorAll('img');
  setTimeout(() => {
    imgs.forEach((img) => {
      img.style.transition = 'left 0.5s var(--spinup-ease)';
    });
  }, 0);

  const duration = c.dataset.duration ? parseFloat(c.dataset.duration) : 5000;
  // const duration = parseInt(c.dataset.duration);
  setInterval(() => {
    nextSlide(c);
  }, duration);
});

function createIndicator(carousel) {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  const imgs = carousel.querySelectorAll('img');
  imgs.forEach(() => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    indicator.appendChild(dot);
  });
  carousel.appendChild(indicator);
}

function nextSlide(carousel) {
  carousel.querySelector('.center')?.classList.remove('center');
  carousel.querySelector('.left')?.classList.remove('left');
  carousel.querySelector('.dot.active')?.classList.remove('active');
  const index = parseInt(carousel.dataset.index);
  const imgs = carousel.querySelectorAll('img');
  const dots = carousel.querySelectorAll('.dot');
  const leftIndex = (index === 0) ? imgs.length-1 : index - 1;
  dots[index].classList.add('active');
  imgs[index].classList.add('center');
  imgs[leftIndex].classList.add('left');
  carousel.dataset.index = (index + 1) % imgs.length;
}