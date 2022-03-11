import sendRequest from './send-request';

const BASE_URL = '/api/profiles';

// populate user book shelf when signing in / 1st time.
export function getAllProfiles() {
    return sendRequest(`${BASE_URL}/allProfiles`);
}