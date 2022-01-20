import { getIcon } from "./MethodLib";
import { InfoButton, NameAnchor } from "./NameAnchor";

const Game = ({ game }) => {
  return (
    <div className="game">
      <div className="player1">
        <InfoButton name={game.playerA.name} />
        <NameAnchor name={game.playerA.name} />
      </div>
      <div className="detail">
        {getIcon(game.playerA.played)} {" : "}
        {getIcon(game.playerB.played)}
      </div>
      <div className="player2">
        <NameAnchor name={game.playerB.name} />
        <InfoButton name={game.playerB.name} />
      </div>
    </div>
  );
};

export default Game;
