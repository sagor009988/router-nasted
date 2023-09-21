import { Link, useNavigate,  } from "react-router-dom";


const Post = ({post}) => {
    const {id,body,title}=post

    const navigate = useNavigate()

    const postStyle={
        border:'5px solid red',
       padding:'10px',
       borderRadius:'10px',
       margin:'10px',
       backgroundColor:'sky' ,  
    }

    const handleClickToDetails=()=>{
        navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h2>user id: {id}</h2>
            <h2>{body}</h2>
            <h2>title:{title}</h2>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button> see post</button></Link>
            <button onClick={handleClickToDetails}>Click to see details</button>

        </div>
    );
};

export default Post;
