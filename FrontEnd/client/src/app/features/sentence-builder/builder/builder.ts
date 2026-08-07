import { Component, inject, OnInit } from '@angular/core';
import { WordTypeService } from '../../../core/services/word-type-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {SentenceService} from '../../../core/services/sentence-service';
interface WordType {
  id: number;
  name: string;
}

interface Word {
  id: number;
  text: string;
  wordTypeId: number;
}

@Component({
  selector: 'app-builder',
  imports: [CommonModule, FormsModule],
  templateUrl: './builder.html',
  styleUrl: './builder.css',
  standalone: true
})
export class Builder implements OnInit
{
  private wordTypeService = inject(WordTypeService);
  private  sentenceService = inject(SentenceService)

  selectedWordType = '';
  wordTypes: WordType[] = [];
  availableWords: Word[] = [];
  currentSentence: Word[] = [];

  ngOnInit(): void
  {
    this.loadWordTypes();
  }

  loadWordTypes(): void
  {
    this.wordTypeService.getAllWordsType().subscribe({
      next: (res: any) => {
        this.wordTypes = res;
      },
      error: (err) => console.log(err)
    });
  }

  loadWordsByWordTypeId(): void
  {
    if (!this.selectedWordType)
    {
      this.availableWords = [];
      return;
    }

    const wordSelected = Number(this.selectedWordType);
    this.wordTypeService.getAllWordByIdType(wordSelected).subscribe({
      next: (res: any) =>
      {
        this.availableWords = res;
      },
      error: (err) => console.log(err)
    });
  }

  addWord(word: any): void
  {
    this.currentSentence.push(word);
  }

  clearSentence(): void
  {
    this.currentSentence = [];
  }

  resetSentence(): void
  {
    this.currentSentence = [];
  }

  saveSentence(): void {

    const sentence = {
      userId: 1,
      wordIds: this.currentSentence.map(word => word.id)
    };

    this.sentenceService.saveCreatedSentence(sentence).subscribe({
      next: (res) => {
        console.log(res);
        alert('Sentence saved successfully!');
        this.currentSentence = [];
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
