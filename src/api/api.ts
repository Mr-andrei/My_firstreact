import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY":"d832e30a-b023-4ff8-b5a8-9ef96cfd6279"
    }
})

export const userApi = {
    getUsers (currentPage:number,pageSize:number) {
        return (    instance.get(`users?page=${currentPage}&count=${pageSize}`,)
                . then (response => {
                    return response.data
                })
        )
    }
}

// export function getUsers (currentPage:number,pageSize:number) {
//  return (    instance.get(`users?page=${currentPage}&count=${pageSize}`,)
//          . then (response => {
//             return response.data
//      })
//  )
// }


export function getUsersFollow (currentPage:number,pageSize:number) {
    return (    instance.get(`follow?page=${currentPage}&count=${pageSize}`,
            ). then (response => {
            return response.data
        })
    )
}