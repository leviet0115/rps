import { useContext } from "react";
import { getWinner, getMostPlayed, getWinRate } from "./MethodLib";
import { useParams } from "react-router-dom";
import { HistoryContext } from "../Context/HistoryContext";
import History from "./History";
import PlayerInfo from "./PlayerInfo";
import HomeButton from "./HomeButton";

const Player = () => {
  const name = useParams().name;
  const [data] = useContext(HistoryContext);

  const playedHistory = data.filter(
    (game) => game.playerA.name === name || game.playerB.name === name
  );

  const winHistory = data.filter(
    (game) => name === getWinner(game.playerA, game.playerB)
  );

  const player = {
    name: name,
    win: getWinRate(winHistory.length, playedHistory.length),
    sum: playedHistory.length,
    most: getMostPlayed(name, playedHistory),
  };

  return (
    <div className="player">
      <PlayerInfo player={player} />
      <History history={playedHistory}></History>
      <HomeButton />
    </div>
  );
};

export default Player;
