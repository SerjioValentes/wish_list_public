import { Component, inject, OnInit } from '@angular/core';
import { PageDataService } from '../../data/services/pageData.service';
import { GiftCardComponent } from '../../components/gift-card/gift-card.component';
import { DataService } from '../../data/services/data-sharing.service';
// import { TelegramService } from '../../data/services/telegram.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [GiftCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}
  pageDataService = inject(PageDataService);
  // telegramService = inject(TelegramService);

  allWishes: any = [];

  templateGiftCard: any = {
    whoCreator: 'me',
    isOwner: true,
    uuidHoliday: 'me',
    allHolidays: 'me',
    holidayId: 'me',
    titleHoliday: 'title of holiday',
    description_holiday: 'description',
    date_holiday: '19.02.36',
    location_holiday: 'location',
  };

  ngOnInit() {
    this.dataService.currentData.subscribe(data => {
      this.allWishes = data;
    });

    this.pageDataService.getAllHolidays().subscribe(res => {
      this.allWishes = res;
    });
    setTimeout(() => {
      this.showSwipeHint = false;
    }, 5000); // 5 секунд
  }

  public getValue(value: boolean) {
  }

  showSwipeHint: boolean = true; // Показывать анимацию

  // Логика для скрытия подсказки после взаимодействия
  onSwipeStart(event: TouchEvent): void {
    this.showSwipeHint = false; // Скрываем подсказку при касании
  }

  onSwipeMove(event: TouchEvent): void {
    // Логика для отслеживания свайпа (если нужно)
  }

  onSwipeEnd(event: TouchEvent): void {
    // Завершение свайпа
  }
}
