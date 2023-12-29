import Input from "./Input.jsx";

function NewProject(){
    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="px-6 py-2 text-white hover:text-stone-950 bg-red-700">Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input label ="Title"/>
                <Input label ="Description" textarea/>
                <Input label ="Due Date"/>
            </div>
        </div>
    )
        
    
}

export default NewProject;