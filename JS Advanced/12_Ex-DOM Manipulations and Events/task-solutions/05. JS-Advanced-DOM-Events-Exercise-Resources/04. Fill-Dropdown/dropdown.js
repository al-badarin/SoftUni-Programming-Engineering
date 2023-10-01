function addItem() {

    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;
    let menu = document.getElementById('menu');

    let option = document.createElement('option');
    option.text = newText;
    option.value = newValue;

    if (newText !== '' && newValue !== '') {
        menu.appendChild(option);
    }

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}