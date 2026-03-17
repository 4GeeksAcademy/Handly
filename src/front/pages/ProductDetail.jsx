"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
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
    User,
} from "lucide-react";
import { useParams } from "react-router-dom";
import Map from "../components/Map";
const backendUrl = import.meta.env.VITE_BACKEND_URL

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);
    const user_id = localStorage.getItem("user_id");

    console.log(user_id)

    useEffect(() => {
        async function getProduct() {
            const response = await fetch(`${backendUrl}api/products/get_product/${id}`)
            const data = await response.json()
            setProduct(data)
        }
        getProduct()
    }, [id])

    if (!product) return <p>Cargando...</p>

    const images = product.images
        ? product.images.replace(/[{}]/g, "").split(",")
        : [];

    const prevImage = () =>
        setCurrentImage((i) => (i === 0 ? images.length - 1 : i - 1));
    const nextImage = () =>
        setCurrentImage((i) => (i === images.length - 1 ? 0 : i + 1));

    const openChat = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            const response = await fetch(`${backendUrl}api/chat/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ recipient_id: product.user_id }),
            });

            if (!response.ok) {
                console.error("Error al crear/obtener chat");
                return;
            }

            const chat = await response.json();
            navigate(`/message?chat=${chat.id}`);
        } catch (error) {
            console.error("Error al abrir chat:", error);
        }
    };


    console.log(product)

    return (
        <div className={styles.container}>

            {/* ── Volver ── */}
            <button
                className={styles.backLink}
                aria-label="Volver atras"
                onClick={() => navigate(-1)}
            >
                <ArrowLeft size={16} />
                <span>Volver</span>
            </button>

            <div className={styles.layout}>

                {/* ── Galería ── */}
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
                                    className={`${styles.thumbnail} ${i === currentImage ? styles.thumbnailActive : ""}`}
                                    onClick={() => setCurrentImage(i)}
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

                {/* ── Info ── */}
                <section className={styles.info}>

                    <span className={styles.categoryBadge}>
                        {product.category ?? "Sin categoria"}
                    </span>

                    <h1 className={styles.title}>{product.title}</h1>

                    <p className={styles.price}>
                        <span className={styles.currency}>$</span>
                        {product.price.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
                    </p>

                    <div className={styles.divider} />

                    {product.description && (
                        <p className={styles.description}>{product.description}</p>
                    )}

                    {/* Meta */}
                    <div className={styles.metaList}>
                        

                        <div className={styles.metaItem}>
                            <div className={styles.metaIcon}><Tag size={18} /></div>
                            <div className={styles.metaContent}>
                                <span className={styles.metaLabel}>Categoria</span>
                                <span className={styles.metaValue}>
                                    {product.category?.name ?? "Sin categoría"}
                                </span>
                            </div>
                        </div>

                        <div className={styles.metaItem}>
                            <div className={styles.metaIcon}><Truck size={18} /></div>
                            <div className={styles.metaContent}>
                                <span className={styles.metaLabel}>Envio</span>
                                <span className={`${styles.shippingBadge} ${product.shipping ? styles.shippingAvailable : styles.shippingUnavailable}`}>
                                    {product.shipping ? "Envio disponible" : "Solo retiro en persona"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Vendedor */}

                    {user_id != product.user_id && (
                        <div className={styles.authorCard}>
                            <div className={styles.authorAvatar}>
                                <User size={20} />
                            </div>
                            <div className={styles.authorInfo}>
                                <span className={styles.authorLabel}>Vendedor</span>
                                <span className={styles.authorName}>{product.author}</span>
                            </div>
                            <button className={styles.btnPrimary} onClick={openChat}>
                                <MessageCircle size={16} />
                                Contactar
                            </button>
                        </div>
                    )}

                    <div className={styles.metaItem}>
                            <div className={styles.metaIcon}><MapPin size={18} /></div>
                            <div className={styles.metaContent}>
                                <span className={styles.metaLabel}>Ubicacion</span>
                               
                            </div>
                        </div>
  <div className={styles.mapWrap}>

                    <Map
                        onSelectLocation={(coords) =>
                            setLiked(prev => ({ ...prev, location: coords }))
                        }
                        coords={product.location ? JSON.parse(product.location) : null}
                        readOnly={true}
                    ></Map>
                </div>



                </section>
              

            </div>
        </div>
    );
}