export default function ProjectListItem({project, handleSelectProject}){
    return (
        <li 
            className="list-disc text-white ml-6 p-2 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => handleSelectProject(project.projectName)}>
            {project.projectName}
        </li>
    );
}