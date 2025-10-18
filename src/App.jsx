import AddProjectPage from "./components/AddProjectPage";
import BlankProjectWindow from "./components/BlankProjectWindow";
import YourProjects from "./components/YourProjects";
import {useState, useRef} from 'react';

function App() {

  const [projectList, setProjectList] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
  const formRef = useRef();


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
    projectList[selectedProjectIndex].projectName = values.name;
    projectList[selectedProjectIndex].description = values.description;
    projectList[selectedProjectIndex].date = values.date;
  }

  function handleProjectUpdate(updatedProject) {
      const newProjectList = [...projectList];
      newProjectList[selectedProjectIndex] = {
          ...newProjectList[selectedProjectIndex],
          ...updatedProject
      };
      setProjectList(newProjectList);
  }

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-[30%]">
        <YourProjects projectList={projectList} handleAddProject={handleAddProject} handleSelectProject={handleSelectProject}/>
      </div>
      <div className="w-[70%]">
        {(projectList.length>0 && selectedProjectIndex >= 0)?<AddProjectPage 
            selectedProject={projectList[selectedProjectIndex]} 
            handleSaveProject={handleSaveProject}
            ref={formRef}
            handleProjectUpdate={handleProjectUpdate}
        />:<BlankProjectWindow/>}
      </div>
    </div>
  );
}

export default App;