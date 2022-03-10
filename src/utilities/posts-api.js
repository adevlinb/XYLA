import sendRequest from './send-request';

const BASE_URL = '/api/posts';

// populate user book shelf when signing in / 1st time.
export function getAllPosts() {
    return sendRequest(`${BASE_URL}/allPosts`);
}

// search for books via google.books API
export function getUserPosts() {
    return sendRequest(`${BASE_URL}/userPosts`);
}

//send request to server to add (new)Book to bookshelf 
export function addNewPost(post) {
    return sendRequest(`${BASE_URL}/add`, 'POST', post);
}

// (`${BASE_URL}/posts?search=${title}`);