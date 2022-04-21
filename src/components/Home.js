import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { Collapse, Form } from 'react-bootstrap';
import { useState } from "react";
import './Home.css'


const Home = ({ handleAddFly, farocket, fasuitcaserolling, facar, link }) => {

  const [{from, to}, handleInputChange, reset] = useForm({
    from: '',
    to: ''
  });

  // menu expandible
  const [open, setOpen] = useState(false); 
  // fecha
  const [date, setDate] = useState(new Date());

  console.log("DATE", date);

  let navigate = useNavigate(); 

  const handleSubmit = (e) =>{

      e.preventDefault();

      if( from.trim().length <= 1 ){
          return alert('Ingresa tu zona de abordaje.');
      }else if( to.trim().length <= 1 ){
          return alert('Ingresa tu Destino.');
      };

      const newFly = {
          id: new Date().getTime(),
          from: from,
          to: to
      };
      // envia info del form al reducer
      handleAddFly( newFly );

      // redirecciona
      let path = '/startfly'; 
      navigate(path);
      
      // reset();
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

                    onClick={() => setOpen(!open)}
                    // aria-controls="example-collapse-text"
                    // aria-expanded={open}
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

              <Collapse in={open}>
                <div className='collapse'>

                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="form-check-label" for="flexRadioDefault1">
                        Return trip
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                      <label class="form-check-label" for="flexRadioDefault2">
                        One-way trip
                      </label>
                  </div>

                  <div>
                    <h6>Travel dates</h6>
                    <div className="row">
                      <div className="col-md-4">
                         <Form.Group controlId="duedate">
                           <Form.Control
                             type="date"
                             name="duedate"
                             placeholder="Due date"
                             value={date}
                             onChange={(e) => setDate(e.target.value)}
                           />
                         </Form.Group>
                       </div>
                      </div>
                  </div>

                  <div className='row'>
                    <div className='col-4'>
                      <h6>Adults</h6>
                      <button>-</button>
                      <input type='text' className='passenger-input'/>
                      <button>+</button>
                    </div>

                    <div className='col-4'>
                      <h6>Childrens</h6>
                      <span>2-11 years old</span>
                      <button>-</button>
                      <input type='text' className='passenger-input'/>
                      <button>+</button>
                    </div>

                    <div className='col-4'>
                      <h6>Infants</h6>
                      <span>0-23 months old</span>
                      <button>-</button>
                      <input type='text' className='passenger-input'/>
                      <button>+</button>
                    </div>
                  </div>

                  <div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label" for="flexCheckDefault">
                        Book a child traveling alone
                      </label>
                    </div>
                  </div>

                  
                  <div className='row'>
                    <div className='col-6'>
                      <h6>Service class</h6>
                      <Form.Select>
                        <option>Economy - lowest</option>
                        <option value="1">Economy - lowest</option>
                        <option value="2">Premium Economy</option>
                        <option value="3">Bussines Class</option>
                      </Form.Select>
                    </div>

                    <div className='col-6'>
                      <h6>Promo code</h6> 
                      <span>optional</span>
                      <input type='text'/>
                    </div>
                  </div>
                  

                </div>
              </Collapse>

              <button 
                className="btn btn-primary mid-cols-button continue-btn" 
                type="submit"
              >
                Continue
              </button>          
            
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