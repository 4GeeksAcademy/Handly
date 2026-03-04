"use client";

import { useState } from "react";
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

const sampleProduct = {
    title: "Bolso Messenger de Cuero Vintage Premium",
    description:
        "Bolso messenger artesanal de cuero genuino con acabado vintage. Interior espacioso con compartimentos para laptop de hasta 15 pulgadas. Correa ajustable y herrajes de laton envejecido.",
    price: 2450.0,
    images: [
        "https://i.pinimg.com/736x/a0/6e/30/a06e30aed4da0e318a74d1116b5198c2.jpg",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        "https://i.pinimg.com/736x/c9/93/26/c993260d8405ee7d5d6075d7359fc6a8.jpg",
    ],
    location: "Ciudad de Mexico, CDMX",
    shipping: true,
    author: {
        name: "Maria Rodriguez",
    },
    category: {
        name: "Accesorios",
    },
};


export default function ProductDetail({



}) {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [liked, setLiked] = useState(false);

    const images = sampleProduct.images;

    const prevImage = () =>
        setCurrentImage((i) => (i === 0 ? images.length - 1 : i - 1));
    const nextImage = () =>
        setCurrentImage((i) => (i === images.length - 1 ? 0 : i + 1));

    const authorInitial = sampleProduct.author.name.charAt(0).toUpperCase();

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
                            alt={`${sampleProduct.title} - imagen ${currentImage + 1}`}
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
                                        alt={`${sampleProduct.title} miniatura ${i + 1}`}
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* ── sampleProduct Info ── */}
                <section className={styles.info}>
                    <span className={styles.categoryBadge}>{sampleProduct.category.name}</span>

                    <h1 className={styles.title}>{sampleProduct.title}</h1>

                    <p className={styles.price}>
                        <span className={styles.currency}>$</span>
                        {sampleProduct.price.toLocaleString("es-MX", {
                            minimumFractionDigits: 2,
                        })}
                    </p>

                    <div className={styles.divider} />

                    {sampleProduct.description && (
                        <p className={styles.description}>{sampleProduct.description}</p>
                    )}

                    {/* Meta info */}
                    <div className={styles.metaList}>
                        <div className={styles.metaItem}>
                            <div className={styles.metaIcon}>
                                <MapPin size={18} />
                            </div>
                            <div className={styles.metaContent}>
                                <span className={styles.metaLabel}>Ubicacion</span>
                                <span className={styles.metaValue}>{sampleProduct.location}</span>
                            </div>
                        </div>

                        <div className={styles.metaItem}>
                            <div className={styles.metaIcon}>
                                <Tag size={18} />
                            </div>
                            <div className={styles.metaContent}>
                                <span className={styles.metaLabel}>Categoria</span>
                                <span className={styles.metaValue}>
                                    {sampleProduct.category.name}
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
                                    className={`${styles.shippingBadge} ${sampleProduct.shipping
                                        ? styles.shippingAvailable
                                        : styles.shippingUnavailable
                                        }`}
                                >
                                    {sampleProduct.shipping
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
                            <span className={styles.authorName}>{sampleProduct.author.name}</span>
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
