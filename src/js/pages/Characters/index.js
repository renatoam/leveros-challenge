import React, { useState, useEffect } from 'react';

import './style.scss';
import { Logo, Menu, Card } from '../Components';

const api = 'https://rickandmortyapi.com/api/character';

export default function Characters() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {

    async function getData() {

      await fetch(api).then(response => response.json().then(json => {

        setCharacters(json.results);
  
      }));
      
    }
    
    getData();
    
  }, []);
  
  return (
    <>
      <Logo />
        <article className="characters wrapper">
          <Card collection={characters} />
        </article>
      <Menu />
    </>
  )
}