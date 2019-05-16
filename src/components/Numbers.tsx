import React, {FC} from 'react';
import Button, {ButtonClickHandler} from './Button';


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const renderButtons = (onClickNumber : ButtonClickHandler) => (numbers.map( (number: number) => (
    <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
)))

type Props = {
    onClickNumber: ButtonClickHandler
}

// Chequea aunque se invoque a un componente que es javascript

const Numbers: FC<Props> = ({onClickNumber}) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
);

// Array(10).fill()
export default Numbers;
