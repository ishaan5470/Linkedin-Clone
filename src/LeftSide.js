import { Avatar } from '@mui/material';
import React from 'react';
import "./LeftSide.css";
import Data from "./LeftSide.json";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom";


const LeftSide = (props) => {
  return (
    <div className='leftside'>
        <div className='left-container'>
            <div className='left-container1'>
                <img src="linkedin-bg.jpeg"/>
               
                 <Link to ="/ishaan"><img src="beard.jpeg" className="my-image"/></Link>
                
                <a> 
                    Ishaan Saraswat
                     </a> 
                     {/*<a>
                        Add a photo!
  </a>*/}
  {Data.map((item)=>{
    return(
        <div className='info'>
            <span> {item.a}</span>
            <span>{item.b} </span>
            <span> {item.c}</span>
            <span>{item.d} </span>
            <span>{item.e} </span>
            </div>
    )
  })}
  <div className='border'></div>
  {Data.map((item)=>{
    return(
        <div className='engagement'>
            <span className='aa'> {item.aa} </span>
            <span className='bb'>{item.bb}</span>
       
            </div>
    )

  })}
  <div className='border'></div>

  {Data.map((item)=>{
    return(
        <div className='tools'>
            <span className='aaa'>{item.aaa}</span>
            <span className="bbb"> {item.bbb}</span>
            </div>
    )
  })}
                     
                     <div className='border'></div>

                     <BookmarksIcon fontSize='small'/>
                     {Data.map((item)=>{
                        return(
                            <div className='aaaa'>
                                <span className='aaaa'> {item.aaaa}</span>
                                </div>
                        )
                     })}

            </div>
            


        </div>

        <div className='community'>
            <a>
            <span className='group'>
                Group
            </span> </a>
            <a>
                <span className='events'>
                    Events
                    <AddIcon className='add'/>
                </span>
            </a>
            <a>
                <span>Follow Hashtags</span>
            </a>
            <div className='border'></div>

            <a>
                <span className='discover'>Discover More</span>
            </a>
        </div>
        
        


    </div>
  )
}

export default LeftSide;