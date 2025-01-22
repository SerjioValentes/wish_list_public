import {
  TuiNativeValidator
} from "./chunk-MIENEZB7.js";
import {
  MASKITO_DEFAULT_OPTIONS,
  TUI_CALENDAR_MONTHS,
  TUI_ITEMS_HANDLERS,
  maskitoTransform,
  maskitoUpdateElement
} from "./chunk-C6YM2PII.js";
import {
  TuiCalendarYear,
  TuiLet,
  TuiLink,
  TuiRepeatTimes,
  TuiSpinButton,
  coerceBooleanProperty
} from "./chunk-5JIKOIFA.js";
import {
  EMPTY_QUERY,
  PolymorpheusOutlet,
  TUI_FALSE_HANDLER,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TUI_TRUE_HANDLER,
  TuiAppearance,
  TuiControl,
  TuiDataList,
  TuiDataListComponent,
  TuiDataListDirective,
  TuiDay,
  TuiHovered,
  TuiLoader,
  TuiMonth,
  TuiMonthRange,
  TuiOptGroup,
  TuiOption,
  TuiScrollbar,
  TuiYear,
  takeUntilDestroyed,
  toSignal,
  tuiAsDataListAccessor,
  tuiClamp,
  tuiControlValue,
  tuiCreateToken,
  tuiFallbackValueProvider,
  tuiInjectDataListSize,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsNativeFocused,
  tuiIsPresent,
  tuiIsString,
  tuiNullableSame,
  tuiProvideOptions,
  tuiPure,
  tuiQuantize,
  tuiRound,
  tuiTypedFromEvent,
  tuiWatch
} from "./chunk-IQQZLQHI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControl,
  NgControlStatus,
  NgModel,
  RangeValueAccessor
} from "./chunk-UH2ALZYR.js";
import {
  AsyncPipe,
  DOCUMENT,
  NgForOf,
  NgIf
} from "./chunk-GWZ3OMU7.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  INJECTOR$1,
  Input,
  Output,
  Pipe,
  ViewChildren,
  ViewEncapsulation$1,
  computed,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-FW6GFWFQ.js";
