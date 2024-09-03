import React, { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import Modal from "./Modal"


const AddTask = () => {
  return (

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    <div> 
      <button 
      className="btn btn-primary w-full"
      onClick={() => setModalOpen(true)}
      > Add NEW TASK
       <AiOutlinePlus className="ml-2" size={20} /> 
       </button>

       <Modal modalOpen={modalOpen} />       
    </div>
  )
}

export default AddTask