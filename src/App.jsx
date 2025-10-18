import AddProjectPage from "./components/AddProjectPage";
import BlankProjectWindow from "./components/BlankProjectWindow";
import ProjectDetails from "./components/ProjectDetails";
import YourProjects from "./components/YourProjects";
import {useState, useRef} from 'react';

function App() {

  const [projectList, setProjectList] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
  const formRef = useRef();
  const taskRef = useRef();

  function handleAddProject(newItem){
      setProjectList((prevValue) => 
      [...prevValue, newItem]
      );
    }
  
  function handleSelectProject(projectButtonName){
      let index = projectList.findIndex((projectItem) => projectItem.projectName === projectButtonName)
      console.log(index)
      setSelectedProjectIndex(index);
  }

  function handleSaveProject(){
    const values = formRef.current.getValue();
    const copiedProjectList = [...projectList];
    const updatedProject = {
    projectName: values.name,
    description: values.description,
    date: values.date,
    saved: true
    }
    copiedProjectList[selectedProjectIndex] ={
    ...copiedProjectList[selectedProjectIndex],
    ...updatedProject
    }
    setProjectList(copiedProjectList);
  }

  function handleProjectUpdate(updatedProject) {
      const newProjectList = [...projectList];
      newProjectList[selectedProjectIndex] = {
          ...newProjectList[selectedProjectIndex],
          ...updatedProject
      };
      setProjectList(newProjectList);
  }

  function handleAddTask(){
    const value = taskRef.current.getValue();
      const newProjectList = [...projectList];
      newProjectList[selectedProjectIndex] = {
          ...newProjectList[selectedProjectIndex],
          tasks: [...newProjectList[selectedProjectIndex].tasks, value.task]
      };
      setProjectList(newProjectList);
  }

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-[30%]">
        <YourProjects projectList={projectList} handleAddProject={handleAddProject} handleSelectProject={handleSelectProject}/>
      </div>
      <div className="w-[70%]">
        {(projectList.length>0 && selectedProjectIndex >= 0)?
        (projectList[selectedProjectIndex].saved===false?
        <AddProjectPage 
            selectedProject={projectList[selectedProjectIndex]} 
            handleSaveProject={handleSaveProject}
            ref={formRef}
            handleProjectUpdate={handleProjectUpdate}
        />:<ProjectDetails selectedProject={projectList[selectedProjectIndex]} handleAddTask={handleAddTask} ref={taskRef}/>):
        <BlankProjectWindow/>}
      </div>
    </div>
  );
}

export default App;