import { useState } from "react";
import styles from "./StarRatingStyles.module.css"

export default function StarRating({getRating}){
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function rate(i){
    setRating(i)
    getRating(i)
  }

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? styles.on : styles.off}
            onClick={()=>rate(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star f1">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};