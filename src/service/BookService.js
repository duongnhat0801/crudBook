
import axios from "axios";

const URL_GETALL = "http://localhost:8080/books"

export const getAllBookList = async (title) => {
    try {
        let res = await axios.get(URL_GETALL+"?title_like="+title);
        console.log(res.data);
        return res.data;

    } catch (e) {
        return []
    }
}

export const saveBook = async (todo) => {
    try {
        await  axios.post(URL_GETALL, todo)
        return true
    } catch (e) {
        return false
    }
}

export const deleteBook = async (id) => {
    try {
        await axios.delete(`${URL_GETALL}/${id}`);
        return true;
    } catch (e) {
        return false;
    }
};

export const getBookById = async (id) => {
    try {
        const res = await  axios.get (`${URL_GETALL}/${id}`);
        return res.data;
    } catch (e) {
        return [];
    }
}

export const editBook = async (id,value) => {
    try {
        await axios.put(`${URL_GETALL}/${id}`,value);
        return true;
    } catch (e) {
        return false;
    }
}
