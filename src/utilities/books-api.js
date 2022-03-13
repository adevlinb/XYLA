import sendRequest from './send-request';

const BASE_URL = '/api/books';

// populate user book shelf when signing in / 1st time.
export function getLibrary() {
    return sendRequest(`${BASE_URL}/populateShelf`);
}

// populate all users bookshelf when looking at Profile detail
export function getUserLibrary(id) {
    return sendRequest(`${BASE_URL}/users/${id}`);
}

export function getMyRecs() {
    return sendRequest(`${BASE_URL}/myRecs`);
}

// populate all users recommended shelf when looking at Profile detail
export function getUserRecs(id) {
    return sendRequest(`${BASE_URL}/users/recs/${id}`);
}

// populate all users recommended shelf when looking at Profile detail
export function addRecToFriend(data, id) {
    return sendRequest(`${BASE_URL}/users/addRecToFriend/${id}`, 'POST', data);
}

// search for books via google.books API
export function searchBooks(query) {
    return sendRequest(`${BASE_URL}/search?q=${query}`);
}

//send request to server to add (new)Book to bookshelf 
export function addNewBook(book) {
    return sendRequest(`${BASE_URL}/add`, 'POST', book);
}

// (`${BASE_URL}/posts?search=${title}`);