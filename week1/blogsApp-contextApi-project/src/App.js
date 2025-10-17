import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import './App.css'
import { Routes , Route} from 'react-router-dom';

function App() {
  const {fetchBlogPosts} =useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[]);

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:blogId' element={<BlogPage/>}/>
        <Route path='/tags/:tag' element={<TagPage/>}/>
        <Route path='/categories/:category' element={<CategoryPage/>}/>      
      </Routes>
    </div>
  );
}
export default App
