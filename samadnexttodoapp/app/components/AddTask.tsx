import { AiOutlinePlus } from "react-icons/ai"


const AddTask = () => {
  return (
    <div> 
      <button className="btn btn-primary w-full"> Add NEW TASK
       <AiOutlinePlus className="ml-2" size={20} /> </button>       
    </div>
  )
}

export default AddTask