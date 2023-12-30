import ProjectsSidebar from "./components/ProjectsSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import  NoProjectSelected from "./components/NoProjectSelected.jsx";
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
  });
}
let content;
if(projectState.selecte4dProjectId === null){
  content = <NewProject />
}else if(projectState.selecte4dProjectId === undefined){
  content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
   
}

  return (

    
   <main className="h-screen my-8 flex gap-8">
   <ProjectsSidebar onStartAddProject={handleStartAddProject} />
   
   {content}
   
   </main>
  );
}

export default App;
