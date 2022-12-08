import logo from '../../assets/todo-list-logo.svg';
import { Container } from './style';

export function Header() {
    return (
        <Container>
            <img src={logo} alt='logo to-do' />
        </Container>
        
    );
}