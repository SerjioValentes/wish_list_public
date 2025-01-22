import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAccordion } from '@taiga-ui/kit';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [TuiAccordion],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {}
