import { Link } from 'react-router-dom';
import './Submenu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Submenu = (props) => {
    return(
    <nav className="subnavbar navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/destinations" id="destinations" onClick={props.onclickmenu} className="navbar-brand subbrand">Destinations</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="subnav-item nav-item">
          <FontAwesomeIcon icon={props.arrow}></FontAwesomeIcon>
        </li>
        <li className="nav-item active">
            <Link to={props.to1} id={props.id1} onClick={props.onclickmenu} className="nav-link sublink" activelink>{props.planet1}</Link>
        </li>
        <li className="nav-item">
            <Link to={props.to2} id={props.id2} onClick={props.onclickmenu} className="nav-link sublink">{props.planet2}</Link>
        </li>
        <li className="nav-item">
            <Link to={props.to3} id={props.id3} onClick={props.onclickmenu} className="nav-link sublink">{props.planet3}</Link>
        </li>
      </ul>
    </div>
  </nav>)
}

export default Submenu;