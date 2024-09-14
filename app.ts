document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton')!;
    const skillsSection = document.querySelector('.skills')!;

    toggleButton.addEventListener('click', () => {
        skillsSection.classList.toggle('hidden');
    });
});
