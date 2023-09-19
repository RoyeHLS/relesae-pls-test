import { useEffect, useState } from "react";
import axios from "axios";

import { socketConnection } from "../../socket/socketConnection";

const Homepage = () => {
  // const [res, setRes] = useState("Before any request");
  const [isConnected] = useState(socketConnection.connected);
  const [res, setRes] = useState(null);
  const [resStatus, setResStatus] = useState<number>();
  const [message, setMessage] = useState("");

  socketConnection.on("hello-back", () => console.log("HELLO BACK"));
  const callApi = async () => {
    const res = await axios.get("http://localhost:3001");
    const resData = res.data;
    const resDataStatus = res.status;
    setRes(resData);
    setResStatus(resDataStatus);
  };

  const connectToSocket = () => {
    if (!socketConnection.connected) {
      socketConnection.connect();
      console.log("connected");
    } else {
      console.log("Was already connected");
    }
  };

  const sendMessage = () => {
    socketConnection.emit("sendMessage", message);
    setMessage("");
  };

  return (
    <div>
      Homepage
      <p></p>
      <button onClick={callApi}>Call api!</button>
      <p>Response data:</p>
      <p> {res}</p>
      <p>Response status:</p>
      <p> {resStatus}</p>
    </div>
  );
};

export default Homepage;
