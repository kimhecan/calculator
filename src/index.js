import { BMIcalculator, clearValue, BMRcalculator, checkInput } from "./cal_logic";

const getElementById = (selector) => document.getElementById(selector);

document.addEventListener('DOMContentLoaded', function() {
    
    //계산버튼을 누른다.
    document.getElementById('button').addEventListener('click', function() {
        checkInput();
        BMIcalculator();
        BMRcalculator();
    })

    //리셋을 클릭하면 리셋한다.
    document.getElementById('button2').addEventListener('click', () => {
      const elements = [
        'preWeight',
        'afterWeight',
        'height',
        'age',
      ];

      elements.map(getElementById)
        .forEach(clearValue);
    })
}, false);
