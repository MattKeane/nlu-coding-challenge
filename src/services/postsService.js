const BASE_URL = "https://jsonplaceholder.typicode.com/";

export function getPosts() {
    const url = BASE_URL + "/posts";
    return fetch(url)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
            throw new Error(`${url} responded with status ${res.status}.`);
        });
}