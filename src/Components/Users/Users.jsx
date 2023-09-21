import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './users.css'

const Users = () => {
    const users=useLoaderData()
    return (
        <div>
            <h2>Total users :{users.length}</h2>


            <div className="user-container">
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;