import React from "react";
import PropTypes from "prop-types";

export const CardTitle = ({ title }) => {
  return (
    <>
      <h5 className="card-title">{title}</h5>
    </>
  );
};
CardTitle.propTypes = {
  title: PropTypes.string,
};

export const CardText = ({ text }) => {
  return (
    <>
      <p className="card-text">{text}</p>
    </>
  );
};
CardText.propTypes = {
  text: PropTypes.string,
};

export const UrlImage = ({ url }) => {
  if (!url) {
    return;
  }
  return (
    <>
      <div className="image-wrapper">
        <img className="card-image" src={url} alt="" />
      </div>
    </>
  );
};
UrlImage.propTypes = {
  url: PropTypes.string,
};

export const Button = ({ url, text }) => {
  return (
    <>
      <a className="card-link" href={url}>
        {text}
      </a>
    </>
  );
};

UrlImage.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};
Button.defaultProps = {
  url: "#",
};
