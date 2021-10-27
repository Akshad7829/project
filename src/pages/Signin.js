import React, { useContext, useState } from "react"
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import {Link, Redirect} from "react-router-dom"
import {toast} from "react-toastify"
import { AuthContext } from "../context/authcontext.js";
import firebase from "firebase/app"
import { UserContext } from "../context/UserContext"
import "./signin.css"
import Loading from "./loading"
import logo from "./logo.png"
const Signin=()=>{


    const context=useContext(UserContext)

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [loading,setLoading] = useState(false);
    const handleSignIn=()=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(res=>{
            setLoading(true);
            console.log(res)
            alert("Signed in Successfully  " )
            setLoading(false);
        //   currentUser.setUser({
        //         email:res.user.email,
        //         uid:res.user.uid
        //     })
            toast(res.message,{
                type:"res"
            })
           
        })
        .catch(error=>{
            console.log(error)
            toast(error.message,{
                type:"error"
            })
        })

    }

    const handleSubmit=e=>{
        e.preventDefault()
        handleSignIn()
    }
    const { currentUser } = useContext(AuthContext);
   
  if (currentUser) {
    return <Redirect to="/" />;
  }
  if(loading==true){
    return <Loading/>
}

    return(
       
            
            <Container className='text-center'>
                  <Col   sm={3} className="m-auto">
  <img
    className="d-block mx-auto img-fluid w-50"
    src={logo}
    alt="mysvg"
  ></img>
  </Col>
                 <div className="wholepage">
          
                <Row> 
                                         <Col lg={6} className='offset-lg-3 mt-5'>
                        <Card>
                            <Form onSubmit={handleSubmit}>
                                <CardHeader style={{color:"gold",backgroundColor:"black"}}>SignIn here</CardHeader>
                                <CardBody>
                                    <FormGroup row>
                                        <Label for='email' sm={3}>
                                           <b> Email</b>
                                        </Label>
                                        <Col sm={9}>
                                            <Input
                                                type='email'
                                                name='email'
                                                id='email'
                                                placeholder='provide your email'
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for='password' sm={3}>
                                            <b>Password</b>
                                        </Label>
                                        <Col sm={9}>
                                            <Input
                                                type='password'
                                                name='password'
                                                id='password'
                                                placeholder='your password here'
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                </CardBody>
                                <CardFooter>
                                    
                                    <Button type='submit' block style={{backgroundColor:"gold",color:"black"}}>
                                        Sign In
                                    </Button>
                                    <br/>
                                    <div>No account ? <Link to="/signup" className="links">SignUp</Link> Here..</div>
                                    <div>Forgot Password ? <Link to="/forgotpassword" className="links">Forgot Password</Link> Here..</div>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col> 
                 </Row>
                 </div>
            </Container>
           
    )
}


export default Signin