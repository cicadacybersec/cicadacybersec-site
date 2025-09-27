document.addEventListener('DOMContentLoaded', () => {
  // Toggle FAQ items
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });

  // Handle CTA button simulation
  const ctaButtons = document.querySelectorAll('#cta-top, #cta-mid, #cta-bottom');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('✅ Simulated checkout: €100. In production, redirect to Stripe or collect details.');
    });
  });
});
