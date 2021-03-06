import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    return async (dispatch) => {
        const response = await axios.get('/auth/current_user')
        dispatch({ type: FETCH_USER, payload: response.data })
    }
}

export const handleToken = (token) => {
    return async (dispatch) => {
        const response = await axios.post('/api/stripe', token)
        dispatch({ type: FETCH_USER, payload: response.data});
    }
}
