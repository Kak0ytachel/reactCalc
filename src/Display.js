import React from 'react';
import classes from './Display.module.css';
import Indicator from "./Indicator";

export default function Display({size= 10, value = null, className = ''}) {
    // console.log(value);
    let afterDot = 0;
    if (Math.ceil(value) !== value) {
        for (let i = 0; i < 100; i++) {
            let multipliedValue = value * 10 ** i;
            if (Math.ceil(multipliedValue) === multipliedValue) {
                afterDot = i;
                break;
            }
        }
    }
    const leadingZero = (Math.abs(value) < 1)
    let dotIndex =  size - afterDot - 1;


    let numbersValue = value * 10 ** afterDot
    let power = 0;
    for (let i = 0; i < 100; i++) {
        let dividedValue = value / 10 ** i;
        if (Math.abs(dividedValue) < 10) {
            power = i;
            break;
        }
    }
    let zeroIndex = (leadingZero) ? (size - afterDot - power - 1) : NaN;

    const hasMinus = (value < 0);
    if (hasMinus) {
        numbersValue = -numbersValue;
    }

    // console.log(numbersValue);
    // console.log(leadingZero, zeroIndex, hasMinus)
    let minusIndex = (hasMinus) ? (size - afterDot - power - 1 - ( (leadingZero)? 1 : 1)) : NaN;

    let powerSize = 0;
    for (let i = 0; i < 100; i++) {
        if (Math.abs(power) / 10 ** i < 10) {
            powerSize = i + 1 + ( (power < 0) ? 1 : 0) + 1;
            break;
        }
    }
    let isPowerShown = false
    if (power + 1 + (hasMinus? 1 : 0) > size) {
        isPowerShown = true;
        // dotIndex -= powerSize ;
    }

    let freeSize = size - (hasMinus? 1 : 0) - (leadingZero? 1 : 0) - (isPowerShown? powerSize : 0);
    let numLength = ((leadingZero) ? 0 : 1) + power + afterDot;
    let move = 0;
    // console.log(numLength, freeSize);
    if (numLength > freeSize) {
        move = numLength - freeSize;
        numbersValue = Math.round(numbersValue / 10 ** move);
    }


    const indicators = [];
    for (let j = 0; j < size; j++) {
        let number;
        let isDotActive;
        let i = j + (isPowerShown? powerSize : 0);

        if (i >= size) {
            // e-val

            if (i === size) {
                number = 'e';
            } else {

                number = Math.floor(power / 10 ** (i - size) % 10);
                // console.log(number);
            }

        } else if (numbersValue == null) { // null
            number = null;
        } else {
            number = (numbersValue / 10 ** (size - i - 1) >= 1)? Math.floor(numbersValue / 10 ** (size - i - 1) % 10): null;
            if (i === zeroIndex + move) {
                number = 0;
            }
            if (i === minusIndex + move) {
                number = '-';
            }
            // console.log(number);
            // console.log(i, dotIndex, move);
            isDotActive = (i === dotIndex + move - (isPowerShown? power: 0) && i !== size - 1);
        }

        indicators.push(<Indicator key={i} number={number} isDotActive={isDotActive}/>);
    }

    return <div className={`${classes.display} ${className}`}>
        { indicators }
    </div>
}