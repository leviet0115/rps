import { createContext, useState, useEffect } from "react";

export const HistoryContext = createContext();

export const HistoryProvider = (props) => {
  const [games, setGames] = useState([]);
  const [cursor, setCursor] = useState("/rps/history");
  const proxy = "https://lv-cors-proxy.herokuapp.com/";
  const url = "https://bad-api-assignment.reaktor.com";

  useEffect(() => {
    if (cursor !== null) {
      try {
        fetch(proxy + url + cursor)
          .then((response) => response.json())
          .then((response) => {
            setGames((games) => games.concat(response.data));
            setCursor(response.cursor);
          });
      } catch (error) {
        console.error("error: " + error + "at cursor: " + cursor);
      }
    }
  }, [cursor]);

  return (
    <HistoryContext.Provider value={[games, setGames]}>
      {props.children}
    </HistoryContext.Provider>
  );
};
