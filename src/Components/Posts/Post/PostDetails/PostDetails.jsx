import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const postDetails=useLoaderData()

    const navigate=useNavigate()

    console.log(postDetails);
    const handleGoBack=()=>{
        navigate('/')
    }
    const {id,title,body}=postDetails
    return (
        <div>
            <h1>post details: {id}</h1>
            <h3>{title}</h3>
            <h2>body:{body}</h2>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;