/* eslint-disable react/prop-types */
import { useState } from "react";
import Star from "./Star";

const StarComponent = ({ maxStar, starRating, setStarRating }) => {
    const [ starHover, setStarHover ] = useState(null);
    return (
        <div style={{ display: 'flex' }}>
            {Array.from({ length: maxStar }).map((_, index) => {
                return (
                    <span
                        onMouseEnter={() => setStarHover(index)}
                        onMouseLeave={() => setStarHover(null)}
                        onClick={() => setStarRating(index + 1)}
                        key={index}>
                        <Star filled={ starHover !== null ? index <= starHover :  index < starRating} />
                    </span>
                );
            })}
        </div>
    );
};

export default StarComponent;
