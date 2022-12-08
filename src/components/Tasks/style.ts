import styled from "styled-components";

export const Container = styled.div`
    color: var(--gray-100);
    margin: 0 22rem;;


    .info-tasks {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }

    .created {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }

    .created p {
        background: var(--gray-400);
        border-radius: 999px;
        width: 1.5rem;
        height: 1.188rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .done {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }

    .done p {
        background: var(--gray-400);
        border-radius: 999px;
        width: 1.5rem;
        height: 1.188rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    form {
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
    }

    form label input[type="radio"] {
        appearance: none;
        background: transparent;
        border: 3px solid var(--blue);
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
    }

    form label input[type="radio"]:checked {
        background: var(--purpleDark);
        border: 3px solid var(--purpleDark);

    }

`;