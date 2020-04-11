import React from 'react';

import './style.scss';

export default function Pill({ collection, name }) {
  return (
    <>
      {collection.map(item => (
        <section className="pill" key={item.id}>
          <section className="pill__wrapper">
            <section className="pill__title">
              <h3>{item.name}</h3>
            </section>
            {name === "location" &&
            <section className="pill__information">
              <p className="pill__info pill__info--label">Type</p>
              <p className="pill__info pill__info--value">{item.type}</p>
              <p className="pill__info pill__info--label">Dimension</p>
              <p className="pill__info pill__info--value">{item.dimension}</p>
            </section>}
            {name === "episode" &&
            <section className="pill__information">
              <p className="pill__info pill__info--label">Air Date</p>
              <p className="pill__info pill__info--value">{item.air_date}</p>
              <p className="pill__info pill__info--label">Episode</p>
              <p className="pill__info pill__info--value">{item.episode}</p>
            </section>}
          </section>
        </section>
      ))}
    </>
  )
}