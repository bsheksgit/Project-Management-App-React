import AddProjectPage from "./components/AddProjectPage";
import BlankProjectWindow from "./components/BlankProjectWindow";
import ProjectDetails from "./components/ProjectDetails";
import SaveModal from "./components/SaveModal";
import YourProjects from "./components/YourProjects";
import {useState, useRef} from 'react';

function App() {

  const [projectList, setProjectList] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ message: '', description: '' });
  const formRef = useRef();
  const taskRef = useRef();

  function handleAddProject(newItem){
      setProjectList((prevValue) => 
      [...prevValue, newItem]
      );
    setSelectedProjectIndex(projectList.length);
    }
  
  function handleDeleteProject(){

    if(projectList.length == 1){
      setSelectedProjectIndex(-1);
    }
    else{
      setSelectedProjectIndex((prevValue) => prevValue-1);
    }
    setProjectList(prev => prev.filter((_, i) => i !== selectedProjectIndex));
  }
  
  function handleSelectProject(projectButtonName){
      let index = projectList.findIndex((projectItem) => projectItem.projectName === projectButtonName)
      console.log(index)
      setSelectedProjectIndex(index);
  }

  function handleSaveProject(){
    const values = formRef.current.getValue();
    if(values.name === '' || values.description === '' || values.date === '') {
      setModalContent({
        message: "Missing Fields",
        description: "Please enter all values before proceeding"
      });
      setShowModal(true);
      return; // Stop the function here
    }
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
    if(value.task ===''){
      setModalContent({
        message: "Empty Task!",
        description: "Cannot insert an empty task into the list. Please type something before adding."
      });
      setShowModal(true);
      return;      
    }

      const newProjectList = [...projectList];
      newProjectList[selectedProjectIndex] = {
          ...newProjectList[selectedProjectIndex],
          tasks: [...newProjectList[selectedProjectIndex].tasks, value.task]
      };
      setProjectList(newProjectList);
      taskRef.current.clearValue();
  }

  function handleCancelClick(){
    setSelectedProjectIndex(-1)
  }

  function handleClearClick(){

      const newProjectList = [...projectList];
      newProjectList[selectedProjectIndex] = {
          ...newProjectList[selectedProjectIndex],
          tasks: []
      };
      setProjectList(newProjectList);

  }

  function handleCloseModal(){
    setShowModal(false);
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
            handleCancelClick = {handleCancelClick}
        />:<ProjectDetails 
        selectedProject={projectList[selectedProjectIndex]} 
        handleAddTask={handleAddTask} 
        handleClearClick = {handleClearClick}
        handleDeleteProject = {handleDeleteProject}
        ref={taskRef}/>):
        <BlankProjectWindow projectList={projectList} handleAddProject={handleAddProject}/>}
        {showModal && <SaveModal mainMessage={modalContent.message} 
        messageDescription={modalContent.description} 
        handleCloseModal={handleCloseModal} />}
      </div>
    </div>
  );
}

export default App;