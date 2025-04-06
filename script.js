// Form validation for membership registration
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('.md\\:flex');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            mobileMenu.classList.toggle('flex-col');
            mobileMenu.classList.toggle('absolute');
            mobileMenu.classList.toggle('top-16');
            mobileMenu.classList.toggle('left-0');
            mobileMenu.classList.toggle('right-0');
            mobileMenu.classList.toggle('bg-gray-900');
            mobileMenu.classList.toggle('p-4');
            mobileMenu.classList.toggle('space-y-4');
        });
    }

    // Event registration modal functionality
    const registerButtons = document.querySelectorAll('[data-event-register]');
    registerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventName = this.getAttribute('data-event-name');
            alert(`Registration for ${eventName} will be available soon!`);
        });
    });

    // Form validation for membership page
    const membershipForm = document.getElementById('membershipForm');
    if (membershipForm) {
        membershipForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            if (!name || !email || !phone) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (!/^[0-9]{10}$/.test(phone)) {
                alert('Please enter a valid 10-digit phone number');
                return;
            }
            
            alert('Thank you for your membership application! We will contact you shortly.');
            this.reset();
        });
    }
});