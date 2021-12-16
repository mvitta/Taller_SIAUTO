import {apiURL} from '../services/request';

const getURL = apiURL;

export const getRoles = () => {
    const url = getURL+"/roles";
    const request = {
        method:'GET'
    };
    return fetch(url, request).then((response) => response.json()).catch((error) => console.log(error));;
}