import { useEffect, useState } from "react";
import "../CardBody/CardBody.scss";

const CardBody = ({ status, imgPost }) => {
  return (
    <div className="card-body">
      <div className="status">
        <p>{status}</p>
      </div>
      {imgPost && (
        <div className="images">
          <img src={imgPost} alt="" />
        </div>
      )}
    </div>
  );
};

export default CardBody;
