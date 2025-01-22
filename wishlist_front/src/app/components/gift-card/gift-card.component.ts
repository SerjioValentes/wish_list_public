import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { PageDataService } from '../../data/services/pageData.service';
import { CommonModule } from '@angular/common';
import {
  TuiSwipeActions,
  TuiSheetDialogOptions,
  TuiSheetDialog,
} from '@taiga-ui/addon-mobile';
import { TuiCell } from '@taiga-ui/layout';
import { TuiAccordion } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/legacy';

import { TuiButton, TuiLoader, TuiAppearance, TuiExpand } from '@taiga-ui/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
// import { TelegramService } from '../../data/services/telegram.service';

@Component({
  selector: 'app-gift-card',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiSwipeActions,
    TuiLoader,
    TuiInputModule,
    TuiSheetDialog,
    TuiAppearance,
    CommonModule,
    TuiAccordion,
    FormsModule,
    TuiButton,
    TuiExpand,
    TuiCell,
  ],
  templateUrl: './gift-card.component.html',
  styleUrl: './gift-card.component.less',
})
export class GiftCardComponent {
  @Input() titleHoliday?: string;
  @Input() allHolidays?: any[];
  @Input() uuidHoliday: string = '';
  @Input() description_holiday?: string;
  @Input() location_holiday?: string;
  @Input() date_holiday?: string;
  @Input() wishList?: any[] = [];
  @Input() holidayId?: number;
  @Input() isOwner: boolean = false;
  @Input() whoCreator: string = '';

  @Output() allHolidaysChange = new EventEmitter<any[]>();

  // Dialogs controllers
  protected isDialogGiftOpened = false;
  protected isDialogOptionDeleteWishOpen = false;
  protected isDialogRelationDelHolidayOpen = false;

  // Loader
  protected isLoaderActive = false;

  protected isListOfPresentsDialogOpen = false;
  protected isDeleteDialogOpen = false;
  protected wishId?: number;
  protected wishUuId?: string;

  protected pageDataService = inject(PageDataService);

  openSwioer() {
  }

  // ----

  protected readonly newWishListForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    urlLink: new FormControl('', Validators.required),
  });
  // Dialog options -------
  protected readonly options: Partial<TuiSheetDialogOptions> = {
    label: 'Удалить праздник?',
    closeable: true,
  };

  protected readonly dialogOptionDeleteWish: Partial<TuiSheetDialogOptions> = {
    label: 'Вы уверены, что хотите удалить подарок?',
    closeable: true,
  };

  protected readonly dialogOptionDeleteRelationHoliday: Partial<TuiSheetDialogOptions> =
    {
      label:
        'Чтобы снова добавить этот праздник, необходимо будет снова перейти по ссылке',
      closeable: true,
    };

  protected readonly listOfPresentsDialogOptions: Partial<TuiSheetDialogOptions> =
    {
      closeable: true,
    };

  showDeleteDialog() {
    this.isDeleteDialogOpen = true;
  }

  addNewWishToList() {
    const newWish = {
      ...this.newWishListForm.value,
      uuidHoliday: this.uuidHoliday,
    };
    this.pageDataService.setWishlist(newWish).subscribe((res: any) => {
      this.wishList = res;
    });
  }

  openDialoogDeleteWish(wishUuId: string) {
    this.wishUuId = wishUuId;
    this.isDialogOptionDeleteWishOpen = true;
  }

  deleteWish() {
    if (!this.wishUuId) return;
    const wish = {
      wishUuId: this.wishUuId,
      uuidHoliday: this.uuidHoliday,
    };
    this.isLoaderActive = true;

    this.pageDataService.deleteWishById(wish).subscribe((res: any) => {
      this.wishList = res;
      this.isDialogOptionDeleteWishOpen = false;
      this.isLoaderActive = false;
    });
  }

  deleteHoliday() {
    this.pageDataService
      .deleteHoliday(this.uuidHoliday)
      .subscribe((res: any) => {
        this.allHolidaysChange.emit(res);
        this.isDeleteDialogOpen = false;
      });
  }

  showNewPresentDialog() {
    this.isDialogGiftOpened = true;
  }

  showListOfPresentsDialog() {
    this.isLoaderActive = true;
    this.pageDataService.getWishesOfHoliday(this.uuidHoliday).subscribe(res => {
      this.wishList = res;
      this.isListOfPresentsDialogOpen = true;
      this.isLoaderActive = false;
    });
  }

  protected reserveWish(wish: any) {
    this.isLoaderActive = true;
    const wishUuId = wish.wishUuId;
    this.pageDataService.reserveWish(wishUuId).subscribe(res => {
      wish.isBusy = res.isBusy;
      wish.isReservedReturnedUser = res.isReservedReturnedUser;
      wish.whoBooked = res.whoBooked;
      this.isLoaderActive = false;
    });
  }

  showMe() {
  }

  openLink() {
    // here you can open any link
  }

  // All dialogs controllers to open
  openDeleteReletionDialog() {
    this.isDialogRelationDelHolidayOpen = true;
  }

  deleteRelationHoliday() {
    this.pageDataService
      .deleteRelationHoliday(this.uuidHoliday)
      .subscribe(res => {
        this.allHolidaysChange.emit(res);
        this.isDialogRelationDelHolidayOpen = false;
      });
  }
}
