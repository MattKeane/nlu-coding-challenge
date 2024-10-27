const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getPosts() {
    const url = BASE_URL + '/posts';

    return fetch(url)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
            throw new Error(`${url} responded with status ${res.status}.`);
        });
}

export function createPost({ email, comments }) {
    const url = BASE_URL + '/posts';
    const body = JSON.stringify({
        title: email,
        post: comments,
        userId: 1,
    });

    return fetch(url, {
        method: 'POST',
        body,
        headers: {
            'Content-type': 'application/json',
        }
    })
        .then((res) => res.json());
}