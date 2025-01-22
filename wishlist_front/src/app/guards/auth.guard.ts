import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TelegramService } from '../data/services/telegram.service';
import { PageDataService } from '../data/services/pageData.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const telegramService = inject(TelegramService);
  const pageDataService = inject(PageDataService);

  const userId = telegramService.userId();
  const token = localStorage.getItem('accessToken');

  telegramService.expand();

  if (token) {
    return true;
  }

  if (!userId) {
    router.navigate(['/error']);
    return false;
  }

  if (!token) {
    try {
      pageDataService.getTokenByTgId(userId).subscribe(res => {
        localStorage.setItem('accessToken', res.token);
        return true;
      });
    } catch (error: any) {
      return false;
    }
  }
  return true;
};
