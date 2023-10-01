function focused() {
    let divInputElement = document.querySelectorAll('div div');

    divInputElement.addEventListener('move', (e) => {
        e.currentTarget.style = 'focused';
    });
}