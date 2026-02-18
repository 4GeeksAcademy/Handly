

export const initialStore = () => {
  return {
    user: null,
    isAuthenticated: false,
    token: localStorage.getItem("token") || null, // Si hay un token en el localStorage, lo cargamos al estado inicial
    error: null,
    message: null
  }
}



export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'LOGIN':
      return {
        ...store,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token,
        error: null
      };
      
    case 'LOGIN_ERROR':

      return {
        ...store,
        error: action.payload
      };

    default:
      return store
  }    
}

