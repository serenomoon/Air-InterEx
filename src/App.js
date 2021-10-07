import createPersistedState from 'use-persisted-state';
import places from './json/place.json'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import Foot from './Foot';
import Home from './Home';
import Planet from './Planet';
import Submenu from './Submenu';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { faCar, faRocket, faSearch, faSuitcaseRolling, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import logo from './img/logo-viaje-w.png'


const TITLE = 'Air InterEx'

const App = () => {

  const usePlanetLinkState = createPersistedState('planetlink');
  const usePlanetState = createPersistedState('planet');

  const [planetlink, setPlanetlink] = usePlanetLinkState("/earth");
  const [planet, setPlanet]= usePlanetState(places.earth);

  const onclickmenu = (e) => {
    const id = e.currentTarget.id
    setPlanetlink("/"+id)
    setPlanet(places[id]);
  }
  

  return (
    <>
    <Helmet>
          <title>{ TITLE }</title>
    </Helmet>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"></link>
    
    <Router>
      < Menu 
        logo = {logo}
        search = {faSearch}
        onclickmenu = {onclickmenu}
        id = {planetlink}
      />
      <Switch>
        <Route exact path="/" component={Home}>
          < Home
            farocket = {faRocket}
            facar = {faCar}
            fasuitcaserolling = {faSuitcaseRolling}
          />
        </Route>
        <Route exact path={planetlink} component={Planet}>

          { planet.name == "Earth" && 
          < Submenu 
            arrow = {faAngleRight}
            planet1 = {planet.name}
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
          { planet.name == "Mars" && 
          < Submenu 
            arrow = {faAngleRight}
            planet1 = {planet.name}
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
          { planet.name == "Europa" && 
          < Submenu 
            arrow = {faAngleRight}
            planet1 = {planet.name}
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
          { planet.name == "Destinations" && 
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

          { planetlink != "/destinations" &&
          < Planet
            id = {planetlink}
            title = {planet.title}
            paragraph = {planet.paragraph}
            carousel1 = {planet.carousel[0]}
            carousel2 = {planet.carousel[1]}
            carousel3 = {planet.carousel[2]}
            firsti = {planet.cards.first.img}
            firstt = {planet.cards.first.title}
            firstp = {planet.cards.first.paragraph}
            firstb = {planet.cards.first.button}
            secondi = {planet.cards.second.img}
            secondt = {planet.cards.second.title}
            secondp = {planet.cards.second.paragraph}
            secondb = {planet.cards.second.button}
            thirdi = {planet.cards.third.img}
            thirdt = {planet.cards.third.title}
            thirdp = {planet.cards.third.paragraph}
            thirdb = {planet.cards.third.button}
            fourthi = {planet.cards.fourth.img}
            fourtht = {planet.cards.fourth.title}
            fourthp = {planet.cards.fourth.paragraph}
            fourthb = {planet.cards.fourth.button}
            fifthi = {planet.cards.fifth.img}
            fiftht = {planet.cards.fifth.title}
            fifthp = {planet.cards.fifth.paragraph}
            fifthb = {planet.cards.fifth.button}
            sixthi = {planet.cards.sixth.img}
            sixtht = {planet.cards.sixth.title}
            sixthp = {planet.cards.sixth.paragraph}
            sixthb = {planet.cards.sixth.button}

            citiest = {planet.cities.title}
            cities1 = {planet.cities.city[0]}
            cities2 = {planet.cities.city[1]}
            cities3 = {planet.cities.city[2]}
            cities4 = {planet.cities.city[3]}
            cities5 = {planet.cities.city[4]}
            cities6 = {planet.cities.city[5]}
            cities7 = {planet.cities.city[6]}
            cities8 = {planet.cities.city[7]}
            cities9 = {planet.cities.city[8]}
  
          />
        }
        { planetlink == "/destinations" &&
          < Planet
            id = {planetlink}
            title = {planet.title}
            paragraph = {planet.paragraph}
            carousel1 = {planet.carousel[0]}
            carousel2 = {planet.carousel[1]}
            carousel3 = {planet.carousel[2]}
            firsti = {planet.cards.first.img}
            firstt = {planet.cards.first.title}
            firstp = {planet.cards.first.paragraph}
            firstb = {planet.cards.first.button}
            secondi = {planet.cards.second.img}
            secondt = {planet.cards.second.title}
            secondp = {planet.cards.second.paragraph}
            secondb = {planet.cards.second.button}
            thirdi = {planet.cards.third.img}
            thirdt = {planet.cards.third.title}
            thirdp = {planet.cards.third.paragraph}
            thirdb = {planet.cards.third.button}
  
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
    />

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossOrigin="anonymous"></script>
    </>
  );
}

export default App;
