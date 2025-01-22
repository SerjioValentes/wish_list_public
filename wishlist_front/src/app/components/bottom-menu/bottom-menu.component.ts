import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiTabBar } from '@taiga-ui/addon-mobile';
import { PageDataService } from '../../data/services/pageData.service';
import { CommonModule } from '@angular/common';
import { TuiButton, TuiDropdown } from '@taiga-ui/core';
import { TuiSheetDialog } from '@taiga-ui/addon-mobile';
import { FormsModule, Validators } from '@angular/forms';
import { TuiInputModule, TuiTextareaModule } from '@taiga-ui/legacy';
import { TuiInputDateModule } from '@taiga-ui/legacy';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiCalendar } from '@taiga-ui/core';
import { DataService } from '../../data/services/data-sharing.service';

@Component({
  standalone: true,
  selector: 'app-bottom-menu',
  imports: [
    TuiTabBar,
    RouterLink,
    RouterLinkActive,
    TuiButton,
    ReactiveFormsModule,
    TuiDropdown,
    TuiSheetDialog,
    TuiInputDateModule,
    CommonModule,
    TuiInputModule,
    FormsModule,
    TuiTextareaModule,
    TuiCalendar,
  ],
  templateUrl: './bottom-menu.component.html',
  styleUrl: './bottom-menu.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BottomMenuComponent {
  constructor(private dataService: DataService) {}

  // Injectors
  pageDataService = inject(PageDataService);

  // Variables
  protected activeItemIndex = 1;
  protected newHolidayDialog: boolean = false;
  protected readonly routes: any = {
    Faq: ['/faq'],
    Home: ['/'],
  };
  protected readonly newHolidayForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl(),
    location: new FormControl('', Validators.required),
  });

  createNewHoliday() {
    if (!this.newHolidayForm.value.date) {
      this.newHolidayDialog = false;
      return;
    }

    const newHoliday: any = {
      ...this.newHolidayForm.value,
      date: this.newHolidayForm.value.date.toString(),
    };

    this.pageDataService.createNewHoliday(newHoliday).subscribe((res: any) => {
      this.dataService.changeData(res);
    });
    this.newHolidayDialog = false;
  }

  showNewHolidayDialog() {
    this.newHolidayDialog = true;
  }

  // Calendar
  protected value: TuiDay | null = null;

  protected onDayClick(day: TuiDay): void {
    this.newHolidayForm.patchValue({ date: day });
    this.value = day;
  }
}
