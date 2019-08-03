export const checkInput = (element) => { 
    if(!(element.value)) {
         return alert(`${element.placeholder}이(가) 비어있습니다.`);
    }
}


export function BMIcalculator() {
    console.log('BMIcalculator');
    // 입력값들을 받는다. 
    const pre = document.getElementById('preWeight').value;
    const after = document.getElementById('afterWeight').value;
    const height = document.getElementById('height').value;
    
    

    //BMI를 계산한다.
    const preBMI   =  (pre / ((height/100)**2)).toFixed(2);
    const afterBMI =  (after / ((height/100)**2)).toFixed(2);
    const BMIList = [preBMI,afterBMI];
    
    //결과값들을 출력한다.
    document.getElementById('preBMI').innerHTML   = BMIList[0] +'('+ returnString(BMIList[0]) + ')';
    document.getElementById('afterBMI').innerHTML = BMIList[1] +'('+ returnString(BMIList[1]) + ')';
    document.getElementById('comment').innerHTML = comment(BMIList);

}

export function returnString(BMI) {
    console.log('returnString');
    var string;

    
    if(BMI < 18.5) {
        string = "저체중";
    } else if(BMI < 23) {
        string = "정상";
    } else if(BMI < 25) {
        string = "과체중";
    } else if(BMI < 30) {
        string = "비만";
    } else if(BMI === NaN){
        string = "";
    } else {
        string = "고도비만";
    }
    return string;
}

export function comment(BMIList) {
    console.log('comment');
    var pre = returnString(BMIList[0]);
    var after = returnString(BMIList[1]);
    var comment = '';

    if(pre === '저체중') {
        if(after === '정상') {
            comment = "오우 정상으로 돌아왔네요!! 당신의 노력을 존경합니다.";
        } else if(after === '저체중') {
            comment = "오우 별 차이 없네요. 여전히 멸치입니다.";
        } else {
            omment = "구라치지 마세요...";
        }
    } else if(pre === '정상') {
        if(after === '저체중') {
            comment = "오우 멸치가 되어가는 중입니다.";
        } else if(after === '정상') {
            comment = "여진히 정상입니다. 유지하세요!!";
        } else if(after === '과체중') {
            comment = "오우 돼지가 되어가는 중입니다. 그래도 아직은 괜찮아요!";
        } else {
            comment = "구라치지 마세요.";
        }
    } else if(pre === '과체중') {
        if(after === '과체중') {
            comment = '여전히 뚱뚱합니다. 건강을 위해 체중을 줄이세요.';
        } else if(after === '정상') {
            comment = '당신의 노력을 존경합니다! 정상체중입니다!';
        } else if(after === '비만') {
            comment = '이대로 가면 건강이 위험합니다. 안타까운 식습관이군요..';
        } else {
            comment = "구라치지 마세요.";
        }
    } else if(pre === '비만') {
        if(after === '과체중') {
            comment = '좀만더 노력하세요!! 희망이 보입니다!';
        } else {
            comment = '계산버튼 누르기 힘드셨을텐데.... 삶의 변화를 느껴보세요!';
        }
    } else {
        comment = '정상적인 삶이 가능한가요?? 결단이 필요합니다.';
    }

    return comment;
    
}

export const clearValue = (element) => element.value = '';

export function BMRcalculator() {
    const pre = document.getElementById('preWeight').value;
    const after = document.getElementById('afterWeight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;   

    let target = document.getElementById("genderBox");
    const gender =  target.options[target.selectedIndex].value;

    if(gender==="man") {
        const preResult = 66.47 + (13.75 * pre) + (5 * height) - (6.76 * age);
        const afterResult = 66.47 + (13.75 * after) + (5 * height) - (6.76 * age);
        var BMRList = [preResult.toFixed(2), afterResult.toFixed(2)];
    } else {
        const preResult = 655.1 + (9.56 * pre) + (1.85 * height) - (4.68 * age);
        const afterResult = 655.1 + (9.56 * after) + (1.85 * height) - (4.68 * age);
        var BMRList = [preResult, afterResult];
        
    }
    document.getElementById('preBMR').innerHTML   = BMRList[0] + '(빅맥 ' + BMRString(BMRList[0]).toFixed(1) + '개)';
    document.getElementById('afterBMR').innerHTML = BMRList[1] + '(빅맥 ' + BMRString(BMRList[1]).toFixed(1) + '개)';
}

export function BMRString(BMR) {
    var bigMac = 257;
    var count = BMR / bigMac;
    return count;
}