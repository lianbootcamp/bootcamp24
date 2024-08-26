document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('¡Gracias por tu mensaje, ' + name + '!');
        // Aquí puedes agregar la lógica para enviar el formulario a un servidor
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
