import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/'
})

export const usersAPI = { 
    loadToken () {
        return instance.get(`token`).then(response => {
            return response.data;
        });
    },

    loadUsersData (page) {
        return instance.get(`users?page=${page}&count=6`).then(response => {
            return response.data;
        });
    },

    async sendRegisterData (data) {
        const {token}  = await this.loadToken();
        const send_data = new FormData();

        for (let key in data) {
            send_data.append(key, data[key]);
        }

        return instance.post(`users`, send_data, { headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Token': token} }).then(response => {
            return response.data;
        });
    }
};

export const registerAPI = { 
    loadPositionsData () {
        return instance.get(`positions`).then(response => {
            return response.data;
        });
    },
};