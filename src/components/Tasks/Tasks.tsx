import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { Container } from './style';



export function Tasks() {
    return (
        <Container>
            <form>
                <button>
                    <Circle size={32} color="#4ea8de" />
                </button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quo iusto eos distinctio libero doloremque quis aperiam at error ad laborum, obcaecati omnis? Repellendus possimus, assumenda illo maiores rerum atque!</p>
                <button>
                    <Trash size={24} color="#808080" />
                </button>
            </form>

            <form>
                 <button>
                     <CheckCircle size={32} color="#5e60ce" weight="fill" />
                 </button>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quo iusto eos distinctio libero doloremque quis aperiam at error ad laborum, obcaecati omnis? Repellendus possimus, assumenda illo maiores rerum atque!</p>
                 <button>
                     <Trash size={24} color="#808080" />
                 </button>
            </form>

            

        </Container>
    )
}