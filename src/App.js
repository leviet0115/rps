import "./App.css";
import NavBar from "./Component/NavBar";
import Liveboard from "./Component/Liveboard";
import { HistoryProvider } from "./Context/HistoryContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Player from "./Component/Player";
import { LiveProdvider } from "./Context/LiveContext";

function App() {
  return (
    <Router>
      <HistoryProvider>
        <LiveProdvider>
          <div className="App">
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Liveboard />}></Route>
              <Route path="/player/:name" element={<Player />}></Route>
            </Routes>
          </div>
        </LiveProdvider>
      </HistoryProvider>
    </Router>
  );
}

export default App;
