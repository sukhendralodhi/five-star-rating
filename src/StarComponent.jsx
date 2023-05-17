/* eslint-disable react/prop-types */
import Star from "./Star";

const StarComponent = ({ maxStar, starRating, setStarRating }) => {
    return (
        <div style={{ display: 'flex' }}>
            {Array.from({ length: maxStar }).map((_, index) => {
                return (
                    <span
                    
                        onClick={() => setStarRating(index + 1)}
                        key={index}>
                        <Star filled={index < starRating} />
                    </span>
                );
            })}
        </div>
    );
};

export default StarComponent;
