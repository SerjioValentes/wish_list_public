import { Component, inject } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';

import { PhotosService } from '../../data/services/photos.service';

@Component({
  selector: 'app-portraits',
  standalone: true,
  imports: [
    DividerModule,
    ImageModule,
    GalleriaModule,
    ],
     
  templateUrl: './portraits.component.html',
  styleUrl: './portraits.component.scss'
})
export class PortraitsComponent {
  
  constructor() {
    this.photosService.getPortraits().subscribe((res: any) => {
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
