import React from 'react'
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
    const {name} = useParams();
  return (
    <div>
      you reading {name };
      <Link to='edit'>edit</Link>
    </div>
  )
}

export default BlogPost
