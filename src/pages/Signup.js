import React, { useContext, useState,useEffect } from "react"
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"
import { AuthContext } from "../context/authcontext.js";
import  firebase from "firebase/app"
import 'firebase/firestore';
import Loading from "./loading"
import logo from "./logo.png"
// import "./signup.css"
import { UserContext } from "../context/UserContext"
const Signup=()=>{
   


    const context=useContext(UserContext)
    const [image, setImage] = useState(null);
   
    const [url, setUrl] = useState("");
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [collegename,setCollegeName]=useState('')
    const [department,setDepartment]=useState('')
    const [password,setPassword]=useState('')
    const [progress, setProgress] = useState(0);
 const [loading,setLoading] = useState(false);

    const handleSignUp=()=>{
       
    setLoading(true)
       console.log("loading")
    // 
   
        const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
             
            );
            //   console.log('Upload is ' + progress + '% done');
            // setProgress(progress);
            // switch (snapshot.state) {
            //     case firebase.storage.TaskState.PAUSED: // or 'paused'
            //       console.log('Upload is paused');
            //       break;
            //     case firebase.storage.TaskState.RUNNING:
            //         if(loading){
            //             return <h1>loadinng</h1>;
            //         } // or 'running'
            //       console.log('Upload is running');
             
            //       break;
            //   }
          },
          error => {
            console.log(error);
            
          },
          (async() => {
            
          await firebase.storage()
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                // console.log(url)
                // setUrl(url);
                  firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(res=>{
            console.log(res)
            // context.setUser({
            //     email:res.user.email,
            
            //     uid:res.user.uid
            // })
          setLoading(false);
          
            alert("Signed Up in Successfully  " )
            firebase.firestore().collection('users').doc(email).set({
                "email":email,
                "name": name,
                "collegename": collegename,
                "department": department,
                "url":url,
                });
             

            // toast(res.message,{
            //     type:"res"
            // })
           
        })
        .catch(error=>{
            console.log(error)
            toast(error.message,{
                type:"error"
            })
        })
              });
          }
        )
        )
        
         console.log("image", image)
      
        }
 
   
    const handleSubmit=e=>{
        e.preventDefault();
    
       
           
         handleSignUp()
   
    
    }
    const { currentUser } = useContext(AuthContext);
//     if(loading){
//         return <h1>loading...</h1>
//     }
//  ]
//     useEffect (() => {
//         // handleSignUp();
//     //      //stop loading when data is fetched
       
    
//     //   }, [])
    if (currentUser) {
        return <Redirect to="/" />;
      }
     if(loading==true){
         return <Loading/>
     }

    return(
        
            <Container className=" text-center ">
            {/* <img src={logo} className="logo"/> */}
            <Col   sm={3} className="m-auto">
  <img
    className="d-block mx-auto img-fluid w-50"
    src={logo}
    alt="mysvg"
  ></img>
  </Col>
                  <Row>
                    <Col lg={6} className='col-md-2 center '>
                        <Card className="loginBox">
                            <Form onSubmit={handleSubmit}>
                                <CardHeader className='' style={{backgroundColor:"black",color:"gold"}}>SignUp here</CardHeader>
                                <CardBody>
                                    <FormGroup row>
                                        <Label for='email' sm={3}>
                                            Email
                                        </Label>
                                        <Col sm={9}>
                                            <input
                                                type="email"
                                                name="mail"
                                                id="email"
                                                reguired="true"
                                                placeholder='provide your email'
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}>
                                            </input>
                                             </Col>
                                             </FormGroup>
                                             <FormGroup row>
                                             <Label for='name' sm={3}>
                                            Name
                                        </Label>
                                         <Col sm={9}>
                                           
                                      
                                        
                                        <input value={name} type="text" required="true" id="name" placeholder="Your Name"  onChange={e => setName(e.target.value)}></input> <br></br>
                                        </Col> 
                                    </FormGroup>
                                     <FormGroup row>
                                             <Label for='collegename' sm={3}>
                                          College Name
                                        </Label>
                                        {/* <label for="cars">Choose a car:</label> */}
                                            <select  required="true" selected onChange={e => setCollegeName(e.target.value)} value={collegename} placeholder="select one ">
                                            <option reguired="true">Choose an option</option>
                                                <option required="true" value="Walchand College of Engineering, Sangli" selected>Walchand College of Engineering, Sangli</option>
                                                <option required="true" value="Government College of Engineering, Karad" >Government College of Engineering, Karad</option>
                                              
                                            </select>
 
                                          
                                           <br></br>                                        
                                            
                                     </FormGroup> 
                                     <FormGroup row>
                                             <Label for='department' sm={3}>
                                          Department
                                        </Label>
                                        {/* <label for="cars">Choose a car:</label> */}
                                            <select  required="true" selected onChange={e => setDepartment(e.target.value)} value={department} placeholder="select one ">
                                            <option reguired="true">Choose an option</option>
                                                <option required="true" value="Information Technology" selected>Information Technology</option>
                                                <option required="true" value="Mechanical" >Mechanical</option>
                                                <option required="true" value="Electrical" >Electrical</option>
                                                <option required="true" value="Civil" >Civil</option>
                                                <option required="true" value="ENTC" >ENTC</option>
                                            </select>
 
                                          
                                           <br></br>                                        
                                            
                                     </FormGroup> 
                                   
                                    <FormGroup row> 
                                              <Label for='collegename' sm={3}>
                                          Profile Photo
                                        </Label>
                                        <Col sm={3}>
                                              <input  type="file" required={true} id="img"  name="img" placeholder="Type here..."   onChange={e => setImage(e.target.files[0])}></input>
                                        </Col>
                                    </FormGroup>
                                    
                                    <FormGroup row>
                                        <Label for='password' sm={3}>
                                            Password
                                        </Label>
                                        <Col sm={9}>
                                            <input
                                                type='password'
                                                name='password'
                                                id='password'
                                                reguired="true"
                                                placeholder='your password here'
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            >
                                             </input>
                                        </Col>
                                    </FormGroup>
                                </CardBody>
                                <CardFooter>
                                   
                                    <Button type='submit' block  className="signUpSubmit">
                                        Sign Up
                                    </Button>
                                </CardFooter> 
                            </Form>
                         </Card>
                     </Col>
                 </Row>  
                 </Container>
              
        
    )
}

export default Signup;