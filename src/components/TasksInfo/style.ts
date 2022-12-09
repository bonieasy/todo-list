import { CheckCircle } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
    color: var(--gray-100);
    margin: 4.313rem 22rem;;


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
        font-size: 12px;
        line-height: 15px;

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
        height: 1.188rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        line-height: 15px;
        padding: 2px 8px;
    }

    
`;
