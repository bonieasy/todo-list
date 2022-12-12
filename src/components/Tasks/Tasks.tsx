import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { Empty } from '../Empty';
import { TaskBox } from '../TaskBox/TaskBox';
import { NewTask, Container } from './style';

export function Tasks() {

    const [textTask, setTextTask] = useState<any>([]);

    const handleCreateNewTask = event => {
        event.preventDefault();
        setTextTask(tasks => [...tasks, event.target.taskName.value]);

        //event.target.taskName.value = ''; -> pq está dando erro?
        event.target.taskName.focus();
        //console.log(event.target.taskName.value);
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
                textTask.map((task, index) => <TaskBox content={task} key={index} onDeleteTask={deleteTask} />)
            }
        </div>
        <Empty />

        </Container>
    )
}