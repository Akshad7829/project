import React,{useState,useContext,useEffect} from 'react'
import {Collapse,Container,Navbar,NavbarToggler,DropdownMenu,DropdownItem,DropdownToggle,UncontrolledDropdown,Nav,NavItem,NavLink,NavbarText, NavbarBrand} from "reactstrap"
import {Link} from 'react-router-dom'
import firebase from 'firebase'
import { UserContext } from '../context/UserContext'
import { AuthContext } from "../context/authcontext.js";
import profile from "./profile-user.png"
import logo from "./logo.png"
import signup from "./signup.png"
import signin from "./signin.png"
import "./layout.css"
import Profile from '../pages/profile'
import Postproject from '../pages/postproject'
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
  




 // Get user on mount
 useEffect(() => {
  
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
        <Navbar className="navbar" style={{  boxShadow: "0px 8px 8px -6px rgba(0,0,0,.5)", background: "rgb(1,196,173)" }} light expand="md" >
            <NavbarBrand ><Link className="text-white" style={{textDecoration:"none"}}><span style={{color:"black",  }}>ProjectBook</span><span style={{color:"gold",fontFamily:"Lobster"}}></span></Link></NavbarBrand>
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
                         <NavLink  className="font"  tag={Link}  style={{color:"black", fontFamily: "Montserrat, sans-serif",fontWeight:"bold",fontSize:"1.2rem"}} to="/" onClick={activate}>Home
                           
                         </NavLink>
                         
                     </NavItem>
                             <NavItem>
                         <NavLink  className="font"  tag={Link}  style={{color:"black",fontFamily: "Montserrat, sans-serif",fontWeight:"bold",fontSize:"1.2rem"}} to="/contest" onClick={activate}>Contest Details
                           
                         </NavLink>
                         
                     </NavItem>
                  
                   
                     <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
           <img src={profile} style={{width:"2.5rem",borderRadius:"4rem",height:"2.5rem"}}/>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem  href="/profile">
              profile
            </DropdownItem>
            <DropdownItem href="/postproject">
             Post Project
            </DropdownItem>
            <DropdownItem onClick={() => firebase.auth().signOut()} >
           Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
                     
                   
                
                       
                      
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