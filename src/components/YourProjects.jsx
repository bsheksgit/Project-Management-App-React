import React from 'react'

export default function YourProjects(){
    return(<div className="flex-col justify-start align-top">
        <p className='text-2xl font-serif '>Your Projects</p>
        <div className='inline-block px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer'>
        <button className='text-white font-medium'>+ Add Project</button>
        </div>
    </div>);
}