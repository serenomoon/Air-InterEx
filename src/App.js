// import { useState } from 'react';
import { Helmet } from 'react-helmet';
import createPersistedState from 'use-persisted-state';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Menu from './components/Menu';
import Foot from './components/Foot';
import Home from './components/Home';
import Planet from './components/Planet';
import Submenu from './components/Submenu';

import { faCar, faRocket, faSearch, faSuitcaseRolling, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

import logo from './img/logo-viaje-w.png'
import places from './json/place.json'


const TITLE = 'Air InterEx'

const App = () => {

  const usePlanetLinkState = createPersistedState('planetlink');
  const usePlanetState = createPersistedState('planet');

  const [planetlink, setPlanetlink] = usePlanetLinkState("/earth");
  const [{ name, title, paragraph, carousel, cards, cities }, setPlanet]= usePlanetState(places.earth);

  const onclickmenu = (e) => {
    const id = e.currentTarget.id
    setPlanetlink("/"+id)
    setPlanet(places[id]);
  }
  
  // console.log(cards.first);

  return (
    <>
    <Helmet>
          <title>{ TITLE }</title>
    </Helmet>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"></link>
    
    <Router>
      < Menu 
        logo = { logo }
        search = { faSearch }
        onclickmenu = { onclickmenu }
        id = { planetlink }
      />
      <Switch>
        <Route exact path="/" component={ Home }>
          < Home
            farocket = { faRocket }
            facar = { faCar }
            fasuitcaserolling = { faSuitcaseRolling }
            link={ "/" }
          />
        </Route>
        <Route exact path={ planetlink } component={ Planet }>

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
            carousel1 = {carousel[0]}
            carousel2 = {carousel[1]}
            carousel3 = {carousel[2]}
            cards = {cards}
            firsti = {cards.first.img}
            firstt = {cards.first.title}
            firstp = {cards.first.paragraph}
            firstb = {cards.first.button}
            secondi = {cards.second.img}
            secondt = {cards.second.title}
            secondp = {cards.second.paragraph}
            secondb = {cards.second.button}
            thirdi = {cards.third.img}
            thirdt = {cards.third.title}
            thirdp = {cards.third.paragraph}
            thirdb = {cards.third.button}
            fourthi = {cards.fourth.img}
            fourtht = {cards.fourth.title}
            fourthp = {cards.fourth.paragraph}
            fourthb = {cards.fourth.button}
            fifthi = {cards.fifth.img}
            fiftht = {cards.fifth.title}
            fifthp = {cards.fifth.paragraph}
            fifthb = {cards.fifth.button}
            sixthi = {cards.sixth.img}
            sixtht = {cards.sixth.title}
            sixthp = {cards.sixth.paragraph}
            sixthb = {cards.sixth.button}

            citiest = {cities.title}
            cities1 = {cities.city[0]}
            cities2 = {cities.city[1]}
            cities3 = {cities.city[2]}
            cities4 = {cities.city[3]}
            cities5 = {cities.city[4]}
            cities6 = {cities.city[5]}
            cities7 = {cities.city[6]}
            cities8 = {cities.city[7]}
            cities9 = {cities.city[8]}

            link = { "/" }
          />
        }
        { planetlink === "/destinations" &&
          < Planet
            id = {planetlink}
            title = {title}
            paragraph = {paragraph}
            carousel1 = {carousel[0]}
            carousel2 = {carousel[1]}
            carousel3 = {carousel[2]}
            firsti = {cards.first.img}
            firstt = {cards.first.title}
            firstp = {cards.first.paragraph}
            firstb = {cards.first.button}
            secondi = {cards.second.img}
            secondt = {cards.second.title}
            secondp = {cards.second.paragraph}
            secondb = {cards.second.button}
            thirdi = {cards.third.img}
            thirdt = {cards.third.title}
            thirdp = {cards.third.paragraph}
            thirdb = {cards.third.button}

            link = { "/" }
          />
        }
        </Route>
      </Switch>
    </Router>
    

    < Foot 
      logo = {logo}
      facebook = {faFacebook}
      instagram = {faInstagram}
      twitter = {faTwitter}
      youtube = {faYoutube}
      link= {"/"}
    />

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossOrigin="anonymous"></script>
    </>
  );
}

export default App;
