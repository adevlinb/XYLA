import sendRequest from './send-request';

const BASE_URL = '/api/books';

// Retrieve an unpaid order for the logged in user
export function addNewBook(book) {
    console.log('books-api')
    return sendRequest(`${BASE_URL}/add`, 'POST', book);
}