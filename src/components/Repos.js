import React,{useState,useEffect} from "react"
import Axios from "axios"

import {Button, ListGroup,ListGroupItem } from "reactstrap"
import { Link } from "react-router-dom"

const Repos=({repos_url})=>{
    const [repos,setRepos]=useState([])

    const fetchRepos=async ()=>{
        const {data}= await Axios.get(repos_url)
        setRepos(data)
    }

    useEffect(()=>{fetchRepos()},[repos_url]) //as soon as a repos_url is given call above function

    return(
        <ListGroup>
            {repos.map(repo=>(
                <ListGroupItem key={repo.id}>
                    <div  style={{color:"black", fontSize:"1.4rem"}}>{repo.name}</div>
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                    <br/>
                    <div className="text-success">
                        <a style={{textDecoration:"none",marginBottom:"1.2rem",width:"1.5rem",padding:"8px",border:"0.4px solid black",height:"2rem",backgroundColor:"gold",color:"black"}} href={`https://www.github.com/${repo.full_name}`} target='_blank'>Goto Repo</a>
                        
                    </div>
                    
                </ListGroupItem>
            
            ))}
        </ListGroup>
    )

}

export default Repos

