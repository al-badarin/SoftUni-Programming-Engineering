async function solve() {
    let url = 'http://localhost:3030/jsonstore/collections/students';

    let table = document.querySelector("#results tbody");

    let response = await fetch(url);

    let data = await response.json();

    Object.values(data).forEach((s) => {
        let firstName = s.firstName;
        let lastName = s.lastName;
        let facultyNumber = s.facultyNumber;
        let grade = Number(s.grade);


        let tr = document.createElement("tr");
        tr.setAttribute('id', s._id);

        let firstNameCell = tr.insertCell(0);
        firstNameCell.innerText = firstName;

        let lastNameCell = tr.insertCell(1);
        lastNameCell.innerText = lastName;

        let facultyNumberCell = tr.insertCell(2);
        facultyNumberCell.innerText = facultyNumber;

        let gradeCell = tr.insertCell(3);
        gradeCell.innerText = grade;

        let delBtn = document.createElement('button');
        delBtn.innerText = 'delete';
        delBtn.style.width = '100%';
        delBtn.style.color = 'red';
        delBtn.addEventListener('click', deleteStudent)

        let delBtnCell = tr.insertCell(4);
        delBtnCell.appendChild(delBtn);

        table.appendChild(tr);
    });

    async function deleteStudent(ev) {
        let id = ev.target.parentNode.parentNode.id;
        ev.target.parentNode.parentNode.remove();

        let deleteResponse = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });
    }

    let submitBtn = document.getElementById("submit");

    submitBtn.addEventListener("click", onClickSubmit);

    async function onClickSubmit(ev) {
        ev.preventDefault();

        let firstNameInput = document.getElementsByName("firstName")[0];
        let lastNameInput = document.getElementsByName("lastName")[0];
        let facultyNumberInput = document.getElementsByName("facultyNumber")[0];
        let gradeInput = document.getElementsByName("grade")[0];

        // let inputsArray = document.querySelectorAll('.inputs input');

        // Array.from(inputsArray).map( input => {
        //     input.setAttribute('required','');
        // })

        if (isNaN(gradeInput.value) || isNaN(facultyNumberInput.value)) {
            return alert("Wrong grade format!");
        }

        if (gradeInput.value < 2.00 || gradeInput.value > 6.00) {
            return alert("Grade must be between 2.00 - 6.00!");
        }

        if (
            firstNameInput.value !== "" &&
            lastNameInput.value !== "" &&
            facultyNumberInput.value !== "" &&
            gradeInput.value !== ""
        ) {
            let response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: firstNameInput.value,
                    lastName: lastNameInput.value,
                    facultyNumber: facultyNumberInput.value,
                    grade: gradeInput.value,
                }),
            });

            let tr = document.createElement("tr");

            let firstNameCell = tr.insertCell(0);
            firstNameCell.innerText = firstNameInput.value;

            let lastNameCell = tr.insertCell(1);
            lastNameCell.innerText = lastNameInput.value;

            let facultyNumberCell = tr.insertCell(2);
            facultyNumberCell.innerText = facultyNumberInput.value;

            let gradeCell = tr.insertCell(3);
            gradeCell.innerText = gradeInput.value;
            table.appendChild(tr);
        }

        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumberInput.value = '';
        gradeInput.value = '';
    }
}
solve();