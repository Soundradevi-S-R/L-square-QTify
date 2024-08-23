import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do/";

export const fetchTopAlbums = async() =>{

    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        console.log("FET_TOP_ALBUMS_API_CALL");
        return response.data;
    }catch(e){
        console.log(e.response.message);
    }
}

export const fetchNewAlbums = async() =>{

    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        console.log("FET_NEW_ALBUMS_API_CALL");
        return response.data;

    }catch(e){
        console.log(e.response.message);
    }
}