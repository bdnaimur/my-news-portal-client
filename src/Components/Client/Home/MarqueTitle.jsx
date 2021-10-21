import React from 'react';

const MarqueTitle = ({title}) => {
    return (
        <marquee width="60%" direction="right" height="100px">
            {title}
        </marquee>
    );
};

export default MarqueTitle;