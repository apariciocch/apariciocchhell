document.getElementById('modo-btn').addEventListener('click', function() {
    document.documentElement.classList.toggle('dark-mode');
    this.textContent = document.documentElement.classList.contains('dark-mode') ? 'Modo claro' : 'Modo oscuro';
});
