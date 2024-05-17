// actions.js
import axios from 'axios';

export const fetchUserDetails = () => async (dispatch) => {
    
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios.get('http://localhost:3000/api/auth/user', config)
            .then(response => {
                dispatch({ type: 'FETCH_USER_SUCCESS', payload: response.data });
            })
            .catch(error => {
                // Handle the error
                dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message });
            });





    };