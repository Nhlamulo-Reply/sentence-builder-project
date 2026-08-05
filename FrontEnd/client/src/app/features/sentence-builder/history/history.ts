import { Component } from '@angular/core';


interface Sentence {
  text: string;
  createdDate: string;
  createdTime: string;
}

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.html',
  styleUrl: './history.css',
  standalone: true
})
export class History {

  Math = Math;
  currentPage = 1;
  itemsPerPage = 3;

  sentences: Sentence[] = [
    { text: 'The boy reads a book quickly.', createdDate: 'May 26, 2025', createdTime: '10:30 AM' },
    { text: 'She walks under the tree.', createdDate: 'May 26, 2025', createdTime: '10:28 AM' },
    { text: 'The cat is small and cute.', createdDate: 'May 26, 2025', createdTime: '10:25 AM' },
    { text: 'We play football in the park.', createdDate: 'May 26, 2025', createdTime: '10:20 AM' },
    { text: 'I love learning new words.', createdDate: 'May 25, 2025', createdTime: '3:15 PM' },
    { text: 'The beautiful sunset amazed us.', createdDate: 'May 25, 2025', createdTime: '2:00 PM' }
  ];

  get totalPages(): number {
    return Math.ceil(this.sentences.length / this.itemsPerPage);
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  viewSentence(sentence: Sentence, event: Event): void {
    event.preventDefault();
    alert(`Viewing: ${sentence.text}`);
  }

}
