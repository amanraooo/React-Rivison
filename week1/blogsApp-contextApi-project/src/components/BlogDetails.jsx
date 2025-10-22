import React from 'react'

const BlogDetails = () => {
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
      <span>{post.title}</span>
      </NavLink>
      <p>
        By
        <span>{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
      <span>{post.category}</span>
      </NavLink>
      </p>
      <p></p>
    </div>
  )
}

export default BlogDetails
