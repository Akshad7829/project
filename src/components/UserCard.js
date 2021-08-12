import React from "react"
import {Card,CardBody} from "reactstrap"
const UserCard=({user})=>{

    return(
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} className="img-thumbnail" />
            <CardBody>
                <div style={{color:"black",fontSize:"1.8rem",textAlign:"center"}}>
                    {user.name}
                </div>
                <div className="text-primary">
                    {user.location}
                </div>
                <div style={{color:"gold"}}>
                    {user.bio}
                </div>
                <div style={{color:"black"}}>
                    Public Repositories:-<span style={{color:"gold"}}>{user.public_repos}</span> 
                </div>
                <div style={{color:"black"}}>
                    Followers:-<span style={{color:"gold"}}>{user.followers}</span> 
                </div>
            </CardBody>

        </Card>
    )

}

export default UserCard