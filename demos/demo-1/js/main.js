document.addEventListener('DOMContentLoaded', function () {
  // 🔹 Form Submission Handling
  const form = document.getElementById('lead-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      website: formData.get('website')
    };

    console.log('Lead submitted:', data);

    // Reset form and show confirmation
    form.reset();
    alert('Thanks! We received your request. We’ll be in touch.');
  });

  // 🔹 Scroll-triggered Fade-in Animation
  const fadeElements = document.querySelectorAll('.benefit, .testimonials blockquote');

  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
  });

  function revealOnScroll() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  }

  // Initial reveal on load + on scroll
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
});
