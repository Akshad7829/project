import React, { useContext, useState } from "react"
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import {Link, Redirect} from "react-router-dom"
import {toast} from "react-toastify"
import { AuthContext } from "../context/authcontext.js";
import firebase from "firebase/app"
import { UserContext } from "../context/UserContext"
const Signin=()=>{


    const context=useContext(UserContext)

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    const handleSignIn=()=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(res=>{
            console.log(res)
            alert("Signed in Successfully  " )
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

    return(
        
            <Container className='text-center'>
                <Row> 
                                         <Col lg={6} className='offset-lg-3 mt-5'>
                        <Card>
                            <Form onSubmit={handleSubmit}>
                                <CardHeader style={{color:"gold",backgroundColor:"black"}}>SignIn here</CardHeader>
                                <CardBody>
                                    <FormGroup row>
                                        <Label for='email' sm={3}>
                                            Email
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
                                            Password
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
                                    <div>No account ? <Link to="/signup">SignUp</Link> Here..</div>
                                    <div>Forgot Password ? <Link to="/forgotpassword">Forgot Password</Link> Here..</div>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col> 
                 </Row>
            </Container>
        
    )
}


export default Signin