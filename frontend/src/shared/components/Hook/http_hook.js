import {useCallback, useContext} from 'react';
import { AuthContext } from '../../context/auth_context';



const URL = `${process.env.REACT_APP_BACKEND_URL}`;

export const useFetch = () => {
    const auth = useContext(AuthContext);
    const abortController = new AbortController();


    // "Authorization": `${process.env.REACT_APP_PASS}`}

    // SEND REQUEST
    const sendRequest = useCallback( async(path, method = 'GET', formData, headers = {"Content-Type":"application/json"}, isFormData = false) => {
            const getUrl = (endpoint) => {

                return `${'http://127.0.0.1:3001/api'}${endpoint}`
            }
            if(method === 'GET'){
               return new Promise((resolve, reject) => {
                    var requestOptions = {
                        method: method,
                        headers: headers,
                        redirect: 'follow',
                        credentials: 'include',
                        signal: abortController.signal,
                    };
                    
                    fetch(getUrl(path), requestOptions)
                        .then(response => {
                            if(response.ok){
                                return response.json()
                            }else if(response.status === 401){
                                // console.log('401');
                                auth.logout();
                            }else{
                                return reject('Oppps... Something went wrong the backend server not found!')
                            }
                        })
                        .then(result => result?.error ? resolve(result) : resolve(result))
                        .catch( e => {
                            if(e.message === 'Failed to fetch') return reject({message: 'Unable to conenct the server. Please refresh and try again!'});
                            reject(e)
                        })
                })
            }else{
               return new Promise((resolve, reject) => {
                    var requestOptions = {
                        method: 'POST',
                        headers: headers,
                        // body: JSON.stringify(formData),
                        body: isFormData ? formData : JSON.stringify(formData),
                        redirect: 'follow',
                        credentials: 'include',
                        signal: abortController.signal,
                    };
                    fetch(getUrl(path), requestOptions)
                        .then(response => {
                            if(response.ok){
                                return response.json()
                            }else if(response.status === 401){
                                auth.logout();
                            }else{
                                return reject('Oppps... Something went wrong the backend server not found!')
                            }
                        })
                        .then(result => result?.error ? resolve(result) : resolve(result))
                        .catch( e => {
                            if(e.message === 'Failed to fetch') return reject({message: 'Unable to conenct the server. Please refresh and try again!'});
                            reject(e)
                        })

                })
            }
    })
    return {sendRequest, abortController};
}



// const requestOptions = {
//     method: 'POST',
//     headers: {
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify(details),
//     redirect: 'follow',
//     credentials: 'include',
// };
// fetch(getUrl('/initial/login'), requestOptions)
// .then(response => {
//     if(response.ok){
//         return response.json();
//     }else if(response.status === 401){
//         console.log('UNAUTHORIZED')
//     }else{
//         console.log('Oppps... Something went wrong the backend server not found!')
//     }
// })
// .then(result => {
//     if(result && result.error){
//         console.log(result.error)
//     }else{
//         auth.login(result)
//         redirect("/home")
//     }
// })
// .catch( e => {
//     console.log(e)
// })