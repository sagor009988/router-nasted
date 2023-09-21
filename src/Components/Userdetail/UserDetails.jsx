import { useActionData, useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user=useLoaderData()
    const {name,email,phone}=user

   return (
        <div>
            <h2>users name:{name}</h2>
            <h2>email:{email}</h2>
            <h2>phone:{phone}</h2>
        </div>
    );
};

export default UserDetails;