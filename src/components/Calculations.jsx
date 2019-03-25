import React from 'react'

const Calculations = (props) => {
    let newArr = [];
    for (let i = 0; i < props.allEngineers.length; i++) {
        newArr.push(props.allEngineers[i].rate * props.allEngineers[i].hours);
    }
    let sum = newArr.reduce((total, current) => total + current);
    sum = sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    return ("Total: " + sum);
}

export default Calculations