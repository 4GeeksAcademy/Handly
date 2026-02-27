import { Link } from "react-router-dom";
import styles from "./Product.module.css";


export const Product = ({ product, icon, firstImage }) => (
    <div className={styles.card} key={product.id}>
        {/* Imagen */}
        {firstImage ? (
            <img
                className={styles.cardImg}
                src={firstImage}
                alt={product.title}
                onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                }}
            />
        ) : null}
        <div
            className={styles.cardPlaceholder}
            style={{ display: firstImage ? "none" : "flex" }}
        >
            {icon}
        </div>

        {/* Info */}
        <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>{product.title}</h2>
            <p className={styles.cardDesc}>{product.description}</p>

            <div className={styles.cardMeta}>

                {product.shipping && (
                    <span className={styles.cardShipping}>
                        ✓ Envío disponible
                    </span>
                )}
            </div>

            <div className={styles.cardFooter}>
                <span className={styles.cardPrice}>
                    $ {product.price}
                </span>
                <Link
                    to={`/product/${product.id}`}
                    className={styles.cardLink}
                >
                    Ver detalle →
                </Link>
            </div>
        </div>
    </div>
);