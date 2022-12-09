import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { Container } from './style';

export function NewTask() {

    const [task, setTask] = useState('tarefa teste')

    function handleNewTask() {

    }

    
    return(
        <Container>
            <input placeholder='Adicione uma nova tarefa'></input>
            <a href='#'>
            Criar
                <PlusCircle size={16} />
            </a>
        </Container>
    );
}