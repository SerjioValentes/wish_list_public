import { Routes } from '@angular/router';
import { NatureComponent } from './pages/nature/nature.component';
import { PortraitsComponent } from './pages/portraits/portraits.component';
import { LifeComponent } from './pages/life/life.component';
import { ArchitectureComponent } from './pages/architecture/architecture.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtComponent } from './pages/art/art.component';
import { ArticlesComponent } from './pages/articles/articles.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'portraits', component: PortraitsComponent},
    {path: 'art', component: ArtComponent},
    {path: 'nature', component: NatureComponent},
    {path: 'life', component: LifeComponent},
    {path: 'architecture', component: ArchitectureComponent},
    {path: 'articles', component: ArticlesComponent},
];
