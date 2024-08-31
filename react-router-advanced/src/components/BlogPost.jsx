import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post #{postId}</h2>
      <p>This is a dynamically routed blog post with the ID: {postId}</p>
    </div>
  );
};

export default BlogPost;