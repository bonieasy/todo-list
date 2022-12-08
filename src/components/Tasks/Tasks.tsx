import { Trash } from 'phosphor-react';
import { Container } from './style';

export function Tasks() {
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

            <form>
                <label><input type="radio" name="radio" /></label>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quo iusto eos distinctio libero doloremque quis aperiam at error ad laborum, obcaecati omnis? Repellendus possimus, assumenda illo maiores rerum atque!</p>
                <Trash size={32} />
            </form>

        </Container>
    );
}