window.addEventListener("load", solve);

function solve() {
  let firstNameElement = document.getElementById('first-name');
  let lastNameElement = document.getElementById('last-name');
  let ageElement = document.getElementById('age');
  let storyTitleElement = document.getElementById('story-title');
  let genreElement = document.getElementById('genre');
  let storyTextContentElement = document.getElementById('story');
  let publishBtnElement = document.getElementById('form-btn');
  let previewUlElement = document.getElementById('preview-list');
  let mainElement = document.getElementById('main');
  let bodyElement = document.querySelector('.body');

  publishBtnElement.addEventListener('click', (e) => {
    e.preventDefault();

    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let age = ageElement.value;
    let storyTitle = storyTitleElement.value;
    let genre = genreElement.value;
    let storyText = storyTextContentElement.value;

    if (firstName === ''
      || lastName === ''
      || age === ''
      || storyTitle === ''
      || genre === ''
      || storyText === '') {
      return;
    }

    let liElement = document.createElement('li');
    liElement.classList.add('story-info');

    let articleElement = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName} ${lastName}`;

    let pAge = document.createElement('p');
    pAge.textContent = `Age: ${age}`;

    let pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${storyTitle}`;

    let pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genre}`;

    let pTextContent = document.createElement('p');
    pTextContent.textContent = `${storyText}`;

    articleElement.appendChild(h4);
    articleElement.appendChild(pAge);
    articleElement.appendChild(pTitle);
    articleElement.appendChild(pGenre);
    articleElement.appendChild(pTextContent);

    liElement.appendChild(articleElement);

    let saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save Story';
    saveBtn.classList.add('save-btn');
    liElement.appendChild(saveBtn);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Story';
    editBtn.classList.add('edit-btn');
    liElement.appendChild(editBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.classList.add('delete-btn');
    liElement.appendChild(deleteBtn);

    previewUlElement.appendChild(liElement);

    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    storyTitleElement.value = '';
    genreElement.value = '';
    storyTextContentElement.value = '';

    publishBtnElement.disabled = true;


    editBtn.addEventListener('click', () => {
      editBtn.disabled = true;
      saveBtn.disabled = true;
      deleteBtn.disabled = true;

      publishBtnElement.disabled = false;

      liElement.remove();

      firstNameElement.value = firstName;
      lastNameElement.value = lastName;
      ageElement.value = age;
      storyTitleElement.value = storyTitle;
      genreElement.value = genre;
      storyTextContentElement.value = storyText;
    });


    saveBtn.addEventListener('click', () => {
      mainElement.remove();
      let h1Saved = document.createElement('h1');
      h1Saved.textContent = "Your scary story is saved!";

      let divElement = document.createElement('div');
      divElement.setAttribute('id', 'main');
      divElement.appendChild(h1Saved);

      bodyElement.appendChild(divElement);
    });


    deleteBtn.addEventListener('click', () => {
      publishBtnElement.disabled = false;

      liElement.remove();
    });
  });
}
