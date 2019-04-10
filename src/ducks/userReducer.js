import axios from 'axios';


const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

const initState = {
    email: null,
    firstName: null,
    lastName: null
}


export default function reducer(state = initState, action){
    switch (action.type){
        case REQUEST_USER_DATA + '_PENDING':
            return {...state}
        case REQUEST_USER_DATA + '_FULFILLED':
            const { email, firstName, lastName } = action.payload.user;
            return { email, firstName, lastName };
        default:
            return state;
    }
}


export function requestUserData(){
    let response = axios.get('/auth/user-data')
    .then(res=>{ return res.data })
    .catch(err=>console.log(err));
    return {
        type: REQUEST_USER_DATA,
        payload: response
    }
}






