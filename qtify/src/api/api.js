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

export const fetchSongs = async() =>{

    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        console.log("FETCH_SONGS_API_CALL");
        return response.data;

    }catch(e){
        console.log(e.response.message);
    }
}

export const fetchFilters = async() =>{

    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
        console.log("FETCH_GENRE_FILTER_API_CALL",response.data);
        return response.data;

    }catch(e){
        console.log(e.response.message);
    }
}