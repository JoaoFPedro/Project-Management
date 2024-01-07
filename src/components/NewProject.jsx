import { useRef } from "react";
import Input from "./Input.jsx";

function NewProject({onAdd}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '')
        onAdd({
            title:  enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });

    }  
    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="px-6 py-2 text-white bg-red-700">Cancel</button>
                </li>
                <li>
                    <button onClick={handleSave} className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input ref={title} label ="Title" />
                <Input ref={description} label ="Description" textarea/>
                <Input type="date" ref={dueDate} label ="Due Date"/>
            </div>
        </div>
    )
        
    
}
export default NewProject;
