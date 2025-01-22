import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Создаём BehaviorSubject для хранения данных
  private dataSource = new BehaviorSubject<any>('');
  private alertSource = new BehaviorSubject<any>('');

  // Observable, на который можно подписаться
  currentData = this.dataSource.asObservable();
  currentAlert = this.alertSource.asObservable();

  constructor() {}

  // Метод для изменения данных
  changeData(data: any) {
    this.dataSource.next(data); // Обновляем значение
  }

  changeAlert(data: string) {
    this.alertSource.next(data); // Обновляем значение
  }
}
