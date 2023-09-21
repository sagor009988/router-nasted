/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-undef */

import { Link } from "react-router-dom";


const User = ({user}) => {
    console.log(user);
    const {name,phone,email,id}=user

    const userStyle={
        border:'5px solid red',
       padding:'10px',
       borderRadius:'10px',
       margin:'10px',
       backgroundColor:'sky'

        
    }
    return (
        <div style={userStyle}>
            <h2>This is the users list</h2>
            <h3>name:{name}</h3>
            <h3>phone:{phone}</h3>
            <h3>email:{email}</h3>
        
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Click me</button></Link>
        </div>
    );
};

export default User;