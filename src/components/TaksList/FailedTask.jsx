import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 w-[300px] bg-[#252525] border-2 border-red-900 rounded-xl p-5 hover:shadow-md transition-all duration-200'>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 bg-red-900/50 text-red-300 rounded-lg text-sm font-medium'>{data.category}</h3>
                <h4 className='text-sm text-gray-400'>{data.date}</h4>
            </div>
            <h2 className='mt-4 text-lg font-semibold text-gray-100'>{data.title}</h2>
            <p className='mt-2 text-sm text-gray-300'>
                {data.description}
            </p>
            <div className='mt-4'>
                <button className='w-full bg-red-400/30 border-2 border-red-500 py-2 px-2 rounded text-red-300 text-center font-medium'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask