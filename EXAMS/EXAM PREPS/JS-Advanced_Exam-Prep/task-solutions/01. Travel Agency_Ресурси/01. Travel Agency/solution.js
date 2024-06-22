window.addEventListener('load', solution);

function solution() {
  let blockElement = document.getElementById('block');
  let fullNameInputElemnt = document.getElementById('fname');
  let emailInputElement = document.getElementById('email');
  let phoneNumberInputElement = document.getElementById('phone');
  let addressInputElement = document.getElementById('address');
  let postalCodeInputElement = document.getElementById('code');

  let informationElement = document.getElementById('information');
  let infoPreviewElement = document.getElementById('infoPreview');

  let submitBTNElement = document.getElementById('submitBTN');
  let editBTNElement = document.getElementById('editBTN');
  let continueBTNElement = document.getElementById('continueBTN');


  submitBTNElement.addEventListener('click', (ev) => {
    if (!fullNameInputElemnt.value || !emailInputElement.value) {
      return;
    }

    let fullName = fullNameInputElemnt.value;
    let email = emailInputElement.value;
    let phone = phoneNumberInputElement.value;
    let address = addressInputElement.value;
    let postalCode = postalCodeInputElement.value;

    let fullNameLi = document.createElement('li');
    fullNameLi.textContent = `Full Name: ${fullName}`;

    let emailLi = document.createElement('li');
    emailLi.textContent = `Email: ${email}`;

    let phoneLi = document.createElement('li');
    phoneLi.textContent = `Phone Number: ${phone}`;

    let addressLi = document.createElement('li');
    addressLi.textContent = `Address: ${address}`;

    let postalCodeLi = document.createElement('li');
    postalCodeLi.textContent = `Postal Code: ${postalCode}`;

    infoPreviewElement.appendChild(fullNameLi);
    infoPreviewElement.appendChild(emailLi);
    infoPreviewElement.appendChild(phoneLi);
    infoPreviewElement.appendChild(addressLi);
    infoPreviewElement.appendChild(postalCodeLi);

    submitBTNElement.disabled = true;
    editBTNElement.disabled = false;
    continueBTNElement.disabled = false;

    fullNameInputElemnt.value = '';
    emailInputElement.value = '';
    phoneNumberInputElement.value = '';
    addressInputElement.value = '';
    postalCodeInputElement.value = '';


    editBTNElement.addEventListener('click', (ev) => {
      infoPreviewElement.removeChild(fullNameLi);
      infoPreviewElement.removeChild(emailLi);
      infoPreviewElement.removeChild(phoneLi);
      infoPreviewElement.removeChild(addressLi);
      infoPreviewElement.removeChild(postalCodeLi);

      fullNameInputElemnt.value = fullName;
      emailInputElement.value = email;
      phoneNumberInputElement.value = phone;
      addressInputElement.value = address;
      postalCodeInputElement.value = postalCode;

      submitBTNElement.disabled = false;
      editBTNElement.disabled = true;
      continueBTNElement.disabled = true;
    });
  });


  continueBTNElement.addEventListener('click', (ev) => {
    blockElement.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.textContent = `Thank you for your reservation!`;
    blockElement.appendChild(h3);
  });
}
