import React, { useEffect, useState } from 'react';
import BusinessSingle from './BusinessSingle';

const Business = () => {
    const [business, setbusiness] = useState([]);
  useEffect(() => {
    fetch("https://intense-fjord-22962.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const businessData = data.filter(
            (dt) => dt.category.toLowerCase() === "business"
          );
          setbusiness(businessData.reverse());
        }
        // setEntertainment(data.reverse());
      });
  }, []);
    return (
        <div>
            {business.map(bsnSingle=><BusinessSingle business={bsnSingle}/>)}
        </div>
    );
};

export default Business;