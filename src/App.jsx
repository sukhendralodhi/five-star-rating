import { useState } from "react";
import StarComponent from "./StarComponent";

function App() {
  const [starRating, setStarRating] = useState(3);

  return (
    <>
      <StarComponent
        maxStar={5}
        starRating={starRating}
        setStarRating={setStarRating}
      />
    </>
  );
}

export default App;
