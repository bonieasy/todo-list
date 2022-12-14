import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Empty } from '../Empty';
import { TaskBox } from '../TaskBox/TaskBox';
import { NewTask, Container } from './style';
import { v4 as uuidV4 } from 'uuid';

export function Tasks() {

    const [textTask, setTextTask] = useState<any>([]);

    const handleCreateNewTask = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTextTask((tasks: any) => [...tasks, {
            id: uuidV4(),
            title: event.target.taskName.value,
            isCompleted: false,
        }]);
        //event.target.taskName.value = ''; -> pq está dando erro?
        //event.target.taskName.focus();
    }
    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = textTask.filter((task: string) => {
            return task !== taskToDelete;
        })
        setTextTask(tasksWithoutDeletedOne);
    }
    
    return (
        <Container>
        <NewTask onSubmit={handleCreateNewTask} >
            <input name="taskName" placeholder='Adicione uma nova tarefa' />
            <button type='submit' >
                Create
                <PlusCircle size={16} />
            </button>
        </NewTask>
            <div className='info-tasks'>

                <div className='created'>
                    <strong>
                        Tarefas Criadas:
                    </strong>
                    <p>5</p>
                </div>

                <div className='done'>
                    <strong>
                        Concluidas
                    </strong>
                    <p>2 de 5</p>
                </div>
            </div>

        <div className='bloco'>
            {
                textTask.map((task: any) => (
                <TaskBox
                    content={task.title}
                    isCompleted={task.isCompleted}
                    key={uuidV4()}
                    onDeleteTask={deleteTask}
                />))
            }
        </div>
        <Empty />

        </Container>
    )
}