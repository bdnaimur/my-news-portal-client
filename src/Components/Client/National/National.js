import React, { useEffect, useState } from 'react';
import NationalSingle from './NationalSingle';

const National = () => {
    const [national, setnational] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const nationalData = data.filter(
            (dt) => dt.category === "National"
          );
          setnational(nationalData.reverse());
        }
        // setEntertainment(data.reverse());
      });
  }, []);
    return (
        <div>
            {national.map(ntlSingle =><NationalSingle national={ntlSingle} />)}
        </div>
    );
};

export default National;