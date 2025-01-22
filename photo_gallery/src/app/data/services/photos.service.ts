import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../../../environments/environment';
import { IArticles } from '../types/articles';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
http = inject(HttpClient)

  getPortraits(){
  return this.http.get(`${env.apiUrl}portraits-plur?populate=*&filters[slug][$eq]=portraits`)
}

  getNaturePh(){
  return this.http.get(`${env.apiUrl}portraits-plur?populate=*&filters[slug][$eq]=nature`)
  }

  getLifePhotos(){
  return this.http.get(`${env.apiUrl}portraits-plur?populate=*&filters[slug][$eq]=life`)
  }
  
  getArchitecturePhotos(){
    return this.http.get(`${env.apiUrl}portraits-plur?populate=*&filters[slug][$eq]=architecture`)
  }
  
  getArtPhotos(){
    return this.http.get(`${env.apiUrl}portraits-plur?populate=*&filters[slug][$eq]=art`)
  }
  
  getAboutMeInfo(){
    return this.http.get(`${env.apiUrl}articles?populate=*&filter[slug][$eq]=about_me`)
  }
  
  getArticles(){
    // return this.http.get<IArticles>(`${env.apiUrl}articles?populate=*&filters[slug][$eq]=article`)
    return this.http.get(`${env.apiUrl}articles?populate=*`)
  }

}
