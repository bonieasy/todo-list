import { ClipboardText } from "phosphor-react";
import { BoxEmpty } from './style';


export function Empty() {
    return(
        <BoxEmpty>
            <ClipboardText size={56} weight="light" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </BoxEmpty>
    );
}