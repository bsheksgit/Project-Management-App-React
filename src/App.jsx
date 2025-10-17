import AddProjectPage from "./components/AddProjectPage";
import BlankProjectWindow from "./components/BlankProjectWindow";
import YourProjects from "./components/YourProjects";
import {useState, useRef} from 'react';

function App() {

  const [projectList, setProjectList] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
  const nameRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

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
    projectList[selectedProjectIndex].name = nameRef.getValue();
    projectList[selectedProjectIndex].description = descriptionRef.getValue();
    projectList[selectedProjectIndex].date = dateRef.getValue();
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
        nameRef={nameRef}
        descriptionRef={descriptionRef}
        dateRef={dateRef}/>:<BlankProjectWindow/>}
      </div>
    </div>
  );
}

export default App;
