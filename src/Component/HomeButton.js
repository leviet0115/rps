import { Fab } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomeButton = () => (
  <div className="homeButton">
    <Fab component={Link} to="/">
      <FontAwesomeIcon icon={faHome} />
    </Fab>
  </div>
);

export default HomeButton;
