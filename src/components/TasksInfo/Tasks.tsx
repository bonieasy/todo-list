import { Container } from './style';

export function TasksInfo() {
    return (
        <Container>
            <div className='info-tasks'>

                <div className='created'>
                    <strong>
                        Tarefas Criadas
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

            

        </Container>
    );
}