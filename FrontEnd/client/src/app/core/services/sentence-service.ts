import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Sentence, SentenceResponse} from '../Models/Sentence';


@Injectable ({ providedIn:'root'})

export class SentenceService
{
  private  http = inject(HttpClient)
  private  baseApiUrl = environment.apiUrl;

   saveCreatedSentence(sentence: any)
   {
     return this.http.post(`${this.baseApiUrl}sentences`, sentence);
   }
  getAllSentences()
  {
    return this.http.get<Sentence[]>(`${this.baseApiUrl}sentences`);
  }
  getSentenceById(id: number)
  {
    return this.http.get<SentenceResponse>(`${this.baseApiUrl}sentences/${id}`);
  }
  updateSentence(id: number, sentence: any)
  {
    return this.http.put(`${this.baseApiUrl}sentences/${id}`, sentence);
  }

}
