import axios from 'axios';

export const createUser = (user) => {
    return axios.post('/api/users', user);
};

export const fetchUser = (userId) => {
    return axios.get(`/api/users/${userId}`);
};

export const fetchUsers = () => {
    return axios.get(`/api/users`);
};

// make routes (make sure we have routes)
// redux utils
// redux actions
// redux reducers
// combine it with entities

// businesses / business -> done
// hours / hour done done
// categories / category done
// groups / group -> no groups route 
