// import React, { useContext, useState,useEffect } from "react"
// import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
// import {Redirect} from "react-router-dom"
// import {toast} from "react-toastify"
// import { AuthContext } from "../context/authcontext.js";
// import  firebase from "firebase/app"
// import 'firebase/firestore';
// import { UserContext } from "../context/UserContext"
// const Updateprofile=()=>{


//     const context=useContext(UserContext)
//     const [image, setImage] = useState(null);
//     const [url, setUrl] = useState("");
//     const [email,setEmail]=useState('')
//     const [name,setName]=useState('')
//     const [collegename,setCollegeName]=useState('')
//     const [password,setPassword]=useState('')
//     const [progress, setProgress] = useState(0);
// const [useremail,setuseremail]=useState("")
// var userData;

//     const [user, setUser] = useState();
//     const { currentUser } = useContext(AuthContext);
//     // const context=useContext(UserContext)
//     const [query,setQuery]=useState('')
  

//     // const fetchDetails=async()=>{
//     //     try{
//     //         const {data}=await Axios.get(`https://api.github.com/users/${query}`)
//     //         setUser(data);
//     //         console.log(data)
//     //     }catch(error){
//     //         toast("user not found",{type:"error"})
//     //     }
//     // }
   

  

//   //   const email=;
//   //  console.log(email);

// const getUser = async () => {
//    try {
//      const documentSnapshot = await firebase.firestore()
//        .collection('users')
//        .doc(firebase.auth().currentUser.email)
//        .get();

//      userData = documentSnapshot.data();
//      console.log(userData)
//     //   setUser(userData);
//    } catch {
//      //do whatever
//    }
//  };

//  // Get user on mount
//  useEffect(() => {
//    getUser();
//  }, []);
//  const handleSignUp=(userData)=>{
//     // const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
//     // uploadTask.on(
//     //   "state_changed",
//     //   snapshot => {
//     //     const progress = Math.round(
//     //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//     //     );
//     //     setProgress(progress);
//     //   },
//     //   error => {
//     //     console.log(error);
//     //   },
//     //   (async() => {
        
//     //   await firebase.storage()
//     //       .ref("images")
//     //       .child(image.name)
//     //       .getDownloadURL()
//     //       .then(url => {
//     //         // console.log(url)
//     //         // setUrl(url);
//     //           firebase.auth().createUserWithEmailAndPassword(email,password)
//     // .then(res=>{
//     //     console.log(res)
//     //     // context.setUser({
//     //     //     email:res.user.email,
        
//     //     //     uid:res.user.uid
//     //     // })
//     //     alert("Signed Up in Successfully  " )
//     //     firebase.firestore().collection('users').doc(email).set({
//     //         "email":email,
//     //         "name": name,
//     //         "collegename": collegename,
//     //         "url":url,
//     //         });
//     //     // toast(res.message,{
//     //     //     type:"res"
//     //     // })
       
//     // })
//     // .catch(error=>{
//     //     console.log(error)
//     //     toast(error.message,{
//     //         type:"error"
//     //     })
//     // })
//     //       });
//     //   }
//     // )
//     // )
//     //  console.log("image", image)
  
// setName(userData.name)
// setEmail(userData.email)
// setCollegeName(userData.collegename)
// setImage(userData.url)
// setuseremail(userData.email)


//     // const handlesubmit=()=>{
      
//     //     });


//  }
//  firebase.firestore().collection('users').doc(email).set({
//     " email":email,
//    "  name": name,
//      "collegename": collegename,
//      "url":url,
//     })
//     const handleSubmit=e=>{
//          e.preventDefault();
       
       
//         handleSignUp(userData)
       
//     }
//     // const { currentUser } = useContext(AuthContext);
//     if(!currentUser?.uid){
//         return <Redirect to="/signin"/>
//     }

//     return(
        
//             <Container className='text-center'>
//                 <Row>
//                     <Col lg={6} className='offset-lg-3 mt-5'>
//                         <Card>
//                             <Form onSubmit={handleSubmit}>
//                                 <CardHeader className='' style={{backgroundColor:"black",color:"gold"}}>SignUp here</CardHeader>
//                                 <CardBody>
//                                     <FormGroup row>
//                                         <Label for='email' sm={3}>
//                                             Email
//                                         </Label>
//                                         <Col sm={9}>
//                                             <Input
//                                                 type='email'
//                                                 name='email'
//                                                 id='email'
//                                                 reguired="true"
//                                                 placeholder='provide your email'
//                                                 value={email}
//                                                 onChange={e => setEmail(e.target.value)}
//                                             />
//                                              </Col>
//                                              </FormGroup>
//                                              <FormGroup row>
//                                              <Label for='name' sm={3}>
//                                             Name
//                                         </Label>
//                                         <Col sm={9}>
//                                               <Input
//                                                 type='name'
//                                                 name='name'
//                                                 id='name'
//                                                 reguired="true"
//                                                 placeholder='provide your name'
//                                                 value={name}
//                                                 onChange={e => setName(e.target.value)}
//                                             />
//                                         </Col>
//                                     </FormGroup>
//                                     <FormGroup row>
//                                              <Label for='collegename' sm={3}>
//                                           College Name
//                                         </Label>
//                                         <Col sm={9}>
//                                               <Input
//                                                 type='text'
//                                                 name='collegename'
//                                                 id='collegename'
//                                                 reguired="true"
//                                                 placeholder='provide your College Name'
//                                                 value={collegename}
//                                                 onChange={e => setCollegeName(e.target.value)}
//                                             />
//                                         </Col> 
//                                      </FormGroup>
//                                     <FormGroup row> 
//                                               <Label for='collegename' sm={3}>
//                                           Profile Photo
//                                         </Label>
//                                         <Col sm={9}>
//                                               <Input
//                                           type="file"
//                                                 name='img'
//                                                 id='img'
//                                                 // reguired="true"
//                                                  accept="image/*"
//                                                 // value={url}
//                                                 onChange={e => setImage(e.target.files[0])}
//                                             ></Input>
//                                         </Col>
//                                     </FormGroup>
//                                     {/* <Input type="file"   name='img'    value={url} id="myfile" name="myfile"/> */}
                                
//                                 </CardBody>
//                                 <CardFooter>
                                   
//                                     <Button type='submit' block style={{backgroundColor:"gold",color:"black"}} >
//                                         Sign Up
//                                     </Button>
//                                     <Button type='submit' block style={{backgroundColor:"gold",color:"black"}} >
//                                         Save
//                                     </Button>
//                                 </CardFooter>
//                             </Form>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
        
//     )
// }

// export default Updateprofile