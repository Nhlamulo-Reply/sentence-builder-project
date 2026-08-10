import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {Word, WordType} from '../Models/Word';


@Injectable({
  providedIn: 'root',
})
export class WordTypeService {

  private http = inject(HttpClient)
  private baseApiUrl = environment.apiUrl;

  getAllWordsType()
  {
    return  this.http.get<WordType[]>(`${this.baseApiUrl}WordType`);
  }
  getAllWordByIdType(wordTypeId: number)
  {
    return this.http.get<Word[]>(`${this.baseApiUrl}Word/wordtype/${wordTypeId}`);
  }



}
