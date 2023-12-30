import ProjectsSidebar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import  NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";


function App() {
const [projectState, setProjectState] =   useState({
  selecte4dProjectId: undefined,
  projects: []

})

function handleStartAddProject(){
  setProjectState(prevState =>{
    return {
      ...prevState,
      selecte4dProjectId: null,
    };
  })
}
  return (
   <main className="h-screen my-8 flex gap-8">
   <ProjectsSidebar />
   
   <NoProjectSelected onStartedAddProject={handleStartAddProject}/>
   
   </main>
  );
}

export default App;
