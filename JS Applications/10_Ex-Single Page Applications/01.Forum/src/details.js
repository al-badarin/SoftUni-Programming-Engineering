const section = document.getElementById('detailsView');
const postElement = {
    title: document.getElementById('details-title'),
    username: document.getElementById('details-username'),
    time: document.getElementById('details-time'),
    content: document.getElementById('details-content'),
};

const commentsList = document.getElementById('user-comment');

const form = section.querySelector('form');
form.addEventListener('submit', onsubmit);

section.remove();


export function showDetails(ev) {
    let target = ev.target;

    if (target.tagName == 'H2') {
        target = target.parentElement;
    }
    if (target.tagName == 'A') {
        ev.preventDefault();

        const postId = target.id;
        showPost(postId);
    }
}

async function showPost(postId) {
    document.getElementById('main').replaceChildren('Loading...');

    const [res, commentsRes] = await Promise.all([
        fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + postId),
        fetch('http://localhost:3030/jsonstore/collections/myboard/comments')
    ]);

    const [post, comments] = await Promise.all([
        res.json(),
        commentsRes.json()
    ]);

    commentsList.replaceChildren(...Object
        .values(comments)
        .filter(c => c.postId == postId)
        .map(createCommentElement));

    form.id = postId;
    postElement.title.textContent = post.title; 
    postElement.username.textContent = post.username; 
    postElement.time.textContent = post.dateCreated; 
    postElement.content.textContent = post.content; 

    document.getElementById('main').replaceChildren(section);
}