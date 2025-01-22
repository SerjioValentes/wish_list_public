import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { DataService } from '../../data/services/data-sharing.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.less',
})
export class AlertComponent implements OnInit {
  private readonly alerts = inject(TuiAlertService);
  constructor(private dataService: DataService) {}
  private alertMessage: string = '';

  protected showErrorAlert(): void {
    this.alerts
      .open(
        `Пожалуйста перезагрузите страницу или повторите попытку позже <strong></strong>`,
        {
          label: this.alertMessage,
          appearance: 'negative',
          autoClose: 3000,
        }
      )
      .subscribe();
  }
  protected showNotification(): void {
    this.alerts
      .open(
        // `Пожалуйста перезагрузите страницу или повторите попытку позже <strong></strong>`,
        {
          label: this.alertMessage,
          // appearance: 'negative',
          autoClose: 3000,
        }
      )
      .subscribe();
  }
  ngOnInit() {
    this.dataService.currentAlert.subscribe(data => {
      if (!data) {
        return;
      }
      this.alertMessage = data;
      this.showErrorAlert();
    });
  }
}
