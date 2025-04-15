// Features Rotator
function initFeatureRotator() {
  const slides = document.querySelectorAll('.feature-slide');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let interval;

  if (slides.length === 0 || dots.length === 0) return;

  function showSlide(index) {
    slides.forEach(slide => {
      slide.classList.remove('active');
      slide.style.transform = 'translateX(100%)';
    });
    dots.forEach(dot => dot.classList.remove('active'));

    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
    slides[currentIndex].style.transform = 'translateX(0)';
    dots[currentIndex].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function startAutoRotate() {
    interval = setInterval(nextSlide, 3000);
  }

  const rotator = document.querySelector('.rotator-container');
  if (rotator) {
    rotator.addEventListener('mouseenter', () => clearInterval(interval));
    rotator.addEventListener('mouseleave', startAutoRotate);

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        clearInterval(interval);
        showSlide(parseInt(dot.dataset.index));
        startAutoRotate();
      });
    });

    showSlide(0);
    startAutoRotate();
  }
}

// Mobile Navigation
function setupMobileNav() {
  const navToggle = document.createElement('button');
  navToggle.classList.add('nav-toggle');
  navToggle.innerHTML = '<i class="fas fa-bars"></i>';
  const navContainer = document.querySelector('.nav-container');
  if (navContainer) {
    navContainer.appendChild(navToggle);

    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.innerHTML = navLinks.classList.contains('active')
          ? '<i class="fas fa-times"></i>'
          : '<i class="fas fa-bars"></i>';
      });
    }
  }
}

// Form Handling
function setupForms() {
  // Signup Form (Home Page)
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your interest! We will contact you soon.');
      this.reset();
    });
  }

  // Newsletter Form (Footer)
  const newsletterBtn = document.getElementById('newsletter-btn');
  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', function () {
      const email = document.getElementById('newsletter-email').value;
      if (email) {
        alert('Thank you for subscribing to our newsletter!');
        document.getElementById('newsletter-email').value = '';
      } else {
        alert('Please enter your email address');
      }
    });
  }

  // Contact Form (Contact Page)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! We will get in touch soon.');
      this.reset();
    });
  }

  // Waiting List Form (Blogs Page)
  const waitingListForm = document.getElementById('waiting-list-form');
  if (waitingListForm) {
    waitingListForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for joining the waiting list!');
      this.reset();
    });
  }

  // Login Form (Login Page)
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Login successful! (This is a placeholder action)');
      this.reset();
    });
  }
}

// Smooth Scrolling for Anchor Links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Intersection Observer for Animations
function setupIntersectionObserver() {
  const animatedElements = document.querySelectorAll('.yellow-bg, .whatsapp-container, .appointment-container, .staff-management, .believe-card, .blog-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.8s ease forwards';
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(element => observer.observe(element));
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', function () {
  initFeatureRotator();
  setupMobileNav();
  setupForms();
  setupSmoothScrolling();
  setupIntersectionObserver();
});

window.addEventListener('load', function() {
  const sections = document.querySelectorAll('.header-content, .yellow-bg, .whatsapp-container, .appointment-container, .staff-management, .cta-content, .believe-section, .blog-grid, .contact-form, .login-form, .social-follow');
  sections.forEach(section => {
    section.classList.add('visible');
  });
});