function showView(id) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

document.querySelector('.register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Registro enviado con éxito!');
  });

function goToPage(relativePath) {
    location.replace(relativePath)
}