import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';


@Injectable ({ providedIn:'root'})

export class SentenceService
{
  private  http = inject(HttpClient)
  private  baseUrl = environment.apiUrl;

   saveCreatedSentence(sentence: any)
   {
     return this.http.post(`${this.baseUrl}Sentence/save_sentence`, sentence);
   }

}
