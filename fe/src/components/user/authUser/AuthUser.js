import axios from "axios";
export  function authUser() {

    const http = axios.create({
        baseURL: "http://localhost:8000/api",
        headers: {
            "Content-type": "application/json"
        }
    });
    return {

        http
    }
}