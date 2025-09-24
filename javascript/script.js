
  const hamburger = document.querySelector('.hamburger-container');
  const navMenu = document.querySelector('.header-container nav ul');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // Close menu after clicking a link (good for mobile UX)
  document.querySelectorAll('.header-container nav ul li a')
    .forEach(link => link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('open');
    }));
