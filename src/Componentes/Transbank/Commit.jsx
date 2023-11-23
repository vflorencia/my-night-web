import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  commit } from "../../redux/actions";
import Loader from "../Loader/Loader";
import Success from "./Status/Success";
import Failed from "./Status/Failed";

export default function Commit () {
    const urlParams = new URLSearchParams(window.location.search);
    const token_ws = urlParams.get("token_ws");
    const dispatch = useDispatch()
    const response_code = useSelector((state)=> state.response_code)
    
    const info = {
      token_ws,
    }
    
    useEffect(() => {
      dispatch(commit(info))
    }, []);

    console.log(response_code)
              
  return (
    <>
     {response_code === 0 ?  <Success />
      : 
      !response_code ?  <Loader />
      : 
      <Failed />
      } 
    </>
  );
};



