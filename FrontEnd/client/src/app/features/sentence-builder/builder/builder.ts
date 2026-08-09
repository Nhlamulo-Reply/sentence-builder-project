import {Component, inject, OnInit, signal} from '@angular/core';
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

  selectedWordType = signal<string>('');
  wordTypes = signal<WordType[]>([]);
  availableWords = signal<Word[]>([]);
  currentSentence = signal<Word[]>([]);

  ngOnInit(): void
  {
    this.loadWordTypes();
  }

  loadWordTypes(): void
  {
    this.wordTypeService.getAllWordsType().subscribe({
      next: (res: any) => {
        this.wordTypes.set(res);
      },
      error: (err) => console.log(err)
    });
  }

  loadWordsByWordTypeId(): void
  {

    if (!this.selectedWordType()) {
      this.availableWords.set([]);
      return;
    }

    const wordSelected = Number(this.selectedWordType());
    this.wordTypeService.getAllWordByIdType(wordSelected).subscribe({
      next: (res: any) => {
        this.availableWords.set(res);
      },
      error: (err) => console.log(err)
    });
  }

  addWord(word: Word): void
  {
    this.currentSentence.update(sentence => [...sentence,word]);

  }

  clearSentence(): void
  {
    this.currentSentence.set([]);
  }

  resetSentence(): void
  {
    this.currentSentence.set([]);
  }

  saveSentence(): void {

    const sentence = {
      userId: 1,
      wordIds: this.currentSentence().map(word => word.id)
    };

    this.sentenceService.saveCreatedSentence(sentence).subscribe({
      next: (res) => {
        console.log(res);
        alert('Sentence saved successfully!');
        this.currentSentence.set([]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
