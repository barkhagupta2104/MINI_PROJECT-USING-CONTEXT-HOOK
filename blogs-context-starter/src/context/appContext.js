import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'
//step1
export const AppContext = createContext();
function AppContextProvider({children}){
    const [Loading,setloading] = useState(false);
    const [posts,setPost] = useState([]);
    const [Pages,setPages] =useState(1);
    const [TotalPage,setTotalPage] =useState(null);


   async function fetchBlogPosts(page = 1)
   {
       setloading(true);
         let url = `${baseUrl}?page=${page}`;

      try
      {
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        setPages(data.page);
        setPost(data.posts);
        setTotalPage(data.TotalPage);  
      }
      catch(error){
      console.log("error")
        setPages(1);
        setPost([]);
        setTotalPage(6);
      }
      setloading(false);
   }
function handlePageChange(page){
    setPages(page);
    fetchBlogPosts(page);
}


    const value ={
        posts,
        setPost,
        Loading,
        setloading,
        Pages,
        setPages,
        TotalPage,
        setTotalPage,
        fetchBlogPosts,
        handlePageChange
    };
      //step2 
 return <AppContext.Provider value = {value}>{children}
    </AppContext.Provider>
}
export default AppContextProvider;