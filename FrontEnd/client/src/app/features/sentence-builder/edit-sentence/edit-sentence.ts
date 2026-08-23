import {Component,EventEmitter,Input,OnInit,Output,inject, SimpleChanges, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WordTypeService } from '../../../core/services/word-type-service';
import { SentenceService } from '../../../core/services/sentence-service';
import {Word, WordType} from '../../../core/Models/Word';
import {SentenceResponse} from '../../../core/Models/Sentence';


@Component({
  selector: 'app-edit-sentence-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './edit-sentence.html',
  styleUrl: './edit-sentence.css'
})
export class EditSentenceModal implements OnInit {

  private wordTypeService = inject(WordTypeService);
  private sentenceService = inject(SentenceService);
  private cdr = inject(ChangeDetectorRef);


  @Input()
  sentenceId!: number;

  @Output()
  saved = new EventEmitter<void>();

  selectedWordType = '';
  wordTypes: WordType[] = [];
  availableWords: Word[] = [];
  currentSentence: Word[] = [];
  isLoading = false;
  errorMessage = '';
  userId = 1;

  ngOnInit(): void
  {
    this.loadWordTypes();
  }
  ngOnChanges(changes: SimpleChanges): void
  {
    if (changes['sentenceId'] && this.sentenceId)
    {
      this.currentSentence = [];
      this.selectedWordType = '';
      this.availableWords = [];
      this.errorMessage = '';
      this.loadSentence();
    }
  }

  loadWordTypes(): void
  {
    this.wordTypeService.getAllWordsType().subscribe({
      next: (res: WordType[]) => {
        this.wordTypes = res;
        this.cdr.detectChanges();
      },
      error: err => {
        console.log(err);
      }
    });
  }
  loadWordsByWordTypeId(): void
  {
    if (!this.selectedWordType)
    {
      this.availableWords = [];
      return;
    }

    this.isLoading = true;
    const wordTypeId = Number(this.selectedWordType);

    this.wordTypeService.getAllWordByIdType(wordTypeId).subscribe({
        next: (res: Word[]) => {
          this.availableWords = res;
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: err => {
          console.log(err);
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
  }

  loadSentence(): void
  {
    if (!this.sentenceId) return;

    this.isLoading = true;

    this.sentenceService
      .getSentenceById(this.sentenceId)
      .subscribe({
        next: (res: SentenceResponse) => {
          this.currentSentence = res.words;
          this.userId = res.userId;
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: err => {
          console.log(err);
          this.isLoading = false;
          this.errorMessage = 'Failed to load sentence';
          this.cdr.detectChanges();
        }
      });
  }

  addWord(word: Word): void
  {
    const exists = this.currentSentence.some(w => w.id === word.id);
    if (exists)
    {
      this.errorMessage ='Word already in sentence';
      return;
    }
    this.currentSentence.push(word);
    this.errorMessage = '';

  }
  removeWord(word: Word): void
  {
    this.currentSentence = this.currentSentence.filter(w => w.id !== word.id);
  }
  clearSentence(): void
  {

    if (this.currentSentence.length === 0)
    {
      return;
    }
    if (confirm('Clear all words from sentence?'))
    {
      this.currentSentence = [];
    }

  }

  updateSentence(): void
  {

    if (this.currentSentence.length === 0)
    {
      this.errorMessage = 'Sentence must have at least one word';
      return;
    }
    this.isLoading = true;
    const dto =
      {
      userId: this.userId,
      wordIds: this.currentSentence.map(word => word.id)
    };

    this.sentenceService.updateSentence(this.sentenceId, dto).subscribe({
        next: () => {
          alert('Sentence updated successfully!');
          this.saved.emit();
        },

        error: err =>
        {
          console.log(err);
          this.isLoading = false;
          this.errorMessage ='Failed to update sentence';
        }
      });
  }
  getWordCount(): number
  {
    return this.currentSentence.length;
  }
  getSentenceText(): string
  {
    return this.currentSentence.map(word => word.text).join(' ');
  }
  isWordInSentence(word: Word): boolean
  {
    return this.currentSentence.some(w => w.id === word.id);
  }

}
