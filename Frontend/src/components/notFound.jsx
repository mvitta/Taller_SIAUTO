import React from "react";
import imageNotFound from "../assets/Iconos redes sociales/notFound.png";
import "../css/notFound.css";

const PageNotFound = () => {
  return (
    <React.Fragment>
      <div className="containerNotFound">
        <div className="iteam">
          <img src={imageNotFound} alt="NotFound" />
          <h1>Not Found 404</h1>
          <p>Sorry, Page not found</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageNotFound;
