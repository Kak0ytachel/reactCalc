import React, {useState} from 'react';
import Display from "./Display";
import Button from "./Button";
import classes from './Calc.module.css';

export default function Calc() {
    const [value, setValue] = useState(0);
    // const [otherValue, setOtherValue] = useState(NaN);
    let [firstValue, setFirstValue] = useState(NaN);
    let [secondValue, setSecondValue] = useState(NaN);
    let [operation, setOperation] = useState(NaN);
    let [isDotActive, setIsDotActive] = useState(false);

    function addNumber(e) {
        // console.log(e.target.textContent);
        let strVal = value.toString();
        if (isDotActive) {
            strVal += '.';
            setIsDotActive(false);
        }
        strVal += e.target.textContent;
        setValue(Number(strVal));
        // setValue(value * 10 + Number(e.target.textContent));
        setSecondValue(NaN)
        // console.log(value, otherValue);
    }

    function removeDigit(e) {
        let valStr = value.toString();
        let val = Number(valStr.slice(0, -1));
        setValue(val);
    }

    function clear(e) {
        setValue(0);
    }

    function doOperation(e) {
        setFirstValue(value);
        setValue(0);
    }

    function plus(e) {
        setOperation(1);
        doOperation(e);
    }

    function minus(e) {
        setOperation(2);
        doOperation(e);
    }

    function multiply(e) {
        setOperation(3);
        doOperation(e);
    }

    function divide(e) {
        setOperation(4);
        doOperation(e);
    }

    function dot(e) {
        let strVal = value.toString();
        if (strVal.indexOf('.') !== -1) {
            return;
        }
        isDotActive = true;
    }

    function count(e) {
        console.log(firstValue, secondValue);
        if (isNaN(secondValue)) {
            // console.log('pre', value);
            setSecondValue(value);
            secondValue = value;
            // console.log('post', secondValue);
        }
        let newVal;
        if (operation === 1) {
            newVal = firstValue + secondValue;
        } else if (operation === 2) {
            newVal = firstValue - secondValue;
        } else if (operation === 3) {
            newVal = firstValue * secondValue;
        } else if (operation === 4) {
            newVal = firstValue / secondValue;
        }
        // console.log(newVal);
        setValue(newVal);
        setFirstValue(newVal);
    }

    return (
        <div className={classes.Container2}>
            <div className={classes.Container1}>
                {/*<h1>Calc</h1>*/}
                <Display size={9} className={classes.Display} value={value}/>
                <div className={classes.keyPad}>
                    <Button className={classes.MyButtonB} text={"C"} onClick={clear}></Button>
                    <Button className={`${classes.MyButtonB} ${classes.BiggerFont}`} text={"÷"} onClick={divide}></Button>
                    <Button className={`${classes.MyButtonB} ${classes.BiggerFont}`} text={"×"} onClick={multiply}> </Button>
                    <Button className={`${classes.MyButtonB} ${classes.BiggerFont}`} text={"←"} onClick={removeDigit}></Button>

                    <Button className={classes.MyButtonA} text={7} onClick={addNumber}></Button>
                    <Button className={classes.MyButtonA} text={8} onClick={addNumber}></Button>
                    <Button className={classes.MyButtonA} text={9} onClick={addNumber}></Button>
                    <Button className={`${classes.MyButtonB} ${classes.BiggerFont}`} text={"-"} onClick={minus}></Button>

                    <Button className={classes.MyButtonA} text={4} onClick={addNumber}></Button>
                    <Button className={classes.MyButtonA} text={5} onClick={addNumber}></Button>
                    <Button className={classes.MyButtonA} text={6} onClick={addNumber}></Button>
                    <Button className={`${classes.MyButtonB} ${classes.BiggerFont}`} text={"+"} onClick={plus}></Button>

                    <Button className={classes.MyButtonA} text={1} onClick={addNumber}></Button>
                    <Button className={classes.MyButtonA} text={2} onClick={addNumber}></Button>
                    <Button className={classes.MyButtonA} text={3} onClick={addNumber}></Button>
                    <Button className={`${classes.MyButtonB} ${classes.ButtonHigh}`} text={"E\nN\nT\nE\nR"} onClick={count}></Button>

                    <Button className={`${classes.MyButtonA} ${classes.ButtonWide}`} text={0} onClick={addNumber}></Button>
                    <Button className={`${classes.MyButtonA} ${classes.LargeFont}`} text={"."} onClick={dot}></Button>
                </div>
            </div>
        </div>
    )
}