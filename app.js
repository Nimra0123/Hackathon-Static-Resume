document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var skillsSection = document.querySelector('.skills');
    toggleButton.addEventListener('click', function () {
        skillsSection.classList.toggle('hidden');
    });
});
