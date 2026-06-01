/* ============================================================
   i5 Creative — Global JS
   Job: 26002-ICL
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Header scroll state ----
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ---- Mobile nav ----
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        navToggle.classList.remove('open');
        document.body.style.overflow = '';
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Reveal on scroll ----
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- Active nav link ----
  const currentPath = window.location.pathname;
  document.querySelectorAll('.header-nav a, .mobile-nav a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.classList.add('active');
    }
  });

  // ---- GA4 Event Tracking ----
  // Phone clicks
  document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
    el.addEventListener('click', function () {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_call_click', { event_category: 'engagement' });
      }
    });
  });

  // Email clicks
  document.querySelectorAll('a[href^="mailto:"]').forEach(function (el) {
    el.addEventListener('click', function () {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'email_click', { event_category: 'engagement' });
      }
    });
  });

  // CTA button clicks
  document.querySelectorAll('.btn-primary, .btn-outline, .btn-outline-white').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'cta_click', {
          event_category: 'engagement',
          cta_text: btn.textContent.trim().replace('→', '').trim()
        });
      }
    });
  });

  // ---- Contact Form Handling ----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Basic validation
      const required = contactForm.querySelectorAll('[aria-required="true"]');
      let valid = true;
      required.forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = 'var(--color-red)';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      if (!valid) return;

      // Simulate submission (replace with actual endpoint)
      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(function () {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', { event_category: 'conversion' });
        }

        const successMsg = document.getElementById('form-success');
        if (successMsg) {
          contactForm.style.display = 'none';
          successMsg.style.display = 'block';
        } else {
          submitBtn.innerHTML = 'Message Sent ✓';
        }
      }, 1200);
    });
  }

});
