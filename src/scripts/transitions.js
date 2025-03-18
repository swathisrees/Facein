document.addEventListener('astro:page-load', () => {
  document.body.classList.add('page-enter');
  setTimeout(() => document.body.classList.remove('page-enter'), 400);

  document.querySelectorAll('[data-animate]').forEach((element, index) => {
    element.style.animationDelay = `${index * 50}ms`;
    requestAnimationFrame(() => element.classList.add('animated', 'reveal'));
  });
});

document.addEventListener('astro:before-preparation', () => {
  document.body.classList.add('page-exit');
});
