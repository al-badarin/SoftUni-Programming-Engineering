export function showView(section) {
    document
        .querySelectorAll('.view-section')
        .forEach(s => s.style.display = 'none');

    section.style.display = 'block';
}

export function updateNavBar() {
    const user = sessionStorage.getItem('user');

    const msgWelcome = document.getElementById('welcome-msg');

    if (user) {
        //TODO:

    } else {
        document
            .querySelectorAll('.user')
            .forEach((elem) => (elem.style.display = 'none'));

        document
            .querySelectorAll('.guest')
            .forEach((elem) => (elem.style.display = 'inline-block'));

        msgWelcome.textContent = '';
    }
}