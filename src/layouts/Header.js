import React,{useState,useContext,useEffect} from 'react'
import {Collapse,Container,Navbar,NavbarToggler,Nav,NavItem,NavLink,NavbarText, NavbarBrand} from "reactstrap"
import {Link} from 'react-router-dom'
import firebase from 'firebase'
import { UserContext } from '../context/UserContext'
import { AuthContext } from "../context/authcontext.js";

import logo from "./logo.png"
import signup from "./signup.png"
import signin from "./signin.png"
import "./layout.css"

const Header=()=>{
    //  const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [currentPost, setCurrentPost] = useState([]);
    const context=useContext(UserContext)
    const { currentUser } = useContext(AuthContext);
    const [isOpen,setIsopen]=useState(false)
    const [user, setUser] = useState();

    const [pending, setPending] = useState(true);
    var userData;
  


const getUser = async () => {
   try {
     const documentSnapshot = await firebase.firestore()
       .collection('users')
       .doc(firebase.auth().currentUser.email)
       .get();

     userData = documentSnapshot.data();
     console.log(userData)
      setUser(userData);
   } catch {
     //do whatever
   }
 };

 // Get user on mount
 useEffect(() => {
   getUser();
   setPending(false)
 }, []);
    const [signincolor,setSignincolor]=useState("white")
    const [signupcolor,setSignupcolor]=useState("gold")
    const toggle=()=>setIsopen(!isOpen)
    const activate=()=>{
        setSignincolor("gold");
        setSignupcolor("white");
    }
    const activateup=()=>{
        setSignupcolor("gold");
        setSignincolor("white");
    }

    return (
        <div>
        <Navbar className="navbar" style={{  boxShadow: "0px 8px 8px -6px rgba(0,0,0,.5)", background: "-webkit-gradient(linear, left top, right top, from(#f29263), to(#ee5a6f))" }} light expand="md" >
            <NavbarBrand ><Link to="/" className="text-white" style={{textDecoration:"none"}}><span style={{color:"black",}}>ProjectBook</span><span style={{color:"gold"}}></span></Link></NavbarBrand>
            {/* <NavbarText className="text-white">{
                context.user?.email ? context.user.email : "" 
            }</NavbarText> */}
          
        
            <NavbarToggler  onClick={toggle} style={{backgroundColor:"white"}}/>
            <Collapse isOpen={isOpen} navbar >
                <Nav className="ml-auto" navbar >
                    {
                     currentUser?(
                         <>
                            <NavItem>
                         <NavLink    tag={Link}  style={{color:"#e7213e",fontWeight:"bold"}} to="/profile" onClick={activate}>
                         <img src={user && user?.url} style={{width:"2.5rem",borderRadius:"4rem",height:"2.5rem"}}/>
                         </NavLink>
                         
                     </NavItem>
                     <NavItem>
                         <NavLink  className="font"  tag={Link}  style={{color:"black",fontFamily: "Roboto Slab,serif",}} to="/postproject" onClick={activate}>Post project
                           
                         </NavLink>
                         
                     </NavItem>
                     <NavItem>
                         <NavLink  className="font"  tag={Link}  style={{color:"black",fontFamily: "Roboto Slab,serif",}} to="/contest" onClick={activate}>Contest Details
                           
                         </NavLink>
                         
                     </NavItem>
                
                        <NavItem>
                            <NavLink  className="font" style={{color:"black",fontFamily: "Roboto Slab,serif"}} onClick={() => firebase.auth().signOut()} >Sign out
                              
                            </NavLink>
                            
                        </NavItem>
                      
                        </>
                        ):(
                            <>
                             <NavItem>
                                <NavLink className="font"tag={Link}to="/about" style={{color:"black",fontFamily: "Roboto Slab,serif"}} onClick={activate}>
                                {/* <img style={{width:"2rem",marginLeft:"2rem"}} src={signin}/> */}
                                About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  className="font" tag={Link} className="signup" to="/signup" style={{color:"black",fontFamily: "Roboto Slab,serif"}} onClick={activateup}>
                                    {/* <img style={{width:"2rem"}} src={signup}/> */}
                                    SignUp
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="font"tag={Link}to="/signin" style={{color:"black",fontFamily: "Roboto Slab,serif"}} onClick={activate}>
                                {/* <img style={{width:"2rem",marginLeft:"2rem"}} src={signin}/> */}
                                SignIn
                                </NavLink>
                            </NavItem>
                           
                            </>
                        )
                    }
                    
                </Nav>
            </Collapse>
           
        </Navbar>
      
         </div>
    )
}
export default Header