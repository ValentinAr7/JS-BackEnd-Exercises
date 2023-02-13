import * as api from './api'        // import all data from api

const endPoint = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout'
}

export async function login(email, password){
    const user = await api.post(endPoint.login, {email, password})    //sets the method POST in api.js and takes the data 
    sessionStorage.setItem('user', JSON.stringify(user));             //stores the user in the localstorage
}


export async function register(email, password){
    const user = await api.post(endPoint.register, {email, password})    //sets the method POST in api.js and takes the data 
    sessionStorage.setItem('user', JSON.stringify(user))

}

export async function logout(){
    api.get(endPoint.logout)
        sessionStorage.removeItem('user')           //remove user
    }