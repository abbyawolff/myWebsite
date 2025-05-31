// Mobile Navigation
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navList = document.querySelector('.nav-list');

mobileNavToggle.addEventListener('click', () => {
    const visibility = navList.getAttribute('data-visible');
    
    if (visibility === "false") {
        navList.setAttribute('data-visible', "true");
        mobileNavToggle.setAttribute('aria-expanded', "true");
    } else {
        navList.setAttribute('data-visible', "false");
        mobileNavToggle.setAttribute('aria-expanded', "false");
    }
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    testimonials[index].classList.add('active');
    currentTestimonial = index;
}

prevBtn.addEventListener('click', () => {
    let newIndex = currentTestimonial - 1;
    if (newIndex < 0) {
        newIndex = testimonials.length - 1;
    }
    showTestimonial(newIndex);
});

nextBtn.addEventListener('click', () => {
    let newIndex = currentTestimonial + 1;
    if (newIndex >= testimonials.length) {
        newIndex = 0;
    }
    showTestimonial(newIndex);
});

// Auto-rotate testimonials
let testimonialInterval = setInterval(() => {
    let newIndex = currentTestimonial + 1;
    if (newIndex >= testimonials.length) {
        newIndex = 0;
    }
    showTestimonial(newIndex);
}, 5000);

// Pause auto-rotation on hover
const testimonialSlider = document.querySelector('.testimonial-slider');
testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

testimonialSlider.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) {
            newIndex = 0;
        }
        showTestimonial(newIndex);
    }, 5000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Page transition effect
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

// Active link highlighting
const navLinks = document.querySelectorAll('.nav-list a');
const currentPage = location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    
    if (currentPage === linkPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
