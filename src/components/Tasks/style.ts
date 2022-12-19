import styled from "styled-components";

export const Container = styled.div`
    color: var(--gray-100);
    margin: 4.313rem 22rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
 
.info-tasks {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 25rem;
        width: 46rem;
        //margin: 4.313rem 15rem 1.5rem;
}
.created {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
}
.created strong {
        color: var(--blue);
        font-weight: 700;
}
.created p {
        background: var(--gray-400);
        border-radius: 999px;
        width: 1.5rem;
        height: 1.188rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        line-height: 15px;
        font-weight: 700;
}
.done {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
}
.done strong {
    color: var(--purple);
        font-weight: 700;
}
.done p {
        background: var(--gray-400);
        border-radius: 999px;
        height: 1.188rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        line-height: 15px;
        padding: 2px 8px;
        font-weight: 700;
}
.task-list {
    background: var(--gray-400);
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    border: 1px solid var(--gray-400);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    margin-bottom: 0.75rem;
}

.bloco {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem
}
`;
export const NewTask = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 3rem;
    margin-top: calc(0px - 5.7rem);

    input {
        background: var(--gray-500);
        color: var(--gray-300);
        border: 1px solid var(--gray-700);
        border-radius: 8px;
        width: 40rem;
        height: 3.375rem;
        padding: 1rem;

    }

    button {
        background: var(--blueDark);
        color: var(--gray-100);
        border-radius: 8px;
        width: 5.625rem;
        height: 3.375rem;
        font: bold;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
    }
`;