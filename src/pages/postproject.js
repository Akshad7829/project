import React, { useEffect, useState,useContext } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import  firebase from "firebase/app"
import 'firebase/firestore';
import { AuthContext } from "../context/authcontext.js";
import { UserContext } from "../context/UserContext"
import {Redirect} from "react-router-dom"
import Loading from "./loading"
import { name } from "faker";
const SignUp = () => {
  var userData;
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [tech,setTech]=useState('')
  const [desc,setDesc]=useState('')
  const [name,setName]=useState('')
  const [domain,setDomain]=useState('')
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [proname,setpName]=useState('')

  const [purl, setpUrl] = useState("");
  const [files, setFiles] = useState([])
   const { currentUser } = useContext(AuthContext);
const context=useContext(UserContext)

  const saveAnswer = (event) => {
   
    event.preventDefault();
    setLoading(true)
    // const onchange = e => {
    //   for (let i = 0; i < e.target.files.length; i++) {
    //        const newFile = e.target.files[i];
    //        newFile["id"] = Math.random();
    //     // add an "id" property to each File object
    //        setFiles(prevState => [...prevState, newFile]);
    //      }
    //    };
     
    const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
        
      },
      (async() => {
        await firebase.storage()
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(purl => {
//     const elementsArray = [...event.target.elements];

//     const formData = elementsArray.reduce((accumulator, currentValue) => {
//       if (currentValue.id) {
//         accumulator[currentValue.id] = currentValue.value;
//        }
// // event.target.reset();
//       return accumulator;
//     }, {});
// const getUser = async () => {
//   try {
//     const documentSnapshot = await firebase.firestore()
//       .collection('users')
//       .doc(firebase.auth().currentUser.email)
//       .get();

//     userData = documentSnapshot.data();
//     console.log(userData.name)
//     setName(userData)
   
//   } catch {
//     //do whatever
//   }
// };


const emal=firebase.auth().currentUser.email;
  firebase.firestore().collection("project").doc(proname).set({
      "name":proname,
      "username":name,
      "domain": domain,
      "tech": tech,
      "purl":purl,
      "desc":desc,
     
      "email":emal,
       "createdAt": new Date(),
    });
 
    firebase.firestore().collection("users").doc(emal).collection("pro").doc(proname).set({
      "proname":proname,
      "domain": domain,
      "tech": tech,
      "purl":purl,
      "desc":desc,
       "createdAt": new Date(),
    });
    console.log(proname)
    setLoading(false)
    alert("submited successfully")
  }
  )
})
  )
}
  

    if(!currentUser?.uid){
        return <Redirect to="/signin"/>
    }
    if(loading==true){
      return <Loading/>
  }
  return (
//     <div className="container">
//       <h1>Form</h1>
//       <form onSubmit={saveAnswer}>
      
//         <label>Project Name:-</label>
//     <input  type="text" required="true" id="name" placeholder="Project Name"  onChange={e => setpName(e.target.value)}></input> <br></br>
//     <label>Project Domain:-</label>
//     <input  type="text" required="true" id="domain" placeholder="Project Domain"  onChange={e => setDomain(e.target.value)}></input> <br></br>
//     <label>Project ScreenShots:-</label>
//     <input  type="file"  id="ss" placeholder="Type here..." multiple required name="img" onChange={e => setImage(e.target.files[0])}></input> <br></br> 
//     <label>Project Description:-</label>
//         <textarea  type="text" required="true" id="description" placeholder="Project Description."  onChange={e => setDesc(e.target.value)}></textarea><br></br>
//         <label>Technology stack used:-</label>
//         <textarea  type="text" required="true" id="tech" placeholder="Technology stack used."  onChange={e => setTech(e.target.value)}></textarea><br></br>
//         <button>Submit to Firebase</button>
//       </form>
     
//     </div>


// .props...................

<div className="wholepage">
          
          <Row> 
                                   <Col lg={6} className='offset-lg-3 mt-5'>
                  <Card className="sign">
                      <Form onSubmit={saveAnswer}>
                          <CardHeader style={{color:"gold",backgroundColor:"black"}}>Post Project</CardHeader>
                          <CardBody>
                              <FormGroup row>
                                  <Label  sm={3}>
                                     <b> Project Name</b>
                                  </Label>
                                  <Col sm={9}>
                                      <Input
                                          type='text'
                                       
                                          id='name'
                                          placeholder='Project  Name'
                                          
                                          onChange={e => setpName(e.target.value)}
                                      />
                                  </Col>
                              </FormGroup>
                              <FormGroup row>
                                  <Label  sm={3}>
                                     <b> Domain Name</b>
                                  </Label>
                                  <Col sm={9}>
                                      <Input
                                          type='text'
                                       
                                          id='domain'
                                          placeholder='Domain Name'
                                          
                                          onChange={e => setDomain(e.target.value)}
                                      />
                                  </Col>
                              </FormGroup>
                              <label>Project ScreenShots:-</label>
    <input  type="file"  id="ss" placeholder="Type here..." multiple required name="img" onChange={e => setImage(e.target.files[0])}></input> <br></br> 
                              <FormGroup row>
                                  <Label  sm={3}>
                                     <b> Project Description</b>
                                  </Label>
                                  <Col sm={9}>
                                      <Input
                                          type='text'
                                       
                                          id='description'
                                          placeholder='project desc'
                                          
                                         onChange={e => setDesc(e.target.value)}
                                      />
                                  </Col>
                              </FormGroup>
                              <FormGroup row>
                                  <Label  sm={3}>
                                     <b> Project tech</b>
                                  </Label>
                                  <Col sm={9}>
                                      <Input
                                          type='text'
                                       
                                          id='tech'
                                          placeholder='project tech'
                                          
                                         onChange={e => setTech(e.target.value)}
                                      />
                                  </Col>
                              </FormGroup>
                          </CardBody>
                          <CardFooter>
                              
                              <Button type='submit' block style={{backgroundColor:"gold",color:"black"}}>
                                Submit 
                              </Button>
                              <br/>
                              {/* <div>No account ? <Link to="/signup" className="links">SignUp</Link> Here..</div>
                              <div>Forgot Password ? <Link to="/forgotpassword" className="links">Forgot Password</Link> Here..</div> */}
                          </CardFooter>
                      </Form>
                  </Card>
              </Col> 
           </Row>
           </div>
  );
};

export default SignUp;