import {
  __decorate,
  combineLatest,
  filter,
  map,
  merge,
  repeat,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap
} from "./chunk-D5M5KKRG.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-calendar-month.mjs
function TuiCalendarMonth_tui_scrollbar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-scrollbar", 2)(1, "tui-calendar-year", 3);
    ɵɵlistener("yearClick", function TuiCalendarMonth_tui_scrollbar_0_Template_tui_calendar_year_yearClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickerYearClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("initialItem", ctx_r1.year.year)("max", ctx_r1.computedMax.year)("min", ctx_r1.computedMin.year)("value", ctx_r1.value);
  }
}
function TuiCalendarMonth_ng_template_1_div_3_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("click", function TuiCalendarMonth_ng_template_1_div_3_ng_container_1_div_1_Template_div_click_0_listener() {
      const item_r5 = ɵɵrestoreView(_r4).tuiLet;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onItemClick(item_r5));
    })("tuiHoveredChange", function TuiCalendarMonth_ng_template_1_div_3_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      const item_r5 = ɵɵrestoreView(_r4).tuiLet;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onItemHovered($event, item_r5));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r5 = ctx.tuiLet;
    const column_r6 = ɵɵnextContext().$implicit;
    const row_r7 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("t-cell_disabled", ctx_r1.disabledItemHandlerWithMinMax(item_r5))("t-cell_today", ctx_r1.isItemToday(item_r5));
    ɵɵattribute("data-range", ctx_r1.getItemRange(item_r5));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", (tmp_11_0 = ctx_r1.months()) == null ? null : tmp_11_0[row_r7 * 4 + column_r6], " ");
  }
}
function TuiCalendarMonth_ng_template_1_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiCalendarMonth_ng_template_1_div_3_ng_container_1_div_1_Template, 2, 6, "div", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const row_r7 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("tuiLet", ctx_r1.getTuiMonth(row_r7 * 4 + column_r6, ctx_r1.year.year));
  }
}
function TuiCalendarMonth_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, TuiCalendarMonth_ng_template_1_div_3_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", 4);
  }
}
function TuiCalendarMonth_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-spin-button", 4);
    ɵɵlistener("leftClick", function TuiCalendarMonth_ng_template_1_Template_tui_spin_button_leftClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPreviousYear());
    })("rightClick", function TuiCalendarMonth_ng_template_1_Template_tui_spin_button_rightClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNextYear());
    });
    ɵɵelementStart(1, "button", 5);
    ɵɵlistener("click", function TuiCalendarMonth_ng_template_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onYearClick());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
    ɵɵtemplate(3, TuiCalendarMonth_ng_template_1_div_3_Template, 2, 1, "div", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("focusable", false)("leftDisabled", ctx_r1.previousYearDisabled)("rightDisabled", ctx_r1.nextYearDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.year.formattedYear, " ");
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", 3);
  }
}
var TODAY = TuiDay.currentLocal();
var TuiCalendarMonth = class _TuiCalendarMonth {
  constructor() {
    this.isYearPickerShown = false;
    this.months = toSignal(inject(TUI_CALENDAR_MONTHS));
    this.value = null;
    this.year = TODAY;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.minLength = null;
    this.maxLength = null;
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.monthClick = new EventEmitter();
    this.hoveredItemChange = new EventEmitter();
    this.yearChange = new EventEmitter();
    this.hoveredItem = null;
  }
  get isSingle() {
    return this.value instanceof TuiMonthRange && this.value.isSingleMonth;
  }
  onNextYear() {
    this.updateActiveYear(this.year.append({
      year: 1
    }));
  }
  onPreviousYear() {
    this.updateActiveYear(this.year.append({
      year: -1
    }));
  }
  getItemRange(item) {
    const {
      value,
      hoveredItem
    } = this;
    if (!(value instanceof TuiMonthRange)) {
      return value?.monthSame(item) ? "active" : null;
    }
    const months = item.month + item.year * 12;
    const hovered = hoveredItem ? hoveredItem.month + hoveredItem.year * 12 : null;
    const from = value.from.month + value.from.year * 12;
    const to = value.to.month + value.to.year * 12;
    const picking = this.isSingle ? hovered : null;
    const min = Math.min(from, to, picking ?? from);
    const max = Math.max(from, to, picking ?? from);
    if (min === max && min === months) {
      return "active";
    }
    if (min === months) {
      return "start";
    }
    if (max === months) {
      return "end";
    }
    return min < months && months < max ? "middle" : null;
  }
  get computedMin() {
    return this.min ?? TUI_FIRST_DAY;
  }
  get computedMax() {
    return this.max ?? TUI_LAST_DAY;
  }
  get previousYearDisabled() {
    return this.year.yearSameOrBefore(this.computedMin);
  }
  get nextYearDisabled() {
    return this.year.yearSameOrAfter(this.computedMax);
  }
  get disabledItemHandlerWithMinMax() {
    return this.calculateDisabledItemHandlerWithMinMax(this.disabledItemHandler, this.value, this.computedMin, this.computedMax, this.minLength, this.maxLength);
  }
  getTuiMonth(monthNumber, yearNumber) {
    return new TuiMonth(yearNumber, monthNumber);
  }
  isItemToday(item) {
    return TODAY.monthSame(item);
  }
  onPickerYearClick(year) {
    this.isYearPickerShown = false;
    if (this.year.year !== year) {
      this.updateActiveYear(new TuiYear(year));
    }
  }
  onItemClick(month) {
    if (!this.disabledItemHandlerWithMinMax(month)) {
      this.monthClick.emit(month);
    }
  }
  onYearClick() {
    this.isYearPickerShown = true;
  }
  onItemHovered(hovered, item) {
    this.updateHoveredItem(hovered ? item : null);
  }
  calculateDisabledItemHandlerWithMinMax(disabledItemHandler, value, min, max, minLength, maxLength) {
    return (item) => {
      const delta = value instanceof TuiMonthRange && value.isSingleMonth ? Math.abs(item.year * 12 + item.month - value.from.year * 12 - value.from.month) : 0;
      const tooLong = delta && maxLength && delta > maxLength;
      const tooShort = delta && minLength && delta < minLength;
      return tooLong || tooShort || item.monthBefore(min) || item.monthAfter(max) || disabledItemHandler(item);
    };
  }
  updateHoveredItem(month) {
    if (tuiNullableSame(this.hoveredItem, month, (a, b) => a.monthSame(b))) {
      return;
    }
    this.hoveredItem = month;
    this.hoveredItemChange.emit(month);
  }
  updateActiveYear(year) {
    this.year = year;
    this.yearChange.emit(year);
  }
  static {
    this.ɵfac = function TuiCalendarMonth_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarMonth)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarMonth,
      selectors: [["tui-calendar-month"]],
      hostVars: 2,
      hostBindings: function TuiCalendarMonth_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isSingle);
        }
      },
      inputs: {
        value: "value",
        year: "year",
        disabledItemHandler: "disabledItemHandler",
        minLength: "minLength",
        maxLength: "maxLength",
        min: "min",
        max: "max"
      },
      outputs: {
        monthClick: "monthClick",
        hoveredItemChange: "hoveredItemChange",
        yearChange: "yearChange"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [["monthSelect", ""], ["class", "t-scrollbar", 4, "ngIf", "ngIfElse"], [1, "t-scrollbar"], [3, "yearClick", "initialItem", "max", "min", "value"], [1, "t-spin", 3, "leftClick", "rightClick", "focusable", "leftDisabled", "rightDisabled"], ["automation-id", "tui-calendar-month__active-year", "tabIndex", "-1", "tuiLink", "", "type", "button", 3, "click"], ["class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["class", "t-cell", 3, "t-cell_disabled", "t-cell_today", "click", "tuiHoveredChange", 4, "tuiLet"], [1, "t-cell", 3, "click", "tuiHoveredChange"]],
      template: function TuiCalendarMonth_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiCalendarMonth_tui_scrollbar_0_Template, 2, 4, "tui-scrollbar", 1)(1, TuiCalendarMonth_ng_template_1_Template, 4, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const monthSelect_r8 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.isYearPickerShown)("ngIfElse", monthSelect_r8);
        }
      },
      dependencies: [NgIf, TuiCalendarYear, TuiHovered, TuiLet, TuiLink, TuiRepeatTimes, TuiScrollbar, TuiSpinButton],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{right:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{left:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}[_nghost-%COMP%]{display:block;block-size:12rem;inline-size:16rem;padding:1.125rem;box-sizing:content-box}.t-spin[_ngcontent-%COMP%]{margin-block-end:1rem}.t-cell[_ngcontent-%COMP%]{inline-size:4rem;border-block-start-width:.75rem;border-block-end-width:.75rem}.t-scrollbar[_ngcontent-%COMP%]{block-size:inherit;inline-size:inherit}`],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiCalendarMonth.prototype, "calculateDisabledItemHandlerWithMinMax", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarMonth, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-month",
      imports: [AsyncPipe, NgForOf, NgIf, TuiCalendarYear, TuiHovered, TuiLet, TuiLink, TuiRepeatTimes, TuiScrollbar, TuiSpinButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._picking]": "isSingle"
      },
      template: '<tui-scrollbar\n    *ngIf="isYearPickerShown; else monthSelect"\n    class="t-scrollbar"\n>\n    <tui-calendar-year\n        [initialItem]="year.year"\n        [max]="computedMax.year"\n        [min]="computedMin.year"\n        [value]="value"\n        (yearClick)="onPickerYearClick($event)"\n    />\n</tui-scrollbar>\n<ng-template #monthSelect>\n    <tui-spin-button\n        class="t-spin"\n        [focusable]="false"\n        [leftDisabled]="previousYearDisabled"\n        [rightDisabled]="nextYearDisabled"\n        (leftClick)="onPreviousYear()"\n        (rightClick)="onNextYear()"\n    >\n        <button\n            automation-id="tui-calendar-month__active-year"\n            tabIndex="-1"\n            tuiLink\n            type="button"\n            (click)="onYearClick()"\n        >\n            {{ year.formattedYear }}\n        </button>\n    </tui-spin-button>\n    <div\n        *tuiRepeatTimes="let row of 3"\n        class="t-row"\n    >\n        <ng-container *tuiRepeatTimes="let column of 4">\n            <div\n                *tuiLet="getTuiMonth(row * 4 + column, year.year) as item"\n                class="t-cell"\n                [attr.data-range]="getItemRange(item)"\n                [class.t-cell_disabled]="disabledItemHandlerWithMinMax(item)"\n                [class.t-cell_today]="isItemToday(item)"\n                (click)="onItemClick(item)"\n                (tuiHoveredChange)="onItemHovered($event, item)"\n            >\n                {{ months()?.[row * 4 + column] }}\n            </div>\n        </ng-container>\n    </div>\n</ng-template>\n',
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;block-size:12rem;inline-size:16rem;padding:1.125rem;box-sizing:content-box}.t-spin{margin-block-end:1rem}.t-cell{inline-size:4rem;border-block-start-width:.75rem;border-block-end-width:.75rem}.t-scrollbar{block-size:inherit;inline-size:inherit}
`]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    year: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    minLength: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    monthClick: [{
      type: Output
    }],
    hoveredItemChange: [{
      type: Output
    }],
    yearChange: [{
      type: Output
    }],
    calculateDisabledItemHandlerWithMinMax: []
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-checkbox.mjs
var _c0 = ["type", "checkbox", "tuiCheckbox", ""];
var TUI_CHECKBOX_DEFAULT_OPTIONS = {
  size: "m",
  appearance: (el) => el.checked || el.indeterminate ? "primary" : "outline-grayscale",
  icons: {
    checked: "@tui.check",
    indeterminate: "@tui.minus"
  }
};
var TUI_CHECKBOX_OPTIONS = tuiCreateToken(TUI_CHECKBOX_DEFAULT_OPTIONS);
function tuiCheckboxOptionsProvider(options) {
  return tuiProvideOptions(TUI_CHECKBOX_OPTIONS, options, TUI_CHECKBOX_DEFAULT_OPTIONS);
}
var TuiCheckbox = class _TuiCheckbox {
  constructor() {
    this.appearance = inject(TuiAppearance);
    this.options = inject(TUI_CHECKBOX_OPTIONS);
    this.resolver = tuiInjectIconResolver();
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.size = this.options.size;
    this.control = inject(NgControl, {
      optional: true,
      self: true
    });
  }
  ngOnInit() {
    if (!this.control?.valueChanges) {
      return;
    }
    tuiControlValue(this.control).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      const fix = this.control instanceof NgModel && value === null ? this.control.model : value;
      this.el.indeterminate = fix === null;
    });
  }
  ngDoCheck() {
    this.appearance.tuiAppearance = tuiIsString(this.options.appearance) ? this.options.appearance : this.options.appearance(this.el);
  }
  getIcon(state) {
    const option = this.options.icons[state];
    const icon = tuiIsString(option) ? option : option(this.size);
    return icon && `url(${this.resolver(icon)})`;
  }
  static {
    this.ɵfac = function TuiCheckbox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCheckbox)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCheckbox,
      selectors: [["input", "type", "checkbox", "tuiCheckbox", ""]],
      hostVars: 8,
      hostBindings: function TuiCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("disabled", !ctx.control || ctx.control.disabled);
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--t-checked-icon", ctx.getIcon("checked"))("--t-indeterminate-icon", ctx.getIcon("indeterminate"));
          ɵɵclassProp("_readonly", !ctx.control);
        }
      },
      inputs: {
        size: "size"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus"]
      }, TuiNativeValidator]), ɵɵStandaloneFeature],
      attrs: _c0,
      decls: 0,
      vars: 0,
      template: function TuiCheckbox_Template(rf, ctx) {
      },
      styles: [`[tuiCheckbox]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";background:currentColor;-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:disabled._readonly{opacity:1}[tuiCheckbox]:checked:before,[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-checked-icon);mask-image:var(--t-checked-icon);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out}[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate-icon);mask-image:var(--t-indeterminate-icon)}[tuiCheckbox][data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}
`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckbox, [{
    type: Component,
    args: [{
      standalone: true,
      selector: 'input[type="checkbox"][tuiCheckbox]',
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceFocus"]
      }, TuiNativeValidator],
      host: {
        "[disabled]": "!control || control.disabled",
        "[attr.data-size]": "size",
        "[class._readonly]": "!control",
        "[style.--t-checked-icon]": 'getIcon("checked")',
        "[style.--t-indeterminate-icon]": 'getIcon("indeterminate")'
      },
      styles: [`[tuiCheckbox]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";background:currentColor;-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:disabled._readonly{opacity:1}[tuiCheckbox]:checked:before,[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-checked-icon);mask-image:var(--t-checked-icon);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out}[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate-icon);mask-image:var(--t-indeterminate-icon)}[tuiCheckbox][data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}
`]
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-element.mjs
var TuiElement = class _TuiElement {
  constructor() {
    this.nativeElement = tuiInjectElement();
    return new ElementRef(this.nativeElement);
  }
  static {
    this.ɵfac = function TuiElement_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiElement)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiElement,
      selectors: [["", "tuiElement", ""]],
      exportAs: ["elementRef"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElement, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiElement]",
      exportAs: "elementRef"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-data-list-wrapper.mjs
function TuiDataListWrapperComponent_tui_data_list_0_button_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiDataListWrapperComponent_tui_data_list_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5, 1);
    ɵɵlistener("click", function TuiDataListWrapperComponent_tui_data_list_0_button_1_Template_button_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.itemClick.emit(item_r2));
    });
    ɵɵelementStart(2, "span", 6);
    ɵɵtemplate(3, TuiDataListWrapperComponent_tui_data_list_0_button_1_ng_container_3_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const elementRef_r5 = ɵɵreference(1);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r2.disabledItemHandler(item_r2))("value", item_r2);
    ɵɵadvance(3);
    ɵɵproperty("polymorpheusOutlet", ctx_r2.itemContent)("polymorpheusOutletContext", ctx_r2.getContext(item_r2, elementRef_r5));
  }
}
function TuiDataListWrapperComponent_tui_data_list_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 3);
    ɵɵtemplate(1, TuiDataListWrapperComponent_tui_data_list_0_button_1_Template, 4, 4, "button", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("emptyContent", ctx_r2.emptyContent)("size", ctx_r2.size);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.$cast(ctx_r2.items));
  }
}
function TuiDataListWrapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-loader", 8);
  }
}
var _c02 = ["labels", ""];
function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7, 1);
    ɵɵlistener("click", function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_Template_button_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.itemClick.emit(item_r2));
    });
    ɵɵtemplate(2, TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const elementRef_r5 = ɵɵreference(1);
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r2.disabledItemHandler(item_r2))("value", item_r2);
    ɵɵadvance(2);
    ɵɵproperty("polymorpheusOutlet", ctx_r2.itemContent)("polymorpheusOutletContext", ctx_r2.getContext(item_r2, elementRef_r5));
  }
}
function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-opt-group", 5);
    ɵɵtemplate(1, TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_Template, 3, 4, "button", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("label", ctx_r2.labels[index_r7]);
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r6);
  }
}
function TuiDataListGroupWrapperComponent_tui_data_list_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 3);
    ɵɵtemplate(1, TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_Template, 2, 2, "tui-opt-group", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("emptyContent", ctx_r2.emptyContent)("size", ctx_r2.size);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.items);
  }
}
function TuiDataListGroupWrapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-loader", 9);
  }
}
var _c1 = "[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1;min-inline-size:0}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}";
var TuiDataListWrapperComponent = class _TuiDataListWrapperComponent {
  constructor() {
    this.itemsHandlers = inject(TUI_ITEMS_HANDLERS);
    this.optionsQuery = EMPTY_QUERY;
    this.items = [];
    this.disabledItemHandler = this.itemsHandlers.disabledItemHandler;
    this.size = tuiInjectDataListSize();
    this.itemClick = new EventEmitter();
    this.itemContent = ({
      $implicit
    }) => this.itemsHandlers.stringify($implicit);
  }
  getContext($implicit, {
    nativeElement
  }) {
    return {
      $implicit,
      active: tuiIsNativeFocused(nativeElement)
    };
  }
  getOptions(includeDisabled = false) {
    return this.optionsQuery.filter(({
      disabled
    }) => includeDisabled || !disabled).map(({
      value
    }) => value).filter(tuiIsPresent);
  }
  $cast(items) {
    return items;
  }
  static {
    this.ɵfac = function TuiDataListWrapperComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDataListWrapperComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListWrapperComponent,
      selectors: [["tui-data-list-wrapper", 3, "labels", ""]],
      viewQuery: function TuiDataListWrapperComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiOption, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optionsQuery = _t);
        }
      },
      inputs: {
        items: "items",
        disabledItemHandler: "disabledItemHandler",
        emptyContent: "emptyContent",
        size: "size",
        itemContent: "itemContent"
      },
      outputs: {
        itemClick: "itemClick"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListAccessor(_TuiDataListWrapperComponent)]), ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [["loading", ""], ["elementRef", "elementRef"], [3, "emptyContent", "size", 4, "ngIf", "ngIfElse"], [3, "emptyContent", "size"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "disabled", "value", "click", 4, "ngFor", "ngForOf"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "click", "disabled", "value"], [1, "t-content"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["automation-id", "tui-data-list-wrapper__loader", 1, "t-loader"]],
      template: function TuiDataListWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDataListWrapperComponent_tui_data_list_0_Template, 2, 3, "tui-data-list", 2)(1, TuiDataListWrapperComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r6 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.items)("ngIfElse", loading_r6);
        }
      },
      dependencies: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataListComponent, TuiOption, TuiElement, TuiLoader],
      styles: ["[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1;min-inline-size:0}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListWrapperComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-data-list-wrapper:not([labels])",
      imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListWrapperComponent)],
      template: '<tui-data-list\n    *ngIf="items; else loading"\n    [emptyContent]="emptyContent"\n    [size]="size"\n>\n    <button\n        *ngFor="let item of $cast(items)"\n        #elementRef="elementRef"\n        automation-id="tui-data-list-wrapper__option"\n        tuiElement\n        tuiOption\n        type="button"\n        [disabled]="disabledItemHandler(item)"\n        [value]="item"\n        (click)="itemClick.emit(item)"\n    >\n        <span class="t-content">\n            <ng-container *polymorpheusOutlet="itemContent as text; context: getContext(item, elementRef)">\n                {{ text }}\n            </ng-container>\n        </span>\n    </button>\n</tui-data-list>\n<ng-template #loading>\n    <tui-loader\n        automation-id="tui-data-list-wrapper__loader"\n        class="t-loader"\n    />\n</ng-template>\n',
      styles: [":host{display:block}.t-content{flex:1;min-inline-size:0}.t-loader{margin:.75rem 0}\n"]
    }]
  }], null, {
    optionsQuery: [{
      type: ViewChildren,
      args: [forwardRef(() => TuiOption)]
    }],
    items: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    emptyContent: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemContent: [{
      type: Input
    }]
  });
})();
var TuiDataListGroupWrapperComponent = class _TuiDataListGroupWrapperComponent extends TuiDataListWrapperComponent {
  constructor() {
    super(...arguments);
    this.labels = [];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDataListGroupWrapperComponent_BaseFactory;
      return function TuiDataListGroupWrapperComponent_Factory(__ngFactoryType__) {
        return (ɵTuiDataListGroupWrapperComponent_BaseFactory || (ɵTuiDataListGroupWrapperComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiDataListGroupWrapperComponent)))(__ngFactoryType__ || _TuiDataListGroupWrapperComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListGroupWrapperComponent,
      selectors: [["tui-data-list-wrapper", "labels", ""]],
      inputs: {
        labels: "labels"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListAccessor(_TuiDataListGroupWrapperComponent)]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      attrs: _c02,
      decls: 3,
      vars: 2,
      consts: [["loading", ""], ["elementRef", "elementRef"], [3, "emptyContent", "size", 4, "ngIf", "ngIfElse"], [3, "emptyContent", "size"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "disabled", "value", "click", 4, "ngFor", "ngForOf"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "click", "disabled", "value"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-loader"]],
      template: function TuiDataListGroupWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDataListGroupWrapperComponent_tui_data_list_0_Template, 2, 3, "tui-data-list", 2)(1, TuiDataListGroupWrapperComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r8 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.items)("ngIfElse", loading_r8);
        }
      },
      dependencies: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataListComponent, TuiOption, TuiOptGroup, TuiElement, TuiLoader],
      styles: [_c1],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListGroupWrapperComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-data-list-wrapper[labels]",
      imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListGroupWrapperComponent)],
      template: '<tui-data-list\n    *ngIf="items; else loading"\n    [emptyContent]="emptyContent"\n    [size]="size"\n>\n    <tui-opt-group\n        *ngFor="let group of items; let index = index"\n        [label]="labels[index]"\n    >\n        <button\n            *ngFor="let item of group"\n            #elementRef="elementRef"\n            automation-id="tui-data-list-wrapper__option"\n            tuiElement\n            tuiOption\n            type="button"\n            [disabled]="disabledItemHandler(item)"\n            [value]="item"\n            (click)="itemClick.emit(item)"\n        >\n            <ng-container *polymorpheusOutlet="itemContent as text; context: getContext(item, elementRef)">\n                {{ text }}\n            </ng-container>\n        </button>\n    </tui-opt-group>\n</tui-data-list>\n<ng-template #loading>\n    <tui-loader class="t-loader" />\n</ng-template>\n',
      styles: [":host{display:block}.t-content{flex:1;min-inline-size:0}.t-loader{margin:.75rem 0}\n"]
    }]
  }], null, {
    labels: [{
      type: Input
    }]
  });
})();
var TuiDataListWrapper = [TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent, TuiDataListDirective];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-slider.mjs
var _c03 = ["type", "range", "tuiSlider", ""];
var _c12 = ["tuiSliderThumbLabel", ""];
var _c2 = ["*", [["input", "type", "range"]]];
var _c3 = ["*", "input[type=range]"];
function TuiSliderThumbLabel_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var TUI_FLOATING_PRECISION = 7;
function tuiFindKeyStepsBoundariesByFn(keySteps, fn) {
  const keyStepUpperIndex = keySteps.findIndex((keyStep, i) => i && fn(keyStep));
  const lowerStep = keySteps[keyStepUpperIndex - 1] || keySteps[0];
  const upperStep = keySteps[keyStepUpperIndex] || keySteps[keySteps.length - 1] || [0, 0];
  return [lowerStep, upperStep];
}
function tuiPercentageToKeyStepValue(valuePercentage, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage);
  const ratio = (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);
  const controlValue = (upperStepValue - lowerStepValue) * ratio + lowerStepValue;
  return tuiRound(controlValue, TUI_FLOATING_PRECISION);
}
function tuiKeyStepValueToPercentage(value, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([_, keyStepValue]) => value <= keyStepValue);
  const ratio = (value - lowerStepValue) / (upperStepValue - lowerStepValue) || 0;
  return (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;
}
var TUI_SLIDER_DEFAULT_OPTIONS = {
  size: "m",
  trackColor: "var(--tui-background-neutral-2)"
};
var TUI_SLIDER_OPTIONS = tuiCreateToken(TUI_SLIDER_DEFAULT_OPTIONS);
function tuiSliderOptionsProvider(options) {
  return tuiProvideOptions(TUI_SLIDER_OPTIONS, options, TUI_SLIDER_DEFAULT_OPTIONS);
}
var TuiSliderComponent = class _TuiSliderComponent {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.options = inject(TUI_SLIDER_OPTIONS);
    this.size = this.options.size;
    this.segments = 1;
    this.el = tuiInjectElement();
    if (this.control instanceof NgModel) {
      this.control.valueChanges?.pipe(tuiWatch(), take(1)).subscribe();
    }
  }
  get valueRatio() {
    return (this.value - this.min) / (this.max - this.min) || 0;
  }
  get min() {
    return Number(this.el.min);
  }
  get max() {
    return Number(this.el.max || 100);
  }
  get value() {
    if (!this.hasKeySteps && this.control instanceof NgModel) {
      return this.control.viewModel;
    }
    return Number(this.el.value) || 0;
  }
  set value(newValue) {
    this.el.value = `${newValue}`;
  }
  get hasKeySteps() {
    return Boolean(this.injector.get(TuiSliderKeySteps, null));
  }
  get segmentWidth() {
    return 100 / Math.max(1, this.segments);
  }
  get step() {
    return Number(this.el.step) || 1;
  }
  static {
    this.ɵfac = function TuiSliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSliderComponent,
      selectors: [["input", "type", "range", "tuiSlider", ""]],
      hostVars: 7,
      hostBindings: function TuiSliderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiSliderComponent_input_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--tui-slider-track-color", ctx.options.trackColor)("--tui-slider-segment-width", ctx.segmentWidth, "%")("--tui-slider-fill-ratio", ctx.valueRatio);
        }
      },
      inputs: {
        size: "size",
        segments: "segments"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c03,
      decls: 0,
      vars: 0,
      template: function TuiSliderComponent_Template(rf, ctx) {
      },
      styles: ['[_nghost-%COMP%]{position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:.125rem;padding:.4375rem 0;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m)}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}[data-size=s][_nghost-%COMP%]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.25rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .5rem);inline-size:.5rem;block-size:.5rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}[data-size=s][_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[data-size=m][_nghost-%COMP%]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.125rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .75rem);inline-size:.75rem;block-size:.75rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}[data-size=m][_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[_nghost-%COMP%]::-webkit-slider-container{border-radius:inherit}[data-size=m][_nghost-%COMP%]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.25rem,0;background-size:calc(100% - .75rem),calc(100% - .75rem),auto}[data-size=s][_nghost-%COMP%]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.125rem,0;background-size:calc(100% - .5rem),calc(100% - .5rem),auto}[data-size=m][_nghost-%COMP%]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.25rem;background-size:calc(100% - .75rem)}[data-size=s][_nghost-%COMP%]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.125rem;background-size:calc(100% - .5rem)}[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled)[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb:hover, :active:not(:disabled)[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled)[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb:hover, :active:not(:disabled)[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[data-size=m][_nghost-%COMP%]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[data-size=m][_nghost-%COMP%]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[data-size=m][_nghost-%COMP%]::-moz-range-thumb:hover, :active:not(:disabled)[data-size=m][_nghost-%COMP%]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible[data-size=m][_nghost-%COMP%]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[data-size=s][_nghost-%COMP%]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[data-size=s][_nghost-%COMP%]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[data-size=s][_nghost-%COMP%]::-moz-range-thumb:hover, :active:not(:disabled)[data-size=s][_nghost-%COMP%]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible[data-size=s][_nghost-%COMP%]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[_nghost-%COMP%]::-moz-range-progress{border-radius:inherit}[_nghost-%COMP%]::-moz-range-progress{block-size:.125rem;background:currentColor;border-start-end-radius:0;border-end-end-radius:0}'],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiSliderComponent.prototype, "hasKeySteps", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "input[type=range][tuiSlider]",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        /**
         * For change detection.
         * Webkit does not have built-in method for customization of filling progress (as Firefox).
         * We draw filling of progress by `background: linear-gradient(...)` of the track.
         * This function triggers change detection (for {@link valueRatio} getter) when we drag thumb of the input.
         */
        "(input)": "0",
        "[style.--tui-slider-track-color]": "options.trackColor",
        "[style.--tui-slider-segment-width.%]": "segmentWidth",
        "[style.--tui-slider-fill-ratio]": "valueRatio",
        "[attr.data-size]": "size"
      },
      styles: [':host{position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:.125rem;padding:.4375rem 0;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m)}:host:active{cursor:ew-resize}:host:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}:host[data-size=s]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.25rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .5rem);inline-size:.5rem;block-size:.5rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}:host[data-size=s]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host[data-size=m]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.125rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .75rem);inline-size:.75rem;block-size:.75rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}:host[data-size=m]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host::-webkit-slider-container{border-radius:inherit}:host[data-size=m]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.25rem,0;background-size:calc(100% - .75rem),calc(100% - .75rem),auto}:host[data-size=s]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.125rem,0;background-size:calc(100% - .5rem),calc(100% - .5rem),auto}:host[data-size=m]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.25rem;background-size:calc(100% - .75rem)}:host[data-size=s]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.125rem;background-size:calc(100% - .5rem)}:host[data-size=m]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled):host[data-size=m]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host[data-size=m]::-webkit-slider-thumb:hover,:active:not(:disabled):host[data-size=m]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible:host[data-size=m]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=s]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled):host[data-size=s]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host[data-size=s]::-webkit-slider-thumb:hover,:active:not(:disabled):host[data-size=s]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible:host[data-size=s]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=m]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host[data-size=m]::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host[data-size=m]::-moz-range-thumb:hover,:active:not(:disabled):host[data-size=m]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible:host[data-size=m]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=s]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host[data-size=s]::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host[data-size=s]::-moz-range-thumb:hover,:active:not(:disabled):host[data-size=s]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible:host[data-size=s]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host::-moz-range-progress{border-radius:inherit}:host::-moz-range-progress{block-size:.125rem;background:currentColor;border-start-end-radius:0;border-end-end-radius:0}\n']
    }]
  }], function() {
    return [];
  }, {
    size: [{
      type: Input
    }],
    segments: [{
      type: Input
    }],
    hasKeySteps: []
  });
})();
var TuiSliderKeySteps = class _TuiSliderKeySteps extends TuiControl {
  constructor() {
    super(...arguments);
    this.slider = inject(forwardRef(() => TuiSliderComponent));
  }
  writeValue(controlValue) {
    if (controlValue === null) {
      return;
    }
    const clampedControlValue = tuiClamp(controlValue, this.min, this.max);
    ngDevMode && console.assert(controlValue === clampedControlValue, "\n[SliderKeySteps]: You cannot programmatically set value which is less/more than min/max");
    this.slider.value = this.transformToNativeValue(clampedControlValue);
  }
  get min() {
    return this.keySteps[0][1];
  }
  get max() {
    return this.keySteps[this.keySteps.length - 1]?.[1] ?? 0;
  }
  updateControlValue() {
    this.onChange(tuiPercentageToKeyStepValue(this.slider.valueRatio * 100, this.keySteps));
  }
  transformToNativeValue(controlValue) {
    const {
      min,
      max
    } = this.slider;
    const newValuePercentage = tuiKeyStepValueToPercentage(controlValue, this.keySteps);
    return newValuePercentage * (max - min) / 100 + min;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSliderKeySteps_BaseFactory;
      return function TuiSliderKeySteps_Factory(__ngFactoryType__) {
        return (ɵTuiSliderKeySteps_BaseFactory || (ɵTuiSliderKeySteps_BaseFactory = ɵɵgetInheritedFactory(_TuiSliderKeySteps)))(__ngFactoryType__ || _TuiSliderKeySteps);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderKeySteps,
      selectors: [["input", "tuiSlider", "", "keySteps", ""]],
      hostVars: 4,
      hostBindings: function TuiSliderKeySteps_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("blur", function TuiSliderKeySteps_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("input", function TuiSliderKeySteps_input_HostBindingHandler() {
            return ctx.updateControlValue();
          })("change", function TuiSliderKeySteps_change_HostBindingHandler() {
            return ctx.updateControlValue();
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("disabled", ctx.disabled());
          ɵɵattribute("aria-valuenow", ctx.value())("aria-valuemin", ctx.min)("aria-valuemax", ctx.max);
        }
      },
      inputs: {
        keySteps: "keySteps"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiFallbackValueProvider(0)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderKeySteps, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiSlider][keySteps]",
      providers: [tuiFallbackValueProvider(0)],
      host: {
        "[attr.aria-valuenow]": "value()",
        "[attr.aria-valuemin]": "min",
        "[attr.aria-valuemax]": "max",
        "[disabled]": "disabled()",
        "(blur)": "onTouched()",
        "(input)": "updateControlValue()",
        "(change)": "updateControlValue()"
      }
    }]
  }], null, {
    keySteps: [{
      type: Input
    }]
  });
})();
var SLIDER_INTERACTION_KEYS = /* @__PURE__ */ new Set(["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp"]);
var TuiSliderReadonly = class _TuiSliderReadonly {
  constructor() {
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.readonly = true;
    const touchStart$ = tuiTypedFromEvent(this.el, "touchstart", {
      passive: false
    });
    const touchMove$ = tuiTypedFromEvent(this.doc, "touchmove", {
      passive: false
    });
    const touchEnd$ = tuiTypedFromEvent(this.doc, "touchend", {
      passive: true
    });
    const shouldPreventMove$ = merge(touchStart$.pipe(tap((e) => this.preventEvent(e)), map(TUI_TRUE_HANDLER)), touchEnd$.pipe(map(TUI_FALSE_HANDLER)));
    combineLatest([touchMove$, shouldPreventMove$]).pipe(filter(([_, shouldPreventMove]) => shouldPreventMove), takeUntilDestroyed()).subscribe(([moveEvent]) => this.preventEvent(moveEvent));
  }
  preventEvent(event) {
    if (event.cancelable && this.readonly) {
      event.preventDefault();
    }
  }
  preventKeyboardInteraction(event) {
    if (SLIDER_INTERACTION_KEYS.has(event.key)) {
      this.preventEvent(event);
    }
  }
  static {
    this.ɵfac = function TuiSliderReadonly_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderReadonly)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderReadonly,
      selectors: [["input", "tuiSlider", "", "readonly", ""]],
      hostBindings: function TuiSliderReadonly_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function TuiSliderReadonly_keydown_HostBindingHandler($event) {
            return ctx.preventKeyboardInteraction($event);
          })("mousedown", function TuiSliderReadonly_mousedown_HostBindingHandler($event) {
            return ctx.preventEvent($event);
          });
        }
      },
      inputs: {
        readonly: [2, "readonly", "readonly", coerceBooleanProperty]
      },
      standalone: true,
      features: [ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderReadonly, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiSlider][readonly]",
      host: {
        "(keydown)": "preventKeyboardInteraction($event)",
        "(mousedown)": "preventEvent($event)"
      }
    }]
  }], function() {
    return [];
  }, {
    readonly: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }]
  });
})();
var TuiSliderThumbLabel = class _TuiSliderThumbLabel {
  ngAfterContentInit() {
    ngDevMode && console.assert(Boolean(this.control?.valueChanges), '\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\nUse [(ngModel)] or [formControl] or formControlName for correct work.');
  }
  get size() {
    return this.slider?.size || "m";
  }
  get ratio() {
    return this.slider?.valueRatio || 0;
  }
  get ghostLeft() {
    return this.ratio * (this.slider?.el.offsetWidth || 0);
  }
  static {
    this.ɵfac = function TuiSliderThumbLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderThumbLabel)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSliderThumbLabel,
      selectors: [["", "tuiSliderThumbLabel", ""]],
      contentQueries: function TuiSliderThumbLabel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiSliderComponent, 5);
          ɵɵcontentQuery(dirIndex, NgControl, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slider = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c12,
      ngContentSelectors: _c3,
      decls: 5,
      vars: 8,
      consts: [[4, "ngIf"], [1, "t-ghost"]],
      template: function TuiSliderThumbLabel_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c2);
          ɵɵtemplate(0, TuiSliderThumbLabel_ng_container_0_Template, 1, 0, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "div", 1);
          ɵɵprojection(3);
          ɵɵelementEnd();
          ɵɵprojection(4, 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 6, ctx.control == null ? null : ctx.control.valueChanges));
          ɵɵadvance(2);
          ɵɵstyleProp("--tui-slider-thumb-ratio", ctx.ratio)("left", ctx.ghostLeft, "px");
          ɵɵattribute("data-size", ctx.size);
        }
      },
      dependencies: [AsyncPipe, NgIf],
      styles: ["[_nghost-%COMP%]{position:relative}.t-ghost[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;margin:auto;border-radius:50%;pointer-events:none}.t-ghost[data-size=s][_ngcontent-%COMP%]{inline-size:.5rem;block-size:.5rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.5rem))}.t-ghost[data-size=m][_ngcontent-%COMP%]{inline-size:.75rem;block-size:.75rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.75rem))}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderThumbLabel, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "[tuiSliderThumbLabel]",
      imports: [AsyncPipe, NgIf],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="control?.valueChanges | async" />\n\n<div\n    class="t-ghost"\n    [attr.data-size]="size"\n    [style.--tui-slider-thumb-ratio]="ratio"\n    [style.left.px]="ghostLeft"\n>\n    <ng-content />\n</div>\n\n<ng-content select="input[type=range]" />\n',
      styles: [":host{position:relative}.t-ghost{position:absolute;top:0;bottom:0;margin:auto;border-radius:50%;pointer-events:none}.t-ghost[data-size=s]{inline-size:.5rem;block-size:.5rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.5rem))}.t-ghost[data-size=m]{inline-size:.75rem;block-size:.75rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.75rem))}\n"]
    }]
  }], null, {
    slider: [{
      type: ContentChild,
      args: [TuiSliderComponent]
    }],
    control: [{
      type: ContentChild,
      args: [NgControl]
    }]
  });
})();
var TuiSlider = [TuiSliderComponent, TuiSliderThumbLabel, TuiSliderKeySteps, TuiSliderReadonly];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-range.mjs
var _c04 = () => ({
  standalone: true
});
var TuiRangeChange = class _TuiRangeChange {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.range = inject(TuiRange);
    this.pointerDown$ = tuiTypedFromEvent(this.el, "pointerdown", {
      passive: true,
      capture: true
    });
    this.pointerMove$ = merge(tuiTypedFromEvent(this.doc, "touchmove").pipe(filter(({
      touches
    }) => touches.length === 1), map(({
      touches
    }) => touches[0]), filter((event) => !!event)), tuiTypedFromEvent(this.doc, "mousemove"));
    this.pointerUp$ = merge(tuiTypedFromEvent(this.doc, "touchend", {
      passive: true
    }), tuiTypedFromEvent(this.doc, "mouseup", {
      passive: true
    }));
    this.activeThumbChange = new EventEmitter();
    let activeThumb;
    this.pointerDown$.pipe(tap(({
      clientX,
      target
    }) => {
      activeThumb = this.detectActiveThumb(clientX, target);
      this.activeThumbChange.emit(activeThumb);
      if (this.range.focusable) {
        this.el.focus();
      }
    }), switchMap((event) => this.pointerMove$.pipe(startWith(event))), map(({
      clientX
    }) => this.getFractionFromEvents(clientX ?? 0)), takeUntil(this.pointerUp$), repeat(), takeUntilDestroyed()).subscribe((fraction) => {
      const value = this.range.toValue(fraction);
      this.range.processValue(value, activeThumb === "right");
    });
  }
  getFractionFromEvents(clickClientX) {
    const hostRect = this.el.getBoundingClientRect();
    const value = clickClientX - hostRect.left;
    const total = hostRect.width;
    return tuiClamp(tuiRound(value / total, TUI_FLOATING_PRECISION), 0, 1);
  }
  detectActiveThumb(clientX, target) {
    const [leftSliderRef, rightSliderRef] = this.range.slidersRefs;
    switch (target) {
      case leftSliderRef?.nativeElement:
        return "left";
      case rightSliderRef?.nativeElement:
        return "right";
      default:
        return this.findNearestActiveThumb(clientX);
    }
  }
  findNearestActiveThumb(clientX) {
    const fraction = this.getFractionFromEvents(clientX);
    const deltaLeft = fraction * 100 - this.range.left();
    const deltaRight = fraction * 100 - 100 + this.range.right();
    return Math.abs(deltaLeft) > Math.abs(deltaRight) || deltaRight > 0 || this.range.left() === 0 && this.range.right() === 100 ? "right" : "left";
  }
  static {
    this.ɵfac = function TuiRangeChange_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRangeChange)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiRangeChange,
      outputs: {
        activeThumbChange: "activeThumbChange"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRangeChange, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], function() {
    return [];
  }, {
    activeThumbChange: [{
      type: Output
    }]
  });
})();
var TuiRange = class _TuiRange extends TuiControl {
  constructor() {
    super(...arguments);
    this.changes = signal(1);
    this.el = tuiInjectElement();
    this.options = inject(TUI_SLIDER_OPTIONS);
    this.lastActiveThumb = "right";
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.size = this.options.size;
    this.segments = 1;
    this.keySteps = null;
    this.focusable = true;
    this.margin = 0;
    this.limit = Infinity;
    this.slidersRefs = EMPTY_QUERY;
    this.left = computed(() => this.toPercent(this.value()[0]));
    this.right = computed(() => 100 - this.toPercent(this.value()[1]));
  }
  ngOnChanges() {
    this.changes.set(this.changes() + 1);
  }
  processValue(value, right) {
    if (right) {
      this.updateEnd(value);
    } else {
      this.updateStart(value);
    }
    this.lastActiveThumb = right ? "right" : "left";
  }
  toValue(fraction) {
    return tuiPercentageToKeyStepValue(tuiClamp(tuiQuantize(fraction, this.fractionStep), 0, 1) * 100, this.computedKeySteps);
  }
  get fractionStep() {
    return this.step / (this.max - this.min);
  }
  get computedKeySteps() {
    return this.computePureKeySteps(this.keySteps, this.min, this.max);
  }
  get segmentWidthRatio() {
    return 1 / this.segments;
  }
  changeByStep(coefficient, target) {
    const [sliderLeftRef, sliderRightRef] = this.slidersRefs;
    const leftThumbElement = sliderLeftRef?.nativeElement;
    const rightThumbElement = sliderRightRef?.nativeElement;
    const isRightThumb = target === this.el ? this.lastActiveThumb === "right" : target === rightThumbElement;
    const activeThumbElement = isRightThumb ? rightThumbElement : leftThumbElement;
    const previousValue = isRightThumb ? this.value()[1] : this.value()[0];
    const previousFraction = this.toPercent(previousValue) / 100;
    const newFractionValue = previousFraction + coefficient * this.fractionStep;
    this.processValue(this.toValue(newFractionValue), isRightThumb);
    activeThumbElement?.focus();
  }
  toPercent(value) {
    return this.changes() && tuiKeyStepValueToPercentage(value, this.computedKeySteps);
  }
  computePureKeySteps(keySteps, min, max) {
    return keySteps || [[0, min], [100, max]];
  }
  updateStart(value) {
    const newValue = Math.min(value, this.value()[1]);
    const distance = this.value()[1] - newValue;
    if (!this.checkDistance(distance)) {
      return;
    }
    this.onChange([newValue, this.value()[1]]);
  }
  updateEnd(value) {
    const newValue = Math.max(value, this.value()[0]);
    const distance = newValue - this.value()[0];
    if (!this.checkDistance(distance)) {
      return;
    }
    this.onChange([this.value()[0], newValue]);
  }
  checkDistance(distance) {
    return tuiClamp(distance, this.margin, this.limit) === distance;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiRange_BaseFactory;
      return function TuiRange_Factory(__ngFactoryType__) {
        return (ɵTuiRange_BaseFactory || (ɵTuiRange_BaseFactory = ɵɵgetInheritedFactory(_TuiRange)))(__ngFactoryType__ || _TuiRange);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRange,
      selectors: [["tui-range"]],
      viewQuery: function TuiRange_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiSliderComponent, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slidersRefs = _t);
        }
      },
      hostVars: 11,
      hostBindings: function TuiRange_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusout", function TuiRange_focusout_HostBindingHandler() {
            return ctx.onTouched();
          })("keydown.arrowUp.prevent", function TuiRange_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.changeByStep(1, $event.target);
          })("keydown.arrowRight.prevent", function TuiRange_keydown_arrowRight_prevent_HostBindingHandler($event) {
            return ctx.changeByStep(1, $event.target);
          })("keydown.arrowLeft.prevent", function TuiRange_keydown_arrowLeft_prevent_HostBindingHandler($event) {
            return ctx.changeByStep(-1, $event.target);
          })("keydown.arrowDown.prevent", function TuiRange_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.changeByStep(-1, $event.target);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size)("tabindex", -1)("aria-disabled", ctx.disabled());
          ɵɵstyleProp("--left", ctx.left(), "%")("--right", ctx.right(), "%")("background", ctx.options.trackColor);
          ɵɵclassProp("_disabled", ctx.disabled());
        }
      },
      inputs: {
        min: "min",
        max: "max",
        step: "step",
        size: "size",
        segments: "segments",
        keySteps: "keySteps",
        focusable: "focusable",
        margin: "margin",
        limit: "limit"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiFallbackValueProvider([0, 0])]), ɵɵHostDirectivesFeature([{
        directive: TuiRangeChange,
        outputs: ["activeThumbChange", "activeThumbChange"]
      }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 22,
      consts: [[1, "t-track"], ["automation-id", "tui-range__left", "readonly", "", "step", "any", "tuiSlider", "", "type", "range", 1, "t-thumb", 3, "disabled", "keySteps", "max", "min", "ngModel", "ngModelOptions", "size", "tabIndex"], ["automation-id", "tui-range__right", "readonly", "", "step", "any", "tuiSlider", "", "type", "range", 1, "t-thumb", 3, "disabled", "keySteps", "max", "min", "ngModel", "ngModelOptions", "size", "tabIndex"]],
      template: function TuiRange_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵelement(1, "input", 1)(2, "input", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵstyleProp("--bg-size-ratio", 1 - ctx.segmentWidthRatio)("--segment-width", ctx.segmentWidthRatio * 100, "%");
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.disabled())("keySteps", ctx.computedKeySteps)("max", ctx.max)("min", ctx.min)("ngModel", ctx.value()[0])("ngModelOptions", ɵɵpureFunction0(20, _c04))("size", ctx.size)("tabIndex", ctx.focusable ? 0 : -1);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.disabled())("keySteps", ctx.computedKeySteps)("max", ctx.max)("min", ctx.min)("ngModel", ctx.value()[1])("ngModelOptions", ɵɵpureFunction0(21, _c04))("size", ctx.size)("tabIndex", ctx.focusable ? 0 : -1);
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, RangeValueAccessor, NgControlStatus, NgModel, TuiSliderComponent, TuiSliderKeySteps, TuiSliderReadonly],
      styles: ['[_nghost-%COMP%]{position:relative;display:block;block-size:.125rem;border-radius:var(--tui-radius-m);background:var(--tui-border-normal);cursor:pointer;outline:none;margin:.4375rem 0;touch-action:pan-x}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:after{content:"";position:absolute;top:-.4375rem;bottom:-.4375rem;inline-size:100%}._disabled[_nghost-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}[data-size=s][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]{position:relative;margin:0 .25rem;block-size:100%}[data-size=s][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:max(calc(var(--left) - 1px),1px);right:max(var(--right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.25rem}[data-size=s][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";left:.125rem;right:.375rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--segment-width) / var(--bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--bg-size-ratio))}[data-size=m][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]{position:relative;margin:0 .375rem;block-size:100%}[data-size=m][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:max(calc(var(--left) - 1px),1px);right:max(var(--right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.375rem}[data-size=m][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";left:.25rem;right:.5rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--segment-width) / var(--bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--bg-size-ratio))}.t-thumb[_ngcontent-%COMP%]{pointer-events:none;position:absolute;top:.0625rem;left:0;right:0;z-index:1;transform:translateY(-50%)}.t-thumb[_ngcontent-%COMP%]::-webkit-slider-thumb{pointer-events:all}.t-thumb[_ngcontent-%COMP%]::-moz-range-thumb{pointer-events:all}input[type=range].t-thumb[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:transparent}input[type=range].t-thumb[_ngcontent-%COMP%]::-moz-range-track{background:transparent}input[type=range].t-thumb[_ngcontent-%COMP%]::-moz-range-progress{background:transparent}input[type=range].t-thumb[_ngcontent-%COMP%]::-ms-track{background:transparent}input[type=range].t-thumb[_ngcontent-%COMP%]::-ms-fill-lower{background:transparent}.t-thumb[_ngcontent-%COMP%]:last-of-type{--tui-slider-thumb-transform: translateX(50%) translateX(1px)}.t-thumb[_ngcontent-%COMP%]:first-of-type{--tui-slider-thumb-transform: translateX(-50%) translateX(-1px)}._disabled[_nghost-%COMP%]   .t-thumb[_ngcontent-%COMP%]{opacity:1}'],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiRange.prototype, "computePureKeySteps", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRange, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-range",
      imports: [FormsModule, TuiSlider],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiFallbackValueProvider([0, 0])],
      hostDirectives: [{
        directive: TuiRangeChange,
        outputs: ["activeThumbChange"]
      }],
      host: {
        "[attr.data-size]": "size",
        "[attr.tabindex]": "-1",
        "[attr.aria-disabled]": "disabled()",
        "[style.--left.%]": "left()",
        "[style.--right.%]": "right()",
        "[style.background]": "options.trackColor",
        "[class._disabled]": "disabled()",
        "(focusout)": "onTouched()",
        "(keydown.arrowUp.prevent)": "changeByStep(1, $event.target)",
        "(keydown.arrowRight.prevent)": "changeByStep(1, $event.target)",
        "(keydown.arrowLeft.prevent)": "changeByStep(-1, $event.target)",
        "(keydown.arrowDown.prevent)": "changeByStep(-1, $event.target)"
      },
      template: '<div\n    class="t-track"\n    [style.--bg-size-ratio]="1 - segmentWidthRatio"\n    [style.--segment-width.%]="segmentWidthRatio * 100"\n>\n    <input\n        automation-id="tui-range__left"\n        readonly\n        step="any"\n        tuiSlider\n        type="range"\n        class="t-thumb"\n        [disabled]="disabled()"\n        [keySteps]="computedKeySteps"\n        [max]="max"\n        [min]="min"\n        [ngModel]="value()[0]"\n        [ngModelOptions]="{standalone: true}"\n        [size]="size"\n        [tabIndex]="focusable ? 0 : -1"\n    />\n    <input\n        automation-id="tui-range__right"\n        readonly\n        step="any"\n        tuiSlider\n        type="range"\n        class="t-thumb"\n        [disabled]="disabled()"\n        [keySteps]="computedKeySteps"\n        [max]="max"\n        [min]="min"\n        [ngModel]="value()[1]"\n        [ngModelOptions]="{standalone: true}"\n        [size]="size"\n        [tabIndex]="focusable ? 0 : -1"\n    />\n</div>\n',
      styles: [':host{position:relative;display:block;block-size:.125rem;border-radius:var(--tui-radius-m);background:var(--tui-border-normal);cursor:pointer;outline:none;margin:.4375rem 0;touch-action:pan-x}:host:active{cursor:ew-resize}:host:after{content:"";position:absolute;top:-.4375rem;bottom:-.4375rem;inline-size:100%}:host._disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}:host[data-size=s] .t-track{position:relative;margin:0 .25rem;block-size:100%}:host[data-size=s] .t-track:before{content:"";position:absolute;top:0;left:max(calc(var(--left) - 1px),1px);right:max(var(--right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.25rem}:host[data-size=s] .t-track:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";left:.125rem;right:.375rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--segment-width) / var(--bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--bg-size-ratio))}:host[data-size=m] .t-track{position:relative;margin:0 .375rem;block-size:100%}:host[data-size=m] .t-track:before{content:"";position:absolute;top:0;left:max(calc(var(--left) - 1px),1px);right:max(var(--right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.375rem}:host[data-size=m] .t-track:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";left:.25rem;right:.5rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--segment-width) / var(--bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--bg-size-ratio))}.t-thumb{pointer-events:none;position:absolute;top:.0625rem;left:0;right:0;z-index:1;transform:translateY(-50%)}.t-thumb::-webkit-slider-thumb{pointer-events:all}.t-thumb::-moz-range-thumb{pointer-events:all}input[type=range].t-thumb::-webkit-slider-runnable-track{background:transparent}input[type=range].t-thumb::-moz-range-track{background:transparent}input[type=range].t-thumb::-moz-range-progress{background:transparent}input[type=range].t-thumb::-ms-track{background:transparent}input[type=range].t-thumb::-ms-fill-lower{background:transparent}.t-thumb:last-of-type{--tui-slider-thumb-transform: translateX(50%) translateX(1px)}.t-thumb:first-of-type{--tui-slider-thumb-transform: translateX(-50%) translateX(-1px)}:host._disabled .t-thumb{opacity:1}\n']
    }]
  }], null, {
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    segments: [{
      type: Input
    }],
    keySteps: [{
      type: Input
    }],
    focusable: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    limit: [{
      type: Input
    }],
    slidersRefs: [{
      type: ViewChildren,
      args: [TuiSliderComponent, {
        read: ElementRef
      }]
    }],
    computePureKeySteps: []
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-pipes-stringify-content.mjs
var TuiStringifyContentPipe = class _TuiStringifyContentPipe {
  transform(stringify) {
    return ({
      $implicit
    }) => stringify($implicit);
  }
  static {
    this.ɵfac = function TuiStringifyContentPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiStringifyContentPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiStringifyContent",
      type: _TuiStringifyContentPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStringifyContentPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiStringifyContent"
    }]
  }], null, null);
})();

