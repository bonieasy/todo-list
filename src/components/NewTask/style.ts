import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 3rem;
    margin-top: calc(0px - 1.5rem);

    input {
        background: var(--gray-500);
        color: var(--gray-300);
        border: 1px solid var(--gray-700);
        border-radius: 8px;
        width: 40rem;
        height: 3.375rem;
        padding: 1rem;

    }

    a {
        background: var(--blueDark);
        color: var(--gray-100);
        border-radius: 8px;
        width: 5.625rem;
        height: 3.375rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
`;