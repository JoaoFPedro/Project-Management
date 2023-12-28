import Input from "./Input.jsx";

function NewProject(){
    return(
        <div>
            <menu>
                <li>
                    <button>Cancel</button>
                </li>
                <li>Save</li>
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