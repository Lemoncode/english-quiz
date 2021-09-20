import * as sentenceApi from 'core/sentences';
import * as sentenceVm from './test.sentences.vm';

const mapFromSentenceApiToSentenceVM = (
  sentenceApi: sentenceApi.SentenceEntityApi
): sentenceVm.SentenceEntityVm => {
  // 1. Haces el split llamando a un fichero de business
  // 2. Buscate en base al infinitvo el resto de tiempos del verbo así como la traducción
  return null;
};
