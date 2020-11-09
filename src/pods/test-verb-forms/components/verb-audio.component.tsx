import * as React from 'react';
import { Select, Button, FormControl, MenuItem } from '@material-ui/core';
import { Verb } from '../test-verb-forms.vm';
import { useSpeechSynthesis } from 'react-speech-kit';
import { prepareVoicesArray } from './verb-audio-business';

interface Props {
  verb: Verb;
}

const VOICE_RATE = 0.8;
const VOICE_PITCH = 1;

export const VerbAudio: React.FC<Props> = props => {
  const { verb } = props;
  const { speak, voices, supported, speaking } = useSpeechSynthesis();
  const [voiceIndex, setVoiceIndex] = React.useState('0');
  const [englishVoicesArray, setEnglishVoicesArray] = React.useState([]);
  let voice = englishVoicesArray[voiceIndex] || null;

  React.useEffect(() => {
    setEnglishVoicesArray(prepareVoicesArray(voices));
  }, [voices]);

  const handleChangeVoice = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setVoiceIndex(e.target.value);
  };

  const handleSpeak = () => {
    if (voice !== null && !speaking) {
      speak({
        text: verb.infinitive + ' . ' + verb.past + ' . ' + verb.participle,
        voice: voice,
        rate: VOICE_RATE,
        pitch: VOICE_PITCH,
      });
    }
  };

  const englishVoiceAvailable = () => {
    return englishVoicesArray.length !== 0;
  };

  return (
    <>
      {supported && englishVoiceAvailable && (
        <>
          <FormControl>
            <Select
              labelId="voice-selector"
              id="voice"
              value={voiceIndex}
              onChange={handleChangeVoice()}
            >
              {englishVoicesArray.map((option, index) => (
                <MenuItem
                  value={index}
                  key={index}
                >{`${option.lang} - ${option.name}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            onClick={() => handleSpeak()}
            variant="contained"
            color="primary"
          >
            Pronunciation
          </Button>
        </>
      )}
    </>
  );
};
