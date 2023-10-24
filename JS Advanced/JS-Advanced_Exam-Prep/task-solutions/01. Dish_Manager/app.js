window.addEventListener("load", solve);

function solve() {
  const firstNameInputEl = document.getElementById('first-name');
  const lastNameInputEl = document.getElementById('last-name');
  const ageInputEl = document.getElementById('age');
  const genderSelectEl = document.getElementById('genderSelect');
  const dishInformationEl = document.getElementById('task');
  const submitBtn = document.getElementById('form-btn');
  const clearBtn = document.getElementById('clear-btn');
  const inProgressUlElement = document.getElementById('in-progress');
  const finishedUlEl = document.getElementById('finished');
  const counter = document.getElementById("progress-count");

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let firstName = firstNameInputEl.value;
    let lastName = lastNameInputEl.value;
    let age = ageInputEl.value;
    let gender = genderSelectEl.value;
    let dishInfo = dishInformationEl.value;

    if (firstName == '' || lastName == '' || age == '' || dishInfo == '') {
      return;
    }

    let liEl = document.createElement('li');
    liEl.classList.add('each-line');

    let articleEl = document.createElement('article');

    let h4FullName = document.createElement('h4');
    h4FullName.textContent = `${firstName} ${lastName}`;

    let pGenderAge = document.createElement('p');
    pGenderAge.textContent = `${gender}, ${age}`;

    let pInformation = document.createElement('p');
    pInformation.textContent = `${dishInfo}`;

    articleEl.appendChild(h4FullName);
    articleEl.appendChild(pGenderAge);
    articleEl.appendChild(pInformation);

    liEl.appendChild(articleEl);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');

    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Mark as complete';
    completeBtn.classList.add('complete-btn');

    liEl.appendChild(editBtn);
    liEl.appendChild(completeBtn);

    inProgressUlElement.appendChild(liEl);

    firstNameInputEl.value = '';
    lastNameInputEl.value = '';
    ageInputEl.value = '';
    dishInformationEl.value = '';
    // genderSelectEl.value = '';

    if (counter.textContent == 0) {
      counter.textContent = "";
      counter.textContent = Number(counter.textContent) + 1;
    } else {
      counter.textContent = Number(counter.textContent) + 1;
    }


    editBtn.addEventListener('click', (e) => {
      e.preventDefault();

      firstNameInputEl.value = firstName;
      lastNameInputEl.value = lastName;
      ageInputEl.value = age;
      dishInformationEl.value = dishInfo;

      liEl.remove();

      counter.textContent = Number(counter.textContent) - 1;
    });


    completeBtn.addEventListener('click', (e) => {
      e.preventDefault();

      let liElEachLine = document.createElement('li');
      liElEachLine.classList.add('each-line');

      liElEachLine.appendChild(articleEl);

      finishedUlEl.appendChild(liElEachLine);

      liEl.removeChild(editBtn);
      liEl.removeChild(completeBtn);
      liEl.remove();

      counter.textContent = Number(counter.textContent) - 1;


      clearBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        liElEachLine.remove();
      });
    });
  });
}
