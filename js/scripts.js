document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll to sections for all menu links
  const menuLinks = document.querySelectorAll('#menu li a[href="#"]');

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetID = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // adjust for fixed header height
          behavior: 'smooth',
        });
      }
    });
  });

  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('menu');
  const hamburger = document.getElementById('hamburger');

  // Open menu on hamburger click
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.style.display = 'flex';
      if (mobileMenuCloseBtn) mobileMenuCloseBtn.style.display = 'flex';
    });
  }

  // Mobile menu close button logic
  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', () => {
      if (menu) {
        menu.style.display = 'none';
      }
      mobileMenuCloseBtn.style.display = 'none';
    });
  }

  // Optional: Show mobile menu close button only on mobile screen sizes
  function toggleMobileMenuButton() {
    const width = window.innerWidth;
    if (width <= 768) {
      if (mobileMenuCloseBtn) mobileMenuCloseBtn.style.display = 'flex';
      if (menu) menu.style.display = 'none'; // hide menu initially on mobile
    } else {
      if (mobileMenuCloseBtn) mobileMenuCloseBtn.style.display = 'none';
      if (menu) menu.style.display = 'flex';
    }
  }

  window.addEventListener('resize', toggleMobileMenuButton);
  toggleMobileMenuButton();

  // View More Projects button logic
  const viewMoreBtn = document.getElementById('view-more-projects');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      const projects = document.querySelectorAll('.project.hidden');
      projects.forEach(p => p.classList.remove('hidden'));
      viewMoreBtn.style.display = 'none';
    });
  }
});
