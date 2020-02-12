function storeVlaueInLocalStorage(name, value) {
    localStorage.setItem(name, value);
}

function submitForm(nextPage) {
    window.location=nextPage;
}

function logout(loginPagePath) {
    localStorage.removeItem('username');
    window.location=loginPagePath;
}

