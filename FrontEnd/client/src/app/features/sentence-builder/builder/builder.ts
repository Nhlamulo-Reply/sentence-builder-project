import { Component } from '@angular/core';

@Component({
  selector: 'app-builder',
  imports: [],
  templateUrl: './builder.html',
  styleUrl: './builder.css',
  standalone: true
})
export class Builder {

  availableWords: string[] = [
    'Dog', 'Cat', 'Boy', 'Girl', 'Book', 'House', 'Tree', 'Car',
    'Teacher', 'Student', 'City', 'Phone', 'Friend', 'Game', 'Music', 'Pen'
  ];

  currentSentence: string[] = ['The', 'boy', 'reads', 'a', 'book', 'quickly'];

  addWord(word: string): void {
    this.currentSentence.push(word);
  }

  clearSentence(): void {
    this.currentSentence = [];
  }

  resetSentence(): void {
    this.currentSentence = ['The', 'boy', 'reads', 'a', 'book', 'quickly'];
  }

  saveSentence(): void {
    // Logic to save sentence
    console.log('Saving sentence:', this.currentSentence.join(' '));
    alert('Sentence saved!');
  }
}
