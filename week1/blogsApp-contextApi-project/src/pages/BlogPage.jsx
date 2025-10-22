import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';

const BlogPage = () => {

  const [blog, setBlog] = useState(null);
  const [relatedBlogs,setRelatedBlogs] =  useState([]);
  const location = useLocation();
  const  navigation = useNavigation();
  const {setLoading, loading} = useContext(AppContext);

  const  blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url =`${baseUrl}?blogId=${blogId}`;

    try{
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);

    }catch(error){
      console.log("error");
      setBlog(null);
      setRelatedBlogs([]);

    }
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname])

  return (
    <div>
      <Header/>
      <div>
        <button
        onClick={()=>navigation(-1)}
        >
          back
        </button>
      </div>
      {
        loading ? (<p>Loading</p>):
        blog ? (
          <div>
            <BlogDetails post={blog}/>
            <h2>Related Blogs</h2>
            {
              relatedBlogs.map((post)=>{
                <div key={post.id}>
                  <BlogDetails post={post}/>
                </div>
              })
            }
          </div>
        ):(
          <div>No blog found</div>
        )
      }
    </div>
  )
}

export default BlogPage
