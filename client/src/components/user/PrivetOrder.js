import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { get_current } from "../../redux/action/UserAction";
import { useDispatch, useSelector } from "react-redux";

function PrivetOrder({ children }) {
    const dispatch=useDispatch()
    useEffect(() => {
        const id = localStorage.getItem("id");
          dispatch(get_current(id))
      }, [dispatch]);
      const user=useSelector((state)=>state.UserReducer.users)
      const token=localStorage.getItem("token")


      return<>{token && user?.role==="admin" ? children : <Navigate to="/" />}</>
  
}

export default PrivetOrder;
