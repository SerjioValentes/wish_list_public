import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-up-menu',
  standalone: true,
  imports: [
    ToolbarModule,
    MenuModule,
    AvatarModule,
    ButtonModule,
  ],
  templateUrl: './up-menu.component.html',
  styleUrl: './up-menu.component.scss'
})
export class UpMenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
        // {
        //     label: 'Соглашение',
        //     items: [
        //         {
        //             label: 'Открыть',
        //             icon: 'pi pi-refresh'
        //         }
        //     ]
        // },
        {
          label: 'Настройки профиля',
          items: [
              {
                  label: 'Обо мне',
                  icon: 'pi pi-refresh'
              },
              {
                  label: 'Мои курсы',
                  icon: 'pi pi-upload'
              }
          ]
      }
    ];
}
}
