import { Circle, Trash } from 'phosphor-react';
import { TaskList } from './style';

interface TaskProps {
    content: string;
    onDeleteTask: (task: string) => void;
  }

export function TaskBox({ content, onDeleteTask }: TaskProps) {

    function handleDeleteTask () {
        onDeleteTask(content);
    }
    return(
        <TaskList>
                <button className='circle-button'>
                    <Circle size={32} color="#4ea8de" />
                </button>

                 <p>{content}</p>

                <button onClick={handleDeleteTask} className='trash-button' title='delete task'>
                    <Trash size={24} color="#808080" />
                </button>
        </TaskList>
    );
}