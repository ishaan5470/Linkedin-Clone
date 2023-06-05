import logo from './logo.svg';
import './App.css';
import  Login from "./Login"
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Header from './Header';
import Home from "./Home";
import {useEffect} from "react";
import {userAuth} from "./action/index";
import {connect} from "react-redux"


function App(props) {
  useEffect(()=>{
    props.userAuth();

  },[])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={["/login","/home","/premium"]}>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/home">
            <Header/>
            <Home/>
          </Route>
          
          <Route exact path="/premium"> <Header/></Route>
          
          
          </Route>
          
          
        </Switch>
      </Router>

    </div>
  );
}
const mapStateToProps=(state)=>{
  return{};
}
const mapDispatchToProps=(dispatch)=>({
  userAuth: ()=>dispatch(userAuth)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
