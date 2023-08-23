import Header from './components/header';
import Blogs from './components/blogs';
import Pagination from './components/pagination';
import { createContext, useContext, useEffect, useState } from 'react';
import { AppContext } from './context/appContext';
import { BsMoon } from "react-icons/bs";
import './App.css'
import DarkMode from './components/DarkMode';


export const ThemeContext = createContext(null);
export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  const [theme,setTheme] = useState(null);
  const Toggle =() =>{
    setTheme((curr)=>(curr === "Light" ? "dark" : "Light"));
  }
  useEffect (()=>{
  if(window.matchMedia('(prefers-color-scheme :dark)').matches){
    setTheme('dark')
  }
  else{
    setTheme('Light')
  }
  },[])
  useEffect (()=>{
  
    fetchBlogPosts();
  },[])
  useEffect (()=>{
    if(theme === "dark")
    {
      document.documentElement.classList.add("dark");

    }
    else{
      document.documentElement.classList.remove("dark")
    }
    
  },[theme])
  return (
  //  <ThemeContext.Provider value = {{theme,Toggle}}>
   <div className=' w-full h-full flex flex-col gap-y-1 justify-center items-center main dark:bg-black dark:text-white' id={theme}>
     <Header/>
  <DarkMode Toggle={Toggle}/>
     <Blogs/>
     <Pagination/>
     {/* <div className='switch' >
  
     <Switch onChange={Toggle} checked ={theme ==="dark"}/>
     </div> */}
  
     </div>
  //  </ThemeContext.Provider>
    
 );
}
