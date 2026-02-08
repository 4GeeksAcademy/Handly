
import './profile.css';


export function Profile() {
    return (

        <div className="container  py-4  ">

            <div className="border container rounded-4 py-4 " style={{ width: "900px" }}>

                <div className="text-center">
                    <svg width="140px" height="140px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="#c9f0fd"></path> <path d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z" fill="#c9f0fd"></path> </g></svg>
                    <h4 className="fs-4 fw-bold ">Mi Perfil</h4>
                    <p>Modifica y actualiza tus datos personales</p>
                </div>

                <form>

                    <div className="d-flex gap-3">
                        <div className="mb-3 w-50 bg-white  p-4 border border-2 shadow-sm rounded-4 border-start">
                            <span className="icon-box"><svg width="30px" height="30px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="#a2e0fb"></path> <path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="#a2e0fb"></path> </g></svg></span>

                            <label for="name" className="form-label fw-bold ">Nombre</label>
                            <input type="text" className="form-control   border-3 " id="name" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3 w-50 bg-white  p-4 border shadow-sm rounded-4">
                            <span><svg width="30px" height="30px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="#a2e0fb"></path> <path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="#a2e0fb"></path> </g></svg></span>

                            <label for="firstName" className="form-label  fw-bold ">Apellido</label>
                            <input type="text" className="form-control border-3" id="firstName" />
                        </div>

                    </div>
                    <div className="d-flex gap-3">
                        <div className="mb-3 w-50 bg-white  p-4 border shadow-sm rounded-4">
                            <span><svg width="30px" height="30px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#d52a2a" stroke="#d52a2a" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="7.68" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.00032" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-414.000000, -261.000000)" fill="#a2e0fb"> <path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z" id="mail" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg></span>
                            <label for="email" className="form-label fw-bold">Correo Electronico</label>
                            <input type="email" className="form-control border-3" id="email" />
                        </div>
                        <div className="mb-3 w-50 bg-white  p-4 border shadow-sm rounded-4">
                            <span><svg width="30px" height="30px" viewBox="-1.6 -1.6 19.20 19.20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-1.6" y="-1.6" width="19.20" height="19.20" rx="3.84" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" fill="#a2e0fb"></path> </g></svg></span>
                            <label for="telephone" className="form-label fw-bold">Telefono</label>

                            <input type="number" className="form-control border-3" id="telephone" />
                        </div>
                    </div>
                    <div className="d-flex gap-3" >
                        <div className="mb-3  w-50 bg-white  p-4 border  shadow-sm rounded-4">
                            <span><svg fill="#a2e0fb" width="30px" height="30px" viewBox="-10 -10 120.00 120.00" enable-background="new 0 0 100 100" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#a2e0fb"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-10" y="-10" width="120.00" height="120.00" rx="24" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M32.9,69c0.9,5.3,5.3,11.1,9.4,13.9c2.5,1.7,5.3,2.5,8,2.5c0.9,0,1.7-0.1,2.5-0.3c9.7-2.1,11.7-14,10.7-21.5 c-0.5-3.8-1.6-7.6-3.2-11.3h0c7.3,0,13.2-5.9,13.2-13.2V17.1c0-1.4-1.1-2.5-2.5-2.5h-8.7v4h7.2v20.6c0,5.1-4.1,9.2-9.2,9.2h-6.3 c-5.1,0-9.2-4.1-9.2-9.2V18.6h7.3v-4h-8.8c-1.4,0-2.5,1.1-2.5,2.5v22.1c0,7.3,5.9,13.2,13.2,13.2H56c1.8,3.8,3.1,7.9,3.6,11.8 c0.8,5.8-0.6,15.6-7.6,17.1c-2.4,0.5-5.1-0.1-7.5-1.7c-3.2-2.2-6.7-6.8-7.6-10.7c3.5-1,6.2-4.2,6.2-8.1c0-4.6-3.8-8.4-8.4-8.4 s-8.4,3.8-8.4,8.4C26.4,64.8,29.2,68.2,32.9,69z M34.8,56.4c2.4,0,4.4,2,4.4,4.4s-2,4.4-4.4,4.4s-4.4-2-4.4-4.4 S32.4,56.4,34.8,56.4z"></path> </g> </g></svg></span>
                            <label for="specialty" className="form-label fw-bold">Especialidad</label>
                            <input type="text" className="form-control border-3" id="specialty" />
                        </div>
                        <div className="mb-3  w-50 bg-white  p-4 border shadow-sm rounded-4">
                            <span><svg fill="#a2e0fb" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve" stroke="#a2e0fb"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-51.2" y="-51.2" width="614.40" height="614.40" rx="122.88" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M503.983,64.134H8.017C3.589,64.134,0,67.722,0,72.15v256.534c0,4.428,3.589,8.017,8.017,8.017 c4.427,0,8.017-3.588,8.017-8.017V80.167h479.933v277.912H430.23c-4.428,0-8.017,3.588-8.017,8.017v65.737H16.033v-51.841 c0-4.428-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.588-8.017,8.017v59.858c0,4.428,3.589,8.017,8.017,8.017H430.23 c2.1,0,4.184-0.863,5.669-2.347l73.754-73.754c1.485-1.486,2.347-3.568,2.347-5.669V72.15 C512,67.722,508.412,64.134,503.983,64.134z M438.246,420.496v-46.384h46.384L438.246,420.496z"></path> </g> </g> <g> <g> <path d="M280.046,213.51l-13.82-23.936v-27.637c-0.001-2.865-1.529-5.51-4.009-6.942l-23.936-13.82l-13.82-23.936 c-1.432-2.48-4.078-4.008-6.943-4.008H189.88l-23.935-13.819c-2.48-1.432-5.537-1.432-8.017,0l-23.936,13.82h-27.638 c-2.865,0-5.51,1.529-6.943,4.008l-13.82,23.936l-23.936,13.82c-2.48,1.432-4.008,4.078-4.008,6.942v27.638L43.83,213.511 c-1.432,2.48-1.432,5.537,0,8.017l13.82,23.936v27.638c0,2.865,1.529,5.51,4.008,6.942l23.936,13.82l13.82,23.936 c1.432,2.48,4.078,4.008,6.942,4.008h13.36v83.837c0,6.47,7.639,10.303,12.827,6.413l29.395-22.046l29.395,22.046 c5.192,3.893,12.827,0.049,12.827-6.413v-83.838h13.361c2.865,0,5.51-1.529,6.942-4.008l13.82-23.936l23.936-13.82 c2.48-1.432,4.008-4.078,4.008-6.942v-27.638l13.82-23.936C281.478,219.047,281.478,215.99,280.046,213.51z M188.125,389.612 l-21.378-16.033c-2.851-2.138-6.769-2.138-9.62,0l-21.378,16.033v-66.79l22.18,12.805c2.456,1.418,5.56,1.418,8.017,0 l22.18-12.805V389.612z M251.266,239.307c-0.703,1.219-1.074,2.602-1.074,4.008v25.159l-21.787,12.58 c-1.219,0.703-2.231,1.715-2.934,2.934l-12.58,21.787h-25.159c-1.407,0-2.79,0.371-4.008,1.074l-21.786,12.579l-21.787-12.58 c-1.219-0.703-2.602-1.074-4.008-1.074h-25.159l-12.58-21.787c-0.703-1.22-1.716-2.231-2.934-2.934l-21.786-12.579v-25.159 c0-1.407-0.371-2.79-1.074-4.008l-12.58-21.787l12.58-21.787c0.703-1.219,1.074-2.602,1.074-4.008v-25.159l21.787-12.58 c1.219-0.703,2.231-1.715,2.934-2.934l12.58-21.787h25.159c1.407,0,2.79-0.371,4.008-1.074l21.786-12.579l21.787,12.58 c1.219,0.703,2.602,1.074,4.008,1.074h25.159l12.58,21.787c0.703,1.22,1.716,2.231,2.934,2.934l21.787,12.58v25.159 c0,1.407,0.371,2.79,1.074,4.008l12.579,21.786L251.266,239.307z"></path> </g> </g> <g> <g> <path d="M161.937,132.543c-46.856,0-84.977,38.12-84.977,84.977s38.121,84.977,84.977,84.977s84.977-38.12,84.977-84.977 S208.793,132.543,161.937,132.543z M161.937,286.464c-38.015,0-68.944-30.928-68.944-68.944s30.928-68.944,68.944-68.944 s68.944,30.928,68.944,68.944S199.953,286.464,161.937,286.464z"></path> </g> </g> <g> <g> <path d="M214.361,211.587l-47.031-42.756c-0.006-0.006-0.014-0.011-0.021-0.017c-3.01-2.724-7.764-2.715-10.764,0.017 l-16.52,15.018v-0.534c0-4.428-3.589-8.017-8.017-8.017s-8.017,3.588-8.017,8.017v15.111l-14.478,13.161 c-2.974,2.703-3.469,7.352-1.116,10.614c2.761,3.828,8.404,4.428,11.901,1.251l3.693-3.357v40.181 c0,4.428,3.589,8.017,8.017,8.017h59.858c4.427,0,8.017-3.588,8.017-8.017v-40.181l3.693,3.357 c3.496,3.179,9.14,2.577,11.901-1.251C217.831,218.939,217.335,214.291,214.361,211.587z M183.85,206.831v45.428h-13.896v-26.188 c0-4.428-3.589-8.017-8.017-8.017s-8.017,3.588-8.017,8.017v26.188h-13.896v-46.741l21.912-19.92l22.015,20.013 C183.891,206.01,183.85,206.415,183.85,206.831z"></path> </g> </g> <g> <g> <path d="M391.963,175.299h-84.656c-4.428,0-8.017,3.588-8.017,8.017s3.588,8.017,8.017,8.017h84.656 c4.428,0,8.017-3.588,8.017-8.017S396.392,175.299,391.963,175.299z"></path> </g> </g> <g> <g> <path d="M461.228,175.299h-38.48c-4.428,0-8.017,3.588-8.017,8.017s3.588,8.017,8.017,8.017h38.48 c4.428,0,8.017-3.588,8.017-8.017S465.656,175.299,461.228,175.299z"></path> </g> </g> <g> <g> <path d="M461.228,218.054H307.307c-4.428,0-8.017,3.588-8.017,8.017s3.588,8.017,8.017,8.017h153.921 c4.428,0,8.017-3.588,8.017-8.017S465.656,218.054,461.228,218.054z"></path> </g> </g> <g> <g> <path d="M361.179,260.81h-53.872c-4.428,0-8.017,3.588-8.017,8.017c0,4.428,3.588,8.017,8.017,8.017h53.872 c4.428,0,8.017-3.588,8.017-8.017C369.196,264.398,365.608,260.81,361.179,260.81z"></path> </g> </g> <g> <g> <path d="M461.228,260.81h-69.264c-4.428,0-8.017,3.588-8.017,8.017c0,4.428,3.588,8.017,8.017,8.017h69.264 c4.428,0,8.017-3.588,8.017-8.017C469.244,264.398,465.656,260.81,461.228,260.81z"></path> </g> </g> <g> <g> <path d="M422.747,320.668h-76.96c-4.428,0-8.017,3.588-8.017,8.017c0,4.428,3.588,8.017,8.017,8.017h76.96 c4.428,0,8.017-3.588,8.017-8.017C430.764,324.256,427.176,320.668,422.747,320.668z"></path> </g> </g> </g></svg></span>
                            <label for="license" className="form-label fw-bold">Licencia Medica</label>
                            <input type="text" className="form-control border-3" id="license" />
                        </div>
                    </div>


                </form>

                {/* boton actualizar */}
                <button type="button" className="btn btn-info col-6 text-light fw-bold" data-bs-toggle="modal" data-bs-target="#modalActualizar">
                    <i className="bi bi-pen text-light"></i>Actualizar Información
                </button>
                {/* boton de eliminar */}
                <button type="button" className="btn btn-danger col-6 text-light fw-bold" data-bs-toggle="modal" data-bs-target="#modalEliminar">
                    <i class="bi bi-trash3"></i> Eliminar Cuenta
                </button>

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
                                <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a2e0fb"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.6320000000000001"> <path d="M12.2424 20H17.5758M4.48485 16.5L15.8242 5.25607C16.5395 4.54674 17.6798 4.5061 18.4438 5.16268V5.16268C19.2877 5.8879 19.3462 7.17421 18.5716 7.97301L7.39394 19.5L4 20L4.48485 16.5Z" stroke="" stroke-linecap="round" stroke-linejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M12.2424 20H17.5758M4.48485 16.5L15.8242 5.25607C16.5395 4.54674 17.6798 4.5061 18.4438 5.16268V5.16268C19.2877 5.8879 19.3462 7.17421 18.5716 7.97301L7.39394 19.5L4 20L4.48485 16.5Z" stroke="" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                <h5 className="modal-title mb-0" id="exampleModalLabel">Actualizar información</h5>
                                <p className='mb-0'>Modifica los campos que desees actualizar</p>
                            </div>

                            <div className="modal-body ">
                                <form className="form">
                                    <div class="row g-3">

                                        <div className=" col-12 col-md-6 bg-white  p-4 border border-2 shadow-sm rounded-4 border-start">
                                            <span className="icon-box"><svg width="30px" height="30px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="#a2e0fb"></path> <path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="#a2e0fb"></path> </g></svg></span>
                                            <label for="name" className="form-label fw-bold ">Nombre</label>
                                            <input type="text" className="form-control   border-3 " id="name" aria-describedby="emailHelp" />
                                        </div>

                                        <div className="col-12 col-md-6 bg-white  p-4 border shadow-sm rounded-4">
                                            <span><svg width="30px" height="30px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="#a2e0fb"></path> <path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="#a2e0fb"></path> </g></svg></span>
                                            <label for="firstName" className="form-label  fw-bold ">Apellido</label>
                                            <input type="text" className="form-control border-3" id="firstName" />
                                        </div>

                                        <div className=" col-12 col-md-6 bg-white  p-4 border shadow-sm rounded-4">
                                            <span><svg width="30px" height="30px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#d52a2a" stroke="#d52a2a" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="7.68" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.00032" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-414.000000, -261.000000)" fill="#a2e0fb"> <path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z" id="mail" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg></span>
                                            <label for="email" className="form-label fw-bold">Correo Electronico</label>
                                            <input type="email" className="form-control border-3" id="email" />
                                        </div>

                                        <div className=" col-12 col-md-6 bg-white  p-4 border shadow-sm rounded-4">
                                            <span><svg width="30px" height="30px" viewBox="-1.6 -1.6 19.20 19.20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-1.6" y="-1.6" width="19.20" height="19.20" rx="3.84" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" fill="#a2e0fb"></path> </g></svg></span>
                                            <label for="telephone" className="form-label fw-bold">Telefono</label>
                                            <input type="number" className="form-control border-3" id="telephone" />
                                        </div>

                                        <div className=" col-12 col-md-6 bg-white  p-4 border  shadow-sm rounded-4">
                                            <span><svg fill="#a2e0fb" width="30px" height="30px" viewBox="-10 -10 120.00 120.00" enable-background="new 0 0 100 100" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#a2e0fb"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-10" y="-10" width="120.00" height="120.00" rx="24" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M32.9,69c0.9,5.3,5.3,11.1,9.4,13.9c2.5,1.7,5.3,2.5,8,2.5c0.9,0,1.7-0.1,2.5-0.3c9.7-2.1,11.7-14,10.7-21.5 c-0.5-3.8-1.6-7.6-3.2-11.3h0c7.3,0,13.2-5.9,13.2-13.2V17.1c0-1.4-1.1-2.5-2.5-2.5h-8.7v4h7.2v20.6c0,5.1-4.1,9.2-9.2,9.2h-6.3 c-5.1,0-9.2-4.1-9.2-9.2V18.6h7.3v-4h-8.8c-1.4,0-2.5,1.1-2.5,2.5v22.1c0,7.3,5.9,13.2,13.2,13.2H56c1.8,3.8,3.1,7.9,3.6,11.8 c0.8,5.8-0.6,15.6-7.6,17.1c-2.4,0.5-5.1-0.1-7.5-1.7c-3.2-2.2-6.7-6.8-7.6-10.7c3.5-1,6.2-4.2,6.2-8.1c0-4.6-3.8-8.4-8.4-8.4 s-8.4,3.8-8.4,8.4C26.4,64.8,29.2,68.2,32.9,69z M34.8,56.4c2.4,0,4.4,2,4.4,4.4s-2,4.4-4.4,4.4s-4.4-2-4.4-4.4 S32.4,56.4,34.8,56.4z"></path> </g> </g></svg></span>
                                            <label for="specialty" className="form-label fw-bold">Especialidad</label>
                                            <input type="text" className="form-control border-3" id="specialty" />
                                        </div>

                                        <div className=" col-12 col-md-6 bg-white  p-4 border shadow-sm rounded-4">
                                            <span><svg fill="#a2e0fb" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve" stroke="#a2e0fb"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-51.2" y="-51.2" width="614.40" height="614.40" rx="122.88" fill="#c9f0fd" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M503.983,64.134H8.017C3.589,64.134,0,67.722,0,72.15v256.534c0,4.428,3.589,8.017,8.017,8.017 c4.427,0,8.017-3.588,8.017-8.017V80.167h479.933v277.912H430.23c-4.428,0-8.017,3.588-8.017,8.017v65.737H16.033v-51.841 c0-4.428-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.588-8.017,8.017v59.858c0,4.428,3.589,8.017,8.017,8.017H430.23 c2.1,0,4.184-0.863,5.669-2.347l73.754-73.754c1.485-1.486,2.347-3.568,2.347-5.669V72.15 C512,67.722,508.412,64.134,503.983,64.134z M438.246,420.496v-46.384h46.384L438.246,420.496z"></path> </g> </g> <g> <g> <path d="M280.046,213.51l-13.82-23.936v-27.637c-0.001-2.865-1.529-5.51-4.009-6.942l-23.936-13.82l-13.82-23.936 c-1.432-2.48-4.078-4.008-6.943-4.008H189.88l-23.935-13.819c-2.48-1.432-5.537-1.432-8.017,0l-23.936,13.82h-27.638 c-2.865,0-5.51,1.529-6.943,4.008l-13.82,23.936l-23.936,13.82c-2.48,1.432-4.008,4.078-4.008,6.942v27.638L43.83,213.511 c-1.432,2.48-1.432,5.537,0,8.017l13.82,23.936v27.638c0,2.865,1.529,5.51,4.008,6.942l23.936,13.82l13.82,23.936 c1.432,2.48,4.078,4.008,6.942,4.008h13.36v83.837c0,6.47,7.639,10.303,12.827,6.413l29.395-22.046l29.395,22.046 c5.192,3.893,12.827,0.049,12.827-6.413v-83.838h13.361c2.865,0,5.51-1.529,6.942-4.008l13.82-23.936l23.936-13.82 c2.48-1.432,4.008-4.078,4.008-6.942v-27.638l13.82-23.936C281.478,219.047,281.478,215.99,280.046,213.51z M188.125,389.612 l-21.378-16.033c-2.851-2.138-6.769-2.138-9.62,0l-21.378,16.033v-66.79l22.18,12.805c2.456,1.418,5.56,1.418,8.017,0 l22.18-12.805V389.612z M251.266,239.307c-0.703,1.219-1.074,2.602-1.074,4.008v25.159l-21.787,12.58 c-1.219,0.703-2.231,1.715-2.934,2.934l-12.58,21.787h-25.159c-1.407,0-2.79,0.371-4.008,1.074l-21.786,12.579l-21.787-12.58 c-1.219-0.703-2.602-1.074-4.008-1.074h-25.159l-12.58-21.787c-0.703-1.22-1.716-2.231-2.934-2.934l-21.786-12.579v-25.159 c0-1.407-0.371-2.79-1.074-4.008l-12.58-21.787l12.58-21.787c0.703-1.219,1.074-2.602,1.074-4.008v-25.159l21.787-12.58 c1.219-0.703,2.231-1.715,2.934-2.934l12.58-21.787h25.159c1.407,0,2.79-0.371,4.008-1.074l21.786-12.579l21.787,12.58 c1.219,0.703,2.602,1.074,4.008,1.074h25.159l12.58,21.787c0.703,1.22,1.716,2.231,2.934,2.934l21.787,12.58v25.159 c0,1.407,0.371,2.79,1.074,4.008l12.579,21.786L251.266,239.307z"></path> </g> </g> <g> <g> <path d="M161.937,132.543c-46.856,0-84.977,38.12-84.977,84.977s38.121,84.977,84.977,84.977s84.977-38.12,84.977-84.977 S208.793,132.543,161.937,132.543z M161.937,286.464c-38.015,0-68.944-30.928-68.944-68.944s30.928-68.944,68.944-68.944 s68.944,30.928,68.944,68.944S199.953,286.464,161.937,286.464z"></path> </g> </g> <g> <g> <path d="M214.361,211.587l-47.031-42.756c-0.006-0.006-0.014-0.011-0.021-0.017c-3.01-2.724-7.764-2.715-10.764,0.017 l-16.52,15.018v-0.534c0-4.428-3.589-8.017-8.017-8.017s-8.017,3.588-8.017,8.017v15.111l-14.478,13.161 c-2.974,2.703-3.469,7.352-1.116,10.614c2.761,3.828,8.404,4.428,11.901,1.251l3.693-3.357v40.181 c0,4.428,3.589,8.017,8.017,8.017h59.858c4.427,0,8.017-3.588,8.017-8.017v-40.181l3.693,3.357 c3.496,3.179,9.14,2.577,11.901-1.251C217.831,218.939,217.335,214.291,214.361,211.587z M183.85,206.831v45.428h-13.896v-26.188 c0-4.428-3.589-8.017-8.017-8.017s-8.017,3.588-8.017,8.017v26.188h-13.896v-46.741l21.912-19.92l22.015,20.013 C183.891,206.01,183.85,206.415,183.85,206.831z"></path> </g> </g> <g> <g> <path d="M391.963,175.299h-84.656c-4.428,0-8.017,3.588-8.017,8.017s3.588,8.017,8.017,8.017h84.656 c4.428,0,8.017-3.588,8.017-8.017S396.392,175.299,391.963,175.299z"></path> </g> </g> <g> <g> <path d="M461.228,175.299h-38.48c-4.428,0-8.017,3.588-8.017,8.017s3.588,8.017,8.017,8.017h38.48 c4.428,0,8.017-3.588,8.017-8.017S465.656,175.299,461.228,175.299z"></path> </g> </g> <g> <g> <path d="M461.228,218.054H307.307c-4.428,0-8.017,3.588-8.017,8.017s3.588,8.017,8.017,8.017h153.921 c4.428,0,8.017-3.588,8.017-8.017S465.656,218.054,461.228,218.054z"></path> </g> </g> <g> <g> <path d="M361.179,260.81h-53.872c-4.428,0-8.017,3.588-8.017,8.017c0,4.428,3.588,8.017,8.017,8.017h53.872 c4.428,0,8.017-3.588,8.017-8.017C369.196,264.398,365.608,260.81,361.179,260.81z"></path> </g> </g> <g> <g> <path d="M461.228,260.81h-69.264c-4.428,0-8.017,3.588-8.017,8.017c0,4.428,3.588,8.017,8.017,8.017h69.264 c4.428,0,8.017-3.588,8.017-8.017C469.244,264.398,465.656,260.81,461.228,260.81z"></path> </g> </g> <g> <g> <path d="M422.747,320.668h-76.96c-4.428,0-8.017,3.588-8.017,8.017c0,4.428,3.588,8.017,8.017,8.017h76.96 c4.428,0,8.017-3.588,8.017-8.017C430.764,324.256,427.176,320.668,422.747,320.668z"></path> </g> </g> </g></svg></span>
                                            <label for="license" className="form-label fw-bold">Licencia Medica</label>
                                            <input type="text" className="form-control border-3" id="license" />
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
                                <h4 className="modal-title mb-0" id="exampleModalLabel">¿Eliminar Cuenta?</h4>
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




            </div>
        </div>

    );

}






