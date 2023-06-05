import React from 'react';
import "./Home.css";
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';

import {connect} from "react-redux";
const Home = (props) => {
  return (
    <div className='home'>
      {/*/ Now say if the user is not logged in for the signout functionality  */}
      
        <div className='section-abc'>
            <h5> Hiring in a hurry? </h5>
            <p> Find talented pros in record time with upwork and keep business moving </p>

        </div>
        <div className='layout'>
<div> <LeftSide/> </div>
<div> <Main/> </div>
<div> <RightSide/></div>

        </div>




    </div>
  )
}
// now as of now store doesnt knw that you want to sign out 
const mapStateToProps=(state)=>{
  return{
    //then update the user state
    user: state.userState.state
    
  }
}



export default connect(mapStateToProps)(Home);