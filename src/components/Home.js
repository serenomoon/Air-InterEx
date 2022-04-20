import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";


const Home = ({ handleAddFly, farocket, fasuitcaserolling, facar, link }) => {

  const [{from, to}, handleInputChange, reset] = useForm({
    from: '',
    to: ''
  });

  const handleSubmit = (e) =>{
    e.preventDefault();

    if( from.trim().length <= 1 && to.trim().length <= 1 ){
        return;
    };

    const newFly = {
        id: new Date().getTime(),
        from: from,
        to: to
    };

    handleAddFly( newFly );

    reset();

}

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
            <form onSubmit={ handleSubmit }>

              <div className="square-fromto">
                <span className="square-span">From</span>
                  <input 
                    type="text"
                    name="from" 
                    className="square-input" 
                    placeholder="Planet Or Country + City"
                    value={ from }
                    onChange={ handleInputChange }
                  /> 
              </div>

              <div className="square-fromto">
                <span className="square-span">To</span>
                <input 
                    type="text"
                    name="to" 
                    className="square-input" 
                    placeholder="Airport City"
                    value={ to }
                    onChange={ handleInputChange }
                  /> 
              </div>

              {/* Debe redireccionar */}
              <a href="/startfly">
              <button 
                className="btn btn-primary mid-cols-button continue-btn" 
                type="submit"
                >
                  Continue
              </button>
              </a>
            
            </form>
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