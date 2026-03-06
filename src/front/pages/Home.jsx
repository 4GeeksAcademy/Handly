
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./home.css";
import { useEffect, useState } from "react"
import { Product } from "../components/Product";
import styles from "./CategoryPage.module.css";
import useGlobalReducer from "../hooks/useGlobalReducer";

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






export function Home() {

	const [products, setProducts] = useState([]);
	const { store, dispatch } = useGlobalReducer();


	async function getProducts() { //obtener productos
		try {
			let response = await fetch('https://urban-zebra-5657rgr46gph47wj-3001.app.github.dev/api/products/')
			let data = await response.json()
			setProducts(data)
		}
		catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getProducts();
	}, []);


	return (

		<div className="home-container">

			<section>
				<div id="conteItemsCarrusel">
					<div className="itemCarrusel" id="itemCarrusel-1">
						<div className="tarjetaCarrusel" id="tarjetaCarrusel-1" ><img src="https://i.pinimg.com/1200x/3e/3c/88/3e3c88eb250baa81e71e9cd247bae7b1.jpg" alt="mujer pensando" />
						</div>

						<div className="flechasCarrusel">
							<a href="#itemCarrusel-3">
								<i><svg width="91px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12L4 12" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></i>
							</a>
							<a href="#itemCarrusel-2">
								<i><svg width="91px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></i>
							</a>
						</div>
					</div>

					<div className="itemCarrusel" id="itemCarrusel-2">
						<div className="tarjetaCarrusel" id="tarjetaCarrusel-2"><img src="https://i.pinimg.com/736x/9d/87/00/9d87003b2cc3d735527c5120cb5b5fbb.jpg" alt="mancuernas-naranajas" /></div>
						<div className="flechasCarrusel">
							<a href="#itemCarrusel-1">
								<i><svg width="91px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12L4 12" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></i>
							</a>
							<a href="#itemCarrusel-3">
								<i><svg width="91px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></i>
							</a>
						</div>
					</div>

					<div className="itemCarrusel" id="itemCarrusel-3">
						<div className="tarjetaCarrusel" id="tarjetaCarrusel-3"><img src="https://i.pinimg.com/736x/ec/ea/8f/ecea8f2baedafad8d97f0542b015718b.jpg" alt="telefono-movil" /></div>
						<div className="flechasCarrusel">
							<a href="#itemCarrusel-2">
								<i><svg width="91px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12L4 12" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></i>
							</a>
							<a href="#itemCarrusel-1">
								<i><svg width="91px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></i>
							</a>
						</div>
					</div>
				</div>
			</section>


			<section className="featured">
				<div className="container">
					<div className="featured-header">
						<div>
							<h2>Productos destacados</h2>
							<p>Descubre los artículos más populares de la semana</p>
						</div>
					</div>
					<div className={styles.body}>
						{products?.length > 0 ? (
							<div className={styles.grid}>
								{products.map((product) => {
									const images = parseImages(product.images);
									const firstImage = images[0];
									const icon =
										CATEGORY_ICONS[product.category.toLowerCase()] ?? CATEGORY_ICONS.default;

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

							</div>
						)}
					</div>
				</div>
			</section>
		</div >
	);
}
