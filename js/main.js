const toggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement; // Selecciona la etiqueta <html>

toggle.addEventListener('click', () => {
    
    // Obtenemos el tema actual de Bootstrap
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    
    // Evaluamos cuál será el nuevo tema
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Aplicamos el nuevo tema
    htmlElement.setAttribute('data-bs-theme', newTheme);
    
    // Cambiamos el texto del botón
    if (newTheme === 'dark') {
        toggle.textContent = 'Light';
    } else {
        toggle.textContent = 'Dark';
    }

});