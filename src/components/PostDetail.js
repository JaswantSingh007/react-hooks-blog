import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestore } from "../firebase";

function PostDetail() {
  const [post, setPost] = useState({});
  // getting the post id
  const { postId } = useParams();

  useEffect(()=>{
    firestore
      .collection('posts')
      .doc(postId)   //getting the document with post id
      .get()
      .then((snapshot)=>{
        console.log('snapshot',snapshot.data());
        setPost(snapshot.data());
      });
  }, [postId]);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;