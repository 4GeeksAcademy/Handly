import { io } from "socket.io-client";

const URL = "https://urban-zebra-5657rgr46gph47wj-3001.app.github.dev";

export const socket = io(URL, {
  autoConnect: false,
  transports: ["websocket"], //conectar solo cuando tenga el token//
});
