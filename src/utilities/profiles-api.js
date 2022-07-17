import sendRequest from './send-request';

const BASE_URL = '/api/profiles';

// populate user book shelf when signing in / 1st time.
export function getAllProfiles() {
    return sendRequest(`${BASE_URL}/allProfiles`);
}

export function findProfile(id) {
    return sendRequest(`${BASE_URL}/find/${id}`);
}

export function friendRequest(userId, profileId) {
    console.log("profiles api")
    return sendRequest(`${BASE_URL}/${userId}/friendRequest/${profileId}`);
}


// change HTTP METHOD TO PUT
export function updateUserSettings(id, settings) {
    console.log(id)
    return sendRequest(`${BASE_URL}/updateUserSettings/${id}`, "POST", settings);
}