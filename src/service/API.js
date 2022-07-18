import axios from "axios";

const API = axios.create(
    {
        baseURL: "htts://localhost:3300",
        headers:{
            "Conentents-Type" : "application/json"
        },
        withCredentials: true
    }
);

export const getPosts = async () => {
    const response = await axios.get('/posts');
    return response.data;
};

export default API;