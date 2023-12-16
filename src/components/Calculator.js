import '../components/Calculator.css'
import { useState } from 'react';

export function Calculator() {


    

    const [input, setInput] = useState('');
    const [isDone, setIsDone] = useState(true);
    const [firstNumbers, setFirstNumbers] = useState('');
    const [sign, setSign] = useState('');

    function onClickNumbers(e) {

        if (isDone) {

            let currentValue = input;
            const element = e.currentTarget;
            const value = element.getAttribute('value');
            setInput(currentValue + value);
     
        }else{
            const element = e.currentTarget;
            const value = element.getAttribute('value');
            setInput(value);
            setIsDone(true);
        }
 }

    function clearInput() {

        
        setInput('');
        setFirstNumbers('');
        setSign('');
        setIsDone(true);

    }

    function onSumNumbers(e) {

        
        const element = e.currentTarget;
        const value = element.getAttribute('value');
        setFirstNumbers(input);
        setSign(value);
        setIsDone(false);
    

    }

    function onEqual() {

        const fNumber = Number(firstNumbers);
        const sNumber = Number(input);
        
        let result = 0;

        switch (sign) {
            case '+':
                 result = fNumber + sNumber;
                break;
            case '-':
                result = fNumber - sNumber;
                break;
            case '*':
                result = fNumber * sNumber;
                break;
            case '/':
                result = fNumber / sNumber;
                break;

         }
 
        setInput(result);
     
     
    }

    return (
        <div className="container" >
           

            <form action="" name="calc" className="calculator">
                <input type="text" className="value" readonly name="txt" value={input}/>
                <span className="num clear" onClick={clearInput}><i>C</i></span>
                <span className="num" onClick={onSumNumbers} value="/"><i>/</i></span>
                <span className="num" onClick={onSumNumbers} value="*"><i>*</i></span>
                <span className="num" onClick={onClickNumbers} value="7"><i>7</i></span>
                <span className="num" onClick={onClickNumbers} value="8"><i>8</i></span>
                <span className="num" onClick={onClickNumbers} value="9"><i>9</i></span>
                <span className="num" onClick={onSumNumbers} value="-"><i>-</i></span>
                <span className="num" onClick={onClickNumbers} value="4"><i>4</i></span>
                <span className="num" onClick={onClickNumbers} value="5"><i>5</i></span>
                <span className="num" onClick={onClickNumbers} value="6"><i>6</i></span>
                <span className="num plus" onClick={onSumNumbers} value="+"><i>+</i></span>
                <span className="num" onClick={onClickNumbers} value="1"><i>1</i></span>
                <span className="num" onClick={onClickNumbers} value="2"><i>2</i></span>
                <span className="num" onClick={onClickNumbers} value="3"><i>3</i></span>
                <span className="num" onClick={onClickNumbers} value="0"><i>0</i></span>
                <span className="num" onClick={onClickNumbers} value="00"><i>00</i></span>
                <span className="num" onClick={onClickNumbers} value="."><i>.</i></span>

                <span className="num equal" onClick={onEqual} value="="><i>=</i></span>
            </form>
        </div>

    )
}