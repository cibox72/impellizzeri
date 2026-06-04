const VALID_USERNAME = 'Impellizzeri';
const VALID_PASSWORD = 'Pietro';

function authenticate(username, password) {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        localStorage.setItem('pietroAuthenticated', 'true');
        return true;
    }
    return false;
}

function isAuthenticated() {
    return localStorage.getItem('pietroAuthenticated') === 'true';
}

function logoutUser() {
    localStorage.removeItem('pietroAuthenticated');
    localStorage.removeItem('pietroEditingId');
}

window.authenticate = authenticate;
window.isAuthenticated = isAuthenticated;
window.logoutUser = logoutUser;