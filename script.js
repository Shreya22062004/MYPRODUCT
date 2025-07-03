// Hamburger menu toggle for mobile navigation
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Scrollspy navigation
const sections = document.querySelectorAll('section, .pricing, .faq');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Testimonials Carousel
const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;
const prevBtn = document.getElementById('testimonial-prev');
const nextBtn = document.getElementById('testimonial-next');
function showTestimonial(idx) {
  testimonials.forEach((card, i) => {
    card.classList.toggle('active', i === idx);
  });
}
showTestimonial(currentTestimonial);
prevBtn.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});
nextBtn.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 7000);

// Newsletter Signup (UI feedback only)
const newsletterForm = document.getElementById('newsletter-form');
const newsletterEmail = document.getElementById('newsletter-email');
const newsletterFeedback = document.getElementById('newsletter-feedback');
newsletterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = newsletterEmail.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newsletterFeedback.style.color = '#ff5252';
    newsletterFeedback.textContent = 'Please enter a valid email address.';
    return;
  }
  newsletterFeedback.style.color = 'var(--accent)';
  newsletterFeedback.textContent = 'Thank you for subscribing!';
  newsletterEmail.value = '';
  setTimeout(() => newsletterFeedback.textContent = '', 3000);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));
    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.maxHeight = null);
    if (!expanded) {
      this.setAttribute('aria-expanded', 'true');
      const answer = this.nextElementSibling;
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Countdown Timer
const countdown = document.getElementById('countdown');
function updateCountdown() {
  const offerEnd = new Date();
  offerEnd.setHours(offerEnd.getHours() + 6); // 6 hours from now
  function tick() {
    const now = new Date();
    let diff = Math.max(0, offerEnd - now);
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    countdown.textContent = `Ends in ${h}h ${m}m ${s}s`;
    if (diff > 0) setTimeout(tick, 1000);
    else countdown.textContent = "Offer ended";
  }
  tick();
}
updateCountdown();

// Live Chat Widget (Simulated)
const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');
const chatClose = document.getElementById('chat-close');
chatToggle.addEventListener('click', () => {
  chatBox.style.display = 'block';
  chatToggle.style.display = 'none';
});
chatClose.addEventListener('click', () => {
  chatBox.style.display = 'none';
  chatToggle.style.display = 'block';
});
document.querySelector('.chat-input-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = this.querySelector('.chat-input');
  const msg = input.value.trim();
  if (!msg) return;
  const chatMessages = document.querySelector('.chat-messages');
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-user';
  userMsg.textContent = msg;
  chatMessages.appendChild(userMsg);
  input.value = '';
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'chat-bot';
    botMsg.textContent = "Thanks for your message! We'll get back to you soon.";
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1200);
});


// Theme Toggle (as in your project)
const themeToggle = document.getElementById('themeToggle');
const themeLink = document.getElementById('theme-link');
let isDark = false;
themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  themeLink.href = isDark ? 'dark.css' : 'light.css';
  themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// BUY BUTTON REDIRECT FUNCTIONALITY
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    // You can pass plan/price via query params if needed
    const plan = encodeURIComponent(this.dataset.plan);
    const price = encodeURIComponent(this.dataset.price);
    window.location.href = `payment.html?plan=${plan}&price=${price}`;
  });
});

const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });