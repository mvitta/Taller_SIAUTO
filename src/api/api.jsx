import rolesusuarios from '../services/rolUsuarios.json';
import usuarios from '../services/usuarios.json';
import permisos from '../services/permisos.json';
import servicios from '../services/tiposServicios.json';


const getDataRolUsuarios = rolesusuarios;
const getDataUsuarios = usuarios;
const getDataPermisos = permisos;
const getDataServicios = servicios;

export const getDatosRolesUsuarios = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(getDataRolUsuarios);
        },)
    });
}

export const getDatosUsuarios = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(getDataUsuarios);
        },)
    });
}

export const getDatosPermisos = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(getDataPermisos);
        },)
    });
}

export const getDatosTiposServicios = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(getDataServicios);
        },)
    });
}