import React from 'react';
import "./PostModal.css";
import CloseIcon from '@mui/icons-material/Close';
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from 'react';
import ReactPlayer from "react-player";
import {connect} from "react-redux";
import firebase from "./firebase"
import { postArticleAPI } from './action';
import { descriptionAPI } from './action';


const PostModal = (props) => {
    const [editorText, setEditorText]=useState("");
    const [shareImage,setShareImage]=useState("");
    const [videoLink,setVideoLink]=useState("");
    const [assetArea, setAssetArea]=useState("");


    const handleChange=(e)=>{
        const image= e.target.files[0];
        if (image === " " || image=== undefined){
            alert(`not an image this files is ${typeof image}`)
            return;
        }
       setShareImage(image); 


    }



    const descriptionArticle=(e)=>{
        console.log(" yahan tak working ")
            if(e.target!==e.currentTarget){
                return;
            }
            console.log("description it is ")
            const payload={
                image:shareImage,
                video:videoLink,
                description: editorText,
            }
            props.descriptionAPI(payload);
            reset(e);
          
        }
    const postArticle=(e)=>{
        
       // event.currentTarget tells us on which element the event was attached or the element whose eventListener triggered the event.
       //Suppose there’s an event which shows an alert on click of the element. This event has been attached to the body. Now when the user clicks on the strong tag, currentTarget(.nodeName) will show the body whereas target will show strong as the alert output.
       if (e.target!==e.currentTarget){
            return;
        }
        console.log("post chala")
        const payload ={
            image:shareImage,
            video:videoLink,
            description:editorText,
           //timestamp:firebase.firestore.TimeStamp.now(),

        };
        props.postArticle(payload);
        reset(e);
        
        
        
}
    

    const reset =(e)=> {
        
        setEditorText("");
        setAssetArea("");
        setShareImage("");
        setVideoLink("");
        props.handleClick(e); 
        
    }
    
  return (
    <>
    {props.showModal === "open" && (
    <div className='postmodal'>
        <div className='content'>
            <div className='content-sub'>
                <h2> Create a Post </h2>
                <button onClick={()=>props.setShowModal('close')}>
                    <CloseIcon />
                    
               </button>
            </div>
            <div className='shared-content'>
                
                <img src="beard.jpeg"/>
                <span>Name</span>
                <div className='editor'>
                <textarea value={editorText} onChange={(e=>setEditorText(e.target.value))}
                placeholder="what do you want to discuss" autoFocus={true}></textarea> </div>

                
                
            </div>

        
            { assetArea === "image" ? (
                <div className='upload-image'>
                <input type="file" accept='image/jpg' id="file" onChange={handleChange} style={{display:"none"}}/>
                <p>
                   <label htmlFor="file"> select image from finder</label>

                </p>
                {shareImage && <img src={URL.createObjectURL(shareImage)} style={{width:"80px",
            height:"80px"}}/>}


            </div>
            ) : assetArea === "video" && (
                <div>
            
            <div>
                <input type="text" placeholder='Please input a video link' value={videoLink} onChange={(e)=>setVideoLink(e.target.value)} className="video123" name="video"/>
                {videoLink && <ReactPlayer width={"100%"} url={videoLink}/>}
            </div>
                </div>
            )
                
                }

            
            <div className='shared-actions'>
                <div className='action-button'>
                    <button onClick={()=>setAssetArea("video")}>
                    <img src='video.png'/>
                  
                    </button>
                    <button onClick={()=>setAssetArea("image")}>
                        <img src="gallery.png"/>
                    </button>
                   
                        
                </div>
                <div className='shared-comment'>
                    <button>
                        <CommentIcon/> Anyone
                    </button>

                </div>
                <div className='post-button'>
                    <button onClick={(event)=>postArticle(event)}> {/*giving all the information through postarticle event to the post button when clicked*/}
                        Post
                    </button>
                </div>
            </div>
        </div>
        



        </div>
    )
   
}
        </>
  );
};
//connecting to the store
const mapStateToProps=(state)=>{
    return{
        user: state.userState.user,
    };
}
const mapDispatchToProps=(dispatch)=>({
    descriptionArticle:(payload)=> dispatch(descriptionAPI(payload)),
    postArticle:(payload)=>dispatch(postArticleAPI(payload)),
    
})

export default connect(mapStateToProps,mapDispatchToProps)(PostModal);