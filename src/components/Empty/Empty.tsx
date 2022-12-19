import { ClipboardText } from "phosphor-react";
import { BoxEmpty } from './style';

export function Empty() {
    return(
        <BoxEmpty>
            <ClipboardText size={56} weight="light" />
            <strong>You have no tasks yet</strong>
            <p>Create tasks and organize your to-do items</p>
        </BoxEmpty>
    );
}