import ProjectTask from "./ProjectTask";
import { useImperativeHandle, useRef, forwardRef } from "react"; 

const ProjectDetails =  forwardRef(function ProjectDetails({selectedProject, handleAddTask, handleClearClick, handleShowDeleteModal}, ref){

    const taskRef = useRef();
    useImperativeHandle(ref, () => ({
        getValue() {
            console.log(taskRef.current.value);
            return {
                task: taskRef.current.value
            };
        },
        clearValue(){
                taskRef.current.value = ""
        }
    }));

    return(
        <div className="h-full bg-gray-200 p-6 relative">
            {/* Delete Button */}
            <button 
            className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
            onClick={handleShowDeleteModal}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Delete
            </button>
            
            {/* Project Title */}
            <h1 className="text-3xl font-semibold text-gray-700 text-center mb-8">{selectedProject.projectName}</h1>
            
            {/* Date and Description */}
            <div className="px-8 mb-12 space-y-3">
                <p className="text-gray-600 text-sm">Date: <span className="ml-2">{selectedProject.date}</span></p>
                <p className="text-gray-600 text-sm">Description: <span className="ml-2">{selectedProject.description}</span></p>
            </div>
            
            {/* Tasks Section */}
            <div className="px-8">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Tasks</h2>
                
                {/* Task Input and Add Button */}
                <div className="flex items-center space-x-4 mb-6">
                    <input 
                        type="text"
                        className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-gray-400 transition-colors"
                        placeholder="Enter new task..."
                        ref={taskRef}
                    /> 
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md"
                    onClick={handleAddTask}>
                        Add Task
                    </button>
                </div>
                
                {/* Tasks List Container */}
                <div className="relative min-h-[200px] bg-white rounded-lg p-4 shadow-sm">
                    <ul className="space-y-2">
                    { selectedProject?.tasks?.map((task, index) => (
                        <ProjectTask key={index} task={task} />
                    )) }
                    </ul>
                    
                    {/* Clear Button */}
                    <button className="absolute bottom-4 right-4 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={handleClearClick}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
});

export default ProjectDetails;