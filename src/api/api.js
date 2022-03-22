import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "b9cc38bb-6512-4b47-bb62-a540d79d919f"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followUser(userId) {
        return instance.post('follow/' + userId)
            .then(response => response.data)
    },

    unfollowUser(userId) {
        return instance.delete('follow/' + userId)
            .then(response => response.data)
    }
}