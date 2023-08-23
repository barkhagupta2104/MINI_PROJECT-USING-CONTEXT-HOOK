import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'

const Pagination = () => {
  const {Pages, TotalPage,handlePageChange} = useContext(AppContext)
  return (
  
      <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white py-1 dark:bg-black '>
        <div className='flex justify-between w-11/12 max-w-[670px]'>
    <div className=' flex gap-x-2 '>
    { Pages > 1 &&
        (<button onClick={()=>handlePageChange(Pages-1)}   
        className='rounded-md border px-5 py-1'>previous</button>)
      }
      {
        Pages < 7 &&
        (<button onClick={()=>handlePageChange(Pages+1)}
           className=' rounded-md border px-5 py-1 shadow-2xl' >Next</button>)
      }
    </div>
      <p
      className='font-bold text-sm'>Page {Pages} of {6}
      </p>
      
      </div>

    </div>
  )
}

export default Pagination;