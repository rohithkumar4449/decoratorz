document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const icon = item.querySelector('.faq-icon');
        const answer = item.nextElementSibling;  // Get the corresponding answer

        // Check if the answer is currently displayed
        const isShown = answer.classList.contains('show');

        // Toggle the icon rotation
        icon.classList.toggle('rotate');

        // Show or hide the answer based on its current state
        if (isShown) {
            // If it's currently shown, hide it
            answer.classList.remove('show');
            answer.style.display = 'none';  // Hide the answer
        } else {
            // If it's currently hidden, show it
            answer.classList.add('show');
            answer.style.display = 'block';  // Show the answer
        }
    });
});
