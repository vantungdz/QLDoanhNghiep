import axio from "./axios";

const userApi = {
    getAll(){
        const url = '/user';
        return axio.get(url)
    }
};

export default userApi