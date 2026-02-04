// EmailJS Configuration - FREE EMAIL SERVICE
(function() {
    'use strict';
    
    // EmailJS configuration
    const EMAILJS_SERVICE_ID = 'service_ywi58ww'; // Your EmailJS Service ID
    const EMAILJS_TEMPLATE_ID = 'template_ajud7o5'; // Your EmailJS Template ID
    const EMAILJS_PUBLIC_KEY = 'roUir8dodUxuYmejG'; // Your EmailJS Public Key
    
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
    
    // Form submission handler
    function handleFormSubmit(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        
        // Get form data
        const name = formData.get('name');
        const email = formData.get('email');
        const mobile = formData.get('mobile');
        const project = formData.get('project') || 'Emaar SCO Plots';
        
        // Validation
        if (!name || !email || !mobile) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Mobile validation
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobile)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('input[type="submit"]');
        const originalText = submitBtn.value;
        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;
        
        // Send email using EmailJS
        if (typeof emailjs !== 'undefined') {
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: name,
                from_email: email,
                mobile: mobile,
                project: project,
                to_email: 'query@aadharhomes.com'
            })
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Thank You! Details Have Been Sent. We will get in touch with you at the earliest.');
                form.reset();
                // Close form if it's in a modal
                const closeBtn = form.querySelector('.close');
                if (closeBtn) {
                    closeBtn.click();
                }
            })
            .catch(function(error) {
                console.error('FAILED...', error);
                alert('Sorry, there was an error sending your message. Please try again or call us directly.');
            })
            .finally(function() {
                // Reset button
                submitBtn.value = originalText;
                submitBtn.disabled = false;
            });
        } else {
            // Fallback: Use fetch to our API
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    mobile: mobile,
                    project: project
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(data.message);
                    form.reset();
                    const closeBtn = form.querySelector('.close');
                    if (closeBtn) {
                        closeBtn.click();
                    }
                } else {
                    alert(data.error || 'Sorry, there was an error. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Sorry, there was an error sending your message. Please try again or call us directly.');
            })
            .finally(() => {
                submitBtn.value = originalText;
                submitBtn.disabled = false;
            });
        }
    }
    
    // Attach event listeners to all forms
    document.addEventListener('DOMContentLoaded', function() {
        const forms = document.querySelectorAll('form[id="queryform"], form[id="quichForm"], form[action*="form.php"]');
        
        forms.forEach(function(form) {
            form.addEventListener('submit', handleFormSubmit);
        });
    });
    
    // Also handle forms that might be added dynamically
    document.addEventListener('submit', function(event) {
        if (event.target.tagName === 'FORM' && 
            (event.target.id === 'queryform' || event.target.id === 'quichForm' || event.target.action.includes('form.php'))) {
            handleFormSubmit(event);
        }
    });
})();
