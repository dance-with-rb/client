function convertFinedustLevel(finedust: number): string {
  if (finedust > 0 && finedust <= 50) {
    return '좋음';
  } else if (finedust > 50 && finedust <= 100) {
    return '보통';
  } else if (finedust > 100 && finedust <= 250) {
    return '나쁨';
  } else if (finedust > 250) {
    return '매우나쁨';
  }

  return '';
}

export default {
  convertFinedustLevel,
};
