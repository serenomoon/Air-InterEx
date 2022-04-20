import { createContext } from "react";
import places from '../json/place.json'


export const planetlink = createContext("/earth");

export const { name, title, paragraph, carousel, cards, cities } = createContext(places.earth);