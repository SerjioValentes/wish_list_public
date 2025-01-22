import {
  TuiPopoverDirective,
  coerceBooleanProperty
} from "./chunk-5JIKOIFA.js";
import {
  PolymorpheusComponent,
  PolymorpheusOutlet,
  TUI_ANIMATIONS_SPEED,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_IS_IOS,
  TUI_TRUE_HANDLER,
  TuiBreakpointService,
  TuiButton,
  TuiPopoverService,
  TuiScrollControls,
  TuiScrollRef,
  WA_ANIMATION_FRAME,
  WA_WINDOW,
  injectContext,
  takeUntilDestroyed,
  toSignal,
  tuiAsPopover,
  tuiBlurNativeFocused,
  tuiContainsOrAfter,
  tuiCreateOptions,
  tuiCreateToken,
  tuiFadeIn,
  tuiGetActualTarget,
  tuiGetClosestFocusable,
  tuiGetDuration,
  tuiGetNativeFocused,
  tuiGetViewportWidth,
  tuiHost,
  tuiInjectElement,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsPresent,
  tuiProvideOptions,
  tuiPx,
  tuiSlideInTop,
  tuiTypedFromEvent,
  tuiZonefreeScheduler
} from "./chunk-IQQZLQHI.js";
import {
  AsyncPipe,
  DOCUMENT,
  NgForOf,
  NgIf
} from "./chunk-GWZ3OMU7.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  INJECTOR$1,
  Injectable,
  Input,
  NgZone,
  Renderer2,
  computed,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-FW6GFWFQ.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  __spreadProps,
  __spreadValues,
  filter,
  isObservable,
  map,
  merge,
  of,
  race,
  skipWhile,
  switchMap,
  take,
  throttleTime,
  timer
} from "./chunk-D5M5KKRG.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-auto-focus.mjs
var AbstractTuiAutofocusHandler = class {
  constructor(el, options) {
    this.el = el;
    this.options = options;
  }
  get element() {
    const el = this.el.nativeElement.tagName.includes("-") ? this.el.nativeElement.querySelector(this.options.query) : this.el.nativeElement;
    return el || this.el.nativeElement;
  }
  get isTextFieldElement() {
    return this.element.matches(this.options.query);
  }
};
var TIMEOUT = 1e3;
var NG_ANIMATION_SELECTOR = ".ng-animating";
var TuiDefaultAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, animationFrame$, zone, options) {
    super(el, options);
    this.animationFrame$ = animationFrame$;
    this.zone = zone;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      race(timer(this.options.delay || TIMEOUT), this.animationFrame$.pipe(throttleTime(100, tuiZonefreeScheduler(this.zone)), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus({
        preventScroll: this.options.preventScroll
      }));
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
};
var TEXTFIELD_ATTRS = ["type", "inputMode", "autocomplete", "accept", "min", "max", "step", "pattern", "size", "maxlength"];
var TuiIosAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, renderer, zone, win, options) {
    super(el, options);
    this.renderer = renderer;
    this.zone = zone;
    this.win = win;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
  iosWebkitAutofocus() {
    const fakeInput = this.makeFakeInput();
    const duration = this.getDurationTimeBeforeFocus();
    let fakeFocusTimeoutId = 0;
    let elementFocusTimeoutId = 0;
    const blurHandler = () => fakeInput.focus({
      preventScroll: true
    });
    const focusHandler = () => {
      clearTimeout(fakeFocusTimeoutId);
      fakeFocusTimeoutId = this.win.setTimeout(() => {
        clearTimeout(elementFocusTimeoutId);
        fakeInput.removeEventListener("blur", blurHandler);
        fakeInput.removeEventListener("focus", focusHandler);
        elementFocusTimeoutId = this.win.setTimeout(() => {
          this.element.focus({
            preventScroll: this.options.preventScroll
          });
          fakeInput.remove();
        }, duration);
      });
    };
    fakeInput.addEventListener("blur", blurHandler, {
      once: true
    });
    fakeInput.addEventListener("focus", focusHandler);
    if (this.insideDialog()) {
      this.win.document.body.appendChild(fakeInput);
    } else {
      this.element.parentElement?.appendChild(fakeInput);
    }
    fakeInput.focus({
      preventScroll: true
    });
  }
  /**
   * @note:
   * emulate textfield position in layout with cursor
   * before focus to real textfield element
   *
   * required note:
   * [fakeInput.readOnly = true] ~
   * don't use {readOnly: true} value, it's doesn't work for emulate autofill
   *
   * [fakeInput.style.opacity = 0] ~
   * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
   *
   * [fakeInput.style.fontSize = 16px] ~
   * disable possible auto zoom
   *
   * [fakeInput.style.top/left] ~
   * emulate position cursor before focus to real textfield element
   */
  makeFakeInput() {
    const fakeInput = this.renderer.createElement("input");
    const rect = this.element.getBoundingClientRect();
    this.patchFakeInputFromFocusableElement(fakeInput);
    fakeInput.style.height = tuiPx(rect.height);
    fakeInput.style.width = tuiPx(rect.width / 2);
    fakeInput.style.position = "fixed";
    fakeInput.style.zIndex = "-99999999";
    fakeInput.style.caretColor = "transparent";
    fakeInput.style.border = "none";
    fakeInput.style.outline = "none";
    fakeInput.style.color = "transparent";
    fakeInput.style.background = "transparent";
    fakeInput.style.cursor = "none";
    fakeInput.style.fontSize = tuiPx(16);
    fakeInput.style.top = tuiPx(rect.top);
    fakeInput.style.left = tuiPx(rect.left);
    return fakeInput;
  }
  getDurationTimeBeforeFocus() {
    return parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
  }
  /**
   * @note:
   * unfortunately, in older versions of iOS
   * there is a bug that the fake input cursor
   * will move along with the dialog animation
   * and then that dialog will be shaking
   */
  insideDialog() {
    return !!this.element.closest("tui-dialog");
  }
  /**
   * @note:
   * inherit basic attributes values from real input
   * for help iOS detect what do you want see on keyboard,
   * for example [inputMode=numeric, autocomplete=cc-number]
   */
  patchFakeInputFromFocusableElement(fakeInput) {
    TEXTFIELD_ATTRS.forEach((attr) => {
      const value = this.element.getAttribute(attr);
      if (tuiIsPresent(value)) {
        fakeInput.setAttribute(attr, value);
      }
    });
  }
};
var [TUI_AUTOFOCUS_OPTIONS, tuiAutoFocusOptionsProvider] = tuiCreateOptions({
  delay: NaN,
  query: "input, textarea, select, [contenteditable]",
  preventScroll: false
});
var TUI_AUTOFOCUS_HANDLER = tuiCreateToken();
var TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  deps: [ElementRef, WA_ANIMATION_FRAME, Renderer2, NgZone, WA_WINDOW, TUI_IS_IOS, TUI_AUTOFOCUS_OPTIONS],
  useFactory: (el, animationFrame$, renderer, zone, win, isIos, options) => isIos ? new TuiIosAutofocusHandler(el, renderer, zone, win, options) : new TuiDefaultAutofocusHandler(el, animationFrame$, zone, options)
}];
var TuiAutoFocus = class _TuiAutoFocus {
  constructor() {
    this.handler = inject(TUI_AUTOFOCUS_HANDLER);
    this.options = inject(TUI_AUTOFOCUS_OPTIONS);
    this.destroyRef = inject(DestroyRef);
  }
  ngAfterViewInit() {
    if (this.autoFocus) {
      this.focus();
    }
  }
  focus() {
    if (Number.isNaN(this.options.delay)) {
      void Promise.resolve().then(() => this.handler.setFocus());
    } else {
      timer(this.options.delay).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.handler.setFocus());
    }
  }
  static {
    this.ɵfac = function TuiAutoFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAutoFocus)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAutoFocus,
      selectors: [["", "tuiAutoFocus", ""]],
      inputs: {
        autoFocus: [2, "tuiAutoFocus", "autoFocus", coerceBooleanProperty]
      },
      standalone: true,
      features: [ɵɵProvidersFeature(TUI_AUTOFOCUS_PROVIDERS), ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocus, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAutoFocus]",
      providers: TUI_AUTOFOCUS_PROVIDERS
    }]
  }], null, {
    autoFocus: [{
      type: Input,
      args: [{
        alias: "tuiAutoFocus",
        transform: coerceBooleanProperty
      }]
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-focus-trap.mjs
var TuiFocusTrap = class _TuiFocusTrap {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.activeElement = tuiGetNativeFocused(this.doc);
    void Promise.resolve().then(() => this.el.focus());
  }
  ngOnDestroy() {
    tuiBlurNativeFocused(this.doc);
    Promise.resolve().then(() => {
      if (tuiIsHTMLElement(this.activeElement)) {
        this.activeElement.focus();
      }
    });
  }
  onFocusIn(node) {
    if (!tuiContainsOrAfter(this.el, node)) {
      tuiGetClosestFocusable({
        initial: this.el,
        root: this.el
      })?.focus();
    }
  }
  static {
    this.ɵfac = function TuiFocusTrap_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFocusTrap)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFocusTrap,
      selectors: [["", "tuiFocusTrap", ""]],
      hostAttrs: ["tabIndex", "0"],
      hostBindings: function TuiFocusTrap_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin.silent", function TuiFocusTrap_focusin_silent_HostBindingHandler($event) {
            return ctx.onFocusIn($event.target);
          }, false, ɵɵresolveWindow);
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrap, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFocusTrap]",
      host: {
        tabIndex: "0",
        "(window:focusin.silent)": "onFocusIn($event.target)"
      }
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-dialog.mjs
function TuiDialogComponent_header_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiDialogComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "header", 6);
    ɵɵtemplate(1, TuiDialogComponent_header_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.header)("polymorpheusOutletContext", ctx_r1.context);
  }
}
function TuiDialogComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 7);
    ɵɵelementStart(2, "div", 8)(3, "button", 9);
    ɵɵlistener("click", function TuiDialogComponent_ng_container_4_Template_button_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.context.$implicit.complete());
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("innerHTML", text_r4, ɵɵsanitizeHtml);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", (ctx_r1.context.data == null ? null : ctx_r1.context.data.button) || "OK", " ");
  }
}
function TuiDialogComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function TuiDialogComponent_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close$.next());
    })("mousedown.prevent.silent", function TuiDialogComponent_button_6_Template_button_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r5);
      return ɵɵresetView(0);
    });
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("border-radius", 100, "%");
    ɵɵproperty("appearance", ctx_r1.isMobile() ? "icon" : "neutral")("iconStart", ctx_r1.icons.close)("size", ctx_r1.isMobile() ? "xs" : "s");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 6, ctx_r1.closeWord$), "\n");
  }
}
function TuiDialogs_section_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiDialogs_section_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section", 2);
    ɵɵtemplate(1, TuiDialogs_section_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelement(2, "tui-scroll-controls", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵproperty("@tuiHost", void 0);
    ɵɵattribute("aria-labelledby", item_r1.id);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", item_r1.component)("polymorpheusOutletContext", item_r1);
  }
}
var TUI_DIALOGS = tuiCreateToken(new BehaviorSubject([]));
var TUI_DIALOG_DEFAULT_OPTIONS = {
  appearance: "",
  size: "m",
  required: false,
  closeable: true,
  dismissible: true,
  label: "",
  header: "",
  data: void 0
};
var TUI_DIALOGS_CLOSE = tuiCreateToken(EMPTY);
var TUI_DIALOG_OPTIONS = tuiCreateToken(TUI_DIALOG_DEFAULT_OPTIONS);
function tuiDialogOptionsProvider(options) {
  return tuiProvideOptions(TUI_DIALOG_OPTIONS, options, TUI_DIALOG_DEFAULT_OPTIONS);
}
var SCROLLBAR_PLACEHOLDER = 17;
var TuiDialogCloseService = class _TuiDialogCloseService extends Observable {
  constructor() {
    super((subscriber) => merge(this.esc$, this.mousedown$).subscribe(subscriber));
    this.win = inject(WA_WINDOW);
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.esc$ = tuiTypedFromEvent(this.doc, "keydown").pipe(filter((event) => {
      const target = tuiGetActualTarget(event);
      return event.key === "Escape" && !event.defaultPrevented && (this.el.contains(target) || this.isOutside(target));
    }));
    this.mousedown$ = tuiTypedFromEvent(this.doc, "mousedown").pipe(filter((event) => tuiGetViewportWidth(this.win) - event.clientX > SCROLLBAR_PLACEHOLDER && this.isOutside(tuiGetActualTarget(event))), switchMap(() => tuiTypedFromEvent(this.doc, "mouseup").pipe(take(1), map(tuiGetActualTarget), filter((target) => this.isOutside(target)))));
  }
  isOutside(target) {
    return tuiIsElement(target) && (!tuiContainsOrAfter(this.el, target) || target === this.el);
  }
  static {
    this.ɵfac = function TuiDialogCloseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogCloseService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogCloseService,
      factory: _TuiDialogCloseService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogCloseService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var REQUIRED_ERROR = new Error("Required dialog was dismissed");
function toObservable(valueOrStream) {
  return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
var TuiDialogComponent = class _TuiDialogComponent {
  constructor() {
    this.speed = inject(TUI_ANIMATIONS_SPEED);
    this.animation = {
      value: "",
      params: {
        start: "40px",
        duration: tuiGetDuration(this.speed)
      }
    };
    this.fullscreenAnimation = {
      value: "",
      params: {
        start: "100vh",
        duration: tuiGetDuration(this.speed)
      }
    };
    this.close$ = new Subject();
    this.context = injectContext();
    this.closeWord$ = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.slideInTop = computed(() => this.size === "fullscreen" || this.size === "page" || this.isMobile() ? this.fullscreenAnimation : this.animation);
    this.isMobile = toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === "mobile")));
    merge(this.close$.pipe(switchMap(() => toObservable(this.context.closeable))), inject(TuiDialogCloseService).pipe(switchMap(() => toObservable(this.context.dismissible))), inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER))).pipe(filter(Boolean), takeUntilDestroyed()).subscribe(() => {
      this.close();
    });
  }
  get size() {
    return this.context.size;
  }
  get header() {
    return this.context.header;
  }
  close() {
    if (this.context.required) {
      this.context.$implicit.error(REQUIRED_ERROR);
    } else {
      this.context.$implicit.complete();
    }
  }
  static {
    this.ɵfac = function TuiDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDialogComponent,
      selectors: [["tui-dialog"]],
      hostVars: 6,
      hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiSlideInTop", ctx.slideInTop())("@tuiFadeIn", ctx.slideInTop());
          ɵɵattribute("data-appearance", ctx.context.appearance)("data-size", ctx.size);
          ɵɵclassProp("_centered", ctx.header);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiDialogCloseService]), ɵɵStandaloneFeature],
      decls: 7,
      vars: 6,
      consts: [["class", "t-header", 4, "ngIf"], [1, "t-content"], [1, "t-heading", 3, "id", "textContent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-filler"], ["automation-id", "tui-dialog__close", "tuiIconButton", "", "type", "button", "class", "t-close", 3, "appearance", "iconStart", "size", "border-radius", "click", "mousedown.prevent.silent", 4, "ngIf"], [1, "t-header"], [3, "innerHTML"], [1, "t-buttons"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 3, "click"], ["automation-id", "tui-dialog__close", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "click", "mousedown.prevent.silent", "appearance", "iconStart", "size"]],
      template: function TuiDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDialogComponent_header_0_Template, 2, 2, "header", 0);
          ɵɵelementStart(1, "div", 1);
          ɵɵelement(2, "h2", 2);
          ɵɵelementStart(3, "section");
          ɵɵtemplate(4, TuiDialogComponent_ng_container_4_Template, 5, 2, "ng-container", 3);
          ɵɵelementEnd()();
          ɵɵelement(5, "div", 4);
          ɵɵtemplate(6, TuiDialogComponent_button_6_Template, 3, 8, "button", 5);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.header);
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.context.id)("textContent", ctx.context.label);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.context.closeable);
        }
      },
      dependencies: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      styles: ['[_nghost-%COMP%]{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}[_nghost-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}[data-size=auto][_nghost-%COMP%]{inline-size:auto}[data-size=s][_nghost-%COMP%]{inline-size:30rem}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1.5rem}[data-size=s][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}[data-size=m][_nghost-%COMP%]{inline-size:42.5rem}[data-size=l][_nghost-%COMP%]{inline-size:55rem}[data-size=fullscreen][_nghost-%COMP%], [data-size=page][_nghost-%COMP%]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}[data-size=fullscreen][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:3rem calc(50vw - 22.5rem)}[data-size=fullscreen][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-3)}._centered[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1rem}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}[data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0}.t-heading[_ngcontent-%COMP%]{margin:0 0 .5rem;padding-inline-end:2rem;overflow-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading[_ngcontent-%COMP%]:empty{display:none}.t-header[_ngcontent-%COMP%]{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}[data-size=fullscreen][_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{flex:1}.t-content[_ngcontent-%COMP%]{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content[_ngcontent-%COMP%]:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-filler[_ngcontent-%COMP%]{flex-grow:1}.t-close[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}.t-buttons[_ngcontent-%COMP%]{margin-top:1.25rem;text-align:end}'],
      data: {
        animation: [tuiSlideInTop, tuiFadeIn]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialog",
      imports: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDialogCloseService],
      animations: [tuiSlideInTop, tuiFadeIn],
      host: {
        "[@tuiSlideInTop]": "slideInTop()",
        "[@tuiFadeIn]": "slideInTop()",
        "[attr.data-appearance]": "context.appearance",
        "[attr.data-size]": "size",
        "[class._centered]": "header"
      },
      template: `<header
    *ngIf="header"
    class="t-header"
>
    <ng-container *polymorpheusOutlet="header as text; context: context">
        {{ text }}
    </ng-container>
</header>
<div class="t-content">
    <h2
        class="t-heading"
        [id]="context.id"
        [textContent]="context.label"
    ></h2>
    <section>
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            <div [innerHTML]="text"></div>
            <div class="t-buttons">
                <button
                    size="m"
                    tuiAutoFocus
                    tuiButton
                    type="button"
                    (click)="context.$implicit.complete()"
                >
                    {{ context.data?.button || 'OK' }}
                </button>
            </div>
        </ng-container>
    </section>
</div>
<div class="t-filler"></div>

<!-- Close button is insensitive to \`context.closeable === Observable<false>\` by design -->
<button
    *ngIf="context.closeable"
    automation-id="tui-dialog__close"
    tuiIconButton
    type="button"
    class="t-close"
    [appearance]="isMobile() ? 'icon' : 'neutral'"
    [iconStart]="icons.close"
    [size]="isMobile() ? 'xs' : 's'"
    [style.border-radius.%]="100"
    (click)="close$.next()"
    (mousedown.prevent.silent)="(0)"
>
    {{ closeWord$ | async }}
</button>
`,
      styles: [':host{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}:host:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}:host[data-size=auto]{inline-size:auto}:host[data-size=s]{inline-size:30rem}:host[data-size=s] .t-content{padding:1.5rem}:host[data-size=s] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=m]{inline-size:42.5rem}:host[data-size=l]{inline-size:55rem}:host[data-size=fullscreen],:host[data-size=page]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}:host[data-size=fullscreen] .t-content,:host[data-size=page] .t-content{padding:3rem calc(50vw - 22.5rem)}:host[data-size=fullscreen] .t-heading,:host[data-size=page] .t-heading{font:var(--tui-font-heading-3)}:host._centered{text-align:center}:host :host-context(tui-root._mobile)[data-size]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0}:host :host-context(tui-root._mobile)[data-size] .t-content{padding:1rem}:host :host-context(tui-root._mobile)[data-size] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=page] .t-content,:host-context(tui-root._mobile) :host[data-size=page] .t-content{padding:0}.t-heading{margin:0 0 .5rem;padding-inline-end:2rem;overflow-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading:empty{display:none}.t-header{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}:host[data-size=fullscreen] :host-context(tui-root._mobile) .t-header{flex:1}.t-content{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-filler{flex-grow:1}.t-close{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}.t-buttons{margin-top:1.25rem;text-align:end}\n']
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiDialogService = class _TuiDialogService extends TuiPopoverService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDialogService_BaseFactory;
      return function TuiDialogService_Factory(__ngFactoryType__) {
        return (ɵTuiDialogService_BaseFactory || (ɵTuiDialogService_BaseFactory = ɵɵgetInheritedFactory(_TuiDialogService)))(__ngFactoryType__ || _TuiDialogService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogService,
      factory: () => (() => new _TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS))
    }]
  }], null, null);
})();
var TuiDialog = class _TuiDialog extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDialog_BaseFactory;
      return function TuiDialog_Factory(__ngFactoryType__) {
        return (ɵTuiDialog_BaseFactory || (ɵTuiDialog_BaseFactory = ɵɵgetInheritedFactory(_TuiDialog)))(__ngFactoryType__ || _TuiDialog);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDialog,
      selectors: [["ng-template", "tuiDialog", ""]],
      inputs: {
        options: [0, "tuiDialogOptions", "options"],
        open: [0, "tuiDialog", "open"]
      },
      outputs: {
        openChange: "tuiDialogChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiDialogService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialog, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDialog]",
      inputs: ["options: tuiDialogOptions", "open: tuiDialog"],
      outputs: ["openChange: tuiDialogChange"],
      providers: [tuiAsPopover(TuiDialogService)]
    }]
  }], null, null);
})();
function tuiDialog(component, options) {
  const dialogService = inject(TuiDialogService);
  const injector = inject(INJECTOR$1);
  return (data) => dialogService.open(new PolymorpheusComponent(component, injector), __spreadProps(__spreadValues({}, options), {
    data
  }));
}
var TuiDialogs = class _TuiDialogs {
  constructor() {
    this.el = tuiInjectElement();
    this.dialogs = toSignal(inject(TUI_DIALOGS), {
      initialValue: []
    });
  }
  static {
    this.ɵfac = function TuiDialogs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogs)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDialogs,
      selectors: [["tui-dialogs"]],
      hostBindings: function TuiDialogs_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.silent", function TuiDialogs_keydown_silent_HostBindingHandler() {
            return ctx.el.scrollTop = ctx.el.scrollHeight / 2;
          });
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [[1, "t-overlay"], ["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiScrollRef", "", "class", "t-dialog", 4, "ngFor", "ngForOf"], ["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiScrollRef", "", 1, "t-dialog"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-scrollbars"]],
      template: function TuiDialogs_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 0);
          ɵɵtemplate(1, TuiDialogs_section_1_Template, 3, 4, "section", 1);
        }
        if (rf & 2) {
          ɵɵclassProp("t-overlay_visible", ctx.dialogs().length);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.dialogs());
        }
      },
      dependencies: [NgForOf, PolymorpheusOutlet, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
      styles: ['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:has(section){pointer-events:auto;overflow:auto}[_nghost-%COMP%]:before{content:"";display:block;block-size:1000%}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-dialog[_ngcontent-%COMP%]{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;transition-timing-function:ease-out}.t-dialog[_ngcontent-%COMP%]:last-child{pointer-events:auto;filter:none}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}'],
      data: {
        animation: [tuiHost]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogs, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialogs",
      imports: [NgForOf, PolymorpheusOutlet, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [tuiHost],
      host: {
        "(keydown.silent)": "el.scrollTop = el.scrollHeight / 2"
      },
      template: '<div\n    class="t-overlay"\n    [class.t-overlay_visible]="dialogs().length"\n></div>\n<section\n    *ngFor="let item of dialogs()"\n    aria-modal="true"\n    role="dialog"\n    tuiFocusTrap\n    tuiScrollRef\n    class="t-dialog"\n    @tuiHost\n    [attr.aria-labelledby]="item.id"\n>\n    <ng-container *polymorpheusOutlet="item.component; context: item" />\n    <tui-scroll-controls class="t-scrollbars" />\n</section>\n',
      styles: [':host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:has(section){pointer-events:auto;overflow:auto}:host:before{content:"";display:block;block-size:1000%}.t-overlay,.t-dialog{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay::-webkit-scrollbar,.t-dialog::-webkit-scrollbar,.t-overlay::-webkit-scrollbar-thumb,.t-dialog::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating,.t-dialog.ng-animating{overflow:clip}.t-dialog{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible{opacity:1;transition-timing-function:ease-out}.t-dialog:last-child{pointer-events:auto;filter:none}.t-scrollbars{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}\n']
    }]
  }], null, null);
})();

export {
  tuiAutoFocusOptionsProvider,
  TuiAutoFocus,
  TUI_DIALOGS,
  TUI_DIALOG_DEFAULT_OPTIONS,
  TUI_DIALOGS_CLOSE,
  TUI_DIALOG_OPTIONS,
  tuiDialogOptionsProvider,
  TuiDialogCloseService,
  TuiDialogComponent,
  TuiDialogService,
  TuiDialog,
  tuiDialog,
  TuiDialogs
};
//# sourceMappingURL=chunk-RO4MD6JN.js.map
