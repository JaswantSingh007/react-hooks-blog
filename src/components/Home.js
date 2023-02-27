import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";

function Home() {
  // getting posts from firestore
  // storeing data from firestore using useState hooks
  const[posts, setPosts]=useState([]);
  
  // logic for getting the data from firestore we will use the useEffect to get the data from firestore
  useEffect(()=>{
    firestore
      .collection('posts')
      .get()
      .then((snapshot)=>{
        const posts = snapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data()
          }
        })
    
        console.log("posts",posts);
        setPosts(posts);
      })
  },[]);

    return (
      <div className="home">
        <h1>Tech Blog</h1>
        <div id="blog-by">Jaswant Singh</div>

        {/* we have posts in array so, Looping over post */}
        {/* this function will give me post and index of the array */}
        {posts.map((post, index)=>{
          return(
            <div className="post" key={`post-${index}`}>  {/* simply rendering the post using div */}
              <Link to={`/post/${post.id}`}>  {/* we are linking this back to the postDetail page */}
                <h3>{post.title}</h3>  {/* getting title of the post */}
              </Link>
              <p>{post.subTitle}</p>
            </div>
          )
        })}
      </div>
    );
  }

  export default Home;