import { Component, inject } from '@angular/core';
import { PhotosService } from '../../data/services/photos.service';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, ImageModule, DividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() {
    this.photosService.getAboutMeInfo().subscribe((res: any) => {
      return this.about_me_info = res?.data[0]
    })
  }
  photosService = inject(PhotosService)
  about_me_info: any = {}

}
