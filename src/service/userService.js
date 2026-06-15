import { httpAxios } from "../helper/axios";


export async function  signUp(user){
       const res= await httpAxios.post("/api/user", user).then(response=>response.data)
       return res;
}

export async function login(loginData){
       const res = await httpAxios.post("/api/login", loginData).then(response=> response.data)
       return res;
}
export async function currentUser(){
       const res = await httpAxios.get("/api/current").then(response=> response.data)
       return res;
}

export async function logout(){
       const res = await httpAxios.post("/api/logout").then(response=> response.data)
       return res;
}