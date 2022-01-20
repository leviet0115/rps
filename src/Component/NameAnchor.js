import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, Button } from "@material-ui/core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const NameAnchor = ({ name }) => (
  <Link to={`/player/${name}`} className="links">
    {name}
  </Link>
);

export const InfoButton = ({ name }) => (
  <Tooltip title="Click for player info">
    <Button component={Link} to={`/player/${name}`}>
      {" "}
      <FontAwesomeIcon icon={faInfoCircle} className="infoButton" />
    </Button>
  </Tooltip>
);
