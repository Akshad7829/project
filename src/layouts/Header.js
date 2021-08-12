import React,{useState,useContext,useEffect} from 'react'
import {Collapse,Container,Navbar,NavbarToggler,Nav,NavItem,NavLink,NavbarText, NavbarBrand} from "reactstrap"
import {Link} from 'react-router-dom'
import firebase from 'firebase'
import { UserContext } from '../context/UserContext'
import { AuthContext } from "../context/authcontext.js";
const Header=()=>{
    //  const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [currentPost, setCurrentPost] = useState([]);
    const context=useContext(UserContext)
    const { currentUser } = useContext(AuthContext);
    const [isOpen,setIsopen]=useState(false)

  
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
        <Navbar style={{backgroundColor:"black"}} light expand="md">
            <NavbarBrand ><Link to="/" className="text-white" style={{textDecoration:"none"}}><span style={{color:"gold"}}>Project</span>Book<span style={{color:"gold"}}></span></Link></NavbarBrand>
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
                         <NavLink    tag={Link}  style={{color:"gold"}} to="/profile" onClick={activate}>Profile
                           
                         </NavLink>
                         
                     </NavItem>
                        <NavItem>
                            <NavLink   style={{color:signupcolor}} onClick={() => firebase.auth().signOut()} >Sign out
                              
                            </NavLink>
                            
                        </NavItem>
                      
                        </>
                        ):(
                            <>
                            <NavItem>
                                <NavLink tag={Link} className="signup" to="/signup" style={{color:signupcolor}} onClick={activateup}>
                                    Signup
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link}to="/signin" style={{color:signincolor}} onClick={activate}>
                                    Signin
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