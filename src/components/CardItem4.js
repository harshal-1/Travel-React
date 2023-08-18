import React from 'react';
import { Link } from 'react-router-dom';

function CardItem4(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Travel" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h3 className="cards__item__text">{props.text}</h3>
            <h6 className="cards__item__text">{props.price}</h6>
            <div className="details">
              <Link to={props.path}>
                <button className="btnnn">BUY NOW</button>
              </Link>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem4;
