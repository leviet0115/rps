import { createContext, useState, useEffect, useCallback } from "react";

export const LiveContext = createContext();

export const LiveProdvider = (props) => {
  const [liveGames, setLive] = useState([]);
  const socketUrl = "wss://bad-api-assignment.reaktor.com/rps/live";

  const replace = useCallback((array, object) => {
    let newArray = array.filter((element) => element.gameId !== object.gameId);
    newArray.push(object);
    return newArray;
  }, []);

  useEffect(() => {
    let socket = new WebSocket(socketUrl);

    socket.onmessage = (message) => {
      if (message !== undefined) {
        let data = JSON.parse(JSON.parse(message.data));
        if (data.type === "GAME_RESULT") {
          setLive((liveGames) => replace(liveGames, data));
        } else {
          setLive((liveGames) => [...liveGames, data]);
        }
      }
    };

    socket.onerror = (error) => {
      console.log(error);
      socket.close();
    };

    socket.onclose = () => {
      socket = new WebSocket(socketUrl);
    };
  }, [replace]);

  return (
    <LiveContext.Provider value={[liveGames, setLive]}>
      {props.children}
    </LiveContext.Provider>
  );
};
