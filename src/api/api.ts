import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "d832e30a-b023-4ff8-b5a8-9ef96cfd6279"
    }
})

export const userApi = {
    getUsers(currentPage: number, pageSize: number) {
        return (instance.get(`users?page=${currentPage}&count=${pageSize}`,)
                .then(response => {
                    return response.data
                })
        )
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`,)

    },
    unFollow(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },


}

export const authApi ={
    getAuthMe(){
        return  instance.get(`auth/me`);}
}

export const profileApi = {
    getProfile (userId:string){
        return   instance.get(`profile/ `+ userId);
    },
    getStatus(userId:string){
        return instance.get(`status/`+ userId)
    },
    updateStatus(status:string){
        return instance.put(`status/`+ {status:status})
    },
}