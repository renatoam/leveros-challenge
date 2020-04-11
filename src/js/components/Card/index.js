import React from 'react';

import './style.scss';

export default function Card({ collection }) {

  return (
    <>
      {collection.map(item => (
              <section className="card" key={item.id}>
              <section className="card__wrapper">
                <figure className="card__image">
                  <img src={item.image} alt={item.name} />
                </figure>
                <section className="card__info">
                  <p className="card__name">{item.name}</p>
                  <section className="card__row">
                    <p className="card__col card__col--label">Status</p>
                    <p className="card__col card__col--value">{item.status}</p>
                  </section>
                  <section className="card__row">
                    <p className="card__col card__col--label">Species</p>
                    <p className="card__col card__col--value">{item.species}</p>
                  </section>
                  <section className="card__row">
                    <p className="card__col card__col--label">Gender</p>
                    <p className="card__col card__col--value">{item.gender}</p>
                  </section>
                  <section className="card__row">
                    <p className="card__col card__col--label">Origin</p>
                    <p className="card__col card__col--value">{item.origin.name}</p>
                  </section>
                  <section className="card__row">
                    <p className="card__col card__col--label">Location</p>
                    <p className="card__col card__col--value">{item.location.name}</p>
                  </section>
                </section>
              </section>
            </section>
      ))}
    </>
  )
}