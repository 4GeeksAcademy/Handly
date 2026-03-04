"use client";

import { useState, useEffect} from "react";
import styles from "./ProductDetail.module.css";
import {
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Truck,
    Tag,
    MessageCircle,
    Heart,
} from "lucide-react";
import { useParams } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL



export default function ProductDetail() {
    const {id} = useParams();  //obtengo el id de la URL
    const[product, setProduct] = useState(null) // guardo el productpo
    const [currentImage, setCurrentImage] = useState(0);
    const [liked, setLiked] = useState(false);

   
    useEffect(()=>{
        async function getProduct() {
            const response = await fetch(`${backendUrl}api/products/get_product/${id}`)
            const data = await response.json()
            console.log("producto recibido:", data);
            
            setProduct(data)
            
        }  
        getProduct() 
    
    },[id])
     
    if (!product) return <p>Cargando...</p>

     const images = product.images
        ? product.images.replace(/[{}]/g, "").split(",")
        : [];

    const prevImage = () =>
        setCurrentImage((i) => (i === 0 ? images.length - 1 : i - 1));
    const nextImage = () =>
        setCurrentImage((i) => (i === images.length - 1 ? 0 : i + 1));

    const authorInitial = String(product.user_id)



    return (
        <div className={styles.container}>
            <button
                className={styles.backLink}
                aria-label="Volver atras"
            >
                <ArrowLeft size={16} />
                <span>Volver</span>
            </button>

            <div className={styles.layout}>
                {/* ── Image Gallery ── */}
                <div className={styles.gallery}>
                    <div className={styles.mainImageWrapper}>
                        <img
                            className={styles.mainImage}
                            src={images[currentImage]}
                            alt={`${product.title} - imagen ${currentImage + 1}`}
                        />
                        {images.length > 1 && (
                            <>
                                <button
                                    className={`${styles.imageNav} ${styles.imageNavPrev}`}
                                    onClick={prevImage}
                                    aria-label="Imagen anterior"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    className={`${styles.imageNav} ${styles.imageNavNext}`}
                                    onClick={nextImage}
                                    aria-label="Imagen siguiente"
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </>
                        )}
                    </div>

                    {images.length > 1 && (
                        <div className={styles.thumbnails} role="list">
                            {images.map((src, i) => (
                                <button
                                    key={i}
                                    role="listitem"
                                    className={`${styles.thumbnail} ${i === currentImage ? styles.thumbnailActive : ""
                                        }`}
                                    onClick={() => setCurrentImage(i)}
                                    aria-label={`Ver imagen ${i + 1}`}
                                >
                                    <img
                                        className={styles.thumbnailImage}
                                        src={src}
                                        alt={`${product.title} miniatura ${i + 1}`}
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* ── sampleProduct Info ── */}
                <section className={styles.info}>
                    <span className={styles.categoryBadge}>{product.category?.name ?? "Sin categoria"}</span>

                    <h1 className={styles.title}>{product.title}</h1>

                    <p className={styles.price}>
                        <span className={styles.currency}>$</span>
                        {product.price.toLocaleString("es-MX", {
                            minimumFractionDigits: 2,
                        })}
                    </p>

                    <div className={styles.divider} />

                    {product.description && (
                        <p className={styles.description}>{product.description}</p>
                    )}

                    {/* Meta info */}
                    <div className={styles.metaList}>
                        <div className={styles.metaItem}>
                            <div className={styles.metaIcon}>
                                <MapPin size={18} />
                            </div>
                            <div className={styles.metaContent}>
                                <span className={styles.metaLabel}>Ubicacion</span>
                                <span className={styles.metaValue}>{product.location}</span>
                            </div>
                        </div>

                        <div className={styles.metaItem}>
                            <div className={styles.metaIcon}>
                                <Tag size={18} />
                            </div>
                            <div className={styles.metaContent}>
                                <span className={styles.metaLabel}>Categoria</span>
                                <span className={styles.metaValue}>
                                    {product.category?.name ?? "Sin categoría"}
                                </span>
                            </div>
                        </div>

                        <div className={styles.metaItem}>
                            <div className={styles.metaIcon}>
                                <Truck size={18} />
                            </div>
                            <div className={styles.metaContent}>
                                <span className={styles.metaLabel}>Envio</span>
                                <span
                                    className={`${styles.shippingBadge} ${product.shipping
                                        ? styles.shippingAvailable
                                        : styles.shippingUnavailable
                                        }`}
                                >
                                    {product.shipping
                                        ? "Envio disponible"
                                        : "Solo retiro en persona"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Author */}
                    <div className={styles.authorCard}>
                        <div className={styles.authorAvatar}>{authorInitial}</div>
                        <div className={styles.authorInfo}>
                            <span className={styles.authorLabel}>Publicado por</span>
                            <span className={styles.authorName}>{`Usuario ${product.user_id}`}</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className={styles.actions}>
                        <button className={styles.btnPrimary} >
                            <MessageCircle size={18} />
                            Contactar vendedor
                        </button>
                        <button
                            className={styles.btnSecondary}
                            onClick={() => setLiked(!liked)}
                            aria-label={liked ? "Quitar de favoritos" : "Agregar a favoritos"}
                        >
                            <Heart
                                size={20}
                                fill={liked ? "currentColor" : "none"}
                                style={{ color: liked ? "oklch(0.577 0.245 27.325)" : "inherit" }}
                            />
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
