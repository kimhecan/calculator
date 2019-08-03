import {BMIcalculator, clearValue, BMRcalculator, checkInput } from "./cal_logic";

const getElementById = (selector) => document.getElementById(selector);
const elements = ['preWeight', 'afterWeight', 'height', 'age'];


//계산버튼을 누른다.
document.getElementById('button').addEventListener('click', () => {
    elements.map(getElementById)
        .forEach(checkInput);
        
    BMIcalculator();
    BMRcalculator();
})

//리셋을 클릭하면 리셋한다.
document.getElementById('button2').addEventListener('click', () => {

    elements.map(getElementById)
        .forEach(clearValue);
})