import React, { useState, useEffect } from 'react';

import './style.scss';
import { Logo, Menu, Card } from '../Components';
import Pill from '../../components/Pill';

const apiCharacter = 'https://rickandmortyapi.com/api/character?page=1';
const apiLocation = 'https://rickandmortyapi.com/api/location?page=1';
const apiEpisode = 'https://rickandmortyapi.com/api/episode?page=1';

export default function Home() {

  const [collection, setCollection] = useState({});
  const [loading, setLoading] = useState(true);
  const home = { characters: [], locations: [], episodes: [] }

  useEffect(() => {

    async function getCollection() {

      await fetch(apiCharacter).then(response => response.json().then(json => {

        handleHomeObject("characters", json.results);
        handleCollection();
  
      }));
      
      await fetch(apiLocation).then(response => response.json().then(json => {
        
        handleHomeObject("locations", json.results);
        handleCollection();
  
      }));
      
      await fetch(apiEpisode).then(response => response.json().then(json => {

        handleHomeObject("episodes", json.results);
        handleCollection();
        checkCollection();
  
      }));
      
    }
    
    getCollection();
    
  }, []);

  function handleHomeObject(key, newValue) {

    home[key] = newValue.filter((value, idx) => idx < 2);

  }
  
  function handleCollection() {
    
    setCollection(Object.assign(collection, home));

  }

  function checkCollection() {

    const check = Object.values(home).every(value => value.length > 0);

    if (check) setLoading(false);

  }

  return (
    <>
      { !loading &&
        <>
          <Logo />
          <article className="home__wrapper wrapper">
            <h2>Examples</h2>
            <section className="home__row home__row--characters">
              <h3>Characters</h3>
              <Card collection={collection.characters} />
            </section>
            <section className="home__row home__row--locations">
              <h3>Locations</h3>
              <Pill collection={collection.locations} name="location" />
            </section>
            <section className="home__row home__row--episodes">
              <h3>Episodes</h3>
              <Pill collection={collection.episodes} name="episode" />
            </section>
          </article>
          <Menu />
        </>
      }
    </>
  )
}