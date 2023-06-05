import React from 'react';
import "./Main.css"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PostModal from "./PostModal";
import { useState } from 'react';

const Main = (props) => {
    const [showModal, setShowModal]= useState("close")
   const handleClick=(e)=>{
        /*e.target is what triggers the event dispatcher to trigger and e.currentTarget is what you assigned your listener to.*/       switch(showModal){
            case "open":
                setShowModal("close");
                break;

            case "close":
                setShowModal("open");
                break;
            default:
                setShowModal("close");
                break;
        }
    }
  return (
    <>
    <div className='main'>
        <div className='main-card'> 
      
        
        
        </div>        
        <div className='post'>
            <img src='beard.jpeg' className='dp' onClick={handleClick}/>
            <button  onClick={handleClick} className='start'>Start a post</button>
        </div>
        <div className="matters"> 
            <button className='gallery'>
                <img src='gallery.png'/>
                <span>Photo</span>
            </button>
            <button className='video'>
                <img src="video.png"/>
                <span>Video</span>
            </button>
            <button className='orange'>
                <img src='gallery-orange.png'/>
                <span>Event</span>
            </button>
            <button className='article'>
                <img src="article.png"/>
                <span>Write article</span> </button>

        </div>

        
</div>
<div className='border1'> </div> 


<div className='feed1'>
    <div className='feed'>
        
    <a>
        <img src="beard.jpeg" className='beard1'/>
        <div>
        <span>
            Titlee
        </span>
        <span>
            Info
        </span>
        <span>
            Date
        </span>
        </div>
         </a>
         
         <button>
        <MoreHorizIcon/> </button> </div>

        <div className='posting'>
            <span className='describe'>
    Desription  </span>

<img src='goldman.jpeg' className='goldman'/>
  </div>
  
  


</div> 
<div className='postmodel'>
<PostModal showModal={showModal} handleClick={handleClick}/>{/*passing showModal props and there by passing properties of showModal prop*/}
</div>


</>
  )
}

export default Main