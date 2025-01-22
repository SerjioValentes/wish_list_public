import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import {  } from './pages/portraits/portraits.component';
import { BottomMenuComponent } from './component/bottom-menu/bottom-menu.component';
import { MainPreset } from '../styles/preset-main';
import { UpMenuComponent } from './component/up-menu/up-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BottomMenuComponent, UpMenuComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // isDarkMode = false; // <----- Turn on with darkMode preset
  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({ 
      // preset: this.isDarkMode ? MainPreset_dark : MainPreset, // <----- On with darkMode variable
      preset: MainPreset,
      options: {
        cssLayer: {
          prefix: 'p',
          darkModeSelector: 'system',
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities'
        }
      }
    })
}
}
