// Select the form and modal elements
const form = document.querySelector('form');
const modal = document.getElementById('messageModal');
const closeModal = document.querySelector('.close');
const modalMessage = document.getElementById('modalMessage');

// Function to show the modal with a message
function showModal(message, isError = false) {
    modalMessage.innerHTML = message.replace(/\n/g , '<br>');
    modalMessage.style.color = isError ? 'red' : 'green'; // Red for error, green for success
    modal.style.display = 'block';
}

// Add an event listener for the form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Select input fields
    const fullName = form.querySelector('input[placeholder="Full Name"]');
    const email = form.querySelector('input[placeholder="Email Address"]');
    const mobile = form.querySelector('input[placeholder="Mobile Number"]');
    const subject = form.querySelector('input[placeholder="Email Subject"]');
    const message = form.querySelector('textarea');

    // Error message string
    let errorMessage = '';

    // Validate full name
    if (!fullName.value.trim()) {
        errorMessage += 'Full Name is required.\n';
    }

    // Validate email with regex
    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        errorMessage += 'A valid Email Address is required.\n';
    }

    // Validate mobile number (10 digits for example)
    if (!mobile.value.trim() || !/^\d{10}$/.test(mobile.value)) {
        errorMessage += 'A valid 10-digit Mobile Number is required.\n';
    }

    // Validate subject
    if (!subject.value.trim()) {
        errorMessage += 'Email Subject is required.\n';
    }

    // Validate message
    if (!message.value.trim()) {
        errorMessage += 'Message cannot be empty.\n';
    }

    // If there are errors, show them in the modal
    if (errorMessage) {
        showModal(errorMessage, true);
    } else {
        // If validation passes, show success message in the modal
        showModal('Message sent successfully!', false);
        // Optionally, reset the form
        form.reset();
    }
});

// Close the modal when the "X" is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when the user clicks anywhere outside it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
