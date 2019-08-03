const { bmiToText } = require('./calculator');

test('bmiToText', () => {
  // 여기에 “이 프로그램에 무엇을 입력했을 때 어떤 결과가 나올지”가 들어갑니다.
  // 탐구한 결과가 없으므로 임의의 값을 넣습니다.

  expect(bmiToText(16.0)).toBe('저체중');
  expect(bmiToText(20.0)).toBe('정상');
  expect(bmiToText(24.0)).toBe('과체중');
  expect(bmiToText(28.0)).toBe('비만');
  expect(bmiToText(32.0)).toBe('고도비만');
});
