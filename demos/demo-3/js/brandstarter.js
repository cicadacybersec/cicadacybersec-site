document.addEventListener('DOMContentLoaded', () => {
  // Scroll to anchor on page load if hash exists
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Smooth scroll on internal anchor link clicks
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', `#${targetId}`);
      }
    });
  });
});
