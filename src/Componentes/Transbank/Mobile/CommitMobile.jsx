import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import Success from "./Success";
import Failed from "../Status/Failed";
import { commitMobile } from "../../../redux/actions";

export default function CommitMobile () {
    const urlParams = new URLSearchParams(window.location.search);
    const token_ws = urlParams.get("token_ws");
    const dispatch = useDispatch()
    const response_code = useSelector((state)=> state.response_code)
    
    const info = {
      token_ws,
    }
    
    useEffect(() => {
      dispatch(commitMobile(info))
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



