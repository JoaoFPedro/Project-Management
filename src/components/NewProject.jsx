import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

function NewProject({onAdd, onCancel}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave(){
        
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return
        }
        
        onAdd({
            title:  enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });

    }  
    return(
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className='text-xl font-bold text-stone-600 my-4'>Invalid Input</h2>
            <p className='text-stone-600 mb-4'>You forgot to enter a value, dumbass</p>
            <p className='text-stone-600 mb-4'>Set the value for the empty fields</p>
            
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="px-6 py-2 text-white bg-red-700" onClick={onCancel}>Cancel</button>
                </li>
                <li>
                    <button onClick={handleSave} className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input ref={title} label ="Title" />
                <Input ref={description} label ="Description" textarea/>
                <Input ref={dueDate} type="date"  label ="Due Date"/>
            </div>
        </div>
        </>
    )
        
    
}
export default NewProject;
