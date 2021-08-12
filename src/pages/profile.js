import React, { useState, useContext,useEffect } from "react";
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

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from '../context/UserContext'

import { toast } from "react-toastify";

const Profile=()=>{
    const [user, setUser] = useState();
    const { currentUser } = useContext(AuthContext);
    const context=useContext(UserContext)
    const [query,setQuery]=useState('')
  

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
 }, []);
    //put anypage behind login

    if(!currentUser?.uid){
        return <Redirect to="/signin"/>
    }
    return (
        <Container>
          <br></br>
          <img src={user && user?.url} width="500rem"/>
           <h1>{user && user?.name}</h1>
         <h1>{user && user?.email}</h1>
         <h1>{user && user?.collegename}</h1>
        </Container>
      );
}
export default Profile
