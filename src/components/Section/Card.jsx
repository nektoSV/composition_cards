import React from "react";
import PropTypes from "prop-types";

export default function Card(data) {
  
  console.log(data, "data");
  return (
    <React.Fragment>
      <div className="card-box">
        <div className="card-content">{data.children}</div>
      </div>
    </React.Fragment>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
  }),
};


