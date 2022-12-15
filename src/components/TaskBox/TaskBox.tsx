import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { TaskList } from './style';

export interface TaskProps {
    id?: string;
    content: string;
    onDeleteTask: (id: string) => void;
    isCompleted?: boolean;
  }

export function TaskBox({ content, onDeleteTask, isCompleted, id }: TaskProps) {

    function handleDeleteTask () {
        //console.log('task to delete');
        onDeleteTask(id);
    }
    return(
        <TaskList className={`${isCompleted ? 'task-completed' : ''}`}>
            
                {isCompleted ?
                <CheckCircle className="circle" size={32} weight="fill" color="#8284FA" /> :
                <Circle className="circle" size={32} color="##4EA8DE" />}

                 <span>{content}</span>
                 <span>{id}</span>

                <button onClick={handleDeleteTask} className='trash-button' title='delete task'>
                    <Trash size={24} color="#808080" />
                </button>
        </TaskList>
    );
}