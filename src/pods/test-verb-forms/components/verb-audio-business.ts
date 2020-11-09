export const prepareVoicesArray = voices => {
  let englishVoicesArray = voices.filter(voice => {
    return voice.lang.substring(0, 2) === 'en';
  });

  englishVoicesArray.sort((a, b) => {
    if (a.lang === 'en-GB') return -1;
    else if (a.lang === 'en-US' && b.lang !== 'en-GB') return -1;
    else return 1;
  });

  return englishVoicesArray;
};
