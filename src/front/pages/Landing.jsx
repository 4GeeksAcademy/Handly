import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    Smartphone,
    Shirt,
    Home,
    Car,
    BookOpen,
    Gamepad2,
    Leaf,
    Trophy,
    Flame,
    Package,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";
import styles from "./Landing.module.css";

const categories = [
    { icon: <Smartphone size={28} />, label: "Electrónica" },
    { icon: <Shirt size={28} />, label: "Moda" },
    { icon: <Home size={28} />, label: "Hogar" },
    { icon: <Car size={28} />, label: "Vehículos" },
    { icon: <BookOpen size={28} />, label: "Libros" },
    { icon: <Gamepad2 size={28} />, label: "Gaming" },
    { icon: <Leaf size={28} />, label: "Jardín" },
    { icon: <Trophy size={28} />, label: "Deporte" },
];

const stats = [
    { value: "2M+", label: "Usuarios activos" },
    { value: "5M+", label: "Productos publicados" },
    { value: "180+", label: "Ciudades" },
];

const steps = [
    {
        num: "01",
        title: "Saca una foto",
        desc: "Fotografía lo que quieres vender y súbela en segundos desde tu móvil.",
    },
    {
        num: "02",
        title: "Publica gratis",
        desc: "Describe el artículo, fija tu precio y listo. Sin comisiones ocultas.",
    },
    {
        num: "03",
        title: "Vende y cobra",
        desc: "Chatea con compradores, cierra el trato y recibe tu dinero.",
    },
];

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            {/* ─── HERO ─── */}
            <section className={styles.hero}>
                <div className={styles.blob1} />
                <div className={styles.blob2} />

                <div className={styles.heroInner}>
                    <div className={styles.heroBadge}>
                        <Flame size={15} />
                        La app de compraventa más rápida
                    </div>
                    <h1 className={styles.heroTitle}>
                        Dale una segunda
                        <br />
                        <span className={styles.heroAccent}>vida a tus cosas</span>
                    </h1>
                    <p className={styles.heroSub}>
                        Compra y vende cerca de ti. Miles de artículos, cero complicaciones.
                    </p>
                    <div className={styles.heroCta}>
                        <Link to="/register" className={styles.ctaPrimary}>
                            Empieza ahora <ArrowRight size={16} />
                        </Link>
                        <Link to="/home" className={styles.ctaSecondary}>
                            Ver productos
                        </Link>
                    </div>

                    {/* stats strip */}
                    <div className={styles.statsRow}>
                        {stats.map((s) => (
                            <div key={s.label} className={styles.statItem}>
                                <span className={styles.statValue}>{s.value}</span>
                                <span className={styles.statLabel}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* floating cards */}
                <div className={styles.floatCard1}>
                    <Package size={22} />
                    <div>
                        <div className={styles.floatTitle}>iPhone 14 Pro</div>
                        <div className={styles.floatPrice}>€ 750</div>
                    </div>
                </div>
                <div className={styles.floatCard2}>
                    <CheckCircle2 size={18} />
                    <div className={styles.floatTitle}>¡Vendido en 2h!</div>
                </div>
            </section>

            {/* ─── CATEGORIES ─── */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Explora categorías</h2>
                <div className={styles.catGrid}>
                    {categories.map((c) => (
                        <div key={c.label} className={styles.catCard}>
                            <span className={styles.catIcon}>{c.icon}</span>
                            <span className={styles.catLabel}>{c.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── HOW IT WORKS ─── */}
            <section className={styles.howSection}>
                <div className={styles.howInner}>
                    <h2 className={styles.howTitle}>¿Cómo funciona?</h2>
                    <div className={styles.stepsRow}>
                        {steps.map((s) => (
                            <div key={s.num} className={styles.stepCard}>
                                <div className={styles.stepNum}>{s.num}</div>
                                <h3 className={styles.stepTitle}>{s.title}</h3>
                                <p className={styles.stepDesc}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA BANNER ─── */}
            <section className={styles.ctaBanner}>
                <h2 className={styles.bannerTitle}>Tu próxima venta empieza hoy</h2>
                <p className={styles.bannerSub}>
                    Únete a miles de personas que ya ganan dinero con lo que no usan.
                </p>
                <Link to="/register" className={styles.bannerBtn}>
                    Crear cuenta gratis
                </Link>
            </section>
        </div>
    );
};