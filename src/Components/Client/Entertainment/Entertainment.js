import React, { useEffect, useState } from "react";
import EntertainmentSingle from "./EntertainmentSingle";
const Entertainment = () => {
  const [entertainment, setEntertainment] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const entertainmentData = data.filter(
            (dt) => dt.category === "Entertainment"
          );
          setEntertainment(entertainmentData.reverse());
        }
        // setEntertainment(data.reverse());
      });
  }, []);
  console.log(entertainment);
  return (
    <div>

      {entertainment.map(entSinle=><EntertainmentSingle entertainment={entSinle} />)}

    </div>
  );
};

export default Entertainment;
