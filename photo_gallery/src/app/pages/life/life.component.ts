import { Component, inject } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';

import { PhotosService } from '../../data/services/photos.service';

@Component({
  selector: 'app-life',
  standalone: true,
  imports: [
    DividerModule,
    ImageModule,
    GalleriaModule,
    ],
     
  templateUrl: './life.component.html',
  styleUrl: './life.component.scss'
})
export class LifeComponent {
  
  constructor() {
    this.photosService.getLifePhotos().subscribe((res: any) => {
      return this.photoData = res?.data[0]
    })
  }
  
  photosService = inject(PhotosService)
  photoData: any = []
  visible: boolean = false;

  openDrawer(){
    this.visible = !this.visible;
  }  
}
