import { useLoaderData } from "react-router-dom";
import Post from "./Post/Post";


const Posts = () => {
    const posts=useLoaderData()
    console.log(posts);
    
    return (
        <div >
            <h2>posts  length:{posts.length}</h2>
            <div className="user-container">
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;