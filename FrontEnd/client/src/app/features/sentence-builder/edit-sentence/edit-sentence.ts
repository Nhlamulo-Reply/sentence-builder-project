import { Component, inject, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WordTypeService } from '../../../core/services/word-type-service';
import { SentenceService } from '../../../core/services/sentence-service';

interface WordType {
  id: number;
  name: string;
}

interface Word {
  id: number;
  text: string;
  wordTypeId: number;
}

interface SentenceResponse {
  id: number;
  userId: number;
  words: Word[];
}

@Component({
  selector: 'app-edit-sentence',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule
  ],
  templateUrl: './edit-sentence.html',
  styleUrl: './edit-sentence.css'
})
export class EditSentence implements OnInit {
  private wordTypeService = inject(WordTypeService);
  private sentenceService = inject(SentenceService);

  constructor(
    private dialogRef: MatDialogRef<EditSentence>,
    @Inject(MAT_DIALOG_DATA) public sentenceId: number
  ) {}

  selectedWordType = '';
  wordTypes: WordType[] = [];
  availableWords: Word[] = [];
  currentSentence: Word[] = [];
  isLoading = false;
  errorMessage = '';
  userId = 1;

  ngOnInit(): void {
    this.loadWordTypes();
    this.loadSentence();
  }

  loadWordTypes(): void {
    this.wordTypeService.getAllWordsType().subscribe({
      next: (res: any) => {
        this.wordTypes = res;
      },
      error: err => console.log(err)
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

    this.wordTypeService.getAllWordByIdType(wordTypeId).subscribe(
      {
      next: (res: any) => {
        this.availableWords = res;
        this.isLoading = false;
      },
      error: err => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  loadSentence(): void
  {
    this.isLoading = true;
    this.sentenceService.getSentenceById(this.sentenceId).subscribe({
      next: (res: any) =>
      {
        this.currentSentence = res.words || [];
        this.userId = res.userId || 1;
        this.isLoading = false;
      },
      error: err =>
      {
        console.log(err);
        this.isLoading = false;
        this.errorMessage = 'Failed to load sentence';
      }
    });
  }

  addWord(word: Word): void
  {
    if (this.currentSentence.some(w => w.id === word.id))
    {
      this.errorMessage = 'Word already in sentence';
      setTimeout(() => this.errorMessage = '', 2000);
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
    if (this.currentSentence.length === 0) return;
    if (confirm('Clear all words from sentence?')) {
      this.currentSentence = [];
    }
  }

  updateSentence(): void
  {
    if (this.currentSentence.length === 0) {
      this.errorMessage = 'Sentence must have at least one word';
      return;
    }

    this.isLoading = true;
    const dto =
      {
      userId: this.userId,
      wordIds: this.currentSentence.map(word => word.id)
    }

    this.sentenceService.updateSentence(this.sentenceId, dto).subscribe({
      next: (res: any) => {
        console.log('Update response:', res);
        alert('Sentence updated successfully!');
        this.dialogRef.close(true);
      },
      error: err =>
      {
        console.log(err);
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Failed to update sentence';
      }
    });
  }

  cancel(): void
  {
    this.dialogRef.close(false);
  }

  getWordCount(): number
  {
    return this.currentSentence.length;
  }

  getSentenceText(): string
  {
    return this.currentSentence.map(w => w.text).join(' ');
  }

  isWordInSentence(word: Word): boolean
  {
    return this.currentSentence.some(w => w.id === word.id);
  }
}
