import React from "react";
import {FaQuoteLeft,FaQuoteRight, FaGem} from "react-icons/fa";

const Card = (props) => {
  let reviews = props.reviews;
  return (
    <div>

      <div>
        <img src={reviews.image} />
      </div>

      <div>
        <p>{reviews.name} </p>
      </div>

      <div>
        <p> {reviews.job}</p>
      </div>

    <div>
      <FaQuoteLeft/>
    </div>

<div>
        <p> {reviews.text}</p>
      </div>

    <div>
      <FaQuoteRight/>
    </div>

    <div>
      <button>+</button>
      <button>-</button>
    </div>

<div>
  <button>Surprise me </button>
</div>

    </div>
  );
};
export default Card;
