import { PlusCircle, Target, TestTube } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Empty } from '../Empty/Empty';
import { TaskBox } from '../TaskBox/TaskBox';
import { NewTask, Container } from './style';
import { v4 as uuidV4 } from 'uuid';
import styled from 'styled-components';

export function Tasks() {
// estado = variaveis que eu quero que o componente monitore.
//primeira posicao vamos ter uma variavel que vamos usar para mostrar a variavel em tela
//na segunda posicao, recebemos uma funcao pra eu alterar o vamos da variavel de task
    const [task, setTask] = useState<any>([]);
    const [newTextTask, setNewTextTask] = useState('');

    function handleCreateNewTask (event: any) {
        event.preventDefault(); //Previne evento padrao do Submit

        setTask((tasks: any) => [...tasks, {
            id: uuidV4(),
            title: event.target.taskName.value,
            isCompleted: false,
        }]);
        event.target.taskName.focus();

        setNewTextTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTextTask(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteTask(ID: string) {
        //imutabilidade
        //criamos uma nova lista de tarefas, sem o item deletado
        const tasksWithoutDeletedOne = task.filter((task: { id: string; }) => task.id !== ID)
        setTask(tasksWithoutDeletedOne);

        //console.log(`Deletar a tarefa: ${ID}`);
    }

    function toggleState(idToToggleTaskState: string) {
        const taskToToggle = task.map((task: { id: string; isCompleted: boolean; }) => {
            if (task.id === idToToggleTaskState) {
              task.isCompleted = !task.isCompleted;
              return task;
            } else {
              return task;
            }
          });
          setTask(taskToToggle);
    }
    
    const tasksConclued = task.filter((task: { isCompleted: boolean; }) => {
        return task.isCompleted === true;
      }).length;

    return (
        <Container>
        <NewTask onSubmit={handleCreateNewTask} >
            <input
                name="taskName"
                placeholder='Add a new task'
                value={newTextTask}
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button type='submit' >
                Create
                <PlusCircle size={16} />
            </button>
        </NewTask>
            <div className='info-tasks'>

                <div className='created'>
                    <strong>
                        Created Tasks:
                    </strong>
                    <p>{task.length}</p>
                </div>

                <div className='done'>
                    <strong>
                        Completed
                    </strong>
                    <p>
                    {task.length === 0 ? tasksConclued : `${tasksConclued} out of ${task.length}`}
                    </p>
                </div>
            </div>

        <div className='bloco'>
            {
                //Vou percorrer o array de tasks e pra cada task eu retorno um component
                task.map((task: any) => (
                <TaskBox
                    //task={task} 
                    content={task.title}
                    isCompleted={task.isCompleted}
                    key={uuidV4()}
                    id={task.id}
                    onDeleteTask={deleteTask}
                    onCompleteTask={toggleState}
                />))
            }
        </div>
            {task.length === 0 ? <Empty /> : ""}
        </Container>
    )
}