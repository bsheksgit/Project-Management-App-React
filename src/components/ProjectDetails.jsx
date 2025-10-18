import ProjectTask from "./ProjectTask";
import { useImperativeHandle, useRef, forwardRef } from "react"; 

const ProjectDetails =  forwardRef(function ProjectDetails({selectedProject, handleAddTask}, ref){

    const taskRef = useRef();
    useImperativeHandle(ref, () => ({
        getValue() {
            return {
                task: taskRef.current.value
            };
        }
    }));

    return(
        <div className="h-full bg-gray-200 p-6">
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
                    <button className="absolute bottom-4 right-4 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
});

export default ProjectDetails;