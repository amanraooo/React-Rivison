import React, { useContext } from 'react'
import { AppContext } from './../context/AppContext';
import Spinner from './Spinner';


const Blogs = () => {
  const {loading,posts} = useContext(AppContext);

  return (
    <div className='w-[11/12] max-w-[700px] py-8 flex flex-col gap-y-7 mt-[64px]'>
      {
        loading ? 
        (<Spinner/>) :
       
        (
          posts.length === 0 ?
          (<div>
            <p>No Post Found</p>
          </div>):
          (posts.map((post)=> (
            <div key={post.id} 
            className='shadow-xl py-4 px-4'
             >
              <p className='hover:text-shadow-xl font-bold text-lg'>{post.title}</p>
              <p className='text-sm mt-[4px]'>
                By <span className='italic'>{post.author}</span>
                on <span className='underline font-bold'>{post.category}</span>
              </p>
              <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
              <p className='text-md mt-[14px]'>{post.content}</p>
              <div className='flex gap-x-3'>
                {post.tags.map((tag, index)=>{
                  return <span 
                  className='text-blue-700 underline font-bold text-sm mt-[5px]' 
                  key={index}>{`#${tag}`}</span>
                })}
              </div>
              
            </div>
          )))
        )
      }
    </div>
  )
}

export default Blogs
