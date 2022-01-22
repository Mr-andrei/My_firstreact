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
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,)

    },
    unFollow(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getProfile (userId:string){
      return   instance.get(`https://social-network.samuraijs.com/api/1.0/profile/ `+ userId);
    },

}

export const authApi ={
    getAuthMe(){
        return  instance.get(`auth/me`);}
}

// export function getUsersFollow (currentPage:number,pageSize:number) {
//     return (    instance.get(`follow?page=${currentPage}&count=${pageSize}`,
//             ). then (response => {
//             return response.data
//         })
//     )
// }