import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {Sentence} from '../Models/Sentence';


@Injectable ({ providedIn:'root'})

export class SentenceService
{
  private  http = inject(HttpClient)
  private  baseApiUrl = environment.apiUrl;

   saveCreatedSentence(sentence: any)
   {
     return this.http.post(`${this.baseApiUrl}Sentence/save_sentence`, sentence);
   }

  getAllSentences()
  {
    return this.http.get<Sentence[]>(`${this.baseApiUrl}Sentence/get_all_sentences`);
  }


  getSentenceById(id: number) {
    return this.http.get(`${this.baseApiUrl}Sentence/${id}`);
  }

  updateSentence(id: number, sentence: any) {
    return this.http.put(`${this.baseApiUrl}Sentence/${id}`, sentence);
  }


}
