// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Animate hamburger menu
            const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
            hamburgers.forEach((hamburger, index) => {
                if (mobileNav.classList.contains('active')) {
                    if (index === 0) hamburger.style.transform = 'rotate(45deg) translate(6px, 6px)';
                    if (index === 1) hamburger.style.opacity = '0';
                    if (index === 2) hamburger.style.transform = 'rotate(-45deg) translate(6px, -6px)';
                } else {
                    hamburger.style.transform = 'none';
                    hamburger.style.opacity = '1';
                }
            });
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.nav-link-mobile');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
            hamburgers.forEach(hamburger => {
                hamburger.style.transform = 'none';
                hamburger.style.opacity = '1';
            });
        });
    });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous error messages
            clearErrors();
            
            // Validate form
            if (validateForm()) {
                // Simulate form submission
                submitForm();
            }
        });
    }
});

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.textContent = '');
    
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => input.style.borderColor = '#e2e8f0');
}

function validateForm() {
    let isValid = true;
    
    // Business Name validation
    const businessName = document.getElementById('businessName');
    if (!businessName.value.trim()) {
        showError('businessNameError', 'Business name is required');
        businessName.style.borderColor = '#ef4444';
        isValid = false;
    }
    
    // Contact Person validation
    const contactPerson = document.getElementById('contactPerson');
    if (!contactPerson.value.trim()) {
        showError('contactPersonError', 'Contact person is required');
        contactPerson.style.borderColor = '#ef4444';
        isValid = false;
    }
    
    // Email validation
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError('emailError', 'Email address is required');
        email.style.borderColor = '#ef4444';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError('emailError', 'Please enter a valid email address');
        email.style.borderColor = '#ef4444';
        isValid = false;
    }
    
    // Phone validation
    const phone = document.getElementById('phone');
    if (!phone.value.trim()) {
        showError('phoneError', 'Phone number is required');
        phone.style.borderColor = '#ef4444';
        isValid = false;
    }
    
    // Requirements validation
    const requirements = document.getElementById('requirements');
    if (!requirements.value.trim()) {
        showError('requirementsError', 'Project requirements are required');
        requirements.style.borderColor = '#ef4444';
        isValid = false;
    } else if (requirements.value.trim().length < 20) {
        showError('requirementsError', 'Please provide more detailed requirements (minimum 20 characters)');
        requirements.style.borderColor = '#ef4444';
        isValid = false;
    }
    
    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function submitForm() {
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    
    // Simulate API call delay
    setTimeout(() => {
        // In a real application, you would send the form data to your server here
        // For demo purposes, we'll just show the success modal
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        
        // Show success modal
        showSuccessModal();
        
        // In a real application, you would send an email here:
        // const formData = {
        //     businessName: document.getElementById('businessName').value,
        //     contactPerson: document.getElementById('contactPerson').value,
        //     email: document.getElementById('email').value,
        //     phone: document.getElementById('phone').value,
        //     requirements: document.getElementById('requirements').value
        // };
        // 
        // fetch('/send-email', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });
        
    }, 2000);
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'block';
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Software purchase handling
function handleGetSoftware() {
    // In a real application, this would redirect to your payment processor
    // For demo purposes, we'll show an alert
    alert('Redirecting to payment page...\n\nIn a real application, this would redirect to your payment processor (Stripe, PayPal, etc.)');
    
    // Example redirect (replace with your actual payment URL):
    // window.location.href = 'https://your-payment-processor.com/invmaster-checkout';
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .service-card, .benefit-item, .portfolio-item, .process-step');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.feature-card, .service-card, .benefit-item, .portfolio-item, .process-step');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Initial check
    animateOnScroll();
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial style
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});