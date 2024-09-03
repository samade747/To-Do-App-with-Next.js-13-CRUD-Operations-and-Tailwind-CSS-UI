import React from 'react'

interface ModalProps {
    modalOpen: boolean
}

const Modal: React.FC<ModalProps> = ({ modalOpen  }) => {
  return (
    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
        <div className='modal-box relative'>
            <label
            htmlFor='my-modal-6'
            className='btn btn-sm btn-circle absolute right-2 top-2'           
            >
            </label>
            <h3 className='text-lg font-bold'>
                Congratulations random Intern user, you've been selected!
            </h3>
            <p className='py-4'>
                You've been assigned a task. It's time to get to work
            </p>


        </div>
    </div>
  )
}

export default Modal