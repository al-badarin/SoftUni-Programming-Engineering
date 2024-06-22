window.addEventListener('load', solution);

function solution() {
    let employeeInputElement = document.getElementById('employee');
    let categoryInputElement = document.getElementById('category');
    let urencyInputElement = document.getElementById('urgency');
    let teamInputElement = document.getElementById('team');
    let descriptionInputElement = document.getElementById('description');
    let addBtnElement = document.getElementById('add-btn');
    let previewUlElement = document.querySelector('.preview-list');
    let pendingElement = document.querySelector('.pending-list');
    let resolvedElement = document.querySelector('.resolved-list');

    addBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        let employee = employeeInputElement.value;
        let category = categoryInputElement.value;
        let urgency = urencyInputElement.value;
        let team = teamInputElement.value;
        let description = descriptionInputElement.value;

        console.log(category);

        if (employee === '' || category === '' || urgency === '' || team === '' || description === '') {
            return;
        }

        let liElement = document.createElement('li');
        liElement.classList.add('problem-content');
        //liElement.style = 'flex';

        let articleElement = document.createElement('article');
        //articleElement.style = 'flex';

        let pFrom = document.createElement('p');
        pFrom.textContent = `From: ${employee}`;

        let pCategory = document.createElement('p');
        pCategory.textContent = `Cateory: ${category}`;

        let pUrgency = document.createElement('p');
        pUrgency.textContent = `Urgency: ${urgency}`;

        let pAssignedTeam = document.createElement('p');
        pAssignedTeam.textContent = `Assigned to: ${team}`;

        let pDescription = document.createElement('p');
        pDescription.textContent = `${description}`;

        articleElement.appendChild(pFrom);
        articleElement.appendChild(pCategory);
        articleElement.appendChild(pUrgency);
        articleElement.appendChild(pAssignedTeam);
        articleElement.appendChild(pDescription);

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');

        let continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue';
        continueBtn.classList.add('continue-btn');

        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        previewUlElement.appendChild(liElement);

        employeeInputElement.value = '';
        categoryInputElement.value = '';
        urencyInputElement.value = '';
        teamInputElement.value = '';
        descriptionInputElement.value = '';

        addBtnElement.disabled = true;


        editBtn.addEventListener('click', (e) => {
            e.preventDefault();

            employeeInputElement.value = employee;
            categoryInputElement.value = category;
            urencyInputElement.value = urgency;
            teamInputElement.value = team;
            descriptionInputElement.value = description;

            // let employeePreview = employeeInputElement.value;
            // let categoryPreview = categoryInputElement.value;

            previewUlElement.removeChild(liElement);

            addBtnElement.disabled = false;
        });


        continueBtn.addEventListener('click', (e) => {
            e.preventDefault();

            pendingElement.appendChild(liElement);

            let resolvedBtn = document.createElement('button');
            resolvedBtn.textContent = 'Resolved';
            resolvedBtn.classList.add('resolve-btn');
            resolvedBtn.addEventListener('click', resolveFunction);
            liElement.appendChild(resolvedBtn);

            editBtn.remove();
            continueBtn.remove();
            // liElement.removeChild(editBtn);
            // liElement.removeChild(continueBtn);
           
            previewUlElement.removeChild(liElement);
            
        });

        function resolveFunction() {
            resolvedElement.appendChild(liElement);

            let clearBtn = document.createElement('button');
            clearBtn.textContent = 'Clear';
            clearBtn.classList.add('clear-btn');
            clearBtn.addEventListener('click', clearFunction);
            liElement.appendChild(clearBtn);

            editBtn.remove();
            continueBtn.remove();
            //liElement.removeChild(editBtn);
            //liElement.removeChild(continueBtn);
            //liElement.removeChild; //resolvedBtn must be removed!
           pendingElement.removeChild(resolveBtn);
          
        }

        function clearFunction() {
            resolvedElement.removeChild(liElement);
           
        }
    });
}