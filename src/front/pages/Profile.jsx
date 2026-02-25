import { element } from "prop-types";
import Map from "../components/Map";
import { useEffect } from "react";


export function Profile() {

     async function getUser(){
        let response =  await fetch("https://jubilant-lamp-5vgvw4pv4rjf4967-3001.app.github.dev/api/user")
        console.log(response);
        
        let user = await response.json()
        console.log(user);
        
    }
    useEffect(()=>{
        getUser()
    },[])


    async function putUser(element) {
        let user ={
            "first_name":element.first_name,
            "last_name": element.last_name,
            "email": element.email,
            "address": element.address,
            "number" : element.number
        }
        await fetch(`https://jubilant-lamp-5vgvw4pv4rjf4967-3001.app.github.dev/editUser/${element.id}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: { "Content-type": "application/json" }
        })


    }

        async function deleteUser(id) {
		await fetch(`https://jubilant-lamp-5vgvw4pv4rjf4967-3001.app.github.dev/deleteUser/${id}`, {
			method: "DELETE", // Accion / Metodo usado
		})
        
    }

   
    return (

        <div className="container  py-4">

            <div className="border container rounded-4 py-4 " style={{ width: "900px" }}>

                <div className="text-center">
                    <svg width="140px" height="140px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="#c9f0fd"></path> <path d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z" fill="#c9f0fd"></path> </g></svg>
                    <h4 className="fs-1 fw-bold ">Mi Perfil</h4>
                    <p className="fs-3">Modifica y actualiza tus datos personales</p>
                </div>

                <form className="fs-3">
                    <div className="d-flex gap-3">
                        <div className="mb-3 w-50 bg-white  p-4 border border-2 shadow-sm rounded-4 border-start">
                            <span className="icon-box"><svg width="30px" height="30px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="#a2e0fb"></path> <path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="#a2e0fb"></path> </g></svg></span>
                            <label for="name" className="form-label fw-semibold ">Nombre</label>
                            <input type="text" className="form-control   border-3 " id="name" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3 w-50 bg-white  p-4 border shadow-sm rounded-4">
                            <span><svg width="30px" height="30px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="#a2e0fb"></path> <path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="#a2e0fb"></path> </g></svg></span>
                            <label for="firstName" className="form-label  fw-semibold ">Apellido</label>
                            <input type="text" className="form-control border-3" id="firstName" />
                        </div>
                    </div>

                    <div className="d-flex gap-3">
                        <div className="mb-3 w-50 bg-white  p-4 border shadow-sm rounded-4">
                            <span><svg width="30px" height="30px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#d52a2a" stroke="#d52a2a" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="7.68" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.00032" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-414.000000, -261.000000)" fill="#a2e0fb"> <path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z" id="mail" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg></span>
                            <label htmlFor="email" className="form-label fw-semibold">Correo Electronico</label>
                            <input type="email" className="form-control border-3" id="email" />
                        </div>
                        <div className="mb-3 w-50 bg-white  p-4 border shadow-sm rounded-4">
                            <span><svg width="30px" height="30px" viewBox="-1.6 -1.6 19.20 19.20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-1.6" y="-1.6" width="19.20" height="19.20" rx="3.84" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" fill="#a2e0fb"></path> </g></svg></span>
                            <label htmlFor="telephone" className="form-label fw-semibold">Telefono</label>
                            <input type="number" className="form-control border-3" id="telephone" />
                        </div>
                    </div>
                </form>

                <div className="button-group p-4 d-flex gap-2">
                    {/* boton actualizar */}
                    <button type="button"
                     className="btn btn-info col-4 text-light fw-semibold gap-2 btn-lg"
                      data-bs-toggle="modal" 
                      data-bs-target="#modalActualizar"
                      onClick={()=>putUser(e)}
                      >                      
                        Actualizar Información
                    </button>
                    {/* boton de eliminar */}
                    <button type="button" 
                    className="btn btn-danger col-4 text-light fw-semibold btn-lg" 
                    data-bs-toggle="modal" 
                    data-bs-target="#modalEliminar"
                    onClick={deleteUser}>
                        Eliminar Cuenta
                    </button>
                    {/* boton añadir producto */}
                    <button type="button" className="btn btn-secondary col-4 text-light fw-semibold btn-lg" data-bs-toggle="modal" data-bs-target="#modalAñadirProducto">
                        Añadir Producto
                    </button>
                </div>

                {/* modal actualizar */}
                <div className="modal fade" id="modalActualizar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header flex-column position-relative text-center">
                                <button
                                    type="button"
                                    className="btn-close position-absolute top-0 end-0 m-2"
                                    data-bs-dismiss="modal"
                                ></button>
                                <h5 className="modal-title mb-0 fs-3 mt-5 " id="exampleModalLabel">Actualizar información</h5>
                                <p className='mb-0'>Modifica los campos que desees actualizar</p>
                            </div>

                            <div className="modal-body  ">
                                <form className="form">
                                    <div class="mb-4">
                                        <div className=" col-12 col-md-12 bg-white  px-4 py-2  mb-4 fs-4">
                                            <label htmlFor="name" className="fw-semibold">Nombre</label>
                                            <input type="text" className="form-control   border-3 " id="name" aria-describedby="emailHelp" />
                                        </div>

                                        <div className="col-12 col-md-12 bg-white  px-4 py-2  mb-4 fs-4">
                                            <label htmlFor="firstName" className="form-label  fw-semibold ">Apellido</label>
                                            <input type="text" className="form-control border-3" id="firstName" />
                                        </div>

                                        <div className=" col-12 col-md-12 bg-white  px-4 py-2  mb-4 fs-4">
                                            <label htmlFor="email" className="form-label fw-semibold">Correo Electronico</label>
                                            <input type="email" className="form-control border-3" id="email" />
                                        </div>

                                        <div className=" col-12 col-md-12 bg-white  px-4 py-2  mb-4 fs-4">
                                            <label htmlFor="telephone" className="form-label fw-semibold">Telefono</label>
                                            <input type="number" className="form-control border-3" id="telephone" />
                                        </div>

                                    </div>
                                </form>
                            </div>

                            <div className="modal-footer">
                                <div className='d-flex justify-content-center gap-2 '>
                                    <button type="button" className="btn btn-info text-light ">Guardar Cambios</button>
                                    <button type="button" className="btn btn-outline-secondary " data-bs-dismiss="modal">Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal eliminar */}
                <div class="modal fade" id="modalEliminar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div className="modal-header flex-column position-relative text-center">
                                <button
                                    type="button"
                                    className="btn-close position-absolute top-0 end-0 m-2"
                                    data-bs-dismiss="modal"
                                ></button>
                                <svg width="77px" height="77px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="7.2" fill="#e35102" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z" stroke="#fbf4f4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                <h4 className="modal-title mb-0 fs-3" id="exampleModalLabel">¿Eliminar Cuenta?</h4>
                                <p className='mb-0 fs-5 text-secondary'>Esta acción es permanente y no se puede deshacer</p>
                            </div>
                            <div class="modal-body">
                                <h3 className='text-center '>Advertencia Importante</h3>
                                <div class="texto-con-lista fs-5 ">
                                    <ul>
                                        <li>Perderás acceso a tu cuenta de forma permanente</li>
                                        <li>Todos tus datos serán eliminados</li>
                                        <li>No podrás recuperar esta información</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <div className='d-flex justify-content-center gap-2 '>
                                    <button type="button" className="btn btn-danger  text-light ">Eliminar Definitivamente</button>
                                    <button type="button" className="btn btn-outline-secondary " data-bs-dismiss="modal">Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal añadir producto */}
                <div className="modal fade"
                    id="modalAñadirProducto"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content rounded-4 shadow-lg border-0">
                            {/* //HEADER */}
                            <div className="modal-header boder-0 pb-0">
                                <h5 className="modal-title fs-3 fw-bold w-100 text-center">Añadir Producto</h5>
                                <button
                                    type="button"
                                    className="btn-close position-absolute end-0 me-3"
                                    data-bs-dismiss="modal">
                                </button>
                            </div>
                            {/* BODY */}
                            <div className="modal-body p-4 ">
                                <div className="row g-4 align-items-stretch">
                                    {/* COLUMNA IZQ INPUTS */}
                                    <div className="col-md-6 d-flex flex-column">

                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label fw-semibold">
                                                Título
                                            </label>
                                            <input type="text"
                                                className="form-control form-control-lg shadow-sm"
                                                id="title" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="category" className="form-label fw-semibold">
                                                Categoría
                                            </label>
                                            <select id="category"
                                                className="form-select form-select-lg shadow-sm">
                                                <option value="">Selecciona una categoría</option>
                                                <option value="informatica">Informática</option>
                                                <option value="deportes">Deportes</option>
                                                <option value="cine">Cine</option>
                                                <option value="libros">Libros</option>
                                                <option value="coleccionismo">Coleccionismo</option>
                                                <option value="hogar">Hogar</option>
                                                <option value="accesorios">Accesorios y Moda</option>
                                                <option value="otros">Otros</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label fw-semibold">
                                                Descripción
                                            </label>
                                            <textarea
                                                className="form-control shadow-sm"
                                                rows="3"
                                                id="description"
                                            ></textarea>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="image" className="form-label fw-semibold">
                                                Subir imagen
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control shadow-sm"
                                                id="image"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="price" className="form-label fw-semibold">
                                                Precio €
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control form-control-lg shadow-sm"
                                                id="price"
                                            />
                                        </div>
                                    </div>

                                    {/* COLUMNA DERECHA MAPA */}
                                    <div className="col-md-6 d-flex flex-column">
                                        <div className="flex-grow-1 border rounded-4 shadow-sm overflow-hidden">
                                                      <Map />
                                            </div>                                  

                                       
                                        </div>                                    
                                </div>
                            </div>

                            {/* FOOTER */}
                            <div className="modal-footer border-0 pt-0 justify-content-center gap-3">
                                <button
                                    type="button"
                                    className="btn btn-light border px-4"
                                    data-bs-dismiss="modal">
                                    Cancelar
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-info text-white fw-semibold px-4 shadow-sm">
                                        Añadir Producto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>



    );

}





