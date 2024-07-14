const bookingReducer = (state = {}, action) => {
    switch (action.type) {
    case 'BOOK_RIDE':
        return action.payload;
    default:
        return state;
    }
};
  
export default bookingReducer;
  