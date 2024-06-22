window.addEventListener("load", solve);

function solve() {
  const titleInputEl = document.getElementById('post-title');
  const categoryInputEl = document.getElementById('post-category');
  const contentTextAreaEl = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn');
  const reviewUlElement = document.getElementById('review-list');
  const publishedListUlElement = document.getElementById('published-list');
  const clearBtn = document.getElementById('clear-btn');

  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let title = titleInputEl.value;
    let category = categoryInputEl.value;
    let content = contentTextAreaEl.value;

    if (title === '' || category === '' || content === '') {
      return;
    }

    let liRepostEl = document.createElement('li');
    liRepostEl.classList.add('rpost');

    let articleEl = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `${title}`;

    let pCategory = document.createElement('p');
    pCategory.textContent = `Category: ${category}`;

    let pContent = document.createElement('p');
    pContent.textContent = `Content: ${content}`;

    articleEl.appendChild(h4);
    articleEl.appendChild(pCategory);
    articleEl.appendChild(pContent);

    liRepostEl.appendChild(articleEl);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('action-btn', 'edit');
    
    let approveBtn = document.createElement('button');
    approveBtn.textContent = 'Approve';
    approveBtn.classList.add('action-btn', 'approve');

    liRepostEl.appendChild(editBtn);
    liRepostEl.appendChild(approveBtn);

    reviewUlElement.appendChild(liRepostEl);

    titleInputEl.value = '';
    categoryInputEl.value = '';
    contentTextAreaEl.value = '';


    editBtn.addEventListener('click', (e)=>{
      e.preventDefault();

      titleInputEl.value = title;
      categoryInputEl.value = category;
      contentTextAreaEl.value = content;

      liRepostEl.remove();
    });


    approveBtn.addEventListener('click', (e)=>{
      e.preventDefault();

      publishedListUlElement.appendChild(articleEl);

      liRepostEl.removeChild(editBtn);
      liRepostEl.removeChild(approveBtn);

      liRepostEl.remove();
    });


    clearBtn.addEventListener('click', (e)=>{
      e.preventDefault();

      articleEl.remove();
    });
  });
}
