import React, { useContext, useState } from "react"
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import {Link, Redirect} from "react-router-dom"
import {toast} from "react-toastify"
import { AuthContext } from "../context/authcontext.js";
import firebase from "firebase/app"
import { UserContext } from "../context/UserContext"
const Forgotpassword=()=>{


    const context=useContext(UserContext)

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    const handleSignIn=(email)=>{
        firebase.auth().sendPasswordResetEmail(email)
        .then(function (user) {
          alert('Please check your email...')
          return <Redirect to="/Signin" />
        }).catch(function (e) {
          console.log(e)
        })
    }

    

    const handleSubmit=e=>{
        e.preventDefault()
        handleSignIn(email)
        e.target.reset();
    }
    const { currentUser } = useContext(AuthContext);
   
  if (currentUser) {
    return <Redirect to="/Signin" />;
  }

    return(
        
            <Container className='text-center'>
                <Row> 
                                         <Col lg={6} className='offset-lg-3 mt-5'>
                        <Card>
                            <Form onSubmit={handleSubmit}>
                                <CardHeader style={{color:"gold",backgroundColor:"black"}}>Forgot password</CardHeader>
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
                                    
                                </CardBody>
                                <CardFooter>
                                    
                                    <Button type='submit' block style={{backgroundColor:"gold",color:"black"}}>
                                      Submit
                                    </Button>
                                   
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col> 
                 </Row>
            </Container>
        
    )
}


export default Forgotpassword;