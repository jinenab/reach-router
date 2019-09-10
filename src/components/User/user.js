import React from 'react';
import {Match} from "@reach/router"
function User(props){
return(<div>
   <Match path="/user/:id">
{
props => props.match? (<div>I'am the user with id {props.match.id}</div>):(<div>No logged user</div>)
}
   </Match>
  <br></br>
    <Match path="/user/admin">
  {props =>
    props.match ? (
      <div>Cool you are the admin</div>
    ) : (
      <div>Uncool you are a normal user</div>
    )
  }
</Match>
</div>)
}
export default User