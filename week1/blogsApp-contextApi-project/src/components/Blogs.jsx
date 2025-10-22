import React, { useContext } from 'react'
import { AppContext } from './../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


const Blogs = () => {
  const {loading,posts} = useContext(AppContext);

  return (
    <div className='w-[11/12] max-w-[700px] py-8 flex flex-col gap-y-7 mt-[68px] mb-[71px] justify-center items-center h-screen'>
      {
        loading ? 
        (<Spinner/>) :
       
        (
          posts.length === 0 ?
          (<div className="flex flex-col justify-center items-center">
            <p className='font-bold text-4xl'>No Post Found : ( </p>
          </div>):
          (posts.map((post)=> (
            <BlogDetails key={post.id} post={post}/>
          )))
        )
      }
    </div>
  )
}

export default Blogs
