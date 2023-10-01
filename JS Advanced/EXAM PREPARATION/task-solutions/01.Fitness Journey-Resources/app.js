window.addEventListener('load', solve);

function solve() {
    let mainEl = document.getElementById('main');
    let nameEl = document.getElementById('name');
    let emailEl = document.getElementById('email');
    let contactNumberEl = document.getElementById('contact-number');
    let classTypeEl = document.getElementById('class-type');
    let classTimeEl = document.getElementById('class-time');
    let previewUlElement = document.querySelector('.class-info');
    let confirmUlElement = document.querySelector('.confirm-class');

    let nextBTN = document.getElementById('next-btn');

    nextBTN.addEventListener('click', (ev) => {
        if (nameEl.value == '' || emailEl.value == '' || contactNumberEl.value == '' || classTypeEl.value == '' || classTimeEl.value == '') {
            return;
        }

        nextBTN.disabled = true;

        let name = nameEl.value;
        let email = emailEl.value;
        let contactNumber = contactNumberEl.value;
        let classType = classTypeEl.value;
        let classTime = classTimeEl.value;

        nameEl.value = '';
        emailEl.value = '';
        contactNumberEl.value = '';
        classTypeEl.value = '';
        classTimeEl.value = '';


        let liElement = document.createElement("li");
        liElement.setAttribute("class", "info-item");

        let article = document.createElement("article");
        article.setAttribute('class', "personal-info");

        let pName = document.createElement('p');
        pName.textContent = `${name}`;
        article.appendChild(pName);

        let pEmail = document.createElement('p');
        pEmail.textContent = `${email}`;
        article.appendChild(pEmail);

        let pContactNumber = document.createElement('p');
        pContactNumber.textContent = `${contactNumber}`;
        article.appendChild(pContactNumber);

        let pClassType = document.createElement('p');
        pClassType.textContent = `${classType}`;
        article.appendChild(pClassType);

        let pClassTime = document.createElement('p');
        pClassTime.textContent = `${classTime}`;
        article.appendChild(pClassTime);

        liElement.appendChild(article);

        let editBTN = document.createElement('button');
        editBTN.textContent = 'Edit';
        editBTN.setAttribute('class', 'edit-btn');
        liElement.appendChild(editBTN);

        let continueBTN = document.createElement('button');
        continueBTN.textContent = 'Continue';
        continueBTN.setAttribute('class', 'continue-btn');
        liElement.appendChild(continueBTN);

        previewUlElement.appendChild(liElement);


        editBTN.addEventListener('click', (ev) => {
            nextBTN.disabled = false;

            nameEl.value = name;
            emailEl.value = email;
            contactNumberEl.value = contactNumber; 
            classTypeEl.value = classType;
            classTimeEl.value = classTime;

            liElement.remove();
        });


        continueBTN.addEventListener('click', (ev) => {
            let liElementContinue = document.createElement("li");
            liElementContinue.setAttribute("class", "continue-info");

            let articleContinue = document.createElement("article")
            articleContinue = article;

            let confirmBTN = document.createElement('button');
            confirmBTN.textContent = 'Confirm';
            confirmBTN.setAttribute('class', "confirm-btn");

            let cancelBTN = document.createElement('button');
            cancelBTN.textContent = 'Cancel';
            cancelBTN.setAttribute('class', "cancel-btn");

            liElementContinue.appendChild(articleContinue);
            liElementContinue.appendChild(cancelBTN);
            liElementContinue.appendChild(confirmBTN);
            confirmUlElement.appendChild(liElementContinue);

            liElement.remove();


            cancelBTN.addEventListener('click', (ev)=>{
                liElementContinue.remove();
                nextBTN.disabled = false;
            });


            confirmBTN.addEventListener('click', (ev)=>{
                mainEl.remove();
                let h1 = document.createElement('h1');
                h1.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";
                h1.setAttribute('id', 'thank-you');
                body.appendChild(h1);

                let doneBTN = document.createElement('button');
                doneBTN.textContent = 'Done';
                doneBTN.setAttribute('id', 'done-btn');
                body.appendChild(doneBTN);
                doneBTN.addEventListener('click', (ev)=>{
                    location.reload();
                });
            });
        });
    });
}




