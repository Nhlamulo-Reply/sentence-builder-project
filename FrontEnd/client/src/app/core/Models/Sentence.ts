import {Word} from './Word';

export interface Sentence {
  id: number;
  text: string;
  createdAt: string;
  userId: number;
}
export interface SentenceResponse {
  id: number;
  userId: number;
  words: Word[];
}

