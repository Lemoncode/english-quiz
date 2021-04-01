import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { useSpeechSynthesis } from 'react-speech-kit';
import { getBritishVoices } from './pronunciation.business';
import * as styles from './pronunciation.styles';
interface Props {
  text: String;
}

const VOICE_RATE = 0.8; // Could be configured by user in future versions
const VOICE_PITCH = 1; // Could be configured by user in future versions

export const Pronunciation: React.FC<Props> = props => {
  const { text } = props;
  const { speak, voices, supported, speaking } = useSpeechSynthesis();
  const [ englishVoices, setEnglishVoices ] = React.useState([]);
  const {
    pronunciationContainer,
    volumeIcon,
  } = styles;

  React.useEffect(() => {
    // Voices version (GB, US, AU, etc) could be configured by user in future versions
    setEnglishVoices(getBritishVoices(voices)); 
  }, [voices]);

  const handleSpeak = () => {
    if (!speaking) {
      speak({
        text,
        voice: englishVoices[0], // Selected voice could be configured by user in future versions
        rate: VOICE_RATE,
        pitch: VOICE_PITCH,
      });
    }
  };

  return (
    <>
      {supported && englishVoices.length !== 0 && (
        <div className={pronunciationContainer}>
          <IconButton
            className={volumeIcon}
            onClick={() => handleSpeak()}
          >
            <VolumeUpIcon />
          </IconButton>
        </div>
      )}
    </>
  );
}