import React, { useEffect, useState } from 'react';
import SportsSingle from './SportsSingle';

const Sports = () => {
    const [sports, setSports] = useState([]);
  useEffect(() => {
    fetch("https://intense-fjord-22962.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const sportsData = data.filter(
            (dt) => dt.category === "Sports"
          );
          setSports(sportsData.reverse());
        }
        // setEntertainment(data.reverse());
      });
  }, []);
    return (
        <div>
            {sports.map(sptSingle =><SportsSingle sportsSingle={sptSingle}/>)}
        </div>
    );
};

export default Sports;