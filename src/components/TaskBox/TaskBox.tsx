import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { TaskList } from './style';

export interface TaskProps {
    id: string;
    content: string;
    isCompleted: boolean;
    onDeleteTask: (id: string) => void;
    onCompleteTask: (id: string) => void;
  }

export function TaskBox({ content, onDeleteTask, onCompleteTask, isCompleted, id }: TaskProps) {

    function handleDeleteTask () {
        onDeleteTask(id);
    }

    function handleCompleteTask() {
        onCompleteTask(id);

    }
    return(
        <TaskList className={`${isCompleted ? 'task-completed' : ''}`}>
            <div onClick={handleCompleteTask}>
                {isCompleted ?
                <CheckCircle className="circle" size={32} weight="fill" color="#8284FA" /> :
                <Circle className="circle" size={32} color="#4EA8DE" />}
            </div>

                 <span>{content}</span>
                 
                <button onClick={handleDeleteTask} className='trash-button' title='delete task'>
                    <Trash size={24} color="#808080" />
                </button>
        </TaskList>
    );
}
