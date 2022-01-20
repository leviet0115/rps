import { getIcon } from "./MethodLib";

const PlayerInfo = ({ player }) => {
  return (
    <div className="infoBox">
      <div className="info">
        <strong>Player name:</strong>
        <p>{player.name}</p>
      </div>

      <div className="info">
        <strong>Most played:</strong>
        <p>{getIcon(player.most)}</p>
      </div>

      <div className="info">
        <strong>Win rate:</strong>
        <p>{player.win}</p>
      </div>

      <div className="info">
        <strong>Number of games:</strong>
        <p>{player.sum}</p>
      </div>
    </div>
  );
};

export default PlayerInfo;
