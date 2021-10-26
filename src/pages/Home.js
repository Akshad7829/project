import React, { useState, useContext,useEffect,useRef } from "react";
import Axios from "axios";
import { AuthContext } from "../context/authcontext.js";
import firebase from 'firebase'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Loading from "./loading"

import Pdf from "react-to-pdf";
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./home.css"
import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from '../context/UserContext'

import { toast } from "react-toastify";
const ref = React.createRef();
const Home=()=>{
  var userData;
  const myRef = useRef(null)
  const [user, setUser] = useState();
  const [vantaEffect, setVantaEffect] = useState(0)

  // const getUser = async () => {
  //   try {
  //     const documentSnapshot = await firebase.firestore()
  //       .collection('users')
  //       .doc(firebase.auth().currentUser.email)
  //       .get();
 
  //     userData = documentSnapshot.data();
  //     console.log(userData)
  //      setUser(userData);
  //   } catch {
  //     //do whatever
  //   }
  // };
    const { currentUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
    
      // getUser();
      const getPostsFromFirebase = [];
      const subscriber = firebase.firestore()
        .collection("project")
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            getPostsFromFirebase.push({
              ...doc.data(), //spread operator
              key: doc.id, // `id` given to us by Firebase
            });
          });
          setPosts(getPostsFromFirebase);
          setLoading(false);
        });
       
      // return cleanup function
      return () => subscriber();
      

    }, [loading]); // empty dependencies array => useEffect only called once
    // useEffect(() => {
    //   if (!vantaEffect) {
    //     setVantaEffect(BIRDS({
    //       el: myRef.current
    //     }))
    //   }
    //   return () => {
    //     if (vantaEffect) vantaEffect.destroy()
    //   }
    // }, [vantaEffect]);
    if (loading) {
      return <Loading/>;
    }
    if(!currentUser?.uid){
        return <Redirect to="/signin"/>
    }
    

  
    return (
        <Container id="my-background" >


          <div className="container"  >
      <h1>Projects:</h1>
      {posts.length > 0 ? (
        posts.map((post) =>
        
        <div className="card" >
          <div className="card-header">
         
            <div className="profile">
              {/* <span className="letter">{props.author[0]}</span> */}
            </div>
            
            <div className="card-title-group" >
              <h5 className="card-title">{post.name} </h5>
              <h5 className="card-date">date</h5>
            </div>
           
          </div>
          
            <br></br>
          <br></br>
         
          <b><div className="card-text" >Project Screenshots:-</div></b>
          <br></br>
          <Carousel autoPlay="true" infiniteLoop="true" >
                <div>
                    <img src={post.purl} />
                    <p className="legend">Legend 1</p> 
                </div>
                <div>
                    <img src={post.purl} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={post.purl} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <div  ref={ref}>
            <div className="card-title-group" >
            <b><div className="card-text" >Project Name:-</div></b>
              <h5 className="card-text">{post.name} </h5>
              
            </div>
            <br></br>
          <br></br>
            <b><div className="card-text" >Project Domain:-</div></b>
            <div className="card-text" key={post.key}>{post.domain}</div>
     
            {/* <img className="card-image" key={post.key} src={post.purl} alt="Logo" />   */}
           <br></br>
          <br></br>
       
           <b><div className="card-text" >Project Description:-</div></b>
          <div className="card-text" key={post.key}> {post.desc}</div>
          <br></br>
          <br></br>
          <b><div className="card-text" >Technologies used:-</div></b>
          <div className="card-text" key={post.key}>{post.tech}</div><br></br>
          <b><div className="card-text" >Contact Developer:-</div></b>
   <div className="card-text" key={post.key}>{post.email}</div>
   </div>
          <div className="card-like-bar">
            {/* {props.liked ? (
              <img className="card-like-icon" src={heartFill} alt="Logo" />
            ) : (
              <img className="card-like-icon" src={heartOutline} alt="Logo" />
            )} */}
   
          </div>
          <Pdf targetRef={ref} filename="project.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    
        </div>
          )
      ) : (
        <h1>no answers yet :(</h1>
      )}
    </div>
  
        </Container>
      );
}
export default Home
