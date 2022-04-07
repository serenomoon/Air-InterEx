import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ farocket, fasuitcaserolling, facar, link }) => {
    return (
        <div>
        <div className="background">
      <div className="center">
        <h1 className="title">Experience a new world</h1>
        <div className="square">
          <div>
            <span style={{color:"coral", pointerEvents: "none"}}>Book your Trip</span>
            <a href={ link } className="square-link">Manage booking</a>
            <a href={ link } className="square-link">Check-in</a>
          </div>
          <hr className="square-hr"></hr>
          <div className="fli-hot-rent">
            <span style={{color:"coral", pointerEvents: "none"}}><FontAwesomeIcon icon={farocket}></FontAwesomeIcon> Book a flight</span>
            <a href={ link } className="square-link"><FontAwesomeIcon icon={fasuitcaserolling}></FontAwesomeIcon> Book a hotel</a>
            <a href={ link } className="square-link"><FontAwesomeIcon icon={facar}></FontAwesomeIcon> Rent a Car</a>
          </div>
          <div className="square-fromto-box">
            <div className="square-fromto">
              <span className="square-span">From</span>
              <input className="square-input" placeholder="Planet Or Country + City"></input>
            </div>
            <div className="square-fromto">
              <span className="square-span">To</span>
              <input className="square-input" placeholder="Airport City"></input>
            </div>
            <button className="btn btn-primary mid-cols-button continue-btn" type="submit">Continue</button>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <hr style={{marginTop:"2%",height:"1px", opacity:"1",color:"black",borderTop:"black"}}></hr>
      <div className="row">
        <div className="col mid-cols">
          <h2 className="mid-cols-h2">Interplanetary Travel</h2>
          <p className="mid-cols-p">Details on what you need to know and frequently asked questions related to interplanetary travel.</p>
          <button className="btn btn-primary btn-knowmore" type="submit">Know more</button>
        </div>
        <div className="col mid-cols">
          <h2 className="mid-cols-h2">Stay up to date with travel alerts</h2>
          <p className="mid-cols-p">Check if your travel is impacted by current events.</p>
          <button className="btn btn-primary btn-knowmore" type="submit">Know more</button>
        </div>
        <div className="col mid-cols">
          <h2 className="mid-cols-h2">Arrivals & departures</h2>
          <p className="mid-cols-p">Find the most up-to-date Air InterEx flight status information.</p>
          <button className="btn btn-primary btn-knowmore" type="submit">Know more</button>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Home;