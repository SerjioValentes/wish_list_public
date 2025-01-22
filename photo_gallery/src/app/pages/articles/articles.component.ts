import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PhotosService } from '../../data/services/photos.service';
import { IArticles } from '../../data/types/articles';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  photosService = inject(PhotosService)
  articlesData?: IArticles;
  showMeMore(){
  }

  constructor() {
    this.photosService.getArticles().subscribe((res: any) => {
      return this.articlesData = res
    })
  }
}
