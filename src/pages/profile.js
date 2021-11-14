import React, { useState, useContext,useEffect } from "react";
import {Link} from "react-router-dom"
import Axios from "axios";
import { AuthContext } from "../context/authcontext.js";
import firebase from 'firebase'
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import {  Card, CardBody, CardFooter, CardHeader,  Form, FormGroup, Label, Alert } from "reactstrap"
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import "./profile.css"

import Loading from "./loading"
import { toast } from "react-toastify";
import { Carousel } from 'react-responsive-carousel';
const Profile=()=>{
 
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
    const [user, setUser] = useState();
    const { currentUser } = useContext(AuthContext);
    const context=useContext(UserContext)
    const [query,setQuery]=useState('')
    const [pending, setPending] = useState(true);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [collegename,setCollegeName]=useState('')
    const [department,setDepartment]=useState('')
    const [password,setPassword]=useState('')
    const [progress, setProgress] = useState(0);
    const [tech,setTech]=useState('')
    const   [desc,setDesc]=useState('')
    
    const [domain,setDomain]=useState('')
    // const [posts, setPosts] = useState([]);
    // const [image, setImage] = useState(null);
    // const [progress, setProgress] = useState(0);
    const [proname,setpName]=useState('')
const [useremail,setuseremail]=useState("") 
 const [modal, setModal] = useState(false);

 const [load,setLoad] = useState(false);
 const toggle = () => setModal(!modal);

    // const fetchDetails=async()=>{
    //     try{
    //         const {data}=await Axios.get(`https://api.github.com/users/${query}`)
    //         setUser(data);
    //         console.log(data)
    //     }catch(error){
    //         toast("user not found",{type:"error"})
    //     }
    // }
   
    var userData;
    const getPostsFromFirebase = [];

  //   const email=;
  //  console.log(email);

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
 useEffect(() => {
 
  const subscriber = firebase.firestore()
    .collection("users").doc(firebase.auth().currentUser.email).collection("pro")
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({
        ...doc.data(), //spread operator
         
          key: doc.id, // `id` given to us by Firebase
        });
      });
      // console.log(getPostsFromFirebase);
      
      setPosts(getPostsFromFirebase);
      
      setLoading(false);
    });

  // return cleanup function
  return () => subscriber();
}, [loading]); // empty dependencies array => useEffect only called once

if (loading) {
  return <Loading/>;
}

 const handleSignUp=(userData)=>{


 setName(userData.name)
 setEmail(userData.email)
 setCollegeName(userData.collegename)
 setDepartment(userData.department)

setuseremail(userData.email)


  // const handlesubmit=()=>{
    
  //     });


}
const handleUpdate=(e)=>{
  e.preventDefault();

  setLoad(true)
  console.log("loading")

  const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
  uploadTask.on(
    "state_changed",
    snapshot => {
      
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
       
      );
     
     
    },
    error => {
      console.log(error);
//       setPending(false)
// if(pending){
//   return <h1>Loading...</h1>
// }
    },
    (async() => {
      
    await firebase.storage()
        .ref("images")
        .child(image.name)
        .getDownloadURL()
      
        .then(url => {
          if(pending){
            alert("please wait till profile gets updated")
              }
firebase.firestore().collection('users').doc(email).set({
   "email":email,
 "name": name,
    "collegename": collegename,
    "department": department,
   "url":url,

  })
  // window.location.reload()
  setLoad(false);
alert("updated")

})
.catch(error=>{
  // setPending(false)
  console.log(error)
  toast(error.message,{
      type:"error"
  })
})
})
  )

  console.log("image", image)
}   
  const deleteProjectByName=(proname)=>{
 console.log(proname)
  console.log(firebase.auth().currentUser.email)
 
 firebase.firestore().collection("users").doc(firebase.auth().currentUser.email).collection("pro").doc(String(proname)).delete();
 firebase.firestore().collection("project").doc(String(proname)).delete();

  setLoading(true);
  alert("Project Deleted Successfullly")
  
}

//update project code:-
// const handleProject=(getPostsFromFirebase)=>{


//   setpName(getPostsFromFirebase.pname)
//   setDomain(getPostsFromFirebase.domain)
//   setTech(getPostsFromFirebase.tech)
//   setDesc(getPostsFromFirebase.desc)
 

 
 
