import AddProjectPage from "./components/AddProjectPage";
import BlankProjectWindow from "./components/BlankProjectWindow";
import YourProjects from "./components/YourProjects";

function App() {
  let projectCount=0;
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-[30%]">
        <YourProjects/>
      </div>
      <div className="w-[70%]">
        {projectCount>0?<AddProjectPage/>:<BlankProjectWindow/>}
      </div>
    </div>
  );
}

export default App;
