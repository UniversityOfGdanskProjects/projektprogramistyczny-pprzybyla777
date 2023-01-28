import React from "react";
import { Link } from "react-router-dom";

const UpdateButton = (props) => {

  const id = props.id

  return ( 
    <Link to={"/updatePizza/" + id}>
      <button>Update</button>
    </Link>
   );
}
 
export default UpdateButton;