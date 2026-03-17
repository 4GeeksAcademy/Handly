import Map from "../components/Map";
import { useState, useEffect, useRef } from "react";
import { Modal } from "bootstrap";
import styles from "./Profile.module.css";

const backendUrl = import.meta.env.VITE_BACKEND_URL

export function Profile() {
    const [user, setUser] = useState({
        id: null, first_name: "", last_name: "", email: "", address: "", number: ""
    });
    const [newProduct, setNewProduct] = useState({
        title: "", category: "", description: "", images: [], price: "", location: ""
    });
    const [productSuccess, setProductSuccess] = useState(false);
    const [imageInput, setImageInput] = useState("");
    const [listProducts, setListProducts] = useState([]);
    const modalActualizarRef = useRef(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(prev => ({ ...prev, ...parsedUser }));
        }
        getMyProducts();
    }, []);

    function handleAddImage() {
        const trimmed = imageInput.trim();
        if (!trimmed) return;
        setNewProduct(prev => ({ ...prev, images: [...prev.images, trimmed] }));
        setImageInput("");
    }

    function handleRemoveImage(index) {
        setNewProduct(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }));
    }

    async function putUser(user) {
        const updatedUser = {
            first_name: user.first_name, last_name: user.last_name,
            email: user.email, address: user.address, number: user.number
        };
        try {
            const response = await fetch(`${backendUrl}api/user/editUser/${user.id}`, {
                method: "PUT", body: JSON.stringify(updatedUser),
                headers: { "Content-type": "application/json" },
            });
            if (!response.ok) throw new Error("Error al actualizar usuario");
            const userActualizado = { ...user, ...updatedUser };
            localStorage.setItem("user", JSON.stringify(userActualizado));
            setUser(userActualizado);
            const modalEl = document.getElementById('modalActualizar');
            const modalInstance = Modal.getInstance(modalEl);
            if (modalInstance) {
                modalInstance.hide();
                document.body.classList.remove('modal-open');
                document.querySelector('.modal-backdrop')?.remove();
            }
        } catch (error) {
            console.error(error);
            alert("No se pudo actualizar el usuario");
        }
    }

    async function getMyProducts() {
        const token = localStorage.getItem("token");
        const response = await fetch(`${backendUrl}api/products/my-products`, {
            method: "GET", headers: { "Authorization": `Bearer ${token}` }
        });
        const data = await response.json();
        if (Array.isArray(data)) setListProducts(data);
    }

    async function deleteUser(id) {
        try {
            const response = await fetch(`${backendUrl}api/user/deleteUser/${id}`, { method: "DELETE" });
            if (!response.ok) throw new Error("Error al eliminar usuario");
            localStorage.removeItem("user");
            const modalEl = document.getElementById('modalEliminar');
            const modalInstance = Modal.getInstance(modalEl);
            if (modalInstance) {
                modalInstance.hide();
                document.body.classList.remove('modal-open');
                document.querySelector('.modal-backdrop')?.remove();
            }
            window.location.href = "/";
        } catch (error) { console.error(error); }
    }

    async function createProduct() {
        try {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            const productToSend = { ...newProduct, "g.user.id": storedUser.id, location: JSON.stringify(newProduct.location) };
            const response = await fetch(`${backendUrl}api/products/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productToSend)
            });
            const data = await response.json();
            if (!response.ok) { console.error(data.error); return; }
            setProductSuccess(true);
            setNewProduct({ title: "", category: "", description: "", images: [], price: "", location: "" });
            setImageInput("");
            const modalEl = document.getElementById('modalAñadirProducto');
            const modalInstance = Modal.getInstance(modalEl);
            if (modalInstance) {
                modalInstance.hide();
                document.body.classList.remove('modal-open');
                document.querySelector('.modal-backdrop')?.remove();
            }
            getMyProducts();
        } catch (error) { console.error("Error creando producto:", error); }
    }

    async function deleteProduct(id) {
        try {
            const response = await fetch(`${backendUrl}api/products/delete_product/${id}`, { method: "DELETE" });
            if (!response.ok) throw new Error("Error al eliminar producto");
            setListProducts(listProducts.filter((p) => p.id !== id));
        } catch (error) { console.error(error); }
    }

    const initials = user.first_name && user.last_name
        ? `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`
        : "?";

    return (
        <div className={styles.page}>

            {/* ── HERO ── */}
            <div className={styles.hero}>
                <div className={styles.heroBanner} />
                <div className={styles.heroContent}>
                    <div className={styles.avatar}>{initials}</div>
                    <div className={styles.heroText}>
                        <h1 className={styles.heroName}>
                            {user.first_name || "Tu"} {user.last_name || "Perfil"}
                        </h1>
                        <p className={styles.heroEmail}>{user.email || "usuario@email.com"}</p>
                    </div>
                </div>
            </div>

            {/* ── BODY ── */}
            <div className={styles.body}>

                {/* ── INFO PERSONAL ── */}
                <section className={styles.card}>
                    <h2 className={styles.sectionTitle}>Datos personales</h2>
                    <div className={styles.fieldGrid}>
                        <div className={styles.field}>
                            <label className={styles.label}>Nombre</label>
                            <input className={styles.input} type="text" value={user.first_name}
                                onChange={(e) => setUser({ ...user, first_name: e.target.value })} />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Apellido</label>
                            <input className={styles.input} type="text" value={user.last_name}
                                onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Correo electrónico</label>
                            <input className={styles.input} type="email" value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Teléfono</label>
                            <input className={styles.input} type="number" value={user.number}
                                onChange={(e) => setUser({ ...user, number: e.target.value })} />
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button
                            className={styles.btnPrimary}
                            data-bs-toggle="modal"
                            data-bs-target="#modalActualizar"
                        >
                            Guardar cambios
                        </button>
                        <button
                            className={styles.btnGhost}
                            data-bs-toggle="modal"
                            data-bs-target="#modalEliminar"
                        >
                            Eliminar cuenta
                        </button>
                    </div>
                </section>

                {/* ── MIS PRODUCTOS ── */}
                <section className={styles.card}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Mis productos</h2>
                        <button
                            className={styles.btnPrimary}
                            data-bs-toggle="modal"
                            data-bs-target="#modalAñadirProducto"
                        >
                            + Publicar producto
                        </button>
                    </div>

                    {listProducts.length === 0 ? (
                        <div className={styles.empty}>
                            <span className={styles.emptyIcon}>📦</span>
                            <p>Todavía no publicaste ningún producto.</p>
                        </div>
                    ) : (
                        <div className={styles.productGrid}>
                            {listProducts.map((product) => {
                                const images = product.images
                                    ? product.images.replace(/[{}]/g, "").split(",")
                                    : [];
                                return (
                                    <div className={styles.productCard} key={product.id}>
                                        <div className={styles.productImg}>
                                            {images[0]
                                                ? <img src={images[0]} alt={product.title} />
                                                : <div className={styles.productImgPlaceholder}>📷</div>
                                            }
                                            <span className={styles.productCategory}>{product.category}</span>
                                        </div>
                                        <div className={styles.productInfo}>
                                            <p className={styles.productTitle}>{product.title}</p>
                                            <p className={styles.productPrice}>{product.price} €</p>
                                            <button
                                                className={styles.btnDelete}
                                                onClick={() => deleteProduct(product.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </section>
            </div>

            {/* ══════════════════════════════════════════
                MODAL — Actualizar datos
            ══════════════════════════════════════════ */}
            <div className="modal fade" id="modalActualizar" ref={modalActualizarRef} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className={`modal-content ${styles.modal}`}>
                        <div className={styles.modalHeader}>
                            <button type="button" className="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" />
                            <h5 className={styles.modalTitle}>Actualizar información</h5>
                            <p className={styles.modalSubtitle}>Modificá los campos que querés cambiar</p>
                        </div>
                        <div className="modal-body p-4">
                            <div className={styles.field}>
                                <label className={styles.label}>Nombre</label>
                                <input className={styles.input} type="text" value={user.first_name}
                                    onChange={(e) => setUser({ ...user, first_name: e.target.value })} />
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Apellido</label>
                                <input className={styles.input} type="text" value={user.last_name}
                                    onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Correo electrónico</label>
                                <input className={styles.input} type="email" value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Teléfono</label>
                                <input className={styles.input} type="number" value={user.number}
                                    onChange={(e) => setUser({ ...user, number: e.target.value })} />
                            </div>
                        </div>
                        <div className={`modal-footer border-0 px-4 pb-4 gap-2 justify-content-end`}>
                            <button className={styles.btnGhost} data-bs-dismiss="modal">Cancelar</button>
                            <button className={styles.btnPrimary} onClick={() => putUser(user)}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════════
                MODAL — Eliminar cuenta
            ══════════════════════════════════════════ */}
            <div className="modal fade" id="modalEliminar" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className={`modal-content ${styles.modal}`}>
                        <div className={styles.modalHeader} style={{ background: "#fff5f5", borderBottom: "1px solid #fddede" }}>
                            <button type="button" className="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" />
                            <div className={styles.dangerIcon}>⚠️</div>
                            <h5 className={styles.modalTitle}>¿Eliminar cuenta?</h5>
                            <p className={styles.modalSubtitle}>Esta acción es permanente y no se puede deshacer.</p>
                        </div>
                        <div className="modal-body px-4 py-3">
                            <ul className={styles.warningList}>
                                <li>Perderás acceso a tu cuenta de forma permanente</li>
                                <li>Todos tus datos serán eliminados</li>
                                <li>No podrás recuperar esta información</li>
                            </ul>
                        </div>
                        <div className="modal-footer border-0 px-4 pb-4 gap-2 justify-content-end">
                            <button className={styles.btnGhost} data-bs-dismiss="modal">Cancelar</button>
                            <button className={styles.btnDanger} onClick={() => deleteUser(user.id)}>Eliminar definitivamente</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════════
                MODAL — Añadir producto
            ══════════════════════════════════════════ */}
            <div className="modal fade" id="modalAñadirProducto" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className={`modal-content ${styles.modal}`}>
                        <div className={styles.modalHeader}>
                            <button type="button" className="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" />
                            <h5 className={styles.modalTitle}>Publicar producto</h5>
                            <p className={styles.modalSubtitle}>Completá los datos y elegí la ubicación en el mapa</p>
                        </div>
                        <div className="modal-body p-4">
                            <div className="row g-4">
                                <div className="col-md-6 d-flex flex-column gap-3">
                                    <div className={styles.field}>
                                        <label className={styles.label}>Título</label>
                                        <input className={styles.input} type="text" value={newProduct.title}
                                            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} />
                                    </div>
                                    <div className={styles.field}>
                                        <label className={styles.label}>Categoría</label>
                                        <select className={styles.select} value={newProduct.category}
                                            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}>
                                            <option value="">Seleccioná una categoría</option>
                                            <option value="electronica">Electrónica</option>
                                            <option value="deportes">Deportes</option>
                                            <option value="cine">Cine</option>
                                            <option value="libros">Libros</option>
                                            <option value="coleccionismo">Coleccionismo</option>
                                            <option value="hogar">Hogar</option>
                                            <option value="accesorios">Accesorios y Moda</option>
                                        </select>
                                    </div>
                                    <div className={styles.field}>
                                        <label className={styles.label}>Descripción</label>
                                        <textarea className={styles.textarea} rows="3" value={newProduct.description}
                                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
                                    </div>
                                    <div className={styles.field}>
                                        <label className={styles.label}>Imágenes (URL)</label>
                                        <div className={styles.imageRow}>
                                            <input className={styles.input} type="text"
                                                placeholder="Pegá una URL de imagen"
                                                value={imageInput}
                                                onChange={(e) => setImageInput(e.target.value)}
                                                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddImage(); } }}
                                            />
                                            <button className={styles.btnAdd} type="button" onClick={handleAddImage}>+</button>
                                        </div>
                                        {newProduct.images.length > 0 && (
                                            <div className={styles.imagePreviews}>
                                                {newProduct.images.map((url, i) => (
                                                    <div key={i} className={styles.imageThumb}>
                                                        <img src={url} alt="" />
                                                        <button type="button" onClick={() => handleRemoveImage(i)}>×</button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className={styles.field}>
                                        <label className={styles.label}>Precio €</label>
                                        <input className={styles.input} type="number" value={newProduct.price}
                                            onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.mapWrap}>
                                        <Map
                                            onSelectLocation={(coords) =>
                                                setNewProduct(prev => ({ ...prev, location: coords }))
                                            }
                                            coords={{
                                                lat: 40.4168,
                                                lng: -3.7038
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-0 px-4 pb-4 gap-2 justify-content-end">
                            <button className={styles.btnGhost} data-bs-dismiss="modal">Cancelar</button>
                            <button className={styles.btnPrimary} onClick={createProduct}>Publicar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}