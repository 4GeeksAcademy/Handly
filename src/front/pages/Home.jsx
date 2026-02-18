
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./home.css";



export function Home() {
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
					<div className="cards">
						<div className="card">
							<div className="card-image">
								<span className="badge">Como nuevo</span>
								<img src="https://i.pinimg.com/736x/a0/6e/30/a06e30aed4da0e318a74d1116b5198c2.jpg" alt="mando" />
							</div>
							<div className="card-content">
								<h3>Mando</h3>
								<p className="location">📍Andalucia</p>
								<div className="card-footer">
									<span className="price">150€</span>
									<button>Ver más</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-image">
								<span className="badge">Buen estado</span>
								<img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8" alt="Macbook" />
							</div>
							<div className="card-content">
								<h3>MacBook Pro 13</h3>
								<p className="location">📍 Barcelona</p>
								<div className="card-footer">
									<span className="price">650€</span>
									<button>Ver más</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-image">
								<span className="badge">Vintage</span>
								<img src="https://i.pinimg.com/736x/c9/93/26/c993260d8405ee7d5d6075d7359fc6a8.jpg" alt="Camara" />
							</div>
							<div className="card-content">
								<h3>Cámara Analógica Vintage</h3>
								<p className="location">📍 Valencia</p>
								<div className="card-footer">
									<span className="price">125€</span>
									<button>Ver más</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-image">
								<span className="badge">Como nuevo</span>
								<img src="https://i.pinimg.com/736x/b5/38/a7/b538a7caf9a2da9309719f7d225c67e5.jpg" alt="Sofa" />
							</div>
							<div className="card-content">
								<h3>Sofa de dos plazas</h3>
								<p className="location">📍 Bilbao</p>
								<div className="card-footer">
									<span className="price">300€</span>
									<button>Ver más</button>
								</div>
							</div>
						</div>


						<div className="card">
							<div className="card-image">
								<span className="badge">Buen estado</span>
								<img src="https://i.pinimg.com/736x/08/9b/9a/089b9a425d9d21219a77399501ab34f6.jpg" alt="escritorio" />
							</div>
							<div className="card-content">
								<h3>Escritorio</h3>
								<p className="location">📍 Murcia</p>
								<div className="card-footer">
									<span className="price">60€</span>
									<button>Ver más</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-image">
								<span className="badge">Vintage</span>
								<img src="https://i.pinimg.com/736x/0f/30/29/0f30295d19c12bac4cefa8b9f8576d07.jpg" alt="reloj" />
							</div>
							<div className="card-content">
								<h3>Reloj Vintage Clasico</h3>
								<p className="location">📍 Madrid</p>
								<div className="card-footer">
									<span className="price">89€</span>
									<button>Ver más</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-image">
								<span className="badge">Como nueva</span>
								<img src="https://i.pinimg.com/1200x/06/59/3e/06593e5c7776cf4b93c584d359f1b7ba.jpg" alt="tablaWindsurf" />
							</div>
							<div className="card-content">
								<h3>Tabla Windsurf 140litros F2</h3>
								<p className="location">📍 Madrid</p>
								<div className="card-footer">
									<span className="price">100€</span>
									<button>Ver más</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-image">
								<span className="badge">Como nuevos</span>
								<img src="https://i.pinimg.com/736x/53/aa/fb/53aafb407643282a909664f6d6ff8023.jpg" alt="Patines hielo" />
							</div>
							<div className="card-content">
								<h3>Patines de hielo </h3>
								<p className="location">📍 Elche</p>
								<div className="card-footer">
									<span className="price">200€</span>
									<button>Ver más</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-image">
								<span className="badge">Como nueva</span>
								<img src="https://i.pinimg.com/736x/32/ec/d9/32ecd9d0177463a96943530e0446686e.jpg" alt="bicicleta" />
							</div>
							<div className="card-content">
								<h3>Bicicleta de carretera</h3>
								<p className="location">📍 Leon</p>
								<div className="card-footer">
									<span className="price">800€</span>
									<button>Ver más</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div >
	);
}
