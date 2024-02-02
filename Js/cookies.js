// Afficher la popup de consentement lors du chargement de la page
window.onload = function() {
    showCookiePopup();
};

// Fonction pour accepter les cookies et masquer la popup
function acceptCookies() {
    document.getElementById('cookiePopup').style.display = 'none';
}

// Fonction pour afficher la popup de consentement
function showCookiePopup() {
    document.getElementById('cookiePopup').classList.add('show');
}
