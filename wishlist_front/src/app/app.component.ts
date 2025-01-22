import { TuiRoot } from '@taiga-ui/core';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelegramService } from './data/services/telegram.service';
import BottomMenuComponent from './components/bottom-menu/bottom-menu.component';
import { AlertComponent } from './components/alert/alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRoot, BottomMenuComponent, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  telegram = inject(TelegramService);
  constructor() {
    this.telegram.ready();
  }
}
