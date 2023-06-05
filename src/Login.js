 import React from 'react'
 import "./Login.css";

 import { connect } from 'react-redux';
 /*The connect() function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.*/
import {sign} from "./action";
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Alert } from '@mui/material';
import {Link} from "react-router-dom";
import {useEffect} from "react";
//withRouter is a higher order component that will pass closest route's match, current location, and history props to the wrapped component whenever it renders. simply it connects component to the router.

  const Login = (props) => {
    
   return (
    <>
  

     { props.user && <Redirect to="/home"/>
      
     
     }
     <div className='login'>
      
     <img src='link-logo.png' className='link-logo'/>
     <p className='sign-in'> 
     Sign in</p>
     <p className='join'> Join now </p>
     </div>
     <div className='section101'>
        <h1>
            Welcome to your professional community 
        </h1>
        <img src='connect2.jpeg' className='connect'/>
        
             
       
     </div>
     <button onClick={()=>props.signIn()} className="goog">
     <img src='google.png' className='google'/> </button>
     </>
   )
 }
 
 const mapStateToProps= (state)=>{
  return{};
 }

 const mapDispatchToProps=(dispatch)=>({
  signIn:()=>dispatch(sign()),
 });
 //sign in here correspons to props.sign in onclick
 //redux is a global store when the user logs and pass information it stores their basically the database on the frontend
 
//mapStateToProps is a function that you would use to provide the store data to your component, whereas mapDispatchToProps is something that you will use to provide the action creators as props to your component.
//as example sign in is an action from the action creators using as props here.


 export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
 
//As the first argument passed in to connect , mapStateToProps is used for selecting the part of the data from the store that the connected component needs