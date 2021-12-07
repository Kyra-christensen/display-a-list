export function renderPost(postData) {
    const postEl = document.createElement('div');
    const titleEl = document.createElement('p');

    postEl.classList.add('post');

    titleEl.textContent = `${postData.user} says: ${postData.title}`;

    postEl.append(titleEl);

    for (let reply of postData.replies) {
        const replyEl = document.createElement('p');

        replyEl.textContent = reply;

        replyEl.classList.add('reply');

        postEl.append(replyEl);

    }
    return postEl;
}