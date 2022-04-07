import { Link } from 'react-router-dom';
import './Submenu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Submenu = ( {arrow, to1, to2, to3, id1, id2, id3, planet1, planet2, planet3, onclickmenu}) => {
    return(
    <nav className="subnavbar navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/destinations" id="destinations" onClick={onclickmenu} className="navbar-brand subbrand">Destinations</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="subnav-item nav-item">
          <FontAwesomeIcon icon={arrow}></FontAwesomeIcon>
        </li>
        <li className="nav-item active">
            <Link to={to1} id={id1} onClick={onclickmenu} className="nav-link sublink" activelink>{planet1}</Link>
        </li>
        <li className="nav-item">
            <Link to={to2} id={id2} onClick={onclickmenu} className="nav-link sublink">{planet2}</Link>
        </li>
        <li className="nav-item">
            <Link to={to3} id={id3} onClick={onclickmenu} className="nav-link sublink">{planet3}</Link>
        </li>
      </ul>
    </div>
  </nav>)
}

export default Submenu;