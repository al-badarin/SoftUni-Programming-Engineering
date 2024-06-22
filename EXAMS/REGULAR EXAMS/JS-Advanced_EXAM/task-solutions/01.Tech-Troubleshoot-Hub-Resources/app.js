//AFTER THE EXAM - EDITED SOLUTION

window.addEventListener('load', solution);

function solution() {
    const button = document.querySelector('#add-btn');
    let employee = document.querySelector('#employee');
    let category = document.querySelector('#category');
    let urgency = document.querySelector('#urgency');
    let assigned = document.querySelector('#team');
    let description = document.querySelector('#description');



    function adding(e) {
        e.preventDefault();
        if (employee.value !== '' && category.value !== '' && urgency.value !== '' && assigned.value !== '' && description.value !== '') {
            preview_list(employee.value, category.value, urgency.value, assigned.value, description.value)
            employee.value = '';
            category.value = '';
            urgency.value = '';
            assigned.value = '';
            description.value = '';
            button.setAttribute('disabled', true);
        } else {
            return;
        }
    }

    const remove_preview = function (emp, cat, urg, ass, disc) {
        employee.value = emp;
        category.value = cat;
        urgency.value = urg;
        assigned.value = ass;
        description.value = disc;
        button.removeAttribute('disabled', true);
        let li = document.querySelector('.problem-content')
        li.remove();
    }

    const continue_preview = function (emp, cat, urg, ass, disc) {


        let continue_list_value = document.querySelector('.pending-list');
        continue_list_value.style.display = 'flex';
        let li = document.createElement('li');
        li.className = 'problem-content';
        let article = document.createElement('article');
        article.style.display = 'flex';
        let p_emp = document.createElement('p');
        let p_cat = document.createElement('p');
        let p_urg = document.createElement('p');
        let p_ass = document.createElement('p');
        let p_disc = document.createElement('p');
        p_emp.textContent = emp;
        p_cat.textContent = cat;
        p_urg.textContent = urg;
        p_ass.textContent = ass;
        p_disc.textContent = disc;
        article.appendChild(p_emp);
        article.appendChild(p_cat)
        article.appendChild(p_urg)
        article.appendChild(p_ass)
        article.appendChild(p_disc)
        let button3 = document.createElement('button');
        button3.className = 'resolve-btn';
        button3.textContent = 'Resolved';
        button3.addEventListener('click', function () { finish_preview(emp, cat, urg, ass, disc) });

        li.appendChild(article, button3);
        li.appendChild(button3);
        continue_list_value.appendChild(li);

        let li2 = document.querySelector('.preview-list li');
        li2.remove();

    }

    const finish_preview = function (emp, cat, urg, ass, disc) {


        let resolved_list_value = document.querySelector('.resolved-list');
        resolved_list_value.style.display = 'flex';
        let li = document.createElement('li');
        li.className = 'problem-content';
        let article = document.createElement('article');
        article.style.display = 'flex';
        let p_emp = document.createElement('p');
        let p_cat = document.createElement('p');
        let p_urg = document.createElement('p');
        let p_ass = document.createElement('p');
        let p_disc = document.createElement('p');
        p_emp.textContent = emp;
        p_cat.textContent = cat;
        p_urg.textContent = urg;
        p_ass.textContent = ass;
        p_disc.textContent = disc;
        article.appendChild(p_emp);
        article.appendChild(p_cat)
        article.appendChild(p_urg)
        article.appendChild(p_ass)
        article.appendChild(p_disc)
        let button3 = document.createElement('button');
        button3.className = 'clear-btn';
        button3.textContent = 'Clear';
        button3.addEventListener('click', function () { cleared() });

        li.appendChild(article, button3);
        li.appendChild(button3);
        resolved_list_value.appendChild(li);

        let li2 = document.querySelector('.pending-list li');
        li2.remove();

    }

    const cleared = function () {
        let li2 = document.querySelector('.resolved-list li');
        li2.remove();
        button.removeAttribute('disabled', true);
    }

    function preview_list(emp, cat, urg, ass, disc) {
        let preview_list_value = document.querySelector('.preview-list');
        preview_list_value.style.display = 'flex';
        let li = document.createElement('li');
        li.className = 'problem-content';
        let article = document.createElement('article');
        article.style.display = 'flex';
        let p_emp = document.createElement('p');
        let p_cat = document.createElement('p');
        let p_urg = document.createElement('p');
        let p_ass = document.createElement('p');
        let p_disc = document.createElement('p');
        p_emp.textContent = emp;
        p_cat.textContent = cat;
        p_urg.textContent = urg;
        p_ass.textContent = ass;
        p_disc.textContent = disc;
        article.appendChild(p_emp);
        article.appendChild(p_cat)
        article.appendChild(p_urg)
        article.appendChild(p_ass)
        article.appendChild(p_disc)
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        button1.className = 'edit-btn';
        button2.className = 'continue-btn';
        button1.textContent = 'Edit';
        button2.textContent = 'Continue';
        button1.addEventListener('click', function () { remove_preview(emp, cat, urg, ass, disc) });
        button2.addEventListener('click', function () { continue_preview(emp, cat, urg, ass, disc) });
        li.appendChild(article);
        li.appendChild(button1);
        li.appendChild(button2);
        preview_list_value.appendChild(li);
    }


    button.addEventListener('click', adding);
}