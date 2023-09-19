import { io } from "socket.io-client";

const URL = "http://localhost:3002";

export const socketConnection = io(URL, { autoConnect: false });
socketConnection.on("hello", () => console.log("hello"));
