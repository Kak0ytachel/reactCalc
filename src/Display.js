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
    // console.log(afterDot);
    const leadingZero = (Math.abs(value) < 1)
    let dotIndex =  size - afterDot - 1;


    let numbersValue = value * 10 ** afterDot

    // positive e
    let power = 0;
    for (let i = 0; i < 100; i++) {
        let dividedValue = value / 10 ** i;
        if (Math.abs(dividedValue) < 10) {
            power = i;
            break;
        }
    }

    //negative e

    const hasMinus = (value < 0);
    if (hasMinus) {
        numbersValue = -numbersValue;
    }

    let isPowerShown = false
    if (power + 1 + (hasMinus? 1 : 0) > size) {
        isPowerShown = true;
        // dotIndex -= powerSize ;
    }

    if (value != null && value < 0.00001 && value > 0) {
        let multipliedValue = value;
        while (multipliedValue < 1) {
            multipliedValue *= 10;
            power--;
        }
        isPowerShown = true;
    }

    let zeroIndex = (leadingZero) ? (size - afterDot - power - 1) : NaN;



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



    let freeSize = size - (hasMinus? 1 : 0) - (leadingZero? 1 : 0) - (isPowerShown? powerSize : 0);
    let numLength = ((leadingZero) ? 0 : 1) + power + afterDot;
    let move = 0;
    // console.log(numLength, freeSize);
    if (numLength > freeSize && power > 0) {
        move = numLength - freeSize;
        numbersValue = Math.round(numbersValue / 10 ** move);
    }



    const indicators = [];
    // console.log(zeroIndex, move);
    for (let j = 0; j < size; j++) {
        // console.log('index j', j)
        let number;
        let isDotActive;
        let i = j + (isPowerShown? powerSize : 0);

        if (i >= size) {
            // e-val

            if (i === size) {
                number = 'e';
            } else {
                let numIndex = powerSize - (i - size - 1) - 2;
                if (power < 0 && i === size + 1) {
                    number = '-';
                } else {

                    number = Math.floor(Math.abs(power) / 10 ** (numIndex) % 10);
                }
                // console.log('powerSize', powerSize)
                // console.log('numIndex i', numIndex)
                // console.log(number);
            }

        } else if (numbersValue == null) { // null
            number = null;
        } else {
            number = (numbersValue / 10 ** (size - i - 1) >= 1)? Math.floor(numbersValue / 10 ** (size - i - 1) % 10): null;
            if (number === null && afterDot !== 0 && i > dotIndex) {
                number = 0;
            }
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
    console.log("power", power);
    return <div className={`${classes.display} ${className}`}>
        { indicators }
    </div>
}