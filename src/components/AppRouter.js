import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import createPersistedState from 'use-persisted-state';

import Menu from './Menu';
import Home from './Home';
import { Planet } from './Planet';
import Submenu from './Submenu';

import { faCar, faRocket, faSearch, faSuitcaseRolling, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import logo from '../img/logo-viaje-w.png'
import places from '../json/place.json'
import { StartFly } from './start-flyes/StartFly';


export const AppRouter = ({ handleAddFly, from, to }) => {

  const usePlanetLinkState = createPersistedState('planetlink');
  const usePlanetState = createPersistedState(['name', 'title', 'paragraph', 'carousel', 'cards', 'cities']);

  const [planetlink, setPlanetlink] = usePlanetLinkState("/earth");
  const [{ name, title, paragraph, carousel, cards, cities }, setPlanet]= usePlanetState(places.earth);

  const onclickmenu = (e) => {
    const id = e.currentTarget.id
    setPlanetlink("/"+id)
    setPlanet(places[id]);
  }


  return (
    <Router>
      < Menu 
        logo = { logo }
        search = { faSearch }
        onclickmenu = { onclickmenu }
        id = { planetlink }
      />
      <Routes>
        <Route exact path="/" element={ 
          <Home 
            farocket = { faRocket }
            facar = { faCar }
            fasuitcaserolling = { faSuitcaseRolling }
            handleAddFly = { handleAddFly }
            link={ "/" }
          />
        }/>
        <Route exact path={ planetlink } element={ 
          <>

            { name === "Earth" && 
            < Submenu 
              arrow = { faAngleRight }
              planet1 = { name }
              planet2 = "Mars"
              planet3 = "Europa"
              id1 = "earth"
              id2 = "mars"
              id3 = "europa"
              to1 = "/earth"
              to2 = "/mars"
              to3 = "/europa"
              onclickmenu = {onclickmenu}
            />}
            { name === "Mars" && 
            < Submenu 
              arrow = {faAngleRight}
              planet1 = {name}
              planet2 = "Earth"
              planet3 = "Europa"
              id1 = "mars"
              id2 = "earth"
              id3 = "europa"
              to1 = "/mars"
              to2 = "/earth"
              to3 = "/europa"
              onclickmenu = {onclickmenu}
            />}
            { name === "Europa" && 
            < Submenu 
              arrow = {faAngleRight}
              planet1 = {name}
              planet2 = "Earth"
              planet3 = "Mars"
              id1 = "europa"
              id2 = "earth"
              id3 = "mars"
              to1 = "/europa"
              to2 = "/earth"
              to3 = "/mars"
              onclickmenu = {onclickmenu}
            />}
            { name === "Destinations" && 
            < Submenu 
              arrow = {faAngleRight}
              planet1 = "Earth"
              planet2 = "Mars"
              planet3 = "Europa"
              id1 = "earth"
              id2 = "mars"
              id3 = "europa"
              to1 = "/earth"
              to2 = "/mars"
              to3 = "/europa"
              onclickmenu = {onclickmenu}
            />}

            { planetlink !== "/destinations" &&
            < Planet
              id = {planetlink}
              title = {title}
              paragraph = {paragraph}
              carousel = {carousel}
              cards = {cards}

              citiest = {cities.title}
              cities = {cities.city}

              link = { "/" }
            />
            }
            { planetlink === "/destinations" &&
            < Planet
              id = {planetlink}
              title = {title}
              paragraph = {paragraph}
              carousel = {carousel}
              cards = {cards}

              link = { "/" }
            />
            }
          </> 
        }/>
        <Route exact path={ "/startfly" } element={ 
          <StartFly
            from = {from}
            to = {to}
          /> 
        }/>
      </Routes>
    </Router>
  )
}
