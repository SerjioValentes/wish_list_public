import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RouterModule } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-bottom-menu',
  standalone: true,
  imports: [ButtonModule, DrawerModule, RouterModule,
    SplitButtonModule,
    ToastModule

  ],
  templateUrl: './bottom-menu.component.html',
  styleUrl: './bottom-menu.component.scss',
  providers: [MessageService]

})
export class BottomMenuComponent {
  items: MenuItem[] = [];

  constructor(private messageService: MessageService) {
    this.items = [
      { label: 'Портреты', routerLink: ['/portraits'] },
      { label: 'Жизнь', routerLink: ['/life'] },
      { label: 'Природа', routerLink: ['/nature'] },
      { label: 'Архитектура', routerLink: ['/architecture'] },
      { separator: true },
      { label: 'Домой', routerLink: ['/'] }
    ];
}
  
}
