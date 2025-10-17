import React from 'react'
import ProjectListItem from './ProjectListItem';
import {useState} from 'react';

export default function YourProjects({projectList, handleAddProject, handleSelectProject}){

    let projectIndexString = (projectList.length+1).toString();
    let projectIndex = projectList.length+1;
    return(<div className="flex-col justify-start align-top bg-[#3E2723] h-full p-8 space-y-6">
        <p className='text-2xl font-serif text-white mb-4'>Your Projects</p>
        <div className='inline-block px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer'>
            <button className='text-white font-medium' onClick={() => handleAddProject({index:projectIndex, projectName:"New Project "+projectIndex})}>+ Add Project</button>
        </div>
            <ul>
            {projectList.map((projectName, index) => <ProjectListItem key={index} project={projectName} handleSelectProject={handleSelectProject}/>)}
        </ul>
    </div>);
}