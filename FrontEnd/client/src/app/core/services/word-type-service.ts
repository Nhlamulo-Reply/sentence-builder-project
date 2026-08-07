import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WordTypeService {

  private http = inject(HttpClient)

  private baseApiUrl = environment.apiUrl;


  getAllWordsType(){
    return  this.http.get(`${this.baseApiUrl}WordType`);
  }


  getAllWordByIdType(wordTypeId: number)
{
  return this.http.get(`${this.baseApiUrl}Word/wordtype/${wordTypeId}`);
}



}
