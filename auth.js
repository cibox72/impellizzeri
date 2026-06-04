const VALID_USERNAME = 'Impellizzeri';
const VALID_PASSWORD = 'Pietro';

function authenticate(username, password) {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        localStorage.setItem('glAuthenticated', 'true');
        return true;
    }
    return false;
}

function isAuthenticated() {
    return localStorage.getItem('glAuthenticated') === 'true';
}

function logoutUser() {
    localStorage.removeItem('glAuthenticated');
    localStorage.removeItem('glEditingId');
}

window.authenticate = authenticate;
window.isAuthenticated = isAuthenticated;
window.logoutUser = logoutUser;