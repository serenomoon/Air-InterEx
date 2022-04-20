import { Helmet } from 'react-helmet';
import Foot from './components/Foot';
import { AppRouter } from './components/AppRouter';
import { flyReducer } from './helpers/flyReducer';

import React, { useEffect, useReducer } from 'react'

import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import logo from './img/logo-viaje-w.png'
import './App.css';


const TITLE = 'Air InterEx'

const init = () => {
  //toma los datos almacenados en el localstorage del navegador
  return JSON.parse(localStorage.getItem('flyes')) || [];
  
};

const App = () => {
  
  const [ flyes, dispatch ] = useReducer(flyReducer, [], init);


    useEffect(() => {
      //si 'todos' cambia, cambia los datos en el localstorage del navegador (almacena o borra)
      localStorage.setItem('flyes', JSON.stringify( flyes ));
    }, [flyes])

    const handleAddFly = ( flyAdd ) => {

      dispatch({
        type: 'add',
        payload: flyAdd
      })
    }


    const handleDeleteFly = ( flyId ) => {

      dispatch( {
        type: 'delete',
        payload: flyId
      } );
}

  return (
    <>
    <Helmet>
          <title>{ TITLE }</title>
    </Helmet>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"></link>
    
    <AppRouter 
      handleAddFly = { handleAddFly }
      from = {flyes.from}
      to = {flyes.to}
    />
    

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
