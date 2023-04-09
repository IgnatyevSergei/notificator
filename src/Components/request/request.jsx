import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {clearNotificatorAC, setStore} from "../../actions";
import Notificator from "../notificator";
import './request.scss'

const Request = ({url, text}) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(()=> {
    const interval = setInterval(()=>{
      if(store.title.length>0) {
        dispatch(clearNotificatorAC())
      }
    },3000)
    return ()=> clearInterval(interval)
  }, [store, dispatch])

  const getResource = () => {
    setStore(url, dispatch);
  };

  return <>
    <button className='request-btn' onClick={getResource}>{text}</button>
    {(store.title.length>0) && <Notificator title={store.title} description={store.description} background={store.background}/>}
  </>
};

export default Request ;
