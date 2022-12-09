import styled from "styled-components";

export const Container = styled.div`
    color: var(--gray-100);
    margin: 4.313rem 22rem;;

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
    margin-bottom: 0.75rem;

}

form button {
    background: transparent;
    border: none;
}

form p {
    font-size: 14px;
    line-height: 20px;
    font-style: normal;
}


`;