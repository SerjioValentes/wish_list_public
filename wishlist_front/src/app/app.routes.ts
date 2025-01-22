import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { ErrorComponent } from './pages/error/error.component';
import { FaqComponent } from './pages/faq/faq.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'faq', component: FaqComponent },
  { path: 'error', component: ErrorComponent },
];
