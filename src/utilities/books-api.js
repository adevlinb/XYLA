import sendRequest from './send-request';

const BASE_URL = '/api/books';

//send request to server to add (new)Book to bookshelf 
export function addNewBook(book) {
    return sendRequest(`${BASE_URL}/add`, 'POST', book);
}