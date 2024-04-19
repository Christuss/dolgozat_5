import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Kerdes (props) {
    const elem = props.elem;
    const [clicked, setClicked ] = useState(false);

    const ellenorzes = (e) => {
        if (!clicked) {
            setClicked(true);
            if (e.target.id == elem.id+elem.helyes) {
                document.getElementById(e.target.id).style.backgroundColor = "green";
                props.setPontok(props.pontok + 1);
            } else  {
                document.getElementById(e.target.id).style.backgroundColor = "red";
            }
        }
    };
    return (
        <Card className='mainCard'>
            <Card className='questionCard'>{elem.kerdes}</Card>
            <Card className='answers'>
            <Button className='button' onClick={ellenorzes} id = {elem.id+"v1"} >{elem.v1}</Button>
            <Button className='button' onClick={ellenorzes} id = {elem.id+"v2"} >{elem.v2}</Button>
            <Button className='button' onClick={ellenorzes} id = {elem.id+"v3"} >{elem.v3}</Button>
            <Button className='button' onClick={ellenorzes} id = {elem.id+"v4"} >{elem.v4}</Button>
            </Card>
        </Card>
    )
}