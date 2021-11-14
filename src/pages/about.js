

import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg,Jumbotron, Button,Container } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

import "./about.css"
const About = (props) => {
  return (
    <div>
      <div className="nav">
    
      <Nav  >
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#mission">Mission</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#feat">Features</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#team">team Members</NavLink>
        </NavItem>
    
       
      </Nav>
      
    </div>
  
    <div>
      <Jumbotron className="ab">
        {/* <h1 className="display-3" >About</h1> */}
        <h1  id="about">About</h1>
        <p className="lead">Project book is originated from idea of guiding information regarding
different projects for junior to senior level, Information related to different
project competitions and state and national level hackathons.
Our website is freely available and it is user friendly to all users which
includes Students, Teachers and Professionals.</p>
        
        
  
      </Jumbotron>
      <Jumbotron className="ab">
       
        <h1  id="mission">Mission</h1>
        <p className="lead">Mission of the projectBook is Simple : To help and guide emerging
innovative students to successfull developers and professionals.</p>
     
       
  
      </Jumbotron>
    </div>
    <div className="features">
    <h1  id="feat" className="feattext">Features</h1>
    <Container className='text-center'>
      <Card className='text-center'  >
     
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody className="features1">
          
          <CardText><b>1)</b> In this website we are going to create student account using name, email, college name,etc.Student can able to update there profile</CardText>
          <CardText>
            
          </CardText>
        </CardBody>
      </Card>
      
      
      <Card>
        <CardBody  className="features1">
         
          <CardText><b>2)</b> In our website, we are going to add tab named <b>“POST PROJECT”</b>. In
this tab we are going to take various inputs from user like project name, domain,screenshots of projects,etc. When the user clicks submit button
 after filling details of project then the project will get posted on the home
 page as well as on the users profile page.</CardText>        <CardText>                 </CardText>      </CardBody>      {/* <CardImg bottom width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}    </Card>    <Card className="features1">      <CardBody>                <CardText><b>3)</b> The users which are logged in or created there account on our
 website can see the projects posted by other students/users. Here we
 are using the same idea as on Instagram/ Facebook</CardText>
          <CardText>
           
          </CardText>
        </CardBody>
        {/* <CardImg bottom width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
      </Card>
      <Card >
        <CardBody className="features1">
      
          <CardText><b>4)</b> As on Instagram/ Facebook we can see the photos posted by other
 users same as in our website we can see the projects posted by other
 users.</CardText>
          <CardText>
           
          </CardText>
        </CardBody >
        {/* <CardImg bottom width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
      </Card>
      <Card >
        <CardBody className="features1">

          <CardText><b>5)</b> If we want more details of project we can also contact the user who
 has posted the project through mail. In our website, we are going to add one more tab named <b>“CONTEST
 DETAILS” </b>.</CardText>
          <CardText>
           
          </CardText>
        </CardBody>
        {/* <CardImg bottom width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
      </Card>

      </Container>
      </div>
      
    </div>
  );
};

export default About;