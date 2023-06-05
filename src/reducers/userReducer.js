import {setUser} from "../action/actionType";

const initial_state={
    user:null
};
const userReducer=(state=initial_state,action)=>{
    switch(action.type){
        //cases when user tap "login with googe"
        case setUser:
            //then return the state which was previously and then add in our new user 
            return {
                ...state, user:action.user
            };
        default:
        return state;
    }
}
export  default userReducer;
//everytime there is a reducer it means a state updater , it update a given state otherwise it update a given state.//
//example if send an array with an "action" of liking a post it will send the payload and increment the like by one 
//thats where the switch statement comes in and same goes with comments but if it is none of those actions then return default means as it is //

