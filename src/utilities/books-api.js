import sendRequest from './send-request';

const BASE_URL = '/api/books';

// search for books via google.books API
export function searchBooks(query) {
    return sendRequest(`${BASE_URL}/search?q=${query}`);
}

//send request to server to add (new)Book to bookshelf 
export function addNewBook(book) {
    return sendRequest(`${BASE_URL}/add`, 'POST', book);
}

// (`${BASE_URL}/posts?search=${title}`);