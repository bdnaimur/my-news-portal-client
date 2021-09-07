import React, { useEffect, useState } from 'react';
import InternationalSingle from './InternationalSingle';

const International = () => {
    const [international, setInternational] = useState([]);
  useEffect(() => {
    fetch("https://intense-fjord-22962.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const internationalData = data.filter(
            (dt) => dt.category === "International"
          );
          setInternational(internationalData.reverse());
        }
        // setEntertainment(data.reverse());
      });
  }, []);
    return (
        <div>
            {international.map(intSingle=><InternationalSingle international={intSingle} />)}
        </div>
    );
};

export default International;