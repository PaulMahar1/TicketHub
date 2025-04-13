import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Form from './components/form';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  const [rockLikes, setRockLikes] = useState(666);
  const [indieLikes, setIndieLikes] = useState(1);
  const [electronicLikes, setElectronicLikes] = useState(1337);


  const handleRockLike = () => {
    setRockLikes(rockLikes + 1);
  };

  const handleIndieLike = () => {
    setIndieLikes(indieLikes + 1);
  };

  const handleElectronicLike = () => {
    setElectronicLikes(electronicLikes + 1);
  };

  return (
    <>

    <Routes>
    <Route
      path="/electronic"
      element={
        <>
          <Header
            concertName="Electronic Dance Party"
            likes={1337}
            onLike={handleElectronicLike}
          />
          <Form concertIdIn={4545} concertType="electronic" ticketPrice={129} />
        </>
      }
    />
    <Route
      path="/rock"
      element={
        <>
          <Header
            concertName="Rock 'n Roll Revival"
            likes={666}
            onLike={handleRockLike}
          />
          <Form concertIdIn={9090} concertType="rock" ticketPrice={85} />
        </>
      }
    />
    <Route
      path="/indie"
      element={
        <>
          <Header
            concertName="Indie Under the Stars"
            likes={1}
            onLike={handleIndieLike}
          />
          <Form concertIdIn={7777} concertType="indie" ticketPrice={99} />
        </>
      }
    />
    <Route
    path="/"
    element={
      <Home />
    }
    />
  </Routes>
  </>
);
}

export default App
