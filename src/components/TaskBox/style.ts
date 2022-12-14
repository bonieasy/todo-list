import styled from 'styled-components'

export const TaskList = styled.div`
    background: var(--gray-500);
    border: 1px solid var(--gray-400);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    //color: var(--gray-100);
    height: 72px;
    //margin: 0 15rem 0.75rem;
    padding: 1rem;
    width: 46rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

button {
    background: transparent;
    border: none;
}

span {
    font-size: 14px;
    line-height: 20px;
    font-style: normal;
}

&.task-completed { 
    
    
    & > span {
        text-decoration-line: line-through;
        color: var(--gray-300);
    }
}


`;