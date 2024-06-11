document.addEventListener('DOMContentLoaded', () => {
    // Show the 'About' section by default
    showSection('about');
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
}
