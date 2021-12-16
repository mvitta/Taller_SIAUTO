import {apiURL} from '../services/request';

const getURL = apiURL;

export const getUsuarios = () =>{
    const url = getURL+"/usuarios";
    const request = {
        method:'GET',
    };
    return fetch(url, request).then((response) => response.json());
};

export const getUsuario = (data) =>{
    const url = getURL+"/usuarios/login";
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(url, request).then((response) => response.json());
}
