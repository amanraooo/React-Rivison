import React from 'react'
import { useParams } from 'react-router-dom';

const BlogEdit = () => {
    const{name} = useParams();
  return (
    <div>
      you editing : {name}
    </div>
  )
}

export default BlogEdit
