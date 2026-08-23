import {AfterViewInit,Component,inject,OnInit,ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { SentenceService } from '../../../core/services/sentence-service';
import { EditSentenceModal } from '../edit-sentence/edit-sentence';
import {Sentence} from '../../../core/Models/Sentence';


@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: './history.html',
  styleUrl: './history.css',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    EditSentenceModal
  ]
})
export class History implements OnInit, AfterViewInit {

  private sentenceService = inject(SentenceService);
  displayedColumns = ['id','text','createdAt','actions'];
  dataSource = new MatTableDataSource<Sentence>();
  selectedSentenceId: number | null = null;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void
  {
    this.loadSentences();
  }
  ngAfterViewInit(): void
  {
    this.dataSource.paginator = this.paginator;
  }
  loadSentences(): void
  {

    this.sentenceService.getAllSentences().subscribe({
      next: (res: Sentence[]) => {
        this.dataSource.data = res;
      },
      error: err => {
        console.log(err);
      }

    });

  }
  editModal(sentence: Sentence): void
  {
    this.selectedSentenceId = sentence.id;
  }
  closeModal(): void
  {
    this.selectedSentenceId = null;
  }

  sentenceUpdated(): void
  {
    this.closeModal();
    this.loadSentences();
  }

}
