export const initialStore = () => {
  const token = localStorage.getItem("token");
  return {
    user: null,
    isAuthenticated: !!token, // si hay un token, el usuario está autenticado (true), sino no hay token, no está autenticado (false)
    token: token,
    error: null,
    message: null,
    categoryProducts: [],
    categoryError: null,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token); // Guardamos el token en el localStorage al iniciar sesión
      return {
        ...store,
        user: action.payload.user,
        isAuthenticated: true, // sesión iniciada, el usuario está autenticado
        token: action.payload.token,
        error: null,
      };

    case "LOGIN_ERROR":
      return {
        ...store,
        error: action.payload,
      };

    case "LOGOUT":
      localStorage.removeItem("token"); // Eliminamos el token del localStorage al cerrar sesión
      return {
        ...store,
        user: null,
        isAuthenticated: false, // sesión cerrada, el usuario no está autenticado
        token: null,
        error: null,
      };

    case "REGISTER_ERROR":
      return {
        ...store,
        error: action.payload,
      };

    case "SET_CATEGORY_PRODUCTS":
      return {
        ...store,
        categoryProducts: action.payload,
        categoryError: null,
      };
      
    case "CATEGORY_ERROR":  
      return {
        ...store,
        categoryProducts: [], // Limpiamos los productos de la categoría en caso de error
        categoryError: action.payload,
      };
      
    default:
      return store;
  }
}
