import React from 'react';
import classes from './Indicator.module.css';

export default function Indicator({number = -1, isDotActive = false}) {
    return (
        <div className={classes.indicator} data-number={number} data-dot-active={isDotActive}>
            <div className={classes.indicatorInner}>
                <div className={` ${classes.segment} ${classes.segmentHorizontal} ${classes.segmentA}`}></div>
                <div className={`${classes.segment} ${classes.segmentVertical} ${classes.segmentB}`}></div>
                <div className={`${classes.segment} ${classes.segmentVertical} ${classes.segmentC}`}></div>
                <div className={`${classes.segment} ${classes.segmentHorizontal} ${classes.segmentD}`}></div>
                <div className={`${classes.segment} ${classes.segmentVertical} ${classes.segmentE}`}></div>
                <div className={`${classes.segment} ${classes.segmentVertical} ${classes.segmentF}`}></div>
                <div className={`${classes.segment} ${classes.segmentHorizontal} ${classes.segmentG}`}></div>
                <div className={`${classes.segment} ${classes.segmentDot}`}></div>
            </div>
        </div>
    )
    }