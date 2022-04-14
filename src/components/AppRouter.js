import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Planet from './Planet';
import Submenu from './Submenu';


export const AppRouter = () => {
  return (
    <Router>
      < Menu 
        logo = { logo }
        search = { faSearch }
        onclickmenu = { onclickmenu }
        id = { planetlink }
      />
      <Routes>
        <Route exact path="/" element={ Home }>
          < Home
            farocket = { faRocket }
            facar = { faCar }
            fasuitcaserolling = { faSuitcaseRolling }
            link={ "/" }
          />
        </Route>
        <Route exact path={ planetlink } element={ Planet }>

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
      </Routes>
    </Router>
  )
}