//  }



    if(!currentUser?.uid){
        return <Redirect to="/signin"/>
    }
    if(load==true){
      return <Loading/>
  }

    // const remove = (pname) => {
    //   return firebase.firestore().doc(pname).delete();
    // };
  

    return (
      <div>
        <Container>
      
         <div class="cards user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img src={user && user?.url} class="img-radius" alt="User-Profile-Image"/> </div>
                                <h6 class="f-w-600">{user && user?.name}</h6>
                                {/* <p>Web Designer</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i> */}
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="cards-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">User Information</h6>
                                <div class="column">
                                    <div class="col-sm-10">
                                        <p class="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400 ">{user && user?.email}</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Department</p>
                                        <h6 class="text-muted f-w-400" >{user && user?.department}</h6>
                                    </div>
                                    <div class="col-sm-10">
                                        <p class="m-b-10 f-w-600">College Name</p>
                                        <h6 class="text-muted f-w-400" >{user && user?.collegename}</h6>
                                    </div>
                                   
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <Button type='submit' block className="updatebutton" style={{textAlign:"center"}}onClick={()=>{handleSignUp(user);toggle()}} >                                       Update profile
                                    </Button>
                                </div>
                                </div>
                                </div>
                                </div></div>
      
                                 
                                   <hr className="line"></hr> 
                                     <div className="container">
                                       
      {posts.length > 0 ? (
      
        posts.map((post) => 
        // <div>
        //   <p key={post.key}>{post.pname}</p>
        //   <p key={post.key}>{post.domain}</p>
        //   <p key={post.key}>{post.tech}</p>
        //   <img key={post.key} src={post.purl} style={{width:"20rem",height:"20rem"}}/>
        //   <p key={post.key}>{post.desc}</p>
        //   </div>
  
        
        <div className="card">
         
        <div className="card-header">
          <div className="profile">
            {/* <span className="letter">{props.author[0]}</span> */}
          </div>
          <div className="card-title-group">
            <h5 className="card-title"key={post.key}>{post.proname} </h5>
            <h5 className="card-date"key={post.key}>{post.createdAt.toDate().toDateString()}</h5>
          </div>
         
        </div>
        <b><div className="card-text" >Project Domain:-</div></b>
          <div className="card-text" key={post.key}>{post.domain}</div>
          <br></br>
        <br></br>
        <b><div className="card-text" >Project Screenshots:-</div></b>
        <br></br>
        <Carousel autoPlay="true" infiniteLoop="true" >
                <div>
                    <img src={post.purl} />
                    
                </div>
                <div>
                    <img src={post.purl} />
                    
                </div>
                <div>
                    <img src={post.purl} />
                 
                </div>
            </Carousel>
         
         {/* <img className="card-image" key={post.key} src={post.purl} alt="Logo" />  */}
         <br></br>
        <br></br>
         <b><div className="card-text" >Project Description:-</div></b>
        <div className="card-text" key={post.key}> {post.desc}</div>
        <br></br>
        <br></br>
        <b><div className="card-text" >Technologies used:-</div></b>
        <div className="card-text" key={post.key}>{post.tech}</div>
        <div className="card-like-bar">
          {/* {props.liked ? (
            <img className="card-like-icon" src={heartFill} alt="Logo" />
          ) : (
            <img className="card-like-icon" src={heartOutline} alt="Logo" />
          )} */}
  
          <div className="like-text">
            <b></b> 
            {/* <button type="submit" >Delete</button> */}
            <Button type='submit' block className="deletebutton" onClick={()=> deleteProjectByName(post.proname)} >Delete project
                                    </Button>
          </div>
        </div>
      </div>
          )
      ) : (
        <h1>No Projects yet !!</h1>
      )}
    </div>  
                          
          
        </Container>
       
        <Modal isOpen={modal} toggle={toggle}>
          <Row>
          <Col >
        <ModalBody>
        <Container className='text-center'>
                <Row xs={3} className='offset-xs-3 lg-10'>
                    <Col>
                        <Card>
                            <Form onSubmit={handleUpdate}>
                            <CardHeader>  <ModalHeader toggle={toggle}  style={{color:"gold"}}>Update Profile</ModalHeader></CardHeader>
                                 
                                <CardBody>
                                    <FormGroup row>
                                  
                                        <Label for='email' xs={30}>
                                            Email
                                        </Label>
                                        <Col xs={6}>
                                            <Input
                                                type='email'
                                                name='email'
                                                id='email'
                                                reguired="true"
                                                disabled="disabled"
                                                placeholder='provide your email'
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                             </Col>
                                             </FormGroup>
                                             <FormGroup row>
                                             <Label for='name' xs={30}>
                                            Name
                                        </Label>
                                        <Col xs={6}>
                                              <Input
                                                type='name'
                                                name='name'
                                                id='name'
                                                reguired="true"
                                                placeholder='provide your name'
                                                value={name}
                                                disabled="disabled"
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                             <Label for='collegename' xs={30}>
                                          College Name
                                        </Label>
                                        <Col xs={6}>
                                              <input
                                                type='text'
                                                name='collegename'
                                                id='collegename'
                                                reguired="true"
                                                placeholder='provide your College Name'
                                                disabled="disabled"
                                               
                                                value={collegename}
                                                onChange={e => setCollegeName(e.target.value)}
                                            />
                                        </Col> 
                                     </FormGroup>
                                     <FormGroup row>
                                             <Label for='department' xs={30}>
                                          Department
                                        </Label>
                                        <Col xs={6}>
                                              <input
                                                type='text'
                                                name='department'
                                                id='department'
                                                reguired="true"
                                                placeholder='provide your department '
                                                disabled="disabled"
                                               
                                                value={department}
                                                onChange={e => setDepartment(e.target.value)}
                                            />
                                        </Col> 
                                     </FormGroup>
                                    <FormGroup row> 
                                              <Label for='collegename' xs={40}>
                                          Profile Photo
                                        </Label>
                                        <Col sm={9}>
                                              <Input
                                          type="file"
                                                name='img'
                                                id='img'
                                                // reguired
                                                 accept="image/*"
                                                //  max-size="200"
                                                
                                                 required="true"
                                                // value={url}
                                                onChange={e => setImage(e.target.files[0])}
                                            ></Input>
                                        </Col>
                                    </FormGroup>
                                    {/* <Input type="file"   name='img'    value={url} id="myfile" name="myfile"/> */}
                                
                                </CardBody>
                                <CardFooter>
                                <ModalFooter>
                                  
                                    <Button type='submit' block style={{backgroundColor:"gold",color:"black"}}  >
                                        Save
                                    </Button>
                                    </ModalFooter>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </ModalBody>
            </Col>
            </Row>

            </Modal>
            
        </div>
      );
    
}
export default Profile
