const getEnglishVoices = (
  version: string,
  voices
) => {
  return voices.filter(voice => {
    return voice.lang === version;
  });
};

export const getBritishVoices = voices => getEnglishVoices('en-GB', voices);
export const getAmericanVoices = voices => getEnglishVoices('en-US', voices);