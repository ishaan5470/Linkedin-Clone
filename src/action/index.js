import { auth,provider }  from "../firebase"
import { setUser } from "./actionType";
import firebase from 'firebase';
import {storage} from  "../firebase";
import db from "../firebase";
import { upload } from "@testing-library/user-event/dist/upload";


export const settingUser=(payload)=>
({
    type:setUser,
    user:payload,

});


export function sign(){
    return(dispatch)=>{
        //signInWithPopup is a function which comes with firebase auth
        auth.signInWithPopup(provider).then((payload)=>{
            console.log(payload,"ishaan");
            //now inside payload dispatch the user and tells the store that the user has logged in 
            //so here you are just dispatching the action to the store to proceed further
            dispatch(settingUser(payload.user));
            //payload.user is all the user details and if you console.log suppose payload.user.name it will show ishaan on the console
            
        }).catch((error)=>alert(error.message));
    };
}
//now autentication info when any sought of user log in 
export function userAuth(){
    return(dispatch)=>{
        //this comes from firebase 
        auth.onAuthStateChanged(async(user)=>{
            if (user){
                dispatch(settingUser(user)); 
            }
        })
    }
}
//now creating sign out functionality 
export function signOutApi(){
    return(dispatch)=>{
        //auth.signOut comes built in with firebase 
        auth.signOut().then(() =>{
            dispatch(settingUser(null));
        }).catch((error)=>{
            alert("cant sign out");
        })
    }
}
//function for uploading decription to firebase 
export function descriptionAPI(payload){
    return(dispatch)=>{
        if (payload.description != ' '){
            const upload=storage
            .ref(`description/${payload.description}`)
            .put(payload.description);
            upload.on("state_changed",snapshot=>{
                const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
                console.log(`Progress of description ${progress}%`)
                if (snapshot.state=="RUNNING"){
                    console.log(`Progress of description ${progress}%`);
                }
            }  , 
            async()=>{

                const downURL=await upload.snapshot.ref.getDownloadURL();

            }
            
            )
        }
    }
}

//function for posting the photo to the firebase 

 export function postArticleAPI(payload){
    return (dispatch)=>{
        //if payload.image is not blank means we have a image


        //this will help us to upload our image          
        if (payload.image != ' '){
            const upload=storage
            .ref(`images/${payload.image.name}`)
            .put(payload.image);
            upload.on('state_changed',snapshot=>{
                //this will help in the loading bar ot  percentage of progress of an image upload to Firebase storage
                const progress=
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                    console.log(`Progress for image:${progress}%`)
                    //if the loading bar is in running state 
                    if (snapshot.state==="RUNNING"){
                        console.log(`Progress for image: ${progress}%`);
                    }

                
                }, (error)=>console.log(error.message, "error error"),
                //Async ensures that the function returns a promise and wraps non-promises in it. There is another word Await, that works only inside the async function.

                async()=>{
                    const downloadURL= await upload.snapshot.ref.getDownloadURL();
                    //you can get the donwload url of the file 

                    // now to the article collection we are gonna add the actor where again has description title and date and image

                   db.collection("firebase articles").add({
                        actor :
                        {
                            description: payload.user.email,
                            title:payload.user.title,
                            image: payload.user.photoURL,
                            date:payload.timestamp,
                        },
                        video:payload.video,
                        sharedImg:downloadURL,
                        comment:0,
                        description:payload.description,
                    })
                }
            );
        };
    }
}
