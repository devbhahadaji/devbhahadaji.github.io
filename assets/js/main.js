/* ===================================================================
   PORTFOLIO INTERACTIVE FEATURES
   Modern JavaScript with ES6+ features and performance optimization
   ================================================================= */

(function() {
  'use strict';

  // ===================================================================
  // UTILITIES AND HELPERS
  // ===================================================================
  
  const utils = {
    // Debounce helper for performance optimization
    debounce(func, wait, immediate) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          timeout = null;
          if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
      };
    },

    // Throttle helper for scroll events
    throttle(func, limit) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    // Check if element is in viewport
    isInViewport(element, threshold = 0.1) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * (1 + threshold) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },

    // Smooth scroll to element
    smoothScrollTo(element, offset = 80) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    projectCards: document.querySelectorAll('.project-card'),
    filterBtns: document.querySelectorAll('.filter-btn')
  };
  new ProjectFilter(elements);
});

  // ===================================================================
  // DOM ELEMENTS
  // ===================================================================
  
  const elements = {
    navbar: document.getElementById('navbar'),
    navToggle: document.getElementById('nav-toggle'),
    navMenu: document.getElementById('nav-menu'),
    navLinks: document.querySelectorAll('.nav-link'),
    backToTop: document.getElementById('back-to-top'),
    themeToggle: document.getElementById('theme-toggle'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    projectCards: document.querySelectorAll('.project-card'),
    contactForm: document.getElementById('contact-form'),
    animateElements: document.querySelectorAll('.animate-on-scroll'),
    typedText: document.getElementById('typed-text')
  };

  // ===================================================================
  // NAVIGATION FUNCTIONALITY
  // ===================================================================
  
  class Navigation {
    constructor() {
      this.isMenuOpen = false;
      this.init();
    }

    init() {
      this.handleScroll();
      this.handleMobileMenu();
      this.handleSmoothScroll();
      this.handleActiveLinks();
      
      // Event listeners
      window.addEventListener('scroll', utils.throttle(() => this.handleScroll(), 16));
      elements.navToggle?.addEventListener('click', () => this.toggleMobileMenu());
      
      // Close mobile menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!elements.navMenu.contains(e.target) && !elements.navToggle.contains(e.target)) {
          this.closeMobileMenu();
        }
      });
    }

    handleScroll() {
      const scrolled = window.pageYOffset > 50;
      elements.navbar?.classList.toggle('scrolled', scrolled);
      
      // Update active navigation links
      this.updateActiveNavLinks();
    }

    toggleMobileMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      elements.navMenu?.classList.toggle('active', this.isMenuOpen);
      elements.navToggle?.classList.toggle('active', this.isMenuOpen);
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }

    closeMobileMenu() {
      this.isMenuOpen = false;
      elements.navMenu?.classList.remove('active');
      elements.navToggle?.classList.remove('active');
      document.body.style.overflow = '';
    }

    handleMobileMenu() {
      elements.navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            this.closeMobileMenu();
          }
        });
      });
    }

    handleSmoothScroll() {
      elements.navLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
              utils.smoothScrollTo(targetElement);
            }
          });
        }
      });

      // Smooth scroll for other elements
      document.querySelectorAll('.smooth-scroll').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            utils.smoothScrollTo(targetElement);
          }
        });
      });
    }

    updateActiveNavLinks() {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.pageYOffset + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          elements.navLinks.forEach(link => link.classList.remove('active'));
          navLink?.classList.add('active');
        }
      });
    }

    handleActiveLinks() {
      // Set initial active link
      this.updateActiveNavLinks();
    }
  }

  // ===================================================================
  // PROJECT FILTERING
  // ===================================================================
  
  class ProjectFilter {
    constructor() {
      this.activeFilter = 'all';
      this.init();
    }

    init() {
      if (!elements.filterBtns.length) return;

      elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const filter = btn.getAttribute('data-filter');
          this.filterProjects(filter);
          this.updateActiveButton(btn);
        });
      });
    }

    filterProjects(filter) {
      this.activeFilter = filter;
      
      elements.projectCards.forEach(card => {
        const cardTech = card.getAttribute('data-tech') || '';
        const techArray = cardTech.split(' ').filter(tech => tech.length > 0);
        const shouldShow = filter === 'all' || techArray.includes(filter.toLowerCase());
        
        if (shouldShow) {
          card.style.display = 'block';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          
          // Animate in
          setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 100);
        } else {
          card.style.transition = 'all 0.3s ease';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    }

    updateActiveButton(activeBtn) {
      elements.filterBtns.forEach(btn => btn.classList.remove('active'));
      activeBtn.classList.add('active');
    }
  }

  // ===================================================================
  // SCROLL ANIMATIONS
  // ===================================================================
  
  class ScrollAnimations {
    constructor() {
      this.animatedElements = [];
      this.init();
    }

    init() {
      if (!elements.animateElements.length) return;

      // Set up intersection observer for better performance
      this.observer = new IntersectionObserver(
        (entries) => this.handleIntersection(entries),
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      elements.animateElements.forEach(el => {
        this.observer.observe(el);
      });
    }

    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          
          // Add staggered animation for grid items
          if (entry.target.parentElement.classList.contains('projects-grid') ||
              entry.target.parentElement.classList.contains('skills-grid')) {
            const siblings = Array.from(entry.target.parentElement.children);
            const index = siblings.indexOf(entry.target);
            entry.target.style.animationDelay = `${index * 0.1}s`;
          }
        }
      });
    }
  }

  // ===================================================================
  // CONTACT FORM HANDLING
  // ===================================================================
  
  class ContactForm {
    constructor() {
      this.isSubmitting = false;
      this.init();
    }

    init() {
      if (!elements.contactForm) return;

      elements.contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
      
      // Add real-time validation
      const inputs = elements.contactForm.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearFieldError(input));
      });
    }

    async handleSubmit(e) {
      e.preventDefault();
      
      if (this.isSubmitting) return;
      
      const submitBtn = document.getElementById('submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      const formStatus = document.getElementById('form-status');
      
      // Validate form
      if (!this.validateForm()) {
        this.showStatus('Please fill in all required fields correctly.', 'error');
        return;
      }

      // Show loading state
      this.isSubmitting = true;
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoading.style.display = 'inline-flex';

      try {
        const formData = new FormData(elements.contactForm);
        
        // Simulate form submission (replace with actual endpoint)
        const response = await fetch(elements.contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          this.showStatus('Thank you! Your message has been sent successfully.', 'success');
          elements.contactForm.reset();
          
          // Redirect after success
          setTimeout(() => {
            window.location.href = '/thank-you';
          }, 2000);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        this.showStatus('Sorry, there was an error sending your message. Please try again.', 'error');
      } finally {
        // Reset button state
        this.isSubmitting = false;
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
      }
    }

    validateForm() {
      const requiredFields = elements.contactForm.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!this.validateField(field)) {
          isValid = false;
        }
      });

      return isValid;
    }

    validateField(field) {
      const value = field.value.trim();
      let isValid = true;
      let errorMessage = '';

      // Required field validation
      if (field.hasAttribute('required') && !value) {
        errorMessage = 'This field is required.';
        isValid = false;
      }

      // Email validation
      if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMessage = 'Please enter a valid email address.';
          isValid = false;
        }
      }

      // Show/hide error
      this.toggleFieldError(field, errorMessage);
      
      return isValid;
    }

    toggleFieldError(field, message) {
      const group = field.closest('.form-group');
      let errorElement = group.querySelector('.field-error');

      if (message) {
        if (!errorElement) {
          errorElement = document.createElement('div');
          errorElement.className = 'field-error';
          group.appendChild(errorElement);
        }
        errorElement.textContent = message;
        field.classList.add('error');
      } else {
        if (errorElement) {
          errorElement.remove();
        }
        field.classList.remove('error');
      }
    }

    clearFieldError(field) {
      this.toggleFieldError(field, '');
    }

    showStatus(message, type) {
      const formStatus = document.getElementById('form-status');
      if (!formStatus) return;

      formStatus.textContent = message;
      formStatus.className = `form-status ${type}`;
      formStatus.style.display = 'block';

      // Auto-hide success messages
      if (type === 'success') {
        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 5000);
      }
    }
  }

  // ===================================================================
  // THEME TOGGLE (DARK MODE)
  // ===================================================================
  
  class ThemeToggle {
    constructor() {
      this.currentTheme = localStorage.getItem('theme') || 'dark';
      this.init();
    }

    init() {
      if (!elements.themeToggle) return;

      // Set initial theme
      this.setTheme(this.currentTheme);

      // Add event listener
      elements.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      this.setTheme(this.currentTheme);
    }

    setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      
      // Update icon
      const icon = elements.themeToggle?.querySelector('i');
      if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
      }
    }
  }

  // ===================================================================
  // TYPING ANIMATION
  // ===================================================================
  
  class TypingAnimation {
    constructor() {
      this.strings = ['Shubham Bhahada', 'Fullstack Developer', 'Web Developer', 'Software Engineer'];
      this.currentStringIndex = 0;
      this.currentCharIndex = 0;
      this.isDeleting = false;
      this.typeSpeed = 100;
      this.deleteSpeed = 50;
      this.pauseTime = 2000;
      
      this.init();
    }

    init() {
      if (!elements.typedText) return;
      
      this.type();
    }

    type() {
      const currentString = this.strings[this.currentStringIndex];
      
      if (this.isDeleting) {
        elements.typedText.textContent = currentString.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;
      } else {
        elements.typedText.textContent = currentString.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;
      }

      let speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

      if (!this.isDeleting && this.currentCharIndex === currentString.length) {
        speed = this.pauseTime;
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentStringIndex = (this.currentStringIndex + 1) % this.strings.length;
      }

      setTimeout(() => this.type(), speed);
    }
  }

  // ===================================================================
  // BACK TO TOP BUTTON
  // ===================================================================
  
  class BackToTop {
    constructor() {
      this.init();
    }

    init() {
      if (!elements.backToTop) return;

      // Show/hide based on scroll position
      window.addEventListener('scroll', utils.throttle(() => {
        const scrolled = window.pageYOffset > 300;
        elements.backToTop.classList.toggle('visible', scrolled);
      }, 100));

      // Smooth scroll to top
      elements.backToTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // ===================================================================
  // PARTICLE BACKGROUND (OPTIONAL)
  // ===================================================================
  
  class ParticleBackground {
    constructor() {
      this.init();
    }

    init() {
      const particlesContainer = document.getElementById('particles-js');
      if (!particlesContainer || typeof particlesJS === 'undefined') return;

      // Responsive particle count based on screen size
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1024;
      
      let particleCount = 80; // Desktop
      let lineDistance = 150;
      let speed = 6;
      
      if (isMobile) {
        particleCount = 30; // Fewer particles on mobile
        lineDistance = 100;
        speed = 3;
      } else if (isTablet) {
        particleCount = 50; // Medium particles on tablet
        lineDistance = 120;
        speed = 4;
      }

      particlesJS('particles-js', {
        particles: {
          number: { value: particleCount, density: { enable: true, value_area: 800 } },
          color: { value: '#2563eb' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: lineDistance,
            color: '#2563eb',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: speed,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: !isMobile, mode: 'repulse' }, // Disable hover on mobile for performance
            onclick: { enable: true, mode: 'push' },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  }

  // ===================================================================
  // PERFORMANCE OPTIMIZATIONS
  // ===================================================================
  
  class PerformanceOptimizer {
    constructor() {
      this.init();
    }

    init() {
      // Lazy load images
      this.lazyLoadImages();
      
      // Preload critical resources
      this.preloadCriticalResources();
      
      // Add loading states
      this.addLoadingStates();
    }

    lazyLoadImages() {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src || img.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    }

    preloadCriticalResources() {
      // Preload hero image
      const heroImg = document.querySelector('.profile-img');
      if (heroImg) {
        const img = new Image();
        img.src = heroImg.src;
      }
    }

    addLoadingStates() {
      // Add loading class to body, remove after everything loads
      document.body.classList.add('loading');
      
      window.addEventListener('load', () => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
      });
    }
  }

  // ===================================================================
  // ACCESSIBILITY ENHANCEMENTS
  // ===================================================================
  
  class AccessibilityEnhancements {
    constructor() {
      this.init();
    }

    init() {
      this.handleKeyboardNavigation();
      this.addSkipLink();
      this.enhanceFocusManagement();
    }

    handleKeyboardNavigation() {
      // Handle escape key for mobile menu
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const navigation = new Navigation();
          navigation.closeMobileMenu();
        }
      });

      // Trap focus in mobile menu
      elements.navMenu?.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          const focusableElements = elements.navMenu.querySelectorAll('a, button');
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      });
    }

    addSkipLink() {
      const skipLink = document.createElement('a');
      skipLink.href = '#main';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      skipLink.style.cssText = `
        position: absolute;
        left: -9999px;
        z-index: 999;
        padding: 8px 16px;
        background: var(--primary-color);
        color: white;
        text-decoration: none;
      `;

      skipLink.addEventListener('focus', () => {
        skipLink.style.left = '0';
      });

      skipLink.addEventListener('blur', () => {
        skipLink.style.left = '-9999px';
      });

      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    enhanceFocusManagement() {
      // Enhanced focus indicators
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    }
  }

  // ===================================================================
  // MAIN INITIALIZATION
  // ===================================================================
  
  class Portfolio {
    constructor() {
      this.init();
    }

    init() {
      // Wait for DOM to be fully loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
      } else {
        this.initializeComponents();
      }
    }

    initializeComponents() {
      try {
        // Initialize all components
        new Navigation();
        new ProjectFilter();
        new ScrollAnimations();
        new ContactForm();
        new ThemeToggle();
        new TypingAnimation();
        new BackToTop();
        new ParticleBackground();
        new PerformanceOptimizer();
        new AccessibilityEnhancements();

        console.log('Portfolio initialized successfully');
      } catch (error) {
        console.error('Error initializing portfolio:', error);
      }
    }
  }

  // Initialize the portfolio
  new Portfolio();

})();