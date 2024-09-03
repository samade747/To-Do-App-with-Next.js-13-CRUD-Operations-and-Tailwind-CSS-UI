"use client"

import React, { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import Modal from "./Modal"
 

const AddTask = () => {

  const [modalOpen, setModalOpen] = useState<boolean>(false);


  return (  
    <div> 
      <button 
      className="btn btn-primary w-full"
      onClick={() => setModalOpen(true)}
      > Add NEW TASK
       <AiOutlinePlus className="ml-2" size={20} /> 
       </button>

       <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}> 
        <form>

        <h3>

        </h3>

        </form>
       </Modal>
    </div>
  )
}

export default AddTask