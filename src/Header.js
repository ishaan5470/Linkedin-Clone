import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search'; /*using npm install @mui/icons-material*/
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TelegramIcon from '@mui/icons-material/Telegram';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import {connect} from "react-redux";
import {signOutApi} from "./action/index";

const Header = (props) => {
  return (
    <>

    <div className='header'>
        <Link to="/home">
            <img src='link-logo.png' className='home-image'/>
        </Link>
        <div className='search'>
            <SearchIcon className='search-icon'/>
            <input type="text" placeholder='Search' />
        </div>
        <div className='nav'>
            <a>
            <HomeIcon className='home-icon'/> 
            <span> Home </span>  </a>
            <a>
                <GroupIcon className='group'/>
                <span className='span1'> My Network</span>
            </a>
            <a>
                <BusinessCenterIcon className='business'/>
                <span className='span2'> Jobs </span>
            </a>
            
        <a>
            <TelegramIcon className='telegram'/>
            <span className='span3'> Messaging</span>
        </a>
        <a>
            <NotificationsIcon className='notification'/>
            <span className='span4'> Notifications</span>
        </a>
        <div className="avatar">
            {/*if the user logged in ? yes they exist then look for their photo url does they exist yes they do */}
            { props.user && props.user.photoURL ? (
                <Avatar src= {props.user.photoURL}/>
            ):(
                <Avatar src="beard.jpeg"/>
                
            )}


           
            <span>Me</span>
            <ArrowDropDownIcon className="arrowdown1"/>
            <a>
                <Link exact to="/login">
                <button onClick={()=>props.signOut()}> {/* now after this go to dispatch method as stated in redux thingy */}
                <span> Sign out</span> </button> </Link>
            </a>
        </div>
        <div className='work'>
            <AppsIcon/>
            <span>Work</span>
            <ArrowDropDownIcon className='arrowndown2'/>
        </div>
        <Link exact to="/premium">
            <span className='premium'> <span> Get Hired Faster, Try Premium Free </span> </span>
        </Link>
        </div>
        
    </div>
    </>
  )
}
//now dispatch will happend and will have access to store 
const mapStateToProps=(state)=>{
    return{
        user:state.userState.user
    }
}
const mapDispatchToProps=(dispatch)=>({
    signOut: ()=>dispatch(signOutApi()),
})


export default connect(mapStateToProps,mapDispatchToProps)(Header);