import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotosService } from '../../data/services/photos.service';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-nature',
  standalone: true,
  imports: [
    RouterOutlet,
    DividerModule,
    ImageModule,
    GalleriaModule
  ],
  templateUrl: './nature.component.html',
  styleUrl: './nature.component.scss'
})
export class NatureComponent {
  constructor() {
    this.photosService.getNaturePh().subscribe((res: any) => {
      return this.photoData = res?.data[0]
    })
  }
  
  photosService = inject(PhotosService)
  photoData: any = []
  visible: boolean = false;

  openDrawer(){
    this.visible = !this.visible;
  }  
  showMe(){
  }
}
