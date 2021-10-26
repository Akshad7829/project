import React,{useReducer, useState,useEffect} from "react"
import {Container,Row,Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import { AuthProvider } from "./context/authcontext";
import Axios from "axios"
import {ToastContainer, toast } from "react-toastify"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import firebase from "firebase/app"
import "firebase/auth"
import Home from "./pages/Home"
import Profile from "./pages/profile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import about from "./pages/about"
import Forgotpassword from "./pages/forgotpassword"
import Pagenotfound from "./pages/Pagenotfound"
import { UserContext } from "./context/UserContext"
import Footer from "./layouts/Footer"
import Header from "./layouts/Header"
import firebaseConfig from "./config/firebaseconfig"
import Updateprofile from "./pages/updateprofile";
import Postproject from "./pages/postproject";
import Contest from "./pages/contest";
firebase.initializeApp(firebaseConfig);


const App=()=>{  
    
    const [user,setUser]    =useState(null)

    return (
        <AuthProvider>
        <Router>
            <ToastContainer />

            
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/signin" component={Signin} exact/>
                    <Route path="/signup" component={Signup} exact/>
                    <Route path="/signin" component={Signin} exact/>
                    <Route path="/forgotpassword" component={Forgotpassword} exact/>
                    <Route path="/profile" component={Profile} exact/>
                    <Route path="/updateprofile" component={Updateprofile} exact/>
                    <Route path="/postproject" component={Postproject} exact/>
                    <Route path="/contest" component={Contest} exact/>
                    <Route path="/about" component={about} exact/>
                    <Route path="*" component={Pagenotfound} exact/>
                </Switch>
                <Footer />
            
        </Router>
</AuthProvider>
    )
}

export default App