import './Foot.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Foot = ({ logo, facebook, instagram, twitter, youtube, link }) => {
    return (
        <div className="container-foot">
            <div className="row">
              <div className="col foot-cols">
                <a href={link} className="mid-cols-a">Help & Support</a>
                <a href={link} className="mid-cols-a">Change Planet</a>
                <a href={link} className="mid-cols-a">Change Region</a>
              </div>
              <div className="col foot-cols">
                <a href={link} className="mid-cols-a">About Air InterEx</a>
                <a href={link} className="mid-cols-a">Operating fleet</a>
                <a href={link} className="mid-cols-a">Company profile</a>
                <a href={link} className="mid-cols-a">Executive</a>
                <a href={link} className="mid-cols-a">Incorporation and listing</a>
                <a href={link} className="mid-cols-a">Diversity & inclusion</a>
              </div>
              <div className="col foot-cols">
                <a href={link} className="mid-cols-a">Earth Careers</a>
                <a href={link} className="mid-cols-a">Mars Careers</a>
                <a href={link} className="mid-cols-a">Europa (Jupiter) Careers</a>
                <a href={link} className="mid-cols-a">Spaceship Institute</a>
                <a href={link} className="mid-cols-a">Aviation Institute</a>
                <a href={link} className="mid-cols-a">Helps Colonize</a>
                <a href={link} className="mid-cols-a">Cargo</a>
              </div>
              <div className="col foot-cols-img">
                <img src={logo} height="50" alt="img"></img>
              </div>
            </div>
            <div className="air-social">
            <a href={link}><FontAwesomeIcon icon={facebook}></FontAwesomeIcon></a>
            <a href={link}><FontAwesomeIcon icon={instagram}></FontAwesomeIcon></a>
            <a href={link}><FontAwesomeIcon icon={twitter}></FontAwesomeIcon></a>
            <a href={link}><FontAwesomeIcon icon={youtube}></FontAwesomeIcon></a>
            </div>
            <span style={{color:"grey"}}>Build by Saulo Fernandez</span>
        </div>
    )
}

export default Foot;