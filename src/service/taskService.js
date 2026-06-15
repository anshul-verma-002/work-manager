import { httpAxios } from "../helper/axios";

export async function addTask(task){
       const res =  await httpAxios.post("/api/tasks", task).then(response=> response.data)
       return res;
}

export async function getTasksOfUser(userId){
        const res =  await httpAxios.get(`/api/user/${userId}/tasks`).then(response=> response.data)
       return res;
}

export async function deleteTask(taskId){
        const res =  await httpAxios.delete(`/api/tasks/${taskId}`).then(response=> response.data)
       return res;
}