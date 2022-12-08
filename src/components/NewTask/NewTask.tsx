import { PlusCircle } from 'phosphor-react';
import { Container } from './style';

export function NewTask() {
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