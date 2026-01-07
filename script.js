// Add subtle sketch wobble animation to cards on load
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');

  // Stagger card entrance
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';

      // Reset transform after animation so hover still works
      setTimeout(() => {
        card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
      }, 400);
    }, 100 + index * 100);
  });

  // Add slight rotation to sketch lines for hand-drawn feel
  document.querySelectorAll('.sketch-line').forEach((line) => {
    const randomRotation = (Math.random() - 0.5) * 0.5;
    const randomOffset = (Math.random() - 0.5) * 1;
    line.style.transform = `rotate(${randomRotation}deg) translate(${randomOffset}px, ${randomOffset}px)`;
  });
});

// Optional: Add pencil cursor on hover (uncomment if desired)
// document.querySelectorAll('.project-card').forEach(card => {
//   card.style.cursor = 'url("data:image/svg+xml,..."), pointer';
// });
