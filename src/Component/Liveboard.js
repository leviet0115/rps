import { useContext } from "react";
import { LiveContext } from "../Context/LiveContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD6 } from "@fortawesome/free-solid-svg-icons";
import Game from "./Game";

const Liveboard = () => {
  const [liveGames] = useContext(LiveContext);

  if (liveGames.length <= 0) {
    //render when the data is not ready
    return (
      <div className="liveboard">
        <h1>Most recent on-going games</h1>
        <LoadingAnimation />
      </div>
    );
  } else {
    //render when the data is ready
    return (
      <div className="liveboard">
        <h1>Most recent on-going games</h1>
        {liveGames.slice(-10).map((game) => (
          <div>
            <Game game={game} key={game.gameId + game.type} />
          </div>
        ))}
      </div>
    );
  }
};

const LoadingAnimation = () => (
  <div className="loading">
    <FontAwesomeIcon
      icon={faDiceD6}
      color="rgba(238, 174, 202, 1)"
      pulse
      size="10x"
    />
    <p>Waiting for players to start a game...</p>
  </div>
);

export default Liveboard;
