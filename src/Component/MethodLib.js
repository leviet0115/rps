import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandRock,
  faHandPaper,
  faHandScissors,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export const convert = (hand) => {
  switch (hand) {
    case "ROCK":
      return 0;
    case "PAPER":
      return 1;
    case "SCISSORS":
      return 2;
    default:
      break;
  }
};

export function getWinner(playerA, playerB) {
  const a = convert(playerA.played);
  const b = convert(playerB.played);

  //rock = 0, paper = 1, scissors = 1
  if (a === b) return "Tie";

  if (a === 0) {
    if (b === 1) return playerB.name;
    if (b === 2) return playerA.name;
  }

  if (a === 1) {
    if (b === 0) return playerA.name;
    if (b === 2) return playerB.name;
  }

  if (a === 2) {
    if (b === 0) return playerB.name;
    if (b === 1) return playerA.name;
  }
}

export const getIcon = (hand) => {
  let h = typeof hand === "string" ? convert(hand) : hand;

  switch (h) {
    case 0:
      return <FontAwesomeIcon icon={faHandRock} />;
    case 1:
      return <FontAwesomeIcon icon={faHandPaper} />;
    case 2:
      return <FontAwesomeIcon icon={faHandScissors} />;
    default:
      return <FontAwesomeIcon icon={faQuestion} />;
  }
};

export function getWinRate(sumWin, sumPlayed) {
  let winRate = sumPlayed === 0 ? 0 : (sumWin / sumPlayed) * 100;
  return winRate.toFixed(2);
}

export function getMostPlayed(name, playedHistory) {
  let handCount = [0, 0, 0]; //0=rock, 1=paper, 2=scissors
  for (let game of playedHistory) {
    let played;
    if (game.playerA.name === name) {
      played = convert(game.playerA.played);
    } else if (game.playerB.name === name) {
      played = convert(game.playerB.played);
    }
    handCount[played] += 1;
  }
  const max = Math.max(...handCount);
  const index = handCount.indexOf(max);
  return index;
}
