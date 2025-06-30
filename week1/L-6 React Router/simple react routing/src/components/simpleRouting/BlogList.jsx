import React from 'react'
import { Link } from 'react-router-dom';

const BlogList = () => {
  return (
    <div>
      <li>
        <Link to='hello-world'>hello world</Link>
        <Link to='react-routing'>react-routing</Link>
        <Link to='nested-react-routing'>nested-react-routing</Link>

      </li>
    </div>
  )
}

export default BlogList
