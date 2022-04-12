import sendRequest from './send-request';

const BASE_URL = '/api/clubs';

// populate user book shelf when signing in / 1st time.
export function getAllClubs() {
    return sendRequest(`${BASE_URL}/allClubs`);
}

//send request to server to add (new)Book to bookshelf 
export function startNewClub(post) {
    console.log('clubs api')
    return sendRequest(`${BASE_URL}/startNewClub`, 'POST', post);
}