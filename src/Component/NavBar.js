import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandRock,
  faHandPaper,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="links">
        <div className="logo">
          <FontAwesomeIcon icon={faHandRock} size="2x" />
          <FontAwesomeIcon icon={faHandPaper} size="2x" />
          <FontAwesomeIcon icon={faHandScissors} size="2x" />
        </div>
      </Link>
      <p>
        Welcome to Rock Paper Scissors! Let's check out how players are doing.
      </p>
    </div>
  );
};

export default NavBar;
