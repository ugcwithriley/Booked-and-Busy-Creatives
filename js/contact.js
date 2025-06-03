document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
 
    // Create success alert element
    const alertSuccess = document.createElement('div');
    alertSuccess.className = 'alert-success';
    alertSuccess.textContent = 'Your message has been sent successfully!';
    document.body.appendChild(alertSuccess);
 
    // Form validation
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
 
        // Reset error messages
        clearErrors();
 
        // Validate form fields
        const nameValid = validateName();
        const emailValid = validateEmail();
        const phoneValid = validatePhone();
        const subjectValid = validateSubject();
        const messageValid = validateMessage();
 
        // If all validations pass
        if (nameValid && emailValid && phoneValid && subjectValid && messageValid) {
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show a success message
            showSuccessAlert();
 
            // Reset form
            contactForm.reset();
        }
    });
 
    // Field validation functions
    function validateName() {
        const name = document.getElementById('name').value.trim();
        const nameError = document.getElementById('nameError');
 
        if (name === '') {
            nameError.textContent = 'Name is required';
            return false;
        } else if (name.length < 3) {
            nameError.textContent = 'Name must be at least 3 characters';
            return false;
        }
 
        return true;
    }
 
    function validateEmail() {
        const email = document.getElementById('email').value.trim();
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
        if (email === '') {
            emailError.textContent = 'Email is required';
            return false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        }
 
        return true;
    }
 
    function validatePhone() {
        const phone = document.getElementById('phone').value.trim();
        const phoneError = document.getElementById('phoneError');
        const phoneRegex = /^[0-9\-\+]{9,15}$/;
 
        // Phone is optional, but if provided, validate it
        if (phone !== '' && !phoneRegex.test(phone)) {
            phoneError.textContent = 'Please enter a valid phone number';
            return false;
        }
 
        return true;
    }
 
    function validateSubject() {
        const subject = document.getElementById('subject').value.trim();
        const subjectError = document.getElementById('subjectError');
 
        if (subject === '') {
            subjectError.textContent = 'Subject is required';
            return false;
        } else if (subject.length < 5) {
            subjectError.textContent = 'Subject must be at least 5 characters';
            return false;
        }
 
        return true;
    }
 
    function validateMessage() {
        const message = document.getElementById('message').value.trim();
        const messageError = document.getElementById('messageError');
 
        if (message === '') {
            messageError.textContent = 'Message is required';
            return false;
        } else if (message.length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            return false;
        }
 
        return true;
    }
 
    // Clear all error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.textContent = '';
        });
    }
 
    // Show success alert
    function showSuccessAlert() {
        alertSuccess.style.display = 'block';
 
        // Hide after 5 seconds
        setTimeout(() => {
            alertSuccess.style.display = 'none';
        }, 5000);
    }
 
    // Real-time validation as user types
    document.getElementById('name').addEventListener('input', validateName);
    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('phone').addEventListener('input', validatePhone);
    document.getElementById('subject').addEventListener('input', validateSubject);
    document.getElementById('message').addEventListener('input', validateMessage);
});