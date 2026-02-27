import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./CategoryPage.module.css";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Product } from "../components/Product";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const parseImages = (imagesStr) => {
  if (!imagesStr) return [];
  if (Array.isArray(imagesStr)) return imagesStr;
  // Convierte el formato PostgreSQL {url1,url2} a array
  return imagesStr.replace(/^\{|\}$/g, "").split(",").filter(Boolean);
};

const CATEGORY_ICONS = {
  electronica: "⚡",
  ropa: "👕",
  hogar: "🏠",
  deportes: "🏃",
  libros: "📚",
  juguetes: "🎮",
  vehiculos: "🚗",
  default: "🏷️",
};

export const CategoryPage = () => {
  const { categoryName } = useParams();
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    getProductsByCategory();
  }, [categoryName]);

  const getProductsByCategory = async () => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/api/products/category/${categoryName}`
      );
      const data = await response.json();

      if (!response.ok) {
        dispatch({
          type: "CATEGORY_ERROR",
          payload: "Error al obtener los productos",
        });
        return;
      }

      dispatch({ type: "SET_CATEGORY_PRODUCTS", payload: data });
    } catch (error) {
      dispatch({
        type: "CATEGORY_ERROR",
        payload: "Error al obtener los productos por categoría",
      });
    }
  };

  const icon =
    CATEGORY_ICONS[categoryName?.toLowerCase()] ?? CATEGORY_ICONS.default;

  const capitalizedName =
    categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1);

  return (
    <div className={styles.root}>
      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <a href="/">Inicio</a> &nbsp;/&nbsp; Categorías &nbsp;/&nbsp;{" "}
            {categoryName}
          </div>
          <h1 className={styles.title}>
            <span className={styles.titleIcon}>{icon}</span>
            <span className={styles.titleAccent}>{capitalizedName}</span>
          </h1>
          <p className={styles.count}>
            {store.categoryProducts?.length ?? 0} producto
            {store.categoryProducts?.length !== 1 ? "s" : ""} encontrado
            {store.categoryProducts?.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* ── Productos ── */}
      <div className={styles.body}>
        {store.categoryProducts?.length > 0 ? (
          <div className={styles.grid}>
            {store.categoryProducts.map((product) => {
              const images = parseImages(product.images);
              const firstImage = images[0];

              return (
                <Product 
                product={product}
                icon={icon}
                firstImage={firstImage}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🔍</div>
            <h2>Sin productos por ahora</h2>
            <p>
              No encontramos productos en la categoría{" "}
              <strong>{categoryName}</strong>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};