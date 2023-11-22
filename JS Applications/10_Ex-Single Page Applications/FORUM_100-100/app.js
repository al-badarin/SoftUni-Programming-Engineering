const commentsUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments/';
function solve() {

    const postUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts/';
    // const commentsUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments/';
    const topicName = document.querySelector('#topicName');
    const username = document.querySelector('#username');
    const postText = document.querySelector('#postText');
    const form = document.querySelector('form');
    const main = document.querySelector('main');

    document.querySelector('.topic-container').addEventListener('click', (event) => {
        if (event.target.tagName === 'A' || event.target.tagName === 'H2') {
            commentsPage(event);
        }
    })

    loadPosts();

    form.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            if (event.target.textContent === 'Post') {
                post(event);
            } else if (event.target.textContent === 'Cancel') {
                event.preventDefault();
                form.reset();
            }
        }
    })

    async function loadPosts() {
        const response = await fetch(postUrl);
        let data = await response.json();

        if (Object.values(data).some(x => typeof (x) !== 'object')) data = { data };

        if (Object.values(data).length > 0) {
            for (let post of Object.values(data)) {
                document.querySelector('.topic-container').innerHTML +=
                    `<div class="topic-name-wrapper">
                    <div class="topic-name">
                        <a href="#" class="normal">
                            <h2 id=${post._id}>${post.title}</h2>
                        </a>
                        <div class="columns">
                            <div>
                                <p>Date: <time>${post.date}</time></p>
                                <div class="nick-name">
                                    <p>Username: <span id="user">${post.username}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            }
        }
    }

    async function post(event) {
        event.preventDefault();

        try {
            if ([topicName.value, username.value, postText.value].some(x => x === '')) {
                throw new Error('Please, fill all fields!')
            }
            const date = new Date().toISOString();
            const postData = {
                title: topicName.value,
                username: username.value,
                content: postText.value,
                date: date
            }

            const response = await fetch(postUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            })

            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            form.reset();
            loadPosts();
            console.log(data);
        } catch (error) {
            return alert(error.message)
        }
    }

    async function commentsPage(event) {

        const spanUsername = event.currentTarget.querySelector('#user').textContent;
        const topicTitle = event.currentTarget.querySelector('h2').textContent;
        const time = event.currentTarget.querySelector('time').textContent;


        main.style.display = 'none';
        const id = event.target.id;

        const divThemeContent = document.createElement('div');
        divThemeContent.className = 'theme-content';
        const divThemeTitle = document.createElement('div');
        divThemeTitle.className = 'theme-title';
        divThemeTitle.innerHTML =
            `<div class="theme-name-wrapper">
                <div class="theme-name">
                    <h2>${topicTitle}</h2>
                </div>
            </div>`
        const divComments = document.createElement('div');
        divComments.className = 'comment';

        let postDate = time.split('.');
        postDate = postDate[0].replace('T', ' ');

        const res = await fetch(postUrl + id);
        const postData = await res.json();

        divComments.innerHTML =
            `<div class="header">
            <img src="./static/profile.png" alt="avatar">
            <p><span>${spanUsername}</span> posted on <time>${postDate}</time></p>

            <p class="post-content">${postData.content}</p>
        </div>`

    //    const divCom = await loadComments(event);  // при заявка към коментарите тестовете не минават, понеже липсва изчакване
    //     divComments.appendChild(divCom);         // в head режим си минават без проблем

        const divAnswer = document.createElement('div');
        divAnswer.className = 'answer-comment';
        divAnswer.innerHTML =
            `<p><span>currentUser</span> comment:</p>
                <div class="answer">
                    <form id="post-form">
                        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                        <div>
                            <label for="username">Username <span class="red">*</span></label>
                            <input type="text" name="username" id="username">
                        </div>
                        <button>Post</button>
                    </form>
                </div>`

        divThemeContent.appendChild(divThemeTitle);
        divThemeContent.appendChild(divComments);
        divThemeContent.appendChild(divAnswer);
        document.querySelector('.container').appendChild(divThemeContent);

        document.querySelector('#post-form').addEventListener('submit', async (event) => {
            event.preventDefault();
            const text = document.querySelector('#comment').value;
            const username = document.querySelector('#post-form #username').value;

            if (!text || !username) return alert('Please, fill all fields!');

            const date = new Date().toLocaleString();

            const commentData = {
                text,
                username,
                date,
                id: id
            }

            const postComment = await fetch(commentsUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'applicatiobn/json' },
                body: JSON.stringify(commentData)
            })

            const answer = await postComment.json();

            if (postComment.ok) event.target.reset();
        })
    }
}

// async function loadComments(event) {
//     const response = await fetch(commentsUrl);
//     const commentData = await response.json();

//     const divUserComment = document.createElement('div');
//     divUserComment.id = 'user-comment';

//     if (Object.values(commentData).length > 0) {
//         let findComments = Object.values(commentData).filter(x => x.id === event.target.id);
//         for (let comment of findComments) {
//             divUserComment.innerHTML +=
//                 `<div class="topic-name-wrapper">
//                         <div class="topic-name">
//                             <p><strong>${comment.username}</strong> commented on <time>${comment.date}</time></p>
//                             <div class="post-content">
//                                 <p>${comment.text}</p>
//                             </div>
//                         </div>
//                     </div>`
//         }

//         return divUserComment;
    // }
// }

solve()