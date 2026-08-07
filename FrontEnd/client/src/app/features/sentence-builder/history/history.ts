import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { SentenceService } from '../../../core/services/sentence-service';
import { MatDialog } from '@angular/material/dialog';
import { EditSentence } from '../edit-sentence/edit-sentence';

interface Sentence
{
  id: number;
  text: string;
  createdAt: string;
  userId: number;
}

@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: './history.html',
  styleUrl: './history.css',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})

export class History implements OnInit, AfterViewInit
{

  private sentenceService = inject(SentenceService);
  private dialog = inject(MatDialog);

  displayedColumns = ['id', 'text', 'createdAt', 'actions'];

  dataSource = new MatTableDataSource<Sentence>();

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
      next: res => {
        this.dataSource.data = res;
      },
      error: err => console.log(err)
    });
  }

  edit(sentence: Sentence): void
  {
    const dialogRef = this.dialog.open(EditSentence, {
      width: '900px',
      data: sentence.id

    });
    dialogRef.afterClosed().subscribe(result =>
    {
      if(result)
      {
        this.loadSentences();
      }

    });

  }

  delete(sentence: Sentence): void
  {
    console.log(sentence);
  }
}
