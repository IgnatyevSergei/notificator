import React from "react";
import "./notificator.scss";
import {useDispatch} from "react-redux";
import {clearNotificatorAC} from "../../actions";

const Notificator = ({ title, description, background }) => {
  const dispatch = useDispatch()

  const hideHandel = () => {
   dispatch(clearNotificatorAC())
  }

  return (
  (title.length>0) && <div style={{ backgroundColor: background }} className="wrapper">
    <button className="close" onClick={hideHandel}>
      X
    </button>

    <div className="notificator-content">
      <p className="notificator-content__title">{title}</p>
      <p className="notificator-content__description">{description}</p>
    </div>

  </div>

  );
};

export default Notificator;
