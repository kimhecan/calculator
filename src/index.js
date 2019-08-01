import { BMIcalculator, resetInput, BMRcalculator, checkInput } from "./cal_logic";

document.addEventListener('DOMContentLoaded', function() {
    
    //계산버튼을 누른다.
    document.getElementById('button').addEventListener('click', function() {
        checkInput();
        BMIcalculator();
        BMRcalculator();
    })

    //리셋을 클릭하면 리셋한다.
    document.getElementById('button2').addEventListener('click', function() {
        resetInput();
    })
}, false);