// node_modules/@maskito/kit/index.esm.js
function clamp(value, min, max) {
  const clampedValue = Math.min(Number(max), Math.max(Number(min), Number(value)));
  return value instanceof Date ? new Date(clampedValue) : clampedValue;
}
function countDigits(str) {
  return str.replaceAll(/\W/g, "").length;
}
function appendDate(initialDate, {
  day,
  month,
  year
} = {}) {
  const date = new Date(initialDate);
  if (day) {
    date.setDate(date.getDate() + day);
  }
  if (month) {
    date.setMonth(date.getMonth() + month);
  }
  if (year) {
    date.setFullYear(date.getFullYear() + year);
  }
  return date;
}
var getDateSegmentValueLength = (dateString) => {
  var _a, _b, _c, _d, _e, _f;
  return {
    day: (_b = (_a = dateString.match(/d/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0,
    month: (_d = (_c = dateString.match(/m/g)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0,
    year: (_f = (_e = dateString.match(/y/g)) === null || _e === void 0 ? void 0 : _e.length) !== null && _f !== void 0 ? _f : 0
  };
};
function dateToSegments(date) {
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: String(date.getMonth() + 1).padStart(2, "0"),
    year: String(date.getFullYear()).padStart(4, "0"),
    hours: String(date.getHours()).padStart(2, "0"),
    minutes: String(date.getMinutes()).padStart(2, "0"),
    seconds: String(date.getSeconds()).padStart(2, "0"),
    milliseconds: String(date.getMilliseconds()).padStart(3, "0")
  };
}
function getFirstCompleteDate(dateString, dateModeTemplate) {
  const digitsInDate = countDigits(dateModeTemplate);
  const [completeDate = ""] = new RegExp(`(\\D*\\d){${digitsInDate}}`).exec(dateString) || [];
  return completeDate;
}
function isDateStringComplete(dateString, dateModeTemplate) {
  if (dateString.length < dateModeTemplate.length) {
    return false;
  }
  return dateString.split(/\D/).every((segment) => !/^0+$/.exec(segment));
}
function parseDateRangeString(dateRange, dateModeTemplate, rangeSeparator) {
  const digitsInDate = countDigits(dateModeTemplate);
  return dateRange.replace(rangeSeparator, "").match(new RegExp(`(\\D*\\d[^\\d\\s]*){1,${digitsInDate}}`, "g")) || [];
}
function parseDateString(dateString, fullMode) {
  const cleanMode = fullMode.replaceAll(/[^dmy]/g, "");
  const onlyDigitsDate = dateString.replaceAll(/\D+/g, "");
  const dateSegments = {
    day: onlyDigitsDate.slice(cleanMode.indexOf("d"), cleanMode.lastIndexOf("d") + 1),
    month: onlyDigitsDate.slice(cleanMode.indexOf("m"), cleanMode.lastIndexOf("m") + 1),
    year: onlyDigitsDate.slice(cleanMode.indexOf("y"), cleanMode.lastIndexOf("y") + 1)
  };
  return Object.fromEntries(Object.entries(dateSegments).filter(([_, value]) => Boolean(value)).sort(([a], [b]) => fullMode.toLowerCase().indexOf(a.slice(0, 1)) > fullMode.toLowerCase().indexOf(b.slice(0, 1)) ? 1 : -1));
}
function segmentsToDate(parsedDate, parsedTime) {
  var _a, _b, _c, _d, _e, _f, _g;
  const year = ((_a = parsedDate.year) === null || _a === void 0 ? void 0 : _a.length) === 2 ? `20${parsedDate.year}` : parsedDate.year;
  const date = new Date(Number(year !== null && year !== void 0 ? year : "0"), Number((_b = parsedDate.month) !== null && _b !== void 0 ? _b : "1") - 1, Number((_c = parsedDate.day) !== null && _c !== void 0 ? _c : "1"), Number((_d = parsedTime === null || parsedTime === void 0 ? void 0 : parsedTime.hours) !== null && _d !== void 0 ? _d : "0"), Number((_e = parsedTime === null || parsedTime === void 0 ? void 0 : parsedTime.minutes) !== null && _e !== void 0 ? _e : "0"), Number((_f = parsedTime === null || parsedTime === void 0 ? void 0 : parsedTime.seconds) !== null && _f !== void 0 ? _f : "0"), Number((_g = parsedTime === null || parsedTime === void 0 ? void 0 : parsedTime.milliseconds) !== null && _g !== void 0 ? _g : "0"));
  date.setFullYear(Number(year !== null && year !== void 0 ? year : "0"));
  return date;
}
var DATE_TIME_SEPARATOR = ", ";
function toDateString({
  day,
  month,
  year,
  hours,
  minutes,
  seconds,
  milliseconds
}, {
  dateMode,
  dateTimeSeparator = DATE_TIME_SEPARATOR,
  timeMode
}) {
  var _a;
  const safeYear = ((_a = dateMode.match(/y/g)) === null || _a === void 0 ? void 0 : _a.length) === 2 ? year === null || year === void 0 ? void 0 : year.slice(-2) : year;
  const fullMode = dateMode + (timeMode ? dateTimeSeparator + timeMode : "");
  return fullMode.replaceAll(/d+/g, day !== null && day !== void 0 ? day : "").replaceAll(/m+/g, month !== null && month !== void 0 ? month : "").replaceAll(/y+/g, safeYear !== null && safeYear !== void 0 ? safeYear : "").replaceAll(/H+/g, hours !== null && hours !== void 0 ? hours : "").replaceAll("MSS", milliseconds !== null && milliseconds !== void 0 ? milliseconds : "").replaceAll(/M+/g, minutes !== null && minutes !== void 0 ? minutes : "").replaceAll(/S+/g, seconds !== null && seconds !== void 0 ? seconds : "").replaceAll(/^\D+/g, "").replaceAll(/\D+$/g, "");
}
var DATE_SEGMENTS_MAX_VALUES = {
  day: 31,
  month: 12,
  year: 9999
};
var DEFAULT_DECIMAL_PSEUDO_SEPARATORS = [".", ",", "б", "ю"];
var DEFAULT_MIN_DATE = /* @__PURE__ */ new Date("0001-01-01");
var DEFAULT_MAX_DATE = /* @__PURE__ */ new Date("9999-12-31");
var DEFAULT_TIME_SEGMENT_MAX_VALUES = {
  hours: 23,
  minutes: 59,
  seconds: 59,
  milliseconds: 999
};
var DEFAULT_TIME_SEGMENT_MIN_VALUES = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0
};
var CHAR_NO_BREAK_SPACE = " ";
var CHAR_ZERO_WIDTH_SPACE = "​";
var CHAR_EN_DASH = "–";
var CHAR_EM_DASH = "—";
var CHAR_HYPHEN = "-";
var CHAR_MINUS = "−";
var CHAR_JP_HYPHEN = "ー";
var CHAR_COLON = ":";
var CHAR_JP_COLON = "：";
var ANY_MERIDIEM_CHARACTER_RE = new RegExp(`[${CHAR_NO_BREAK_SPACE}APM]+$`, "g");
var ALL_MERIDIEM_CHARACTERS_RE = new RegExp(`${CHAR_NO_BREAK_SPACE}[AP]M$`, "g");
var TIME_FIXED_CHARACTERS = [":", "."];
var TIME_SEGMENT_VALUE_LENGTHS = {
  hours: 2,
  minutes: 2,
  seconds: 2,
  milliseconds: 3
};
function validateDateString({
  dateString,
  dateModeTemplate,
  dateSegmentsSeparator,
  offset,
  selection: [from, to]
}) {
  const parsedDate = parseDateString(dateString, dateModeTemplate);
  const dateSegments = Object.entries(parsedDate);
  const validatedDateSegments = {};
  for (const [segmentName, segmentValue] of dateSegments) {
    const validatedDate = toDateString(validatedDateSegments, {
      dateMode: dateModeTemplate
    });
    const maxSegmentValue = DATE_SEGMENTS_MAX_VALUES[segmentName];
    const fantomSeparator = validatedDate.length && dateSegmentsSeparator.length;
    const lastSegmentDigitIndex = offset + validatedDate.length + fantomSeparator + getDateSegmentValueLength(dateModeTemplate)[segmentName];
    const isLastSegmentDigitAdded = lastSegmentDigitIndex >= from && lastSegmentDigitIndex === to;
    if (isLastSegmentDigitAdded && Number(segmentValue) > Number(maxSegmentValue)) {
      return {
        validatedDateString: "",
        updatedSelection: [from, to]
      };
    }
    if (isLastSegmentDigitAdded && Number(segmentValue) < 1) {
      return {
        validatedDateString: "",
        updatedSelection: [from, to]
      };
    }
    validatedDateSegments[segmentName] = segmentValue;
  }
  const validatedDateString = toDateString(validatedDateSegments, {
    dateMode: dateModeTemplate
  });
  const addedDateSegmentSeparators = validatedDateString.length - dateString.length;
  return {
    validatedDateString,
    updatedSelection: [from + addedDateSegmentSeparators, to + addedDateSegmentSeparators]
  };
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reHasRegExpChar = new RegExp(reRegExpChar.source);
function escapeRegExp(str) {
  return str && reHasRegExpChar.test(str) ? str.replaceAll(reRegExpChar, String.raw`\$&`) : str;
}
function extractAffixes(value, {
  prefix,
  postfix
}) {
  var _a, _b;
  const prefixRegExp = new RegExp(`^${escapeRegExp(prefix)}`);
  const postfixRegExp = new RegExp(`${escapeRegExp(postfix)}$`);
  const [extractedPrefix = ""] = (_a = value.match(prefixRegExp)) !== null && _a !== void 0 ? _a : [];
  const [extractedPostfix = ""] = (_b = value.match(postfixRegExp)) !== null && _b !== void 0 ? _b : [];
  const cleanValue = value.replace(prefixRegExp, "").replace(postfixRegExp, "");
  return {
    extractedPrefix,
    extractedPostfix,
    cleanValue
  };
}
function findCommonBeginningSubstr(a, b) {
  let res = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return res;
    }
    res += a[i];
  }
  return res;
}
function identity(x) {
  return x;
}
function isEmpty(entity) {
  return !entity || typeof entity === "object" && Object.keys(entity).length === 0;
}
var ALL_ZEROES_RE = /^0+$/;
function padWithZeroesUntilValid(segmentValue, paddedMaxValue, prefixedZeroesCount = 0) {
  const paddedSegmentValue = segmentValue.padEnd(paddedMaxValue.length, "0");
  if (Number(paddedSegmentValue) <= Number(paddedMaxValue)) {
    return {
      validatedSegmentValue: segmentValue,
      prefixedZeroesCount
    };
  }
  if (paddedSegmentValue.endsWith("0")) {
    return padWithZeroesUntilValid(`0${segmentValue.slice(0, paddedMaxValue.length - 1)}`, paddedMaxValue, prefixedZeroesCount + 1);
  }
  const valueWithoutLastChar = segmentValue.slice(0, paddedMaxValue.length - 1);
  if (ALL_ZEROES_RE.exec(valueWithoutLastChar)) {
    return {
      validatedSegmentValue: "",
      prefixedZeroesCount
    };
  }
  return padWithZeroesUntilValid(`${valueWithoutLastChar}0`, paddedMaxValue, prefixedZeroesCount);
}
function toHalfWidthColon(fullWidthColon) {
  return fullWidthColon.replaceAll(new RegExp(CHAR_JP_COLON, "g"), CHAR_COLON);
}
function toHalfWidthNumber(fullWidthNumber) {
  return fullWidthNumber.replaceAll(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248));
}
function createColonConvertPreprocessor() {
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    return {
      elementState: {
        selection,
        value: toHalfWidthColon(value)
      },
      data: toHalfWidthColon(data)
    };
  };
}
function createDateSegmentsZeroPaddingPostprocessor({
  dateModeTemplate,
  dateSegmentSeparator,
  splitFn,
  uniteFn
}) {
  return ({
    value,
    selection
  }) => {
    var _a;
    const [from, to] = selection;
    const {
      dateStrings,
      restPart = ""
    } = splitFn(value);
    const validatedDateStrings = [];
    let caretShift = 0;
    dateStrings.forEach((dateString) => {
      const parsedDate = parseDateString(dateString, dateModeTemplate);
      const dateSegments = Object.entries(parsedDate);
      const validatedDateSegments = dateSegments.reduce((acc, [segmentName, segmentValue]) => {
        const {
          validatedSegmentValue,
          prefixedZeroesCount
        } = padWithZeroesUntilValid(segmentValue, `${DATE_SEGMENTS_MAX_VALUES[segmentName]}`);
        caretShift += prefixedZeroesCount;
        return Object.assign(Object.assign({}, acc), {
          [segmentName]: validatedSegmentValue
        });
      }, {});
      validatedDateStrings.push(toDateString(validatedDateSegments, {
        dateMode: dateModeTemplate
      }));
    });
    const validatedValue = uniteFn(validatedDateStrings, value) + (((_a = dateStrings[dateStrings.length - 1]) === null || _a === void 0 ? void 0 : _a.endsWith(dateSegmentSeparator)) ? dateSegmentSeparator : "") + restPart;
    if (caretShift && validatedValue.slice(to + caretShift, to + caretShift + dateSegmentSeparator.length) === dateSegmentSeparator) {
      caretShift += dateSegmentSeparator.length;
    }
    return {
      selection: [from + caretShift, to + caretShift],
      value: validatedValue
    };
  };
}
function createFirstDateEndSeparatorPreprocessor({
  dateModeTemplate,
  firstDateEndSeparator,
  dateSegmentSeparator,
  pseudoFirstDateEndSeparators
}) {
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const [from, to] = selection;
    const firstCompleteDate = getFirstCompleteDate(value, dateModeTemplate);
    const pseudoSeparators = pseudoFirstDateEndSeparators.filter((x) => !firstDateEndSeparator.includes(x) && x !== dateSegmentSeparator);
    const pseudoSeparatorsRE = new RegExp(`[${pseudoSeparators.join("")}]`, "gi");
    const newValue = firstCompleteDate && value.length > firstCompleteDate.length ? firstCompleteDate + value.slice(firstCompleteDate.length).replace(/^[\D\s]*/, firstDateEndSeparator) : value;
    const caretShift = newValue.length - value.length;
    return {
      elementState: {
        selection: [from + caretShift, to + caretShift],
        value: newValue
      },
      data: data.replace(pseudoSeparatorsRE, firstDateEndSeparator)
    };
  };
}
function createFullWidthToHalfWidthPreprocessor() {
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    return {
      elementState: {
        selection,
        value: toHalfWidthNumber(value)
      },
      data: toHalfWidthNumber(data)
    };
  };
}
function createTimeMaskExpression(mode) {
  return Array.from(mode.replace(" AA", "")).map((char) => TIME_FIXED_CHARACTERS.includes(char) ? char : /\d/).concat(mode.includes("AA") ? [CHAR_NO_BREAK_SPACE, /[AP]/i, /M/i] : []);
}
function padTimeSegments(timeSegments, pad) {
  return Object.fromEntries(Object.entries(timeSegments).map(([segmentName, segmentValue]) => [segmentName, pad(String(segmentValue), TIME_SEGMENT_VALUE_LENGTHS[segmentName])]));
}
function padStartTimeSegments(timeSegments) {
  return padTimeSegments(timeSegments, (value, length) => value.padStart(length, "0"));
}
var SEGMENT_FULL_NAME = {
  HH: "hours",
  MM: "minutes",
  SS: "seconds",
  MSS: "milliseconds"
};
function parseTimeString(timeString, timeMode) {
  const onlyDigits = timeString.replaceAll(/\D+/g, "");
  let offset = 0;
  return Object.fromEntries(timeMode.split(/\W/).filter((segmentAbbr) => SEGMENT_FULL_NAME[segmentAbbr]).map((segmentAbbr) => {
    const segmentValue = onlyDigits.slice(offset, offset + segmentAbbr.length);
    offset += segmentAbbr.length;
    return [SEGMENT_FULL_NAME[segmentAbbr], segmentValue];
  }));
}
var LEADING_NON_DIGITS = /^\D*/;
var TRAILING_NON_DIGITS = /\D*$/;
function toTimeString({
  hours = "",
  minutes = "",
  seconds = "",
  milliseconds = ""
}) {
  return `${hours}:${minutes}:${seconds}.${milliseconds}`.replace(LEADING_NON_DIGITS, "").replace(TRAILING_NON_DIGITS, "");
}
var TRAILING_TIME_SEGMENT_SEPARATOR_REG = new RegExp(`[${TIME_FIXED_CHARACTERS.map(escapeRegExp).join("")}]$`);
function enrichTimeSegmentsWithZeroes({
  value,
  selection
}, {
  mode,
  timeSegmentMaxValues = DEFAULT_TIME_SEGMENT_MAX_VALUES
}) {
  const [from, to] = selection;
  const parsedTime = parseTimeString(value, mode);
  const possibleTimeSegments = Object.entries(parsedTime);
  const paddedMaxValues = padStartTimeSegments(timeSegmentMaxValues);
  const validatedTimeSegments = {};
  let paddedZeroes = 0;
  for (const [segmentName, segmentValue] of possibleTimeSegments) {
    const maxSegmentValue = paddedMaxValues[segmentName];
    const {
      validatedSegmentValue,
      prefixedZeroesCount
    } = padWithZeroesUntilValid(segmentValue, String(maxSegmentValue));
    paddedZeroes += prefixedZeroesCount;
    validatedTimeSegments[segmentName] = validatedSegmentValue;
  }
  const [trailingNonDigitCharacters = ""] = value.match(/\D+$/g) || [];
  const validatedTimeString = toTimeString(validatedTimeSegments) + trailingNonDigitCharacters;
  const addedDateSegmentSeparators = Math.max(validatedTimeString.length - value.length, 0);
  let newFrom = from + paddedZeroes + addedDateSegmentSeparators;
  let newTo = to + paddedZeroes + addedDateSegmentSeparators;
  if (newFrom === newTo && paddedZeroes && // if next character after cursor is time segment separator
  validatedTimeString.slice(0, newTo + 1).match(TRAILING_TIME_SEGMENT_SEPARATOR_REG)) {
    newFrom++;
    newTo++;
  }
  return {
    value: validatedTimeString,
    selection: [newFrom, newTo]
  };
}
function createInvalidTimeSegmentInsertionPreprocessor({
  timeMode,
  timeSegmentMinValues = DEFAULT_TIME_SEGMENT_MIN_VALUES,
  timeSegmentMaxValues = DEFAULT_TIME_SEGMENT_MAX_VALUES,
  parseValue = (x) => ({
    timeString: x
  })
}) {
  const invalidCharsRegExp = new RegExp(`[^\\d${TIME_FIXED_CHARACTERS.map(escapeRegExp).join("")}]+`);
  return ({
    elementState,
    data
  }, actionType) => {
    if (actionType !== "insert") {
      return {
        elementState,
        data
      };
    }
    const {
      value,
      selection
    } = elementState;
    const [from, rawTo] = selection;
    const newCharacters = data.replace(invalidCharsRegExp, "");
    const to = rawTo + newCharacters.length;
    const newPossibleValue = value.slice(0, from) + newCharacters + value.slice(to);
    const {
      timeString,
      restValue = ""
    } = parseValue(newPossibleValue);
    const timeSegments = Object.entries(parseTimeString(timeString, timeMode));
    let offset = restValue.length;
    for (const [segmentName, stringifiedSegmentValue] of timeSegments) {
      const minSegmentValue = timeSegmentMinValues[segmentName];
      const maxSegmentValue = timeSegmentMaxValues[segmentName];
      const segmentValue = Number(stringifiedSegmentValue);
      const lastSegmentDigitIndex = offset + TIME_SEGMENT_VALUE_LENGTHS[segmentName];
      if (lastSegmentDigitIndex >= from && lastSegmentDigitIndex <= to && segmentValue !== clamp(segmentValue, minSegmentValue, maxSegmentValue)) {
        return {
          elementState,
          data: ""
        };
      }
      offset += stringifiedSegmentValue.length + // any time segment separator
      1;
    }
    return {
      elementState,
      data
    };
  };
}
function createMeridiemPreprocessor(timeMode) {
  if (!timeMode.includes("AA")) {
    return identity;
  }
  const mainMeridiemCharRE = /^[AP]$/gi;
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const newValue = value.toUpperCase();
    const newData = data.toUpperCase();
    if (newValue.match(ALL_MERIDIEM_CHARACTERS_RE) && newData.match(mainMeridiemCharRE)) {
      return {
        elementState: {
          value: newValue.replaceAll(ALL_MERIDIEM_CHARACTERS_RE, ""),
          selection
        },
        data: `${newData}M`
      };
    }
    return {
      elementState: {
        selection,
        value: newValue
      },
      data: newData
    };
  };
}
function createMeridiemPostprocessor(timeMode) {
  if (!timeMode.includes("AA")) {
    return identity;
  }
  return ({
    value,
    selection
  }, initialElementState) => {
    if (!value.match(ANY_MERIDIEM_CHARACTER_RE) || value.match(ALL_MERIDIEM_CHARACTERS_RE)) {
      return {
        value,
        selection
      };
    }
    const [from, to] = selection;
    if (initialElementState.value.match(ALL_MERIDIEM_CHARACTERS_RE)) {
      const newValue2 = value.replace(ANY_MERIDIEM_CHARACTER_RE, "");
      return {
        value: newValue2,
        selection: [Math.min(from, newValue2.length), Math.min(to, newValue2.length)]
      };
    }
    const fullMeridiem = `${CHAR_NO_BREAK_SPACE}${value.includes("P") ? "P" : "A"}M`;
    const newValue = value.replace(ANY_MERIDIEM_CHARACTER_RE, (x) => x !== CHAR_NO_BREAK_SPACE ? fullMeridiem : x);
    return {
      value: newValue,
      selection: to >= newValue.indexOf(fullMeridiem) ? [newValue.length, newValue.length] : selection
    };
  };
}
function raiseSegmentValueToMin(segments, fullMode) {
  const segmentsLength = getDateSegmentValueLength(fullMode);
  return Object.fromEntries(Object.entries(segments).map(([key, value]) => {
    const segmentLength = segmentsLength[key];
    return [key, value.length === segmentLength && /^0+$/.exec(value) ? "1".padStart(segmentLength, "0") : value];
  }));
}
function createMinMaxDatePostprocessor({
  dateModeTemplate,
  min = DEFAULT_MIN_DATE,
  max = DEFAULT_MAX_DATE,
  rangeSeparator = "",
  dateSegmentSeparator = "."
}) {
  return ({
    value,
    selection
  }) => {
    const endsWithRangeSeparator = rangeSeparator && value.endsWith(rangeSeparator);
    const dateStrings = parseDateRangeString(value, dateModeTemplate, rangeSeparator);
    let validatedValue = "";
    for (const dateString of dateStrings) {
      validatedValue += validatedValue ? rangeSeparator : "";
      const parsedDate = parseDateString(dateString, dateModeTemplate);
      if (!isDateStringComplete(dateString, dateModeTemplate)) {
        const fixedDate = raiseSegmentValueToMin(parsedDate, dateModeTemplate);
        const fixedValue = toDateString(fixedDate, {
          dateMode: dateModeTemplate
        });
        const tail = dateString.endsWith(dateSegmentSeparator) ? dateSegmentSeparator : "";
        validatedValue += fixedValue + tail;
        continue;
      }
      const date = segmentsToDate(parsedDate);
      const clampedDate = clamp(date, min, max);
      validatedValue += toDateString(dateToSegments(clampedDate), {
        dateMode: dateModeTemplate
      });
    }
    return {
      selection,
      value: validatedValue + (endsWithRangeSeparator ? rangeSeparator : "")
    };
  };
}
function normalizeDatePreprocessor({
  dateModeTemplate,
  dateSegmentsSeparator,
  rangeSeparator = "",
  dateTimeSeparator = DATE_TIME_SEPARATOR
}) {
  return ({
    elementState,
    data
  }) => {
    var _a;
    const separator = rangeSeparator ? new RegExp(`${rangeSeparator}|-`) : dateTimeSeparator;
    const possibleDates = data.split(separator);
    const dates = data.includes(dateTimeSeparator) ? [(_a = possibleDates[0]) !== null && _a !== void 0 ? _a : ""] : possibleDates;
    if (dates.every((date) => date.trim().split(/\D/).filter(Boolean).length === dateModeTemplate.split(dateSegmentsSeparator).length)) {
      const newData = dates.map((date) => normalizeDateString(date, dateModeTemplate, dateSegmentsSeparator)).join(rangeSeparator);
      return {
        elementState,
        data: `${newData}${data.includes(dateTimeSeparator) ? dateTimeSeparator + possibleDates[1] || "" : ""}`
      };
    }
    return {
      elementState,
      data
    };
  };
}
function normalizeDateString(dateString, template, separator) {
  const dateSegments = dateString.split(/\D/).filter(Boolean);
  const templateSegments = template.split(separator);
  const normalizedSegments = dateSegments.map((segment, index) => {
    var _a, _b;
    return index === templateSegments.length - 1 ? segment : segment.padStart((_b = (_a = templateSegments[index]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0, "0");
  });
  return normalizedSegments.join(separator);
}
function maskitoPostfixPostprocessorGenerator(postfix) {
  const postfixRE = new RegExp(`${escapeRegExp(postfix)}$`);
  return postfix ? ({
    value,
    selection
  }, initialElementState) => {
    if (!value && !initialElementState.value.endsWith(postfix)) {
      return {
        value,
        selection
      };
    }
    if (!value.endsWith(postfix) && !initialElementState.value.endsWith(postfix)) {
      return {
        selection,
        value: value + postfix
      };
    }
    const initialValueBeforePostfix = initialElementState.value.replace(postfixRE, "");
    const postfixWasModified = initialElementState.selection[1] >= initialValueBeforePostfix.length;
    const alreadyExistedValueBeforePostfix = findCommonBeginningSubstr(initialValueBeforePostfix, value);
    return {
      selection,
      value: Array.from(postfix).reverse().reduce((newValue, char, index) => {
        const i = newValue.length - 1 - index;
        const isInitiallyMirroredChar = alreadyExistedValueBeforePostfix[i] === char && postfixWasModified;
        return newValue[i] !== char || isInitiallyMirroredChar ? newValue.slice(0, i + 1) + char + newValue.slice(i + 1) : newValue;
      }, value)
    };
  } : identity;
}
function maskitoPrefixPostprocessorGenerator(prefix) {
  return prefix ? ({
    value,
    selection
  }, initialElementState) => {
    if (value.startsWith(prefix) || // already valid
    !value && !initialElementState.value.startsWith(prefix)) {
      return {
        value,
        selection
      };
    }
    const [from, to] = selection;
    const prefixedValue = Array.from(prefix).reduce((modifiedValue, char, i) => modifiedValue[i] === char ? modifiedValue : modifiedValue.slice(0, i) + char + modifiedValue.slice(i), value);
    const addedCharsCount = prefixedValue.length - value.length;
    return {
      selection: [from + addedCharsCount, to + addedCharsCount],
      value: prefixedValue
    };
  } : identity;
}
function createValidDatePreprocessor({
  dateModeTemplate,
  dateSegmentsSeparator,
  rangeSeparator = ""
}) {
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    if (data === dateSegmentsSeparator) {
      return {
        elementState,
        data: selection[0] === value.length ? data : ""
      };
    }
    const newCharacters = data.replaceAll(new RegExp(`[^\\d${escapeRegExp(dateSegmentsSeparator)}${rangeSeparator}]`, "g"), "");
    if (!newCharacters) {
      return {
        elementState,
        data: ""
      };
    }
    const [from, rawTo] = selection;
    let to = rawTo + data.length;
    const newPossibleValue = value.slice(0, from) + newCharacters + value.slice(to);
    const dateStrings = parseDateRangeString(newPossibleValue, dateModeTemplate, rangeSeparator);
    let validatedValue = "";
    const hasRangeSeparator = Boolean(rangeSeparator) && newPossibleValue.includes(rangeSeparator);
    for (const dateString of dateStrings) {
      const {
        validatedDateString,
        updatedSelection
      } = validateDateString({
        dateString,
        dateModeTemplate,
        dateSegmentsSeparator,
        offset: validatedValue.length,
        selection: [from, to]
      });
      if (dateString && !validatedDateString) {
        return {
          elementState,
          data: ""
        };
      }
      to = updatedSelection[1];
      validatedValue += hasRangeSeparator && !validatedValue ? validatedDateString + rangeSeparator : validatedDateString;
    }
    const newData = validatedValue.slice(from, to);
    return {
      elementState: {
        selection,
        value: validatedValue.slice(0, from) + newData.split(dateSegmentsSeparator).map((segment) => "0".repeat(segment.length)).join(dateSegmentsSeparator) + validatedValue.slice(to)
      },
      data: newData
    };
  };
}
function maskitoEventHandler(name, handler, eventListenerOptions) {
  return (element, maskitoOptions) => {
    const listener = () => handler(element, maskitoOptions);
    element.addEventListener(name, listener, eventListenerOptions);
    return () => element.removeEventListener(name, listener, eventListenerOptions);
  };
}
function maskitoSelectionChangeHandler(handler) {
  return (element, options) => {
    const document = element.ownerDocument;
    let isPointerDown = 0;
    const onPointerDown = () => isPointerDown++;
    const onPointerUp = () => {
      isPointerDown = Math.max(--isPointerDown, 0);
    };
    const listener = () => {
      if (!element.matches(":focus")) {
        return;
      }
      if (isPointerDown) {
        return document.addEventListener("mouseup", listener, {
          once: true,
          passive: true
        });
      }
      handler(element, options);
    };
    document.addEventListener("selectionchange", listener, {
      passive: true
    });
    element.addEventListener("mousedown", onPointerDown, {
      passive: true
    });
    document.addEventListener("mouseup", onPointerUp, {
      passive: true
    });
    return () => {
      document.removeEventListener("selectionchange", listener);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("mouseup", onPointerUp);
    };
  };
}
function maskitoCaretGuard(guard) {
  return maskitoSelectionChangeHandler((element) => {
    var _a, _b;
    const start = (_a = element.selectionStart) !== null && _a !== void 0 ? _a : 0;
    const end = (_b = element.selectionEnd) !== null && _b !== void 0 ? _b : 0;
    const [fromLimit, toLimit] = guard(element.value, [start, end]);
    if (fromLimit > start || toLimit < end) {
      element.setSelectionRange(clamp(start, fromLimit, toLimit), clamp(end, fromLimit, toLimit));
    }
  });
}
function maskitoRemoveOnBlurPlugin(value) {
  return maskitoEventHandler("blur", (element) => {
    if (element.value === value) {
      maskitoUpdateElement(element, "");
    }
  });
}
function createMeridiemSteppingPlugin(meridiemStartIndex) {
  if (meridiemStartIndex < 0) {
    return () => {
    };
  }
  return (element) => {
    const listener = (event) => {
      const caretIndex = Number(element.selectionStart);
      const value = element.value.toUpperCase();
      if (event.key !== "ArrowUp" && event.key !== "ArrowDown" || caretIndex < meridiemStartIndex) {
        return;
      }
      event.preventDefault();
      const meridiemMainCharacter = value.includes("A") ? "P" : value.includes("P") || event.key === "ArrowUp" ? "A" : "P";
      const newMeridiem = `${CHAR_NO_BREAK_SPACE}${meridiemMainCharacter}M`;
      maskitoUpdateElement(element, {
        value: value.length === meridiemStartIndex ? value + newMeridiem : value.replace(ANY_MERIDIEM_CHARACTER_RE, newMeridiem),
        selection: [caretIndex, caretIndex]
      });
    };
    element.addEventListener("keydown", listener);
    return () => element.removeEventListener("keydown", listener);
  };
}
var noop = () => {
};
function createTimeSegmentsSteppingPlugin({
  step,
  fullMode,
  timeSegmentMaxValues
}) {
  const segmentsIndexes = createTimeSegmentsIndexes(fullMode);
  return step <= 0 ? noop : (element) => {
    const listener = (event) => {
      var _a;
      if (event.key !== "ArrowUp" && event.key !== "ArrowDown") {
        return;
      }
      event.preventDefault();
      const selectionStart = (_a = element.selectionStart) !== null && _a !== void 0 ? _a : 0;
      const activeSegment = getActiveSegment({
        segmentsIndexes,
        selectionStart
      });
      if (!activeSegment) {
        return;
      }
      const updatedValue = updateSegmentValue({
        selection: segmentsIndexes.get(activeSegment),
        value: element.value,
        toAdd: event.key === "ArrowUp" ? step : -step,
        max: timeSegmentMaxValues[activeSegment]
      });
      maskitoUpdateElement(element, {
        value: updatedValue,
        selection: [selectionStart, selectionStart]
      });
    };
    element.addEventListener("keydown", listener);
    return () => element.removeEventListener("keydown", listener);
  };
}
function createTimeSegmentsIndexes(fullMode) {
  return /* @__PURE__ */ new Map([["hours", getSegmentRange(fullMode, "HH")], ["milliseconds", getSegmentRange(fullMode, "MSS")], ["minutes", getSegmentRange(fullMode, "MM")], ["seconds", getSegmentRange(fullMode, "SS")]]);
}
function getSegmentRange(mode, segment) {
  const index = mode.indexOf(segment);
  return index === -1 ? [-1, -1] : [index, index + segment.length];
}
function getActiveSegment({
  segmentsIndexes,
  selectionStart
}) {
  for (const [segmentName, segmentRange] of segmentsIndexes.entries()) {
    const [from, to] = segmentRange;
    if (from <= selectionStart && selectionStart <= to) {
      return segmentName;
    }
  }
  return null;
}
function updateSegmentValue({
  selection,
  value,
  toAdd,
  max
}) {
  const [from, to] = selection;
  const segmentValue = Number(value.slice(from, to).padEnd(to - from, "0"));
  const newSegmentValue = mod(segmentValue + toAdd, max + 1);
  return value.slice(0, from) + String(newSegmentValue).padStart(to - from, "0") + value.slice(to, value.length);
}
function mod(value, max) {
  if (value < 0) {
    value += Math.floor(Math.abs(value) / max + 1) * max;
  }
  return value % max;
}
function createZeroPlaceholdersPreprocessor() {
  return ({
    elementState
  }, actionType) => {
    const {
      value,
      selection
    } = elementState;
    if (!value || isLastChar(value, selection)) {
      return {
        elementState
      };
    }
    const [from, to] = selection;
    const zeroes = value.slice(from, to).replaceAll(/\d/g, "0");
    const newValue = value.slice(0, from) + zeroes + value.slice(to);
    if (!zeroes.replaceAll(/\D/g, "")) {
      return {
        elementState
      };
    }
    if (actionType === "validation" || actionType === "insert" && from === to) {
      return {
        elementState: {
          selection,
          value: newValue
        }
      };
    }
    return {
      elementState: {
        selection: actionType === "deleteBackward" || actionType === "insert" ? [from, from] : [to, to],
        value: newValue
      }
    };
  };
}
function isLastChar(value, [_, to]) {
  return to === value.length;
}
function maskitoDateOptionsGenerator({
  mode,
  separator = ".",
  max,
  min
}) {
  const dateModeTemplate = mode.split("/").join(separator);
  return Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), {
    mask: Array.from(dateModeTemplate).map((char) => separator.includes(char) ? char : /\d/),
    overwriteMode: "replace",
    preprocessors: [createFullWidthToHalfWidthPreprocessor(), createZeroPlaceholdersPreprocessor(), normalizeDatePreprocessor({
      dateModeTemplate,
      dateSegmentsSeparator: separator
    }), createValidDatePreprocessor({
      dateModeTemplate,
      dateSegmentsSeparator: separator
    })],
    postprocessors: [createDateSegmentsZeroPaddingPostprocessor({
      dateModeTemplate,
      dateSegmentSeparator: separator,
      splitFn: (value) => ({
        dateStrings: [value]
      }),
      uniteFn: ([dateString = ""]) => dateString
    }), createMinMaxDatePostprocessor({
      min,
      max,
      dateModeTemplate,
      dateSegmentSeparator: separator
    })]
  });
}
var POSSIBLE_DATE_RANGE_SEPARATOR = [CHAR_HYPHEN, CHAR_EN_DASH, CHAR_EM_DASH, CHAR_MINUS, CHAR_JP_HYPHEN];
function createMinMaxRangeLengthPostprocessor({
  dateModeTemplate,
  rangeSeparator,
  minLength,
  maxLength,
  max = DEFAULT_MAX_DATE
}) {
  if (isEmpty(minLength) && isEmpty(maxLength)) {
    return identity;
  }
  return ({
    value,
    selection
  }) => {
    const dateStrings = parseDateRangeString(value, dateModeTemplate, rangeSeparator);
    if (dateStrings.length !== 2 || dateStrings.some((date) => !isDateStringComplete(date, dateModeTemplate))) {
      return {
        value,
        selection
      };
    }
    const [fromDate, toDate] = dateStrings.map((dateString) => segmentsToDate(parseDateString(dateString, dateModeTemplate)));
    if (!fromDate || !toDate) {
      return {
        value,
        selection
      };
    }
    const minDistantToDate = appendDate(fromDate, Object.assign(Object.assign({}, minLength), {
      // 06.02.2023 - 07.02.2023 => {minLength: {day: 3}} => 06.02.2023 - 08.02.2023
      // "from"-day is included in the range
      day: (minLength === null || minLength === void 0 ? void 0 : minLength.day) && minLength.day - 1
    }));
    const maxDistantToDate = !isEmpty(maxLength) ? appendDate(fromDate, Object.assign(Object.assign({}, maxLength), {
      day: (maxLength === null || maxLength === void 0 ? void 0 : maxLength.day) && maxLength.day - 1
    })) : max;
    const minLengthClampedToDate = clamp(toDate, minDistantToDate, max);
    const minMaxLengthClampedToDate = minLengthClampedToDate > maxDistantToDate ? maxDistantToDate : minLengthClampedToDate;
    return {
      selection,
      value: dateStrings[0] + rangeSeparator + toDateString(dateToSegments(minMaxLengthClampedToDate), {
        dateMode: dateModeTemplate
      })
    };
  };
}
function createSwapDatesPostprocessor({
  dateModeTemplate,
  rangeSeparator
}) {
  return ({
    value,
    selection
  }) => {
    const dateStrings = parseDateRangeString(value, dateModeTemplate, rangeSeparator);
    const isDateRangeComplete = dateStrings.length === 2 && dateStrings.every((date) => isDateStringComplete(date, dateModeTemplate));
    const [from, to] = selection;
    const caretAtTheEnd = from >= value.length;
    const allValueSelected = from === 0 && to >= value.length;
    if (!(caretAtTheEnd || allValueSelected) || !isDateRangeComplete) {
      return {
        value,
        selection
      };
    }
    const [fromDate, toDate] = dateStrings.map((dateString) => segmentsToDate(parseDateString(dateString, dateModeTemplate)));
    return {
      selection,
      value: fromDate && toDate && fromDate > toDate ? dateStrings.reverse().join(rangeSeparator) : value
    };
  };
}
function maskitoDateRangeOptionsGenerator({
  mode,
  min,
  max,
  minLength,
  maxLength,
  dateSeparator = ".",
  rangeSeparator = `${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}`
}) {
  const dateModeTemplate = mode.split("/").join(dateSeparator);
  const dateMask = Array.from(dateModeTemplate).map((char) => dateSeparator.includes(char) ? char : /\d/);
  return Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), {
    mask: [...dateMask, ...Array.from(rangeSeparator), ...dateMask],
    overwriteMode: "replace",
    preprocessors: [createFullWidthToHalfWidthPreprocessor(), createFirstDateEndSeparatorPreprocessor({
      dateModeTemplate,
      dateSegmentSeparator: dateSeparator,
      firstDateEndSeparator: rangeSeparator,
      pseudoFirstDateEndSeparators: POSSIBLE_DATE_RANGE_SEPARATOR
    }), createZeroPlaceholdersPreprocessor(), normalizeDatePreprocessor({
      dateModeTemplate,
      rangeSeparator,
      dateSegmentsSeparator: dateSeparator
    }), createValidDatePreprocessor({
      dateModeTemplate,
      rangeSeparator,
      dateSegmentsSeparator: dateSeparator
    })],
    postprocessors: [createDateSegmentsZeroPaddingPostprocessor({
      dateModeTemplate,
      dateSegmentSeparator: dateSeparator,
      splitFn: (value) => ({
        dateStrings: parseDateRangeString(value, dateModeTemplate, rangeSeparator)
      }),
      uniteFn: (validatedDateStrings, initialValue) => validatedDateStrings.reduce((acc, dateString, dateIndex) => acc + dateString + (!dateIndex && initialValue.includes(rangeSeparator) ? rangeSeparator : ""), "")
    }), createMinMaxDatePostprocessor({
      min,
      max,
      dateModeTemplate,
      rangeSeparator,
      dateSegmentSeparator: dateSeparator
    }), createMinMaxRangeLengthPostprocessor({
      dateModeTemplate,
      minLength,
      maxLength,
      max,
      rangeSeparator
    }), createSwapDatesPostprocessor({
      dateModeTemplate,
      rangeSeparator
    })]
  });
}
function isDateTimeStringComplete(dateTimeString, {
  dateMode,
  timeMode,
  dateTimeSeparator = DATE_TIME_SEPARATOR
}) {
  var _a;
  return dateTimeString.length >= dateMode.length + timeMode.length + dateTimeSeparator.length && ((_a = dateTimeString.split(dateTimeSeparator)[0]) !== null && _a !== void 0 ? _a : "").split(/\D/).every((segment) => !/^0+$/.exec(segment));
}
var NON_DIGIT_PLACEHOLDER_RE = /[^dmy]/g;
var LEADING_NON_DIGIT_RE = /^\D*/;
function parseDateTimeString(dateTime, dateModeTemplate) {
  const dateDigitsCount = dateModeTemplate.replaceAll(NON_DIGIT_PLACEHOLDER_RE, "").length;
  const [date = ""] = new RegExp(`(\\d[^\\d]*){0,${dateDigitsCount - 1}}\\d?`).exec(dateTime) || [];
  const [dateTimeSeparator = ""] = LEADING_NON_DIGIT_RE.exec(dateTime.slice(date.length)) || [];
  return [date, dateTime.slice(date.length + dateTimeSeparator.length)];
}
function createMinMaxDateTimePostprocessor({
  dateModeTemplate,
  timeMode,
  min = DEFAULT_MIN_DATE,
  max = DEFAULT_MAX_DATE,
  dateTimeSeparator
}) {
  return ({
    value,
    selection
  }) => {
    const [dateString, timeString] = parseDateTimeString(value, dateModeTemplate);
    const parsedDate = parseDateString(dateString, dateModeTemplate);
    const parsedTime = parseTimeString(timeString, timeMode);
    if (!isDateTimeStringComplete(value, {
      dateMode: dateModeTemplate,
      timeMode,
      dateTimeSeparator
    })) {
      const fixedDate = raiseSegmentValueToMin(parsedDate, dateModeTemplate);
      const {
        year,
        month,
        day
      } = isDateStringComplete(dateString, dateModeTemplate) ? dateToSegments(clamp(segmentsToDate(fixedDate), min, max)) : fixedDate;
      const fixedValue = toDateString(Object.assign({
        year,
        month,
        day
      }, parsedTime), {
        dateMode: dateModeTemplate,
        dateTimeSeparator,
        timeMode
      });
      const tail = value.slice(fixedValue.length);
      return {
        selection,
        value: fixedValue + tail
      };
    }
    const date = segmentsToDate(parsedDate, parsedTime);
    const clampedDate = clamp(date, min, max);
    const [trailingNonDigitCharacters = ""] = value.match(/\D+$/g) || [];
    const validatedValue = toDateString(dateToSegments(clampedDate), {
      dateMode: dateModeTemplate,
      dateTimeSeparator,
      timeMode
    }) + trailingNonDigitCharacters;
    return {
      selection,
      value: validatedValue
    };
  };
}
function createValidDateTimePreprocessor({
  dateModeTemplate,
  dateSegmentsSeparator,
  dateTimeSeparator,
  timeMode,
  timeSegmentMaxValues
}) {
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    if (data === dateSegmentsSeparator) {
      return {
        elementState,
        data: selection[0] === value.length ? data : ""
      };
    }
    const newCharacters = data.replaceAll(/\D/g, "");
    if (!newCharacters) {
      return {
        elementState,
        data
      };
    }
    const [from, rawTo] = selection;
    let to = rawTo + data.length;
    const newPossibleValue = value.slice(0, from) + newCharacters + value.slice(to);
    const [dateString, timeString] = parseDateTimeString(newPossibleValue, dateModeTemplate);
    let validatedValue = "";
    const hasDateTimeSeparator = newPossibleValue.includes(dateTimeSeparator);
    const {
      validatedDateString,
      updatedSelection
    } = validateDateString({
      dateString,
      dateSegmentsSeparator,
      dateModeTemplate,
      offset: 0,
      selection: [from, to]
    });
    if (dateString && !validatedDateString) {
      return {
        elementState,
        data: ""
      };
    }
    to = updatedSelection[1];
    validatedValue += validatedDateString;
    const updatedTimeState = enrichTimeSegmentsWithZeroes({
      value: timeString,
      selection: [from, to]
    }, {
      mode: timeMode,
      timeSegmentMaxValues
    });
    to = updatedTimeState.selection[1];
    validatedValue += hasDateTimeSeparator ? dateTimeSeparator + updatedTimeState.value : updatedTimeState.value;
    const newData = validatedValue.slice(from, to);
    return {
      elementState: {
        selection,
        value: validatedValue.slice(0, from) + newData.split(dateSegmentsSeparator).map((segment) => "0".repeat(segment.length)).join(dateSegmentsSeparator) + validatedValue.slice(to)
      },
      data: newData
    };
  };
}
function maskitoDateTimeOptionsGenerator({
  dateMode,
  timeMode,
  dateSeparator = ".",
  min,
  max,
  dateTimeSeparator = DATE_TIME_SEPARATOR,
  timeStep = 0
}) {
  const hasMeridiem = timeMode.includes("AA");
  const dateModeTemplate = dateMode.split("/").join(dateSeparator);
  const timeSegmentMaxValues = Object.assign(Object.assign({}, DEFAULT_TIME_SEGMENT_MAX_VALUES), hasMeridiem ? {
    hours: 12
  } : {});
  const timeSegmentMinValues = Object.assign(Object.assign({}, DEFAULT_TIME_SEGMENT_MIN_VALUES), hasMeridiem ? {
    hours: 1
  } : {});
  const fullMode = `${dateModeTemplate}${dateTimeSeparator}${timeMode}`;
  return Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), {
    mask: [...Array.from(dateModeTemplate).map((char) => dateSeparator.includes(char) ? char : /\d/), ...dateTimeSeparator.split(""), ...createTimeMaskExpression(timeMode)],
    overwriteMode: "replace",
    preprocessors: [createFullWidthToHalfWidthPreprocessor(), createColonConvertPreprocessor(), createFirstDateEndSeparatorPreprocessor({
      dateModeTemplate,
      dateSegmentSeparator: dateSeparator,
      firstDateEndSeparator: dateTimeSeparator,
      pseudoFirstDateEndSeparators: dateTimeSeparator.split("")
    }), createZeroPlaceholdersPreprocessor(), createMeridiemPreprocessor(timeMode), normalizeDatePreprocessor({
      dateModeTemplate,
      dateSegmentsSeparator: dateSeparator,
      dateTimeSeparator
    }), createInvalidTimeSegmentInsertionPreprocessor({
      timeMode,
      timeSegmentMinValues,
      timeSegmentMaxValues,
      parseValue: (x) => {
        const [dateString, timeString] = parseDateTimeString(x, dateModeTemplate);
        return {
          timeString,
          restValue: dateString + dateTimeSeparator
        };
      }
    }), createValidDateTimePreprocessor({
      dateModeTemplate,
      dateSegmentsSeparator: dateSeparator,
      dateTimeSeparator,
      timeMode,
      timeSegmentMaxValues
    })],
    postprocessors: [createMeridiemPostprocessor(timeMode), createDateSegmentsZeroPaddingPostprocessor({
      dateModeTemplate,
      dateSegmentSeparator: dateSeparator,
      splitFn: (value) => {
        const [dateString, timeString] = parseDateTimeString(value, dateModeTemplate);
        return {
          dateStrings: [dateString],
          restPart: timeString
        };
      },
      uniteFn: ([validatedDateString], initialValue) => validatedDateString + (initialValue.includes(dateTimeSeparator) ? dateTimeSeparator : "")
    }), createMinMaxDateTimePostprocessor({
      min,
      max,
      dateModeTemplate,
      timeMode,
      dateTimeSeparator
    })],
    plugins: [createTimeSegmentsSteppingPlugin({
      step: timeStep,
      fullMode,
      timeSegmentMaxValues: DEFAULT_TIME_SEGMENT_MAX_VALUES
    }), createMeridiemSteppingPlugin(fullMode.indexOf("AA"))]
  });
}
function createAffixesFilterPreprocessor({
  prefix,
  postfix
}) {
  return ({
    elementState,
    data
  }) => {
    const {
      cleanValue: cleanData
    } = extractAffixes(data, {
      prefix,
      postfix
    });
    return {
      elementState,
      data: cleanData
    };
  };
}
function generateMaskExpression({
  decimalSeparator,
  isNegativeAllowed,
  precision,
  thousandSeparator,
  prefix,
  postfix,
  decimalPseudoSeparators = [],
  pseudoMinuses = [],
  minusSign
}) {
  const computedPrefix = computeAllOptionalCharsRegExp(prefix);
  const digit = String.raw`\d`;
  const optionalMinus = isNegativeAllowed ? `[${minusSign}${pseudoMinuses.map((x) => `\\${x}`).join("")}]?` : "";
  const integerPart = thousandSeparator ? `[${digit}${escapeRegExp(thousandSeparator).replaceAll(/\s/g, String.raw`\s`)}]*` : `[${digit}]*`;
  const precisionPart = Number.isFinite(precision) ? precision : "";
  const decimalPart = precision > 0 ? `([${escapeRegExp(decimalSeparator)}${decimalPseudoSeparators.map(escapeRegExp).join("")}]${digit}{0,${precisionPart}})?` : "";
  const computedPostfix = computeAllOptionalCharsRegExp(postfix);
  return new RegExp(`^${computedPrefix}${optionalMinus}${integerPart}${decimalPart}${computedPostfix}$`);
}
function computeAllOptionalCharsRegExp(str) {
  return str ? `${str.split("").map((char) => `${escapeRegExp(char)}?`).join("")}` : "";
}
function maskitoParseNumber(maskedNumber, decimalSeparator = ".") {
  const hasNegativeSign = !!new RegExp(`^\\D*[${CHAR_MINUS}\\${CHAR_HYPHEN}${CHAR_EN_DASH}${CHAR_EM_DASH}${CHAR_JP_HYPHEN}]`).exec(maskedNumber);
  const escapedDecimalSeparator = escapeRegExp(decimalSeparator);
  const unmaskedNumber = maskedNumber.replaceAll(new RegExp(`${escapedDecimalSeparator}(?!\\d)`, "g"), "").replaceAll(new RegExp(`[^\\d${escapedDecimalSeparator}]`, "g"), "").replace(decimalSeparator, ".");
  if (unmaskedNumber) {
    const sign = hasNegativeSign ? CHAR_HYPHEN : "";
    return Number(`${sign}${unmaskedNumber}`);
  }
  return NaN;
}
function stringifyNumberWithoutExp(value) {
  var _a;
  const valueAsString = String(value);
  const [numberPart = "", expPart] = valueAsString.split("e-");
  let valueWithoutExp = valueAsString;
  if (expPart) {
    const [, fractionalPart] = numberPart.split(".");
    const decimalDigits = Number(expPart) + ((_a = fractionalPart === null || fractionalPart === void 0 ? void 0 : fractionalPart.length) !== null && _a !== void 0 ? _a : 0);
    valueWithoutExp = value.toFixed(decimalDigits);
  }
  return valueWithoutExp;
}
function toNumberParts(value, {
  decimalSeparator,
  minusSign
}) {
  const [integerWithMinus = "", decimalPart = ""] = value.split(decimalSeparator);
  const escapedMinus = escapeRegExp(minusSign);
  const [, minus = "", integerPart = ""] = new RegExp(`^(?:[^\\d${escapedMinus}])?(${escapedMinus})?(.*)`).exec(integerWithMinus) || [];
  return {
    minus,
    integerPart,
    decimalPart
  };
}
function validateDecimalPseudoSeparators({
  decimalSeparator,
  thousandSeparator,
  decimalPseudoSeparators = DEFAULT_DECIMAL_PSEUDO_SEPARATORS
}) {
  return decimalPseudoSeparators.filter((char) => char !== thousandSeparator && char !== decimalSeparator);
}
function createDecimalZeroPaddingPostprocessor({
  decimalSeparator,
  precision,
  decimalZeroPadding,
  prefix,
  postfix
}) {
  if (precision <= 0 || !decimalZeroPadding) {
    return identity;
  }
  return ({
    value,
    selection
  }) => {
    const {
      cleanValue,
      extractedPrefix,
      extractedPostfix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    if (Number.isNaN(maskitoParseNumber(cleanValue, decimalSeparator))) {
      return {
        value,
        selection
      };
    }
    const [integerPart, decimalPart = ""] = cleanValue.split(decimalSeparator);
    return {
      value: extractedPrefix + integerPart + decimalSeparator + decimalPart.padEnd(precision, "0") + extractedPostfix,
      selection
    };
  };
}
function emptyPostprocessor({
  prefix,
  postfix,
  decimalSeparator,
  minusSign
}) {
  return ({
    value,
    selection
  }) => {
    const [caretIndex] = selection;
    const {
      cleanValue,
      extractedPrefix,
      extractedPostfix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    const {
      minus,
      integerPart,
      decimalPart
    } = toNumberParts(cleanValue, {
      decimalSeparator,
      minusSign
    });
    const aloneDecimalSeparator = !integerPart && !decimalPart && cleanValue.includes(decimalSeparator);
    if (!integerPart && !Number(decimalPart) && caretIndex === (minus + extractedPrefix).length || aloneDecimalSeparator) {
      return {
        selection,
        value: extractedPrefix + minus + extractedPostfix
      };
    }
    return {
      value,
      selection
    };
  };
}
function createInitializationOnlyPreprocessor({
  decimalSeparator,
  decimalPseudoSeparators,
  pseudoMinuses,
  prefix,
  postfix,
  minusSign
}) {
  let isInitializationPhase = true;
  const cleanNumberMask = generateMaskExpression({
    decimalSeparator,
    decimalPseudoSeparators,
    pseudoMinuses,
    prefix: "",
    postfix: "",
    thousandSeparator: "",
    precision: Infinity,
    isNegativeAllowed: true,
    minusSign
  });
  return ({
    elementState,
    data
  }) => {
    if (!isInitializationPhase) {
      return {
        elementState,
        data
      };
    }
    isInitializationPhase = false;
    const {
      value,
      selection
    } = elementState;
    const [from, to] = selection;
    const {
      extractedPrefix,
      cleanValue,
      extractedPostfix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    const cleanState = maskitoTransform({
      selection: [Math.max(from - extractedPrefix.length, 0), clamp(to - extractedPrefix.length, 0, cleanValue.length)],
      value: cleanValue
    }, {
      mask: cleanNumberMask
    });
    const [cleanFrom, cleanTo] = cleanState.selection;
    return {
      elementState: {
        selection: [cleanFrom + extractedPrefix.length, cleanTo + extractedPrefix.length],
        value: extractedPrefix + cleanState.value + extractedPostfix
      },
      data
    };
  };
}
function createLeadingZeroesValidationPostprocessor({
  decimalSeparator,
  thousandSeparator,
  prefix,
  postfix
}) {
  const trimLeadingZeroes = (value) => {
    const escapedThousandSeparator = escapeRegExp(thousandSeparator);
    return value.replace(
      // all leading zeroes followed by another zero
      new RegExp(`^(\\D+)?[0${escapedThousandSeparator}]+(?=0)`),
      "$1"
    ).replace(
      // zero followed by not-zero digit
      new RegExp(`^(\\D+)?[0${escapedThousandSeparator}]+(?=[1-9])`),
      "$1"
    );
  };
  const countTrimmedZeroesBefore = (value, index) => {
    const valueBefore = value.slice(0, index);
    const followedByZero = value.slice(index).startsWith("0");
    return valueBefore.length - trimLeadingZeroes(valueBefore).length + (followedByZero ? 1 : 0);
  };
  return ({
    value,
    selection
  }) => {
    const [from, to] = selection;
    const {
      cleanValue,
      extractedPrefix,
      extractedPostfix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    const hasDecimalSeparator = cleanValue.includes(decimalSeparator);
    const [integerPart = "", decimalPart = ""] = cleanValue.split(decimalSeparator);
    const zeroTrimmedIntegerPart = trimLeadingZeroes(integerPart);
    if (integerPart === zeroTrimmedIntegerPart) {
      return {
        value,
        selection
      };
    }
    const newFrom = from - countTrimmedZeroesBefore(value, from);
    const newTo = to - countTrimmedZeroesBefore(value, to);
    return {
      value: extractedPrefix + zeroTrimmedIntegerPart + (hasDecimalSeparator ? decimalSeparator : "") + decimalPart + extractedPostfix,
      selection: [Math.max(newFrom, 0), Math.max(newTo, 0)]
    };
  };
}
function createMinMaxPostprocessor({
  min,
  max,
  decimalSeparator,
  minusSign
}) {
  return ({
    value,
    selection
  }) => {
    const parsedNumber = maskitoParseNumber(value, decimalSeparator);
    const limitedValue = (
      /**
       * We cannot limit lower bound if user enters positive number.
       * The same for upper bound and negative number.
       * ___
       * @example (min = 5)
       * Empty input => Without this condition user cannot type 42 (the first digit will be rejected)
       * ___
       * @example (max = -10)
       * Value is -10 => Without this condition user cannot delete 0 to enter another digit
       */
      parsedNumber > 0 ? Math.min(parsedNumber, max) : Math.max(parsedNumber, min)
    );
    if (parsedNumber && limitedValue !== parsedNumber) {
      const newValue = `${limitedValue}`.replace(".", decimalSeparator).replace(CHAR_HYPHEN, minusSign);
      return {
        value: newValue,
        selection: [newValue.length, newValue.length]
      };
    }
    return {
      value,
      selection
    };
  };
}
function createNonRemovableCharsDeletionPreprocessor({
  decimalSeparator,
  thousandSeparator,
  decimalZeroPadding
}) {
  return ({
    elementState,
    data
  }, actionType) => {
    const {
      value,
      selection
    } = elementState;
    const [from, to] = selection;
    const selectedCharacters = value.slice(from, to);
    const nonRemovableSeparators = decimalZeroPadding ? [decimalSeparator, thousandSeparator] : [thousandSeparator];
    const areNonRemovableZeroesSelected = decimalZeroPadding && from > value.indexOf(decimalSeparator) && Boolean(selectedCharacters.match(/^0+$/gi));
    if (actionType !== "deleteBackward" && actionType !== "deleteForward" || !nonRemovableSeparators.includes(selectedCharacters) && !areNonRemovableZeroesSelected) {
      return {
        elementState,
        data
      };
    }
    return {
      elementState: {
        value,
        selection: actionType === "deleteForward" ? [to, to] : [from, from]
      },
      data
    };
  };
}
function createNotEmptyIntegerPartPreprocessor({
  decimalSeparator,
  precision,
  prefix,
  postfix
}) {
  const startWithDecimalSepRegExp = new RegExp(`^\\D*${escapeRegExp(decimalSeparator)}`);
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const {
      cleanValue,
      extractedPrefix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    const [from, to] = selection;
    const cleanFrom = clamp(from - extractedPrefix.length, 0, cleanValue.length);
    const cleanTo = clamp(to - extractedPrefix.length, 0, cleanValue.length);
    if (precision <= 0 || cleanValue.slice(0, cleanFrom).includes(decimalSeparator) || cleanValue.slice(cleanTo).includes(decimalSeparator) || !data.match(startWithDecimalSepRegExp)) {
      return {
        elementState,
        data
      };
    }
    const digitsBeforeCursor = /\d+/.exec(cleanValue.slice(0, cleanFrom));
    return {
      elementState,
      data: digitsBeforeCursor ? data : `0${data}`
    };
  };
}
function createPseudoCharactersPreprocessor({
  validCharacter,
  pseudoCharacters,
  prefix,
  postfix
}) {
  const pseudoCharactersRegExp = new RegExp(`[${pseudoCharacters.join("")}]`, "gi");
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const {
      cleanValue,
      extractedPostfix,
      extractedPrefix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    return {
      elementState: {
        selection,
        value: extractedPrefix + cleanValue.replace(pseudoCharactersRegExp, validCharacter) + extractedPostfix
      },
      data: data.replace(pseudoCharactersRegExp, validCharacter)
    };
  };
}
function createRepeatedDecimalSeparatorPreprocessor({
  decimalSeparator,
  prefix,
  postfix
}) {
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const [from, to] = selection;
    const {
      cleanValue
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    return {
      elementState,
      data: !cleanValue.includes(decimalSeparator) || value.slice(from, to + 1).includes(decimalSeparator) ? data : data.replaceAll(new RegExp(escapeRegExp(decimalSeparator), "gi"), "")
    };
  };
}
function createThousandSeparatorPostprocessor({
  thousandSeparator,
  decimalSeparator,
  prefix,
  postfix,
  minusSign
}) {
  if (!thousandSeparator) {
    return identity;
  }
  const isAllSpaces = (...chars) => chars.every((x) => /\s/.test(x));
  return ({
    value,
    selection
  }) => {
    const [initialFrom, initialTo] = selection;
    let [from, to] = selection;
    const {
      cleanValue,
      extractedPostfix,
      extractedPrefix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    const {
      minus,
      integerPart,
      decimalPart
    } = toNumberParts(cleanValue, {
      decimalSeparator,
      minusSign
    });
    const deletedChars = cleanValue.length - (minus + integerPart + (cleanValue.includes(decimalSeparator) ? decimalSeparator + decimalPart : "")).length;
    if (deletedChars > 0 && initialFrom && initialFrom <= deletedChars) {
      from -= deletedChars;
    }
    if (deletedChars > 0 && initialTo && initialTo <= deletedChars) {
      to -= deletedChars;
    }
    const processedIntegerPart = Array.from(integerPart).reduceRight((formattedValuePart, char, i) => {
      const isLeadingThousandSeparator = !i && char === thousandSeparator;
      const isPositionForSeparator = !isLeadingThousandSeparator && Boolean(formattedValuePart.length) && (formattedValuePart.length + 1) % 4 === 0;
      const isSeparator = char === thousandSeparator || isAllSpaces(char, thousandSeparator);
      if (isPositionForSeparator && isSeparator) {
        return thousandSeparator + formattedValuePart;
      }
      if (!isPositionForSeparator && isSeparator) {
        if (i && i <= initialFrom) {
          from--;
        }
        if (i && i <= initialTo) {
          to--;
        }
        return formattedValuePart;
      }
      if (!isPositionForSeparator) {
        return char + formattedValuePart;
      }
      if (i < initialFrom) {
        from++;
      }
      if (i < initialTo) {
        to++;
      }
      return char + thousandSeparator + formattedValuePart;
    }, "");
    return {
      value: extractedPrefix + minus + processedIntegerPart + (cleanValue.includes(decimalSeparator) ? decimalSeparator : "") + decimalPart + extractedPostfix,
      selection: [from, to]
    };
  };
}
function createZeroPrecisionPreprocessor({
  precision,
  decimalSeparator,
  prefix,
  postfix
}) {
  if (precision > 0) {
    return identity;
  }
  const decimalPartRegExp = new RegExp(`${escapeRegExp(decimalSeparator)}.*$`, "g");
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const {
      cleanValue,
      extractedPrefix,
      extractedPostfix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    const [from, to] = selection;
    const newValue = extractedPrefix + cleanValue.replace(decimalPartRegExp, "") + extractedPostfix;
    return {
      elementState: {
        selection: [Math.min(from, newValue.length), Math.min(to, newValue.length)],
        value: newValue
      },
      data: data.replace(decimalPartRegExp, "")
    };
  };
}
var DUMMY_SELECTION = [0, 0];
function createLeadingZeroesValidationPlugin({
  decimalSeparator,
  thousandSeparator,
  prefix,
  postfix
}) {
  const dropRepeatedLeadingZeroes = createLeadingZeroesValidationPostprocessor({
    decimalSeparator,
    thousandSeparator,
    prefix,
    postfix
  });
  return maskitoEventHandler("blur", (element) => {
    const newValue = dropRepeatedLeadingZeroes({
      value: element.value,
      selection: DUMMY_SELECTION
    }, {
      value: "",
      selection: DUMMY_SELECTION
    }).value;
    maskitoUpdateElement(element, newValue);
  }, {
    capture: true
  });
}
function createMinMaxPlugin({
  min,
  max,
  decimalSeparator
}) {
  return maskitoEventHandler("blur", (element, options) => {
    const parsedNumber = maskitoParseNumber(element.value, decimalSeparator);
    const clampedNumber = clamp(parsedNumber, min, max);
    if (!Number.isNaN(parsedNumber) && parsedNumber !== clampedNumber) {
      maskitoUpdateElement(element, maskitoTransform(stringifyNumberWithoutExp(clampedNumber), options));
    }
  }, {
    capture: true
  });
}
function createNotEmptyIntegerPlugin({
  decimalSeparator,
  prefix,
  postfix
}) {
  return maskitoEventHandler("blur", (element) => {
    const {
      cleanValue,
      extractedPostfix,
      extractedPrefix
    } = extractAffixes(element.value, {
      prefix,
      postfix
    });
    const newValue = extractedPrefix + cleanValue.replace(new RegExp(`^(\\D+)?${escapeRegExp(decimalSeparator)}`), `$10${decimalSeparator}`) + extractedPostfix;
    maskitoUpdateElement(element, newValue);
  }, {
    capture: true
  });
}
function maskitoNumberOptionsGenerator({
  max = Number.MAX_SAFE_INTEGER,
  min = Number.MIN_SAFE_INTEGER,
  precision = 0,
  thousandSeparator = CHAR_NO_BREAK_SPACE,
  decimalSeparator = ".",
  decimalPseudoSeparators,
  decimalZeroPadding = false,
  prefix: unsafePrefix = "",
  postfix = "",
  minusSign = CHAR_MINUS
} = {}) {
  const pseudoMinuses = [CHAR_HYPHEN, CHAR_EN_DASH, CHAR_EM_DASH, CHAR_JP_HYPHEN, CHAR_MINUS].filter((char) => char !== thousandSeparator && char !== decimalSeparator && char !== minusSign);
  const validatedDecimalPseudoSeparators = validateDecimalPseudoSeparators({
    decimalSeparator,
    thousandSeparator,
    decimalPseudoSeparators
  });
  const prefix = unsafePrefix.endsWith(decimalSeparator) && precision > 0 ? `${unsafePrefix}${CHAR_ZERO_WIDTH_SPACE}` : unsafePrefix;
  return Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), {
    mask: generateMaskExpression({
      decimalSeparator,
      precision,
      thousandSeparator,
      prefix,
      postfix,
      isNegativeAllowed: min < 0,
      minusSign
    }),
    preprocessors: [createFullWidthToHalfWidthPreprocessor(), createInitializationOnlyPreprocessor({
      decimalSeparator,
      decimalPseudoSeparators: validatedDecimalPseudoSeparators,
      pseudoMinuses,
      prefix,
      postfix,
      minusSign
    }), createAffixesFilterPreprocessor({
      prefix,
      postfix
    }), createPseudoCharactersPreprocessor({
      validCharacter: minusSign,
      pseudoCharacters: pseudoMinuses,
      prefix,
      postfix
    }), createPseudoCharactersPreprocessor({
      validCharacter: decimalSeparator,
      pseudoCharacters: validatedDecimalPseudoSeparators,
      prefix,
      postfix
    }), createNotEmptyIntegerPartPreprocessor({
      decimalSeparator,
      precision,
      prefix,
      postfix
    }), createNonRemovableCharsDeletionPreprocessor({
      decimalSeparator,
      decimalZeroPadding,
      thousandSeparator
    }), createZeroPrecisionPreprocessor({
      precision,
      decimalSeparator,
      prefix,
      postfix
    }), createRepeatedDecimalSeparatorPreprocessor({
      decimalSeparator,
      prefix,
      postfix
    })],
    postprocessors: [createMinMaxPostprocessor({
      decimalSeparator,
      min,
      max,
      minusSign
    }), maskitoPrefixPostprocessorGenerator(prefix), maskitoPostfixPostprocessorGenerator(postfix), createThousandSeparatorPostprocessor({
      decimalSeparator,
      thousandSeparator,
      prefix,
      postfix,
      minusSign
    }), createDecimalZeroPaddingPostprocessor({
      decimalSeparator,
      decimalZeroPadding,
      precision,
      prefix,
      postfix
    }), emptyPostprocessor({
      prefix,
      postfix,
      decimalSeparator,
      minusSign
    })],
    plugins: [createLeadingZeroesValidationPlugin({
      decimalSeparator,
      thousandSeparator,
      prefix,
      postfix
    }), createNotEmptyIntegerPlugin({
      decimalSeparator,
      prefix,
      postfix
    }), createMinMaxPlugin({
      min,
      max,
      decimalSeparator
    })],
    overwriteMode: decimalZeroPadding ? ({
      value,
      selection: [from]
    }) => from <= value.indexOf(decimalSeparator) ? "shift" : "replace" : "shift"
  });
}
function maskitoTimeOptionsGenerator({
  mode,
  timeSegmentMaxValues = {},
  timeSegmentMinValues = {},
  step = 0
}) {
  const hasMeridiem = mode.includes("AA");
  const enrichedTimeSegmentMaxValues = Object.assign(Object.assign(Object.assign({}, DEFAULT_TIME_SEGMENT_MAX_VALUES), hasMeridiem ? {
    hours: 12
  } : {}), timeSegmentMaxValues);
  const enrichedTimeSegmentMinValues = Object.assign(Object.assign(Object.assign({}, DEFAULT_TIME_SEGMENT_MIN_VALUES), hasMeridiem ? {
    hours: 1
  } : {}), timeSegmentMinValues);
  return {
    mask: createTimeMaskExpression(mode),
    preprocessors: [createFullWidthToHalfWidthPreprocessor(), createColonConvertPreprocessor(), createZeroPlaceholdersPreprocessor(), createMeridiemPreprocessor(mode), createInvalidTimeSegmentInsertionPreprocessor({
      timeMode: mode,
      timeSegmentMinValues: enrichedTimeSegmentMinValues,
      timeSegmentMaxValues: enrichedTimeSegmentMaxValues
    })],
    postprocessors: [createMeridiemPostprocessor(mode), (elementState) => enrichTimeSegmentsWithZeroes(elementState, {
      mode,
      timeSegmentMaxValues: enrichedTimeSegmentMaxValues
    })],
    plugins: [createTimeSegmentsSteppingPlugin({
      fullMode: mode,
      step,
      timeSegmentMaxValues: enrichedTimeSegmentMaxValues
    }), createMeridiemSteppingPlugin(mode.indexOf("AA"))],
    overwriteMode: "replace"
  };
}

export {
  TuiCalendarMonth,
  TUI_CHECKBOX_DEFAULT_OPTIONS,
  TUI_CHECKBOX_OPTIONS,
  tuiCheckboxOptionsProvider,
  TuiCheckbox,
  TuiDataListWrapperComponent,
  TuiDataListGroupWrapperComponent,
  TuiDataListWrapper,
  maskitoPrefixPostprocessorGenerator,
  maskitoSelectionChangeHandler,
  maskitoCaretGuard,
  maskitoRemoveOnBlurPlugin,
  maskitoDateOptionsGenerator,
  maskitoDateRangeOptionsGenerator,
  maskitoDateTimeOptionsGenerator,
  maskitoParseNumber,
  maskitoNumberOptionsGenerator,
  maskitoTimeOptionsGenerator,
  TUI_FLOATING_PRECISION,
  tuiPercentageToKeyStepValue,
  tuiKeyStepValueToPercentage,
  TUI_SLIDER_DEFAULT_OPTIONS,
  TUI_SLIDER_OPTIONS,
  tuiSliderOptionsProvider,
  TuiSliderComponent,
  TuiSliderKeySteps,
  TuiSliderReadonly,
  TuiSliderThumbLabel,
  TuiSlider,
  TuiRangeChange,
  TuiRange,
  TuiStringifyContentPipe
};
//# sourceMappingURL=chunk-JC3CL2SP.js.map
