import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [results, setResults] = useState([]);
  const [cursor, setCursor] = useState("");
  const url = "https://bad-api-assignment.reaktor.com/rps/history";

  useEffect(() => {
    fetch(url + cursor)
      .then((response) => {
        if (response.ok) {
          console.log(response);
        }
      })
      .then((response) => {
        console.log(response);
      });

    console.log(results);
  }, [cursor]);

  return <div className="App">Hi</div>;
}

export default App;
