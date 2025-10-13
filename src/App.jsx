import AddProjectPage from "./components/AddProjectPage";
import YourProjects from "./components/YourProjects";

function App() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-[30%]">
        <YourProjects/>
      </div>
      <div className="w-[70%]">
        <AddProjectPage/>
      </div>
    </div>
  );
}

export default App;
