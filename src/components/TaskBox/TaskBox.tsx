import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { TaskList } from './style';

export interface TaskProps {
    content: string;
    onDeleteTask: (task: string) => void;
    isCompleted?: boolean;
  }

export function TaskBox({ content, onDeleteTask, isCompleted }: TaskProps) {

    function handleDeleteTask () {
        onDeleteTask(content);
    }
    return(
        <TaskList className={`${isCompleted ? 'task-completed' : ''}`}>
            
                {isCompleted ?
                <CheckCircle className="circle" size={32} weight="fill" color="#8284FA" /> :
                <Circle className="circle" size={32} color="##4EA8DE" />}

                 <span>{content}</span>

                <button onClick={handleDeleteTask} className='trash-button' title='delete task'>
                    <Trash size={24} color="#808080" />
                </button>
        </TaskList>
    );
}