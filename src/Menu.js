import { Link } from 'react-router-dom';
import './Menu.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const Menu = (props) => {

    const [dropdown, setDowndrop1]= useState(false);
    const [dropdown2, setDowndrop2]= useState(false);
    const [dropdown3, setDowndrop3]= useState(false);
    const [dropdown4, setDowndrop4]= useState(false);

    const abrirDropdown=(e)=>{
        const id = e.currentTarget.id;
        const consta =  eval("setDown"+id);
        consta(true);
        
    }

    const cerrarDropdown=(e)=>{
        const id = e.currentTarget.id;
        const consta =  eval("setDown"+id);
        consta(false);
    }

    return(
        <div>
            <nav className="navbar-custom navbar navbar-expand-lg navbar-dark">
                <Link to="/" className="navbar-brand"><img src={props.logo} height="36"></img>Air InterEx</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <Dropdown id="drop1" isOpen={dropdown} onMouseOver={abrirDropdown} onMouseLeave={cerrarDropdown}>
                        <DropdownToggle className="dropdownButton nav-link">Plan</DropdownToggle>
                        <DropdownMenu className="dropdownMenu">
                            <DropdownItem className="dropdownItemTitle" id="destinations" onClick={props.onclickmenu}><Link to="/destinations">Destination</Link></DropdownItem>
                            <div className="dropdowndiv">
                                <DropdownItem className="dropdownItem" id="earth" onClick={props.onclickmenu}><Link to="/earth">Earth</Link></DropdownItem>
                            </div>
                            <div className="dropdowndiv">
                                <DropdownItem className="dropdownItem" id="mars" onClick={props.onclickmenu}><Link to="/mars">Mars</Link></DropdownItem>
                            </div>
                            <div className="dropdowndiv">
                                <DropdownItem className="dropdownItem" id="europa" onClick={props.onclickmenu}><Link to="/europa">Europa (Jupiter)</Link></DropdownItem>
                            </div>
                        </DropdownMenu>
                    </Dropdown>
                    
                    <Dropdown id="drop2" isOpen={dropdown2} onMouseOver={abrirDropdown} onMouseLeave={cerrarDropdown}>
                        <DropdownToggle className="dropdownButton nav-link">Book</DropdownToggle>
                        <DropdownMenu className="dropdownMenu">
                            <DropdownItem header>Hotels</DropdownItem>
                            <div className="dropdowndiv">
                                <DropdownItem className="dropdownItemTitle">Earth Hotels</DropdownItem>
                                <hr className="dropdownhr"></hr>
                                <DropdownItem className="dropdownItem">Palladium Business Hotel</DropdownItem>
                                <DropdownItem className="dropdownItem">Sheraton Bs As Hotel</DropdownItem>
                            </div>
                            <div className="dropdowndiv">
                                <DropdownItem className="dropdownItemTitle">Mars Hotels</DropdownItem>
                                <hr className="dropdownhr"></hr>
                                <DropdownItem className="dropdownItem">Mars Hotel</DropdownItem>
                                <DropdownItem className="dropdownItem">Mars Hotel</DropdownItem>
                            </div>
                            <div className="dropdowndiv">
                                <DropdownItem className="dropdownItemTitle">Europa Hotels</DropdownItem>
                                <hr className="dropdownhr"></hr>
                                <DropdownItem className="dropdownItem">Europa Hotel</DropdownItem>
                                <DropdownItem className="dropdownItem">Europa Hotel</DropdownItem>
                            </div>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown id="drop3" isOpen={dropdown3} onMouseOver={abrirDropdown} onMouseLeave={cerrarDropdown}>
                        <DropdownToggle className="dropdownButton nav-link">Experience</DropdownToggle>
                        <DropdownMenu className="dropdownMenu">
                            <DropdownItem header>At the Spaceport</DropdownItem>
                            <div className="dropdowndiv">
                                <DropdownItem className="dropdownItemTitle">Earth Spaceport</DropdownItem>
                                <hr className="dropdownhr"></hr>
                                <DropdownItem className="dropdownItem">Air InterEx Lounges</DropdownItem>
                                <DropdownItem className="dropdownItem">International Check-in</DropdownItem>
                            </div>
                            <div className="dropdowndiv">
                                <DropdownItem className="dropdownItemTitle">Mars Spaceport</DropdownItem>
                                <hr className="dropdownhr"></hr>
                                <DropdownItem className="dropdownItem">Air InterEx Lounges</DropdownItem>
                                <DropdownItem className="dropdownItem">International Check-in</DropdownItem>
                            </div>
                            <div className="dropdowndiv">
                                <DropdownItem className="dropdownItemTitle">Europa Spaceport</DropdownItem>
                                <hr className="dropdownhr"></hr>
                                <DropdownItem className="dropdownItem">Air InterEx Lounges</DropdownItem>
                                <DropdownItem className="dropdownItem">International Check-in</DropdownItem>
                            </div>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown id="drop4" isOpen={dropdown4} onMouseOver={abrirDropdown} onMouseLeave={cerrarDropdown}>
                        <DropdownToggle className="dropdownButton nav-link">Airpoints</DropdownToggle>
                        <DropdownMenu className="dropdownMenu">
                            <DropdownItem header>Hotels</DropdownItem>
                            <div className="dropdowndiv">
                                <DropdownItem className="dropdownItemTitle">Earth Hotels</DropdownItem>
                                <hr className="dropdownhr"></hr>
                                <DropdownItem className="dropdownItem">Palladium Business Hotel</DropdownItem>
                                <DropdownItem className="dropdownItem">Sheraton Bs As Hotel</DropdownItem>
                            </div>
                            <div className="dropdowndiv">
                                <DropdownItem className="dropdownItemTitle">Mars Hotels</DropdownItem>
                                <hr className="dropdownhr"></hr>
                                <DropdownItem className="dropdownItem">Mars Hotel</DropdownItem>
                                <DropdownItem className="dropdownItem">Mars Hotel</DropdownItem>
                            </div>
                            <div className="dropdowndiv">
                                <DropdownItem className="dropdownItemTitle">Europa Hotels</DropdownItem>
                                <hr className="dropdownhr"></hr>
                                <DropdownItem className="dropdownItem">Europa Hotel</DropdownItem>
                                <DropdownItem className="dropdownItem">Europa Hotel</DropdownItem>
                            </div>
                        </DropdownMenu>
                    </Dropdown>

                    </ul>
                    <div className="form-item">
                        <div className="custom-input theme-m size-large">
                            <div className="input-wrap align-icon-left has-icon">
                                <input type="text" placeholder="Search" className="input padding-left"></input>
                                <span  select="input-icon">
                                <FontAwesomeIcon className="lupa" icon={props.search}></FontAwesomeIcon>
                                </span>
                            </div>
                        </div>
                    </div>
                    <ul className="navbar-nav mr-auto navbar2">
                    <div className="collapse navbar-collapse">
                    <a className="nav-link navlink2" href="#">Manage Booking</a>
                    <a className="nav-link navlink2" href="#">Check In</a>
                    <a className="nav-link navlink2" href="#">Sign In</a>
                    </div>
                    </ul>
                </div>
            </nav> 
        </div>
    )
}


export default Menu;