// reducers.js
const initialState = {
    user: null,
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USER_SUCCESS':
        return { ...state, user: action.payload, error: null };
      case 'FETCH_USER_FAILURE':
        return { ...state, user: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;