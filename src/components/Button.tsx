import React, {FC} from 'react';

export type ButtonClickHandler = (text: string) => void;

type Props = {
    type?: string, 
    text: string, 
    clickHandler: ButtonClickHandler
}

const Button: FC<Props> = ({type, text, clickHandler}) => (
    <button role="button" className={type} onClick={() => clickHandler(text)}>
        <span className="title">{text}</span>
    </button>
);

export default Button;

