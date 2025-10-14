import AddProjectPage from "./components/AddProjectPage";
import BlankProjectWindow from "./components/BlankProjectWindow";
import YourProjects from "./components/YourProjects";
import {useState} from 'react';

function App() {

  const [projectList, setProjectList] = useState(["Jalagaran Kayalli keysbeku", "Pavitra Gowda Jotheg Madve"]);

  function handleAddProject(newItem){
      setProjectList((prevValue) => 
      [...prevValue, newItem]
      );
    }

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-[30%]">
        <YourProjects projectList={projectList} handleAddProject={handleAddProject}/>
      </div>
      <div className="w-[70%]">
        {projectList.length>0?<AddProjectPage/>:<BlankProjectWindow/>}
      </div>
    </div>
  );
}

export default App;
