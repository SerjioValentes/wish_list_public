import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PageDataService {
  http = inject(HttpClient);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createNewHoliday(wishList: any) {
    return this.http.post(`${env.apiUrl}holidays/createnewholiday`, wishList);
  }

  getAllHolidays() {
    return this.http.post<any>(`${env.apiUrl}holidays/allholidays`, {});
  }

  deleteHoliday(uuidHoliday: string) {
    return this.http.post(`${env.apiUrl}`, {
      uuidHoliday,
    });
  }

  setWishlist(wishList: any) {
    return this.http.post(`${env.apiUrl}`, wishList);
  }

  deleteWishById(wish: { wishUuId: string; uuidHoliday: string }) {
    return this.http.post(`${env.apiUrl}`, wish);
  }

  getWishesOfHoliday(uuIdHoliday: string) {
    return this.http.post<any[]>(`${env.apiUrl}`, {
      uuIdHoliday,
    });
  }

  getTokenByTgId(telegramId: string | number) {
    return this.http.post<any>(`${env.apiUrl}`, { telegramId });
  }

  reserveWish(wishUuId: string) {
    return this.http.post<any>(`${env.apiUrl}`, {
      wishUuId,
    });
  }
  deleteRelationHoliday(holidayUuId: string) {
    return this.http.post<any>(`${env.apiUrl}`, {
      holidayUuId,
    });
  }
}
