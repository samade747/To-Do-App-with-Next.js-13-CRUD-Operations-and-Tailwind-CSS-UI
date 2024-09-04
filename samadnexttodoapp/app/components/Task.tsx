import { ITask } from '@/types/tasks'
import { FiEdit } from 'react-icons/fi'
interface TaskProps {
  task: ITask
}


const Task: React.FC<TaskProps> = {( task }) => {
  return (
    <tr key={task.id}>
      <td>{task.text}</td> 
    
      <td>
       <FiEdit size={25} />
      </td>
    </tr>
  )
}

export default Task