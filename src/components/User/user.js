import React from 'react';
import {Match} from "@reach/router"
function User(){
return(<div>
   <Match path="/user/:id">
{
props => props.match? (<div>I'am the user with id {props.match.id}
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
</div>):(<div>No logged user</div>)
}
   </Match>
  <br></br>

</div>)
}
export default User