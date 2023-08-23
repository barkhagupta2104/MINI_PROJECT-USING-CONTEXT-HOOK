import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';
import Spinner from './Spinner';

const Blogs = () => {
  const { posts, Loading } = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[670px] flex flex-col gap-y-7 mt-20 mb-[70px] '>
      {Loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className='text-sm font-bold'>{post.title}</p>
            <p>
              By <span className='italic'>{post.author} </span> on <span className='underline font-bold'>{post.category}</span>
            </p>
            <p className='text-[16px]'>Posted on {post.date}</p>
            <p className='text-[15px] mt-[10px]'>{post.content}</p>
            <div className=''>
              {post.tags.map((tag, index) => {
                return <span key={index} className='text-blue-500 underline font-bold '>{`#${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
