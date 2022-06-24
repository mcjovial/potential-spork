export const getAllUsers = () => {
  
  return (dispatch) => {
    //   fetch  data from jsonplaceholder
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) =>
        //dispatch response to the store
        dispatch({ type: 'GET_USERS', payload: result })
      );
  };
};
