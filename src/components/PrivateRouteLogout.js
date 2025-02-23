import React from "react";
import { Route,  Redirect } from "react-router-dom";

function PrivateRouteLogout({component:Component, ...rest}) {
  return (
  <Route {...rest} render={(props)=> {
        if (localStorage.getItem("token")) {
           return <Component {...props}/>
        } else {
           return <Redirect to="/login"/>
        }
    }}/>
)};


export default PrivateRouteLogout;

//Task List:
//1. Complete PrivateRoute