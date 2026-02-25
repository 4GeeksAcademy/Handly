import { useParams } from "react-router-dom";
import "./CategoryPage.css";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const CategoryPage = () => {
  const { categoryName } = useParams();
  const { store, dispatch } = useGlobalReducer()

  useEffect(() => {

    const getProductsByCategory = async () => {

      try {

        const response = await fetch(`${BACKEND_URL}/api/category/${categoryName}`)
        const data = await response.json()

        if (!response.ok) {
          dispatch({
            type: "CATEGORY_ERROR",
            payload: "Error al obtener los productos"
          })
          return
        }
        dispatch({
          type: "SET_CATEGORY_PRODUCTS",
          payload: data
        })

      } catch (error) {
        dispatch({
          type: "CATEGORY_ERROR",
          payload: "Error al obtener los productos por categoría"
        })
      }
    }
    getProductsByCategory()

  }, [categoryName])


  return (


    <div className="category-container">
      <h1>Categoría: {categoryName}</h1>

      {store.categoryProducts.length > 0 ? (
        <div className="products-list">
          {store.categoryProducts.map((product) => (
            <div key={product.id}>
              {product.name}
            </div>
          ))}
        </div>
      )
        : (<p>No hay productos en esta categoría</p>
        )}
    </div>

  )
}