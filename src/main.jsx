import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import Products from './Components/Products/Products.jsx';
import About from './Components/About/About.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/Userdetail/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/Posts/Post/PostDetails/PostDetails.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/products',
        element:<Products></Products>

      },
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/about',
        element:<About></About>
        
      },
      {
        path:'/user/:userid',
        loader:({ params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}` ),
        element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postid',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
        element:<PostDetails></PostDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
