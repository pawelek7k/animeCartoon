const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElementsHtml = document.querySelectorAll('.hidden');

hiddenElementsHtml.forEach(element => {
  observer.observe(element);
});

const linksHtml = document.querySelectorAll('a');

linksHtml.forEach(link => {
  link.addEventListener('click', () => {
    event.preventDefault();
  });
});
