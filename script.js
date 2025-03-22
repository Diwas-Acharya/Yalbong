document.addEventListener('DOMContentLoaded', function() {
  // Carousel functionality
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-button.prev');
  const nextBtn = document.querySelector('.carousel-button.next');
  let currentSlide = 0;
  let interval;

  // Function to show a specific slide
  function showSlide(index) {
      // Remove active class from all slides
      slides.forEach(slide => {
          slide.classList.remove('active');
      });
      
      // Add active class to current slide
      slides[index].classList.add('active');
  }

  // Function to show next slide
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  // Function to show previous slide
  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  }

  // Set up event listeners for buttons
  nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
  });

  prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
  });

  // Auto advance slides
  function startInterval() {
      interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  function resetInterval() {
      clearInterval(interval);
      startInterval();
  }

  // Initialize carousel
  startInterval();

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          const headerHeight = document.querySelector('header').offsetHeight;
          
          window.scrollTo({
              top: targetElement.offsetTop - headerHeight,
              behavior: 'smooth'
          });
      });
  });
});