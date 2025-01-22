import {
  EMPTY_CLIENT_RECT,
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  TUI_ANIMATIONS_SPEED,
  TUI_CLEAR_WORD,
  TUI_COMMON_ICONS,
  TUI_DATA_LIST_HOST,
  TUI_IS_MOBILE,
  TUI_VIEWPORT,
  TuiActiveZone,
  TuiAppearance,
  TuiButton,
  TuiDriver,
  TuiDriverDirective,
  TuiDropdownDirective,
  TuiDropdownFixed,
  TuiHoveredService,
  TuiPositionAccessor,
  TuiPositionService,
  TuiRectAccessor,
  TuiVisualViewportService,
  TuiWithDropdownOpen,
  TuiWithIcons,
  WA_NAVIGATOR,
  WaResizeObserver,
  injectContext,
  takeUntilDestroyed,
  toSignal,
  tuiAppearance,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  tuiAppearanceState,
  tuiAsDataListHost,
  tuiAsDriver,
  tuiAsRectAccessor,
  tuiAsVehicle,
  tuiButtonOptionsProvider,
  tuiClamp,
  tuiControlValue,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiDropdown,
  tuiDropdownOpen,
  tuiFadeIn,
  tuiFallbackAccessor,
  tuiFocusedIn,
  tuiIfMap,
  tuiInjectElement,
  tuiInjectId,
  tuiIsNativeFocused,
  tuiIsObscured,
  tuiIsPresent,
  tuiOverrideOptions,
  tuiParentAnimation,
  tuiPointToClientRect,
  tuiPositionAccessorFor,
  tuiProvide,
  tuiPure,
  tuiPx,
  tuiRectAccessorFor,
  tuiScaleIn,
  tuiTakeUntilDestroyed,
  tuiToAnimationOptions,
  tuiTypedFromEvent,
  tuiWithStyles,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler
} from "./chunk-IQQZLQHI.js";
import {
  NG_VALIDATORS,
  NgControl
} from "./chunk-UH2ALZYR.js";
import {
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf
} from "./chunk-GWZ3OMU7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  ElementRef,
  INJECTOR$1,
  Injectable,
  Input,
  NgZone,
  Optional,
  Self,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  computed,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
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
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-FW6GFWFQ.js";
import {
  BehaviorSubject,
  Subject,
  __async,
  __decorate,
  __spreadProps,
  __spreadValues,
  debounce,
  delay,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  merge,
  of,
  repeat,
  skip,
  startWith,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  timer
} from "./chunk-D5M5KKRG.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-label.mjs
var TuiLabelStyles = class _TuiLabelStyles {
  static {
    this.ɵfac = function TuiLabelStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLabelStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLabelStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-label"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiLabelStyles_Template(rf, ctx) {
      },
      styles: ["[tuiLabel]{display:flex;gap:.25rem;flex-direction:column;font:var(--tui-font-text-s);color:var(--tui-text-primary)}[tuiLabel]:not([data-orientation=vertical]){flex-direction:row;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-m)}[tuiLabel]:has(tui-textfield),[tuiLabel]:has(tui-primitive-textfield),[tuiLabel]:has(tui-textarea){flex-direction:column!important;inline-size:auto!important;font:var(--tui-font-text-s)!important}[tuiLabel] input[type=checkbox],[tuiLabel] input[type=radio]{margin-inline-end:.5rem}[tuiLabel] input[type=checkbox][data-size=s],[tuiLabel] input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-top:.125rem}[tuiLabel] small{font:var(--tui-font-text-s)}[tuiLabel] [tuiTitle]{margin-top:.125rem}[tuiLabel] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabelStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-label"
      },
      styles: ["[tuiLabel]{display:flex;gap:.25rem;flex-direction:column;font:var(--tui-font-text-s);color:var(--tui-text-primary)}[tuiLabel]:not([data-orientation=vertical]){flex-direction:row;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-m)}[tuiLabel]:has(tui-textfield),[tuiLabel]:has(tui-primitive-textfield),[tuiLabel]:has(tui-textarea){flex-direction:column!important;inline-size:auto!important;font:var(--tui-font-text-s)!important}[tuiLabel] input[type=checkbox],[tuiLabel] input[type=radio]{margin-inline-end:.5rem}[tuiLabel] input[type=checkbox][data-size=s],[tuiLabel] input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-top:.125rem}[tuiLabel] small{font:var(--tui-font-text-s)}[tuiLabel] [tuiTitle]{margin-top:.125rem}[tuiLabel] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"]
    }]
  }], null, null);
})();
var TuiLabel = class _TuiLabel {
  constructor() {
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(TuiLabelStyles);
    this.parent = inject(forwardRef(() => TUI_DATA_LIST_HOST), {
      optional: true
    });
  }
  static {
    this.ɵfac = function TuiLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLabel)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLabel,
      selectors: [["label", "tuiLabel", ""]],
      contentQueries: function TuiLabel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TUI_DATA_LIST_HOST, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function TuiLabel_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("for", ctx.el.htmlFor || (ctx.parent == null ? null : ctx.parent.id))("data-orientation", ctx.textfield ? "vertical" : "horizontal");
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabel, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "label[tuiLabel]",
      host: {
        "[attr.for]": "el.htmlFor || parent?.id",
        "[attr.data-orientation]": 'textfield ? "vertical" : "horizontal"'
      }
    }]
  }], null, {
    textfield: [{
      type: ContentChild,
      args: [forwardRef(() => TUI_DATA_LIST_HOST)]
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-native-validator.mjs
var TuiNativeValidator = class _TuiNativeValidator {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.zone = inject(NgZone);
    this.el = tuiInjectElement();
    this.tuiNativeValidator = "Invalid";
  }
  validate(control) {
    this.control = control;
    timer(0).pipe(tuiZonefree(this.zone), tuiTakeUntilDestroyed(this.destroyRef)).subscribe(() => this.handleValidation());
    return null;
  }
  handleValidation() {
    this.el.setCustomValidity?.(this.control?.touched && this.control?.invalid ? this.tuiNativeValidator : "");
  }
  static {
    this.ɵfac = function TuiNativeValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNativeValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNativeValidator,
      selectors: [["", "tuiNativeValidator", ""]],
      hostBindings: function TuiNativeValidator_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusout", function TuiNativeValidator_focusout_HostBindingHandler() {
            return ctx.handleValidation();
          });
        }
      },
      inputs: {
        tuiNativeValidator: "tuiNativeValidator"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiNativeValidator, true)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeValidator, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiNativeValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
      host: {
        "(focusout)": "handleValidation()"
      }
    }]
  }], null, {
    tuiNativeValidator: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-textfield.mjs
var _c0 = ["vcr"];
var _c1 = [[["input"]], [["select"]], [["label"]], "*", [["tui-icon"]]];
var _c2 = ["input", "select", "label", "*", "tui-icon"];
var _c3 = (a0) => ({
  $implicit: a0
});
function TuiTextfieldComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function TuiTextfieldComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.directive == null ? null : ctx_r2.directive.setValue(null));
    })("pointerdown.silent.prevent", function TuiTextfieldComponent_button_5_Template_button_pointerdown_silent_prevent_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.input == null ? null : ctx_r2.input.nativeElement == null ? null : ctx_r2.input.nativeElement.focus());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("iconStart", ctx_r2.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.clear(), " ");
  }
}
function TuiTextfieldComponent_ng_container_10_Template(rf, ctx) {
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
function TuiTextfieldComponent_input_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r2.computedFiller());
  }
}
var _c4 = ["tuiTextfield", ""];
var _c5 = (a0) => [a0];
function TuiSelect_option_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.placeholder, "\n");
  }
}
function TuiSelect_ng_template_1_option_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵproperty("value", item_r2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r2, " ");
  }
}
function TuiSelect_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiSelect_ng_template_1_option_0_Template, 2, 2, "option", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ɵɵpureFunction1(1, _c5, ctx_r0.value));
  }
}
var DEFAULT = {
  appearance: "textfield",
  size: "l",
  cleaner: true
};
var TUI_TEXTFIELD_OPTIONS = tuiCreateToken({
  appearance: signal(DEFAULT.appearance),
  size: signal(DEFAULT.size),
  cleaner: signal(DEFAULT.cleaner)
});
function tuiTextfieldOptionsProvider(options) {
  return {
    provide: TUI_TEXTFIELD_OPTIONS,
    deps: [[new Optional(), new SkipSelf(), TUI_TEXTFIELD_OPTIONS]],
    useFactory: (parent) => __spreadValues({
      appearance: signal(parent?.appearance() ?? DEFAULT.appearance),
      size: signal(parent?.size() ?? DEFAULT.size),
      cleaner: signal(parent?.cleaner() ?? DEFAULT.cleaner)
    }, options)
  };
}
var TuiTextfieldOptionsDirective = class _TuiTextfieldOptionsDirective {
  constructor() {
    this.options = inject(TUI_TEXTFIELD_OPTIONS, {
      skipSelf: true
    });
    this.appearance = signal(this.options.appearance());
    this.size = signal(this.options.size());
    this.cleaner = signal(this.options.cleaner());
  }
  set tuiTextfieldAppearance(appearance) {
    this.appearance.set(appearance);
  }
  set tuiTextfieldSize(size) {
    this.size.set(size);
  }
  set tuiTextfieldCleaner(enabled) {
    this.cleaner.set(enabled);
  }
  static {
    this.ɵfac = function TuiTextfieldOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldOptionsDirective,
      selectors: [["", "tuiTextfieldAppearance", ""], ["", "tuiTextfieldSize", ""], ["", "tuiTextfieldCleaner", ""]],
      inputs: {
        tuiTextfieldAppearance: "tuiTextfieldAppearance",
        tuiTextfieldSize: "tuiTextfieldSize",
        tuiTextfieldCleaner: "tuiTextfieldCleaner"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_OPTIONS, _TuiTextfieldOptionsDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldOptionsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]",
      providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)]
    }]
  }], null, {
    tuiTextfieldAppearance: [{
      type: Input
    }],
    tuiTextfieldSize: [{
      type: Input
    }],
    tuiTextfieldCleaner: [{
      type: Input
    }]
  });
})();
var TuiTextfieldDropdownDirective = class _TuiTextfieldDropdownDirective {
  static {
    this.ɵfac = function TuiTextfieldDropdownDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldDropdownDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldDropdownDirective,
      selectors: [["ng-template", "tuiTextfieldDropdown", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldDropdownDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiTextfieldDropdown]"
    }]
  }], null, null);
})();
var TuiWithTextfieldDropdown = class _TuiWithTextfieldDropdown {
  constructor() {
    this.dropdown = tuiDropdown(null);
  }
  set template(template) {
    this.dropdown.set(template);
  }
  static {
    this.ɵfac = function TuiWithTextfieldDropdown_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithTextfieldDropdown)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithTextfieldDropdown,
      contentQueries: function TuiWithTextfieldDropdown_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTextfieldDropdownDirective, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithTextfieldDropdown, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    template: [{
      type: ContentChild,
      args: [TuiTextfieldDropdownDirective, {
        read: TemplateRef,
        descendants: true
      }]
    }]
  });
})();
var TuiTextfieldComponent = class _TuiTextfieldComponent {
  constructor() {
    this.filler = signal("");
    this.autoId = tuiInjectId();
    this.el = tuiInjectElement();
    this.open = tuiDropdownOpen();
    this.focusedIn = tuiFocusedIn(tuiInjectElement());
    this.icons = inject(TUI_COMMON_ICONS);
    this.clear = toSignal(inject(TUI_CLEAR_WORD));
    this.computedFiller = computed(() => {
      const value = this.directive?.nativeValue() || "";
      const filledValue = value + this.filler().slice(value.length);
      return filledValue.length > value.length ? filledValue : "";
    });
    this.showFiller = computed(() => this.focused() && !!this.computedFiller() && (!!this.directive?.nativeValue() || !this.input?.nativeElement.placeholder));
    this.stringify = String;
    this.focused = computed(() => this.open() || this.focusedIn());
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
  }
  set fillerSetter(filler) {
    this.filler.set(filler);
  }
  get id() {
    return this.input?.nativeElement.id || this.autoId;
  }
  get size() {
    return this.options.size();
  }
  handleOption(option) {
    this.directive?.setValue(option);
    this.open.set(false);
  }
  get hasLabel() {
    return Boolean(this.label?.nativeElement?.childNodes.length);
  }
  onResize({
    contentRect
  }) {
    this.el.style.setProperty("--t-side", tuiPx(contentRect.width));
  }
  static {
    this.ɵfac = function TuiTextfieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldComponent,
      selectors: [["tui-textfield"]],
      contentQueries: function TuiTextfieldComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTextfieldDirective, 5);
          ɵɵcontentQuery(dirIndex, TuiLabel, 5, ElementRef);
          ɵɵcontentQuery(dirIndex, NgControl, 5);
          ɵɵcontentQuery(dirIndex, TuiTextfieldDirective, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.directive = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.label = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
        }
      },
      viewQuery: function TuiTextfieldComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.vcr = _t.first);
        }
      },
      hostVars: 7,
      hostBindings: function TuiTextfieldComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.options.size());
          ɵɵclassProp("_with-label", ctx.hasLabel)("_with-template", ctx.content)("_disabled", ctx.input == null ? null : ctx.input.nativeElement.disabled);
        }
      },
      inputs: {
        stringify: "stringify",
        content: "content",
        fillerSetter: [0, "filler", "fillerSetter"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiAsDataListHost(_TuiTextfieldComponent)]), ɵɵHostDirectivesFeature([TuiDropdownFixed, TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown, TuiWithIcons]), ɵɵStandaloneFeature],
      ngContentSelectors: _c2,
      decls: 12,
      vars: 6,
      consts: [["vcr", ""], [1, "t-content", 3, "mousedown.prevent", "waResizeObserver"], ["appearance", "icon", "size", "xs", "tabindex", "-1", "tuiIconButton", "", "type", "button", "class", "t-clear", 3, "iconStart", "click", "pointerdown.silent.prevent", 4, "ngIf"], [1, "t-template"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["aria-hidden", "true", "disabled", "", "class", "t-filler", 3, "value", 4, "ngIf"], ["appearance", "icon", "size", "xs", "tabindex", "-1", "tuiIconButton", "", "type", "button", 1, "t-clear", 3, "click", "pointerdown.silent.prevent", "iconStart"], ["aria-hidden", "true", "disabled", "", 1, "t-filler", 3, "value"]],
      template: function TuiTextfieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c1);
          ɵɵprojection(0);
          ɵɵprojection(1, 1);
          ɵɵprojection(2, 2);
          ɵɵelementStart(3, "span", 1);
          ɵɵlistener("mousedown.prevent", function TuiTextfieldComponent_Template_span_mousedown_prevent_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.input == null ? null : ctx.input.nativeElement == null ? null : ctx.input.nativeElement.focus());
          })("waResizeObserver", function TuiTextfieldComponent_Template_span_waResizeObserver_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView($event[0] && ctx.onResize($event[0]));
          });
          ɵɵprojection(4, 3);
          ɵɵtemplate(5, TuiTextfieldComponent_button_5_Template, 2, 2, "button", 2);
          ɵɵelementContainer(6, null, 0);
          ɵɵprojection(8, 4);
          ɵɵelementEnd();
          ɵɵelementStart(9, "span", 3);
          ɵɵtemplate(10, TuiTextfieldComponent_ng_container_10_Template, 2, 1, "ng-container", 4);
          ɵɵelementEnd();
          ɵɵtemplate(11, TuiTextfieldComponent_input_11_Template, 1, 1, "input", 5);
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ctx.options.cleaner());
          ɵɵadvance(5);
          ɵɵproperty("polymorpheusOutlet", ctx.content)("polymorpheusOutletContext", ɵɵpureFunction1(4, _c3, ctx.control == null ? null : ctx.control.value));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showFiller());
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiButton, WaResizeObserver],
      styles: ['tui-textfield{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: var(--tui-height-l);--t-padding: var(--tui-padding-l);position:relative;display:flex;align-items:center;pointer-events:none;cursor:pointer;block-size:var(--t-height);color:var(--tui-text-tertiary);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-font-text-m);box-sizing:border-box}tui-textfield[style*="--t-icon-start:"]{--t-left: 2.25rem}tui-textfield[style*="--t-icon-end:"]{--t-right: 2.25rem}tui-textfield:after{margin-inline-start:.25rem}tui-textfield input,tui-textfield select{font:var(--tui-font-text-m)}tui-textfield[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=s][style*="--t-icon-start:"]{--t-left: 1.25rem}tui-textfield[data-size=s][style*="--t-icon-end:"]{--t-right: 1.25rem}tui-textfield[data-size=s]:before{margin:0 .5rem 0 -.125rem;font-size:1rem}tui-textfield[data-size=s]:after{margin:0 -.175rem 0 .575rem;font-size:1rem}tui-textfield[data-size=s] input,tui-textfield[data-size=s] select{font:var(--tui-font-text-s)}tui-textfield[data-size=s] .t-content{gap:0;margin-inline-end:-.325rem}tui-textfield[data-size=m]{--t-height: var(--tui-height-m);--t-padding: var(--tui-padding-m);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=m][style*="--t-icon-start:"]{--t-left: 1.75rem}tui-textfield[data-size=m][style*="--t-icon-end:"]{--t-right: 1.75rem}tui-textfield[data-size=m]:before{margin:0 .375rem 0 -.125rem}tui-textfield[data-size=m]:after{margin:0 -.125rem 0 .5rem}tui-textfield[data-size=m] input,tui-textfield[data-size=m] select{font:var(--tui-font-text-s)}tui-textfield[data-size=m] .t-content{margin-inline-end:-.125rem}tui-textfield:hover{color:var(--tui-text-secondary)}tui-textfield:hover:has(input:read-only),tui-textfield:hover:has(select[data-mode~=readonly]){color:var(--tui-text-tertiary)}tui-textfield:before{z-index:1;margin-inline-end:.75rem}tui-textfield:has(:disabled:not(.t-filler,button,option)):before,tui-textfield:has(:disabled:not(.t-filler,button,option)):after,tui-textfield:has(:disabled:not(.t-filler,button,option)) .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield._disabled:before,tui-textfield._disabled:after,tui-textfield._disabled .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield:has(label:not(:empty)) .t-template,tui-textfield:has(label:not(:empty)) input:defined,tui-textfield:has(label:not(:empty)) select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield:has(label:not(:empty)) .t-template::placeholder,tui-textfield:has(label:not(:empty)) input:defined::placeholder,tui-textfield:has(label:not(:empty)) select:defined::placeholder,tui-textfield:has(label:not(:empty)) .t-template._empty,tui-textfield:has(label:not(:empty)) input:defined._empty,tui-textfield:has(label:not(:empty)) select:defined._empty{color:transparent}tui-textfield._with-label .t-template,tui-textfield._with-label input:defined,tui-textfield._with-label select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield._with-label .t-template::placeholder,tui-textfield._with-label input:defined::placeholder,tui-textfield._with-label select:defined::placeholder,tui-textfield._with-label .t-template._empty,tui-textfield._with-label input:defined._empty,tui-textfield._with-label select:defined._empty{color:transparent}tui-textfield .t-template,tui-textfield input:defined,tui-textfield select:defined{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;-webkit-appearance:none;appearance:none;box-sizing:border-box;border-radius:inherit;padding:inherit;border:none;text-indent:var(--t-left, 0);padding-inline-end:calc(var(--t-right, var(--t-0, 0rem)) + var(--t-side) + var(--t-padding))}tui-textfield .t-template{display:flex;align-items:center}tui-textfield._with-template select{color:transparent!important}tui-textfield input:defined,tui-textfield select:defined{pointer-events:auto;background:transparent}tui-textfield input:defined:read-only~.t-filler,tui-textfield select:defined:read-only~.t-filler{display:none}tui-textfield input:defined:disabled~label,tui-textfield select:defined:disabled~label,tui-textfield input:defined:disabled~.t-content,tui-textfield select:defined:disabled~.t-content{opacity:var(--tui-disabled-opacity)}tui-textfield input:defined:disabled~label>tui-icon,tui-textfield select:defined:disabled~label>tui-icon,tui-textfield input:defined:disabled~.t-content>tui-icon,tui-textfield select:defined:disabled~.t-content>tui-icon{display:none}tui-textfield input:defined:-webkit-autofill~label,tui-textfield select:defined:-webkit-autofill~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown)~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown)~label{font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label{color:var(--tui-text-negative)}tui-textfield input:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear{display:flex}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]._empty,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]~label,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}@supports (-webkit-touch-callout: none){tui-textfield input:defined._ios-fix,tui-textfield select:defined._ios-fix{position:fixed;left:1000rem}}tui-textfield label:not([data-orientation=vertical]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;flex:1;font-size:inherit}tui-textfield label:defined,tui-textfield input:defined::placeholder,tui-textfield select:defined._empty{color:var(--tui-text-secondary)}tui-textfield select:not([data-mode~=readonly]){cursor:pointer}tui-textfield button,tui-textfield a{pointer-events:auto}tui-textfield .t-content{display:flex;align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate}tui-textfield .t-content>tui-icon{pointer-events:auto}tui-textfield .t-clear{display:none;pointer-events:auto}tui-textfield .t-filler:defined{pointer-events:none;background:none;color:var(--tui-text-tertiary);opacity:1}tui-textfield [tuiFluidTypography]{font-weight:700}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-textfield",
      imports: [NgIf, PolymorpheusOutlet, TuiButton, WaResizeObserver],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiAsDataListHost(TuiTextfieldComponent)],
      hostDirectives: [TuiDropdownFixed, TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown, TuiWithIcons],
      host: {
        "[attr.data-size]": "options.size()",
        "[class._with-label]": "hasLabel",
        "[class._with-template]": "content",
        "[class._disabled]": "input?.nativeElement.disabled"
      },
      template: '<ng-content select="input" />\n<ng-content select="select" />\n<ng-content select="label" />\n<span\n    class="t-content"\n    (mousedown.prevent)="input?.nativeElement?.focus()"\n    (waResizeObserver)="$event[0] && onResize($event[0])"\n>\n    <ng-content />\n    <button\n        *ngIf="options.cleaner()"\n        appearance="icon"\n        size="xs"\n        tabindex="-1"\n        tuiIconButton\n        type="button"\n        class="t-clear"\n        [iconStart]="icons.close"\n        (click)="directive?.setValue(null)"\n        (pointerdown.silent.prevent)="input?.nativeElement?.focus()"\n    >\n        {{ clear() }}\n    </button>\n    <ng-container #vcr />\n    <ng-content select="tui-icon" />\n</span>\n<span class="t-template">\n    <ng-container *polymorpheusOutlet="content as text; context: {$implicit: control?.value}">\n        {{ text }}\n    </ng-container>\n</span>\n<input\n    *ngIf="showFiller()"\n    aria-hidden="true"\n    disabled\n    class="t-filler"\n    [value]="computedFiller()"\n/>\n',
      styles: ['tui-textfield{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: var(--tui-height-l);--t-padding: var(--tui-padding-l);position:relative;display:flex;align-items:center;pointer-events:none;cursor:pointer;block-size:var(--t-height);color:var(--tui-text-tertiary);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-font-text-m);box-sizing:border-box}tui-textfield[style*="--t-icon-start:"]{--t-left: 2.25rem}tui-textfield[style*="--t-icon-end:"]{--t-right: 2.25rem}tui-textfield:after{margin-inline-start:.25rem}tui-textfield input,tui-textfield select{font:var(--tui-font-text-m)}tui-textfield[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=s][style*="--t-icon-start:"]{--t-left: 1.25rem}tui-textfield[data-size=s][style*="--t-icon-end:"]{--t-right: 1.25rem}tui-textfield[data-size=s]:before{margin:0 .5rem 0 -.125rem;font-size:1rem}tui-textfield[data-size=s]:after{margin:0 -.175rem 0 .575rem;font-size:1rem}tui-textfield[data-size=s] input,tui-textfield[data-size=s] select{font:var(--tui-font-text-s)}tui-textfield[data-size=s] .t-content{gap:0;margin-inline-end:-.325rem}tui-textfield[data-size=m]{--t-height: var(--tui-height-m);--t-padding: var(--tui-padding-m);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=m][style*="--t-icon-start:"]{--t-left: 1.75rem}tui-textfield[data-size=m][style*="--t-icon-end:"]{--t-right: 1.75rem}tui-textfield[data-size=m]:before{margin:0 .375rem 0 -.125rem}tui-textfield[data-size=m]:after{margin:0 -.125rem 0 .5rem}tui-textfield[data-size=m] input,tui-textfield[data-size=m] select{font:var(--tui-font-text-s)}tui-textfield[data-size=m] .t-content{margin-inline-end:-.125rem}tui-textfield:hover{color:var(--tui-text-secondary)}tui-textfield:hover:has(input:read-only),tui-textfield:hover:has(select[data-mode~=readonly]){color:var(--tui-text-tertiary)}tui-textfield:before{z-index:1;margin-inline-end:.75rem}tui-textfield:has(:disabled:not(.t-filler,button,option)):before,tui-textfield:has(:disabled:not(.t-filler,button,option)):after,tui-textfield:has(:disabled:not(.t-filler,button,option)) .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield._disabled:before,tui-textfield._disabled:after,tui-textfield._disabled .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield:has(label:not(:empty)) .t-template,tui-textfield:has(label:not(:empty)) input:defined,tui-textfield:has(label:not(:empty)) select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield:has(label:not(:empty)) .t-template::placeholder,tui-textfield:has(label:not(:empty)) input:defined::placeholder,tui-textfield:has(label:not(:empty)) select:defined::placeholder,tui-textfield:has(label:not(:empty)) .t-template._empty,tui-textfield:has(label:not(:empty)) input:defined._empty,tui-textfield:has(label:not(:empty)) select:defined._empty{color:transparent}tui-textfield._with-label .t-template,tui-textfield._with-label input:defined,tui-textfield._with-label select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield._with-label .t-template::placeholder,tui-textfield._with-label input:defined::placeholder,tui-textfield._with-label select:defined::placeholder,tui-textfield._with-label .t-template._empty,tui-textfield._with-label input:defined._empty,tui-textfield._with-label select:defined._empty{color:transparent}tui-textfield .t-template,tui-textfield input:defined,tui-textfield select:defined{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;-webkit-appearance:none;appearance:none;box-sizing:border-box;border-radius:inherit;padding:inherit;border:none;text-indent:var(--t-left, 0);padding-inline-end:calc(var(--t-right, var(--t-0, 0rem)) + var(--t-side) + var(--t-padding))}tui-textfield .t-template{display:flex;align-items:center}tui-textfield._with-template select{color:transparent!important}tui-textfield input:defined,tui-textfield select:defined{pointer-events:auto;background:transparent}tui-textfield input:defined:read-only~.t-filler,tui-textfield select:defined:read-only~.t-filler{display:none}tui-textfield input:defined:disabled~label,tui-textfield select:defined:disabled~label,tui-textfield input:defined:disabled~.t-content,tui-textfield select:defined:disabled~.t-content{opacity:var(--tui-disabled-opacity)}tui-textfield input:defined:disabled~label>tui-icon,tui-textfield select:defined:disabled~label>tui-icon,tui-textfield input:defined:disabled~.t-content>tui-icon,tui-textfield select:defined:disabled~.t-content>tui-icon{display:none}tui-textfield input:defined:-webkit-autofill~label,tui-textfield select:defined:-webkit-autofill~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown)~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown)~label{font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label{color:var(--tui-text-negative)}tui-textfield input:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear{display:flex}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]._empty,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]~label,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}@supports (-webkit-touch-callout: none){tui-textfield input:defined._ios-fix,tui-textfield select:defined._ios-fix{position:fixed;left:1000rem}}tui-textfield label:not([data-orientation=vertical]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;flex:1;font-size:inherit}tui-textfield label:defined,tui-textfield input:defined::placeholder,tui-textfield select:defined._empty{color:var(--tui-text-secondary)}tui-textfield select:not([data-mode~=readonly]){cursor:pointer}tui-textfield button,tui-textfield a{pointer-events:auto}tui-textfield .t-content{display:flex;align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate}tui-textfield .t-content>tui-icon{pointer-events:auto}tui-textfield .t-clear{display:none;pointer-events:auto}tui-textfield .t-filler:defined{pointer-events:none;background:none;color:var(--tui-text-tertiary);opacity:1}tui-textfield [tuiFluidTypography]{font-weight:700}\n']
    }]
  }], null, {
    directive: [{
      type: ContentChild,
      args: [forwardRef(() => TuiTextfieldDirective)]
    }],
    label: [{
      type: ContentChild,
      args: [forwardRef(() => TuiLabel), {
        read: ElementRef
      }]
    }],
    control: [{
      type: ContentChild,
      args: [NgControl]
    }],
    vcr: [{
      type: ViewChild,
      args: ["vcr", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    input: [{
      type: ContentChild,
      args: [forwardRef(() => TuiTextfieldDirective), {
        read: ElementRef,
        static: true
      }]
    }],
    stringify: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    fillerSetter: [{
      type: Input,
      args: ["filler"]
    }]
  });
})();
var TuiTextfieldBase = class _TuiTextfieldBase {
  constructor() {
    this.focused = signal(null);
    this.control = inject(NgControl, {
      optional: true
    });
    this.a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
    this.s = tuiAppearanceState(null);
    this.m = tuiAppearanceMode(this.mode);
    this.f = tuiAppearanceFocus(computed(() => this.focused() || this.textfield.focused()));
    this.el = tuiInjectElement();
    this.textfield = inject(TuiTextfieldComponent);
    this.readOnly = false;
    this.invalid = null;
    this.nativeValue = toSignal(merge(fromEvent(this.el, "input"), timer(0).pipe(switchMap(() => tuiControlValue(this.control)))).pipe(map(() => this.el.value)), {
      initialValue: this.el.value
    });
  }
  set focusedSetter(focused) {
    this.focused.set(focused);
  }
  set stateSetter(state) {
    this.s.set(state);
  }
  get mode() {
    if (this.readOnly) {
      return "readonly";
    }
    if (this.invalid === false) {
      return "valid";
    }
    if (this.invalid) {
      return "invalid";
    }
    return null;
  }
  // TODO: refactor to signal inputs after Angular update
  ngOnChanges() {
    this.m.set(this.mode);
  }
  setValue(value) {
    this.el.focus();
    this.el.select();
    if (value == null) {
      this.el.ownerDocument.execCommand("delete");
    } else {
      this.el.ownerDocument.execCommand("insertText", false, this.textfield.stringify(value));
    }
  }
  static {
    this.ɵfac = function TuiTextfieldBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldBase)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldBase,
      inputs: {
        readOnly: "readOnly",
        invalid: "invalid",
        focusedSetter: [0, "focused", "focusedSetter"],
        stateSetter: [0, "state", "stateSetter"]
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldBase, [{
    type: Directive
  }], null, {
    readOnly: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    focusedSetter: [{
      type: Input,
      args: ["focused"]
    }],
    stateSetter: [{
      type: Input,
      args: ["state"]
    }]
  });
})();
var TuiTextfieldDirective = class _TuiTextfieldDirective extends TuiTextfieldBase {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldDirective_BaseFactory;
      return function TuiTextfieldDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldDirective_BaseFactory || (ɵTuiTextfieldDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldDirective)))(__ngFactoryType__ || _TuiTextfieldDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldDirective,
      selectors: [["input", "tuiTextfield", ""]],
      hostVars: 4,
      hostBindings: function TuiTextfieldDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiTextfieldDirective_input_HostBindingHandler() {
            return 0;
          })("focusin", function TuiTextfieldDirective_focusin_HostBindingHandler() {
            return 0;
          })("focusout", function TuiTextfieldDirective_focusout_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("id", ctx.textfield.id)("readOnly", ctx.readOnly);
          ɵɵclassProp("_empty", ctx.el.value === "");
        }
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([TuiNativeValidator, TuiAppearance]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiTextfield]",
      hostDirectives: [TuiNativeValidator, TuiAppearance],
      host: {
        "[id]": "textfield.id",
        "[readOnly]": "readOnly",
        "[class._empty]": 'el.value === ""',
        "(input)": "0",
        "(focusin)": "0",
        "(focusout)": "0"
      }
    }]
  }], null, null);
})();
var TuiSelect = class _TuiSelect extends TuiTextfieldBase {
  constructor() {
    super(...arguments);
    this.nav = inject(WA_NAVIGATOR);
    this.placeholder = "";
  }
  setValue(value) {
    this.control?.control?.setValue(value);
    this.el.dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  focus() {
    this.el.classList.add("_ios-fix");
    this.el.focus();
    this.el.classList.remove("_ios-fix");
  }
  get value() {
    return this.textfield.stringify(this.control?.value ?? "");
  }
  onCopy() {
    return __async(this, null, function* () {
      yield this.nav.clipboard.writeText(this.value);
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSelect_BaseFactory;
      return function TuiSelect_Factory(__ngFactoryType__) {
        return (ɵTuiSelect_BaseFactory || (ɵTuiSelect_BaseFactory = ɵɵgetInheritedFactory(_TuiSelect)))(__ngFactoryType__ || _TuiSelect);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSelect,
      selectors: [["select", "tuiTextfield", ""]],
      hostVars: 3,
      hostBindings: function TuiSelect_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiSelect_input_HostBindingHandler() {
            return 0;
          })("focusin", function TuiSelect_focusin_HostBindingHandler() {
            return 0;
          })("focusout", function TuiSelect_focusout_HostBindingHandler() {
            return 0;
          })("keydown.space.prevent", function TuiSelect_keydown_space_prevent_HostBindingHandler() {
            return 0;
          })("keydown.enter.prevent", function TuiSelect_keydown_enter_prevent_HostBindingHandler() {
            return 0;
          })("keydown.backspace", function TuiSelect_keydown_backspace_HostBindingHandler() {
            return ctx.setValue("");
          })("mousedown.prevent", function TuiSelect_mousedown_prevent_HostBindingHandler() {
            return ctx.focus();
          })("keydown.control.c", function TuiSelect_keydown_control_c_HostBindingHandler() {
            return ctx.onCopy();
          })("keydown.meta.c", function TuiSelect_keydown_meta_c_HostBindingHandler() {
            return ctx.onCopy();
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("id", ctx.textfield.id);
          ɵɵclassProp("_empty", ctx.value === "");
        }
      },
      inputs: {
        placeholder: "placeholder"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TuiTextfieldDirective, _TuiSelect)]), ɵɵHostDirectivesFeature([TuiNativeValidator, TuiAppearance]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      attrs: _c4,
      decls: 3,
      vars: 2,
      consts: [["selected", ""], ["disabled", "", "selected", "", "value", "", 4, "ngIf", "ngIfElse"], ["disabled", "", "selected", "", "value", ""], ["selected", "", 3, "value", 4, "ngFor", "ngForOf"], ["selected", "", 3, "value"]],
      template: function TuiSelect_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiSelect_option_0_Template, 2, 1, "option", 1)(1, TuiSelect_ng_template_1_Template, 1, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const selected_r3 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.placeholder && !ctx.value)("ngIfElse", selected_r3);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelect, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "select[tuiTextfield]",
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [tuiProvide(TuiTextfieldDirective, TuiSelect)],
      hostDirectives: [TuiNativeValidator, TuiAppearance],
      host: {
        "[id]": "textfield.id",
        "[class._empty]": 'value === ""',
        "(input)": "0",
        "(focusin)": "0",
        "(focusout)": "0",
        "(keydown.space.prevent)": "0",
        "(keydown.enter.prevent)": "0",
        "(keydown.backspace)": 'setValue("")',
        "(mousedown.prevent)": "focus()",
        "(keydown.control.c)": "onCopy()",
        "(keydown.meta.c)": "onCopy()"
      },
      template: '<option\n    *ngIf="placeholder && !value; else selected"\n    disabled\n    selected\n    value=""\n>\n    {{ placeholder }}\n</option>\n<ng-template #selected>\n    <option\n        *ngFor="let item of [value]"\n        selected\n        [value]="item"\n    >\n        {{ item }}\n    </option>\n</ng-template>\n'
    }]
  }], null, {
    placeholder: [{
      type: Input
    }]
  });
})();
var TuiTextfield = [TuiLabel, TuiSelect, TuiTextfieldComponent, TuiTextfieldDirective, TuiTextfieldOptionsDirective, TuiTextfieldDropdownDirective];
var TuiTextfieldContent = class _TuiTextfieldContent {
  constructor() {
    inject(TuiTextfieldComponent).vcr?.createEmbeddedView(inject(TemplateRef));
  }
  static {
    this.ɵfac = function TuiTextfieldContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldContent,
      selectors: [["ng-template", "tuiTextfieldContent", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiTextfieldContent]"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-hint.mjs
function TuiHintUnstyledComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c02 = ["*"];
function TuiHintComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r1, ɵɵsanitizeHtml);
  }
}
var _c12 = (a0) => ({
  $implicit: a0
});
function TuiHints_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiHints_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiHints_div_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hint_r1 = ctx.$implicit;
    ɵɵproperty("@tuiParentAnimation", void 0)("tuiActiveZoneParent", hint_r1.activeZone || null);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", hint_r1.component)("polymorpheusOutletContext", ɵɵpureFunction1(4, _c12, hint_r1));
  }
}
var TUI_HINT_COMPONENT = tuiCreateTokenFromFactory(() => TuiHintComponent);
var TuiHintService = class _TuiHintService extends BehaviorSubject {
  constructor() {
    super([]);
  }
  add(directive) {
    this.next(this.value.concat(directive));
  }
  remove(directive) {
    if (this.value.includes(directive)) {
      this.next(this.value.filter((hint) => hint !== directive));
    }
  }
  static {
    this.ɵfac = function TuiHintService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiHintService,
      factory: _TuiHintService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiHintDriver = class _TuiHintDriver extends TuiDriverDirective {
  constructor() {
    super(...arguments);
    this.type = "hint";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintDriver_BaseFactory;
      return function TuiHintDriver_Factory(__ngFactoryType__) {
        return (ɵTuiHintDriver_BaseFactory || (ɵTuiHintDriver_BaseFactory = ɵɵgetInheritedFactory(_TuiHintDriver)))(__ngFactoryType__ || _TuiHintDriver);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDriver,
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDriver, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();
var TUI_HINT_DIRECTIONS = ["bottom-left", "bottom", "bottom-right", "top-left", "top", "top-right", "left-top", "left", "left-bottom", "right-top", "right", "right-bottom"];
var TUI_HINT_DEFAULT_OPTIONS = {
  direction: "bottom-left",
  showDelay: 500,
  hideDelay: 200,
  appearance: "",
  /** TODO @deprecated use {@link TUI_TOOLTIP_OPTIONS} instead **/
  icon: "@tui.circle-help"
};
var TUI_HINT_OPTIONS = tuiCreateToken(TUI_HINT_DEFAULT_OPTIONS);
var tuiHintOptionsProvider = (override) => ({
  provide: TUI_HINT_OPTIONS,
  deps: [[new Optional(), new Self(), TuiHintOptionsDirective], [new Optional(), new SkipSelf(), TUI_HINT_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_HINT_DEFAULT_OPTIONS)
});
var TuiHintOptionsDirective = class _TuiHintOptionsDirective {
  constructor() {
    this.options = inject(TUI_HINT_OPTIONS, {
      skipSelf: true
    });
    this.direction = this.options.direction;
    this.appearance = this.options.appearance;
    this.showDelay = this.options.showDelay;
    this.hideDelay = this.options.hideDelay;
    this.icon = this.options.icon;
    this.change$ = new Subject();
  }
  ngOnChanges() {
    this.change$.next();
  }
  static {
    this.ɵfac = function TuiHintOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintOptionsDirective,
      selectors: [["", "tuiHintContent", ""]],
      inputs: {
        content: [0, "tuiHintContent", "content"],
        direction: [0, "tuiHintDirection", "direction"],
        appearance: [0, "tuiHintAppearance", "appearance"],
        showDelay: [0, "tuiHintShowDelay", "showDelay"],
        hideDelay: [0, "tuiHintHideDelay", "hideDelay"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_HINT_OPTIONS, _TuiHintOptionsDirective)]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintOptionsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintContent]",
      providers: [tuiProvide(TUI_HINT_OPTIONS, TuiHintOptionsDirective)]
    }]
  }], null, {
    content: [{
      type: Input,
      args: ["tuiHintContent"]
    }],
    direction: [{
      type: Input,
      args: ["tuiHintDirection"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiHintAppearance"]
    }],
    showDelay: [{
      type: Input,
      args: ["tuiHintShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["tuiHintHideDelay"]
    }]
  });
})();
var TuiHintHover = class _TuiHintHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.isMobile = inject(TUI_IS_MOBILE);
    this.el = tuiInjectElement();
    this.hovered$ = inject(TuiHoveredService);
    this.options = inject(TUI_HINT_OPTIONS);
    this.visible = false;
    this.toggle$ = new Subject();
    this.stream$ = merge(this.toggle$.pipe(switchMap((visible) => this.isMobile ? of(visible) : of(visible).pipe(delay(visible ? 0 : this.tuiHintHideDelay))), takeUntil(this.hovered$), repeat()), this.hovered$.pipe(switchMap((visible) => this.isMobile ? of(visible) : of(visible).pipe(delay(visible ? this.tuiHintShowDelay : this.tuiHintHideDelay))), takeUntil(this.toggle$), repeat())).pipe(filter(() => this.enabled), map((value) => value && (this.el.hasAttribute("tuiHintPointer") || !tuiIsObscured(this.el))), tap((visible) => {
      this.visible = visible;
    }));
    this.parent = inject(_TuiHintHover, {
      optional: true,
      skipSelf: true
    });
    this.tuiHintShowDelay = this.options.showDelay;
    this.tuiHintHideDelay = this.options.hideDelay;
    this.type = "hint";
    this.enabled = true;
  }
  toggle(visible = !this.visible) {
    this.toggle$.next(visible);
    this.parent?.toggle(visible);
  }
  static {
    this.ɵfac = function TuiHintHover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintHover)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintHover,
      inputs: {
        tuiHintShowDelay: "tuiHintShowDelay",
        tuiHintHideDelay: "tuiHintHideDelay"
      },
      exportAs: ["tuiHintHover"],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintHover), TuiHoveredService]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHover, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [tuiAsDriver(TuiHintHover), TuiHoveredService],
      exportAs: "tuiHintHover"
    }]
  }], function() {
    return [];
  }, {
    tuiHintShowDelay: [{
      type: Input
    }],
    tuiHintHideDelay: [{
      type: Input
    }]
  });
})();
var GAP$1 = 8;
var ARROW_OFFSET = 24;
var TOP = 0;
var LEFT = 1;
var TuiHintPosition = class _TuiHintPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.offset = inject(TUI_IS_MOBILE) ? 16 : 8;
    this.viewport = inject(TUI_VIEWPORT);
    this.accessor = tuiFallbackAccessor("hint")(inject(TuiRectAccessor), inject(TuiHintDirective));
    this.points = TUI_HINT_DIRECTIONS.reduce((acc, direction) => __spreadProps(__spreadValues({}, acc), {
      [direction]: [0, 0]
    }), {});
    this.direction = inject(TUI_HINT_OPTIONS).direction;
    this.type = "hint";
  }
  getPosition(rect, el) {
    const width = el?.clientWidth ?? rect.width;
    const height = el?.clientHeight ?? rect.height;
    const hostRect = this.accessor.getClientRect() ?? EMPTY_CLIENT_RECT;
    const leftCenter = hostRect.left + hostRect.width / 2;
    const topCenter = hostRect.top + hostRect.height / 2;
    this.points["top-left"][TOP] = hostRect.top - height - this.offset;
    this.points["top-left"][LEFT] = leftCenter - width + ARROW_OFFSET;
    this.points.top[TOP] = this.points["top-left"][TOP];
    this.points.top[LEFT] = leftCenter - width / 2;
    this.points["top-right"][TOP] = this.points["top-left"][TOP];
    this.points["top-right"][LEFT] = leftCenter - ARROW_OFFSET;
    this.points["bottom-left"][TOP] = hostRect.bottom + this.offset;
    this.points["bottom-left"][LEFT] = this.points["top-left"][LEFT];
    this.points.bottom[TOP] = this.points["bottom-left"][TOP];
    this.points.bottom[LEFT] = this.points.top[LEFT];
    this.points["bottom-right"][TOP] = this.points["bottom-left"][TOP];
    this.points["bottom-right"][LEFT] = this.points["top-right"][LEFT];
    this.points["left-top"][TOP] = topCenter - height + ARROW_OFFSET;
    this.points["left-top"][LEFT] = hostRect.left - width - this.offset;
    this.points.left[TOP] = topCenter - height / 2;
    this.points.left[LEFT] = this.points["left-top"][LEFT];
    this.points["left-bottom"][TOP] = topCenter - ARROW_OFFSET;
    this.points["left-bottom"][LEFT] = this.points["left-top"][LEFT];
    this.points["right-top"][TOP] = this.points["left-top"][TOP];
    this.points["right-top"][LEFT] = hostRect.right + this.offset;
    this.points.right[TOP] = this.points.left[TOP];
    this.points.right[LEFT] = this.points["right-top"][LEFT];
    this.points["right-bottom"][TOP] = this.points["left-bottom"][TOP];
    this.points["right-bottom"][LEFT] = this.points["right-top"][LEFT];
    const priorityDirections = Array.isArray(this.direction) ? this.direction : [this.direction];
    const sortedDirections = priorityDirections.concat(TUI_HINT_DIRECTIONS);
    const direction = sortedDirections.find((direction2) => this.checkPosition(this.points[direction2], width, height));
    return this.points[direction || this.fallback];
  }
  get fallback() {
    return this.points.top[TOP] > this.viewport.getClientRect().bottom - this.points.bottom[TOP] ? "top" : "bottom";
  }
  checkPosition([top, left], width, height) {
    const viewport = this.viewport.getClientRect();
    return top > GAP$1 && left > GAP$1 && top + height < viewport.bottom - GAP$1 && left + width < viewport.right - GAP$1;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintPosition_BaseFactory;
      return function TuiHintPosition_Factory(__ngFactoryType__) {
        return (ɵTuiHintPosition_BaseFactory || (ɵTuiHintPosition_BaseFactory = ɵɵgetInheritedFactory(_TuiHintPosition)))(__ngFactoryType__ || _TuiHintPosition);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintPosition,
      inputs: {
        direction: [0, "tuiHintDirection", "direction"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPosition, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    direction: [{
      type: Input,
      args: ["tuiHintDirection"]
    }]
  });
})();
var TuiHintDirective = class _TuiHintDirective {
  constructor() {
    this.service = inject(TuiHintService);
    this.appearance = inject(TUI_HINT_OPTIONS).appearance;
    this.content = signal(null);
    this.component = inject(PolymorpheusComponent);
    this.el = tuiInjectElement();
    this.activeZone = inject(TuiActiveZone, {
      optional: true
    });
    this.type = "hint";
  }
  set tuiHint(content) {
    this.content.set(content);
    if (!content) {
      this.toggle(false);
    }
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.getBoundingClientRect();
  }
  toggle(show) {
    if (show && this.content()) {
      this.service.add(this);
    } else {
      this.service.remove(this);
    }
  }
  static {
    this.ɵfac = function TuiHintDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDirective,
      selectors: [["", "tuiHint", "", 5, "ng-container", 5, "ng-template"]],
      inputs: {
        context: [0, "tuiHintContext", "context"],
        appearance: [0, "tuiHintAppearance", "appearance"],
        tuiHint: "tuiHint"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintDirective), tuiAsVehicle(_TuiHintDirective), {
        provide: PolymorpheusComponent,
        deps: [TUI_HINT_COMPONENT, INJECTOR$1],
        useClass: PolymorpheusComponent
      }]), ɵɵHostDirectivesFeature([TuiHintDriver, {
        directive: TuiHintHover,
        inputs: ["tuiHintHideDelay", "tuiHintHideDelay", "tuiHintShowDelay", "tuiHintShowDelay"]
      }, {
        directive: TuiHintPosition,
        inputs: ["tuiHintDirection", "tuiHintDirection"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint]:not(ng-container):not(ng-template)",
      providers: [tuiAsRectAccessor(TuiHintDirective), tuiAsVehicle(TuiHintDirective), {
        provide: PolymorpheusComponent,
        deps: [TUI_HINT_COMPONENT, INJECTOR$1],
        useClass: PolymorpheusComponent
      }],
      hostDirectives: [TuiHintDriver, {
        directive: TuiHintHover,
        inputs: ["tuiHintHideDelay", "tuiHintShowDelay"]
      }, {
        directive: TuiHintPosition,
        inputs: ["tuiHintDirection"]
      }]
    }]
  }], null, {
    context: [{
      type: Input,
      args: ["tuiHintContext"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiHintAppearance"]
    }],
    tuiHint: [{
      type: Input
    }]
  });
})();
var TuiHintPointer = class _TuiHintPointer extends TuiHintHover {
  constructor() {
    super(...arguments);
    this.currentRect = EMPTY_CLIENT_RECT;
  }
  getClientRect() {
    return this.currentRect;
  }
  onMove({
    clientX,
    clientY
  }) {
    this.currentRect = tuiPointToClientRect(clientX, clientY);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintPointer_BaseFactory;
      return function TuiHintPointer_Factory(__ngFactoryType__) {
        return (ɵTuiHintPointer_BaseFactory || (ɵTuiHintPointer_BaseFactory = ɵɵgetInheritedFactory(_TuiHintPointer)))(__ngFactoryType__ || _TuiHintPointer);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintPointer,
      selectors: [["", "tuiHint", "", "tuiHintPointer", ""]],
      hostBindings: function TuiHintPointer_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousemove.silent", function TuiHintPointer_mousemove_silent_HostBindingHandler($event) {
            return ctx.onMove($event);
          });
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintPointer), tuiAsDriver(_TuiHintPointer)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPointer, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint][tuiHintPointer]",
      providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)],
      host: {
        "(mousemove.silent)": "onMove($event)"
      }
    }]
  }], null, null);
})();
var TuiHintUnstyledComponent = class _TuiHintUnstyledComponent {
  constructor() {
    this.context = injectContext();
  }
  static {
    this.ɵfac = function TuiHintUnstyledComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintUnstyledComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHintUnstyledComponent,
      selectors: [["ng-component"]],
      hostVars: 1,
      hostBindings: function TuiHintUnstyledComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiParentAnimation", void 0);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [[4, "polymorpheusOutlet"]],
      template: function TuiHintUnstyledComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiHintUnstyledComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.context.$implicit.content);
        }
      },
      dependencies: [PolymorpheusOutlet],
      encapsulation: 2,
      data: {
        animation: [tuiParentAnimation]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyledComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [PolymorpheusOutlet],
      template: '<ng-container *polymorpheusOutlet="context.$implicit.content" />',
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiParentAnimation],
      host: {
        "[@tuiParentAnimation]": ""
      }
    }]
  }], null, null);
})();
var TuiHintUnstyled = class _TuiHintUnstyled {
  constructor() {
    const hint = inject(TuiHintDirective);
    hint.component = new PolymorpheusComponent(TuiHintUnstyledComponent);
    hint.content.set(inject(TemplateRef));
  }
  static {
    this.ɵfac = function TuiHintUnstyled_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintUnstyled)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintUnstyled,
      selectors: [["ng-template", "tuiHint", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyled, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiHint]"
    }]
  }], function() {
    return [];
  }, null);
})();
var GAP = 8;
var TUI_HINT_PROVIDERS = [TuiPositionService, TuiHoveredService, tuiPositionAccessorFor("hint", TuiHintPosition), tuiRectAccessorFor("hint", TuiHintDirective)];
var TuiHintComponent = class _TuiHintComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.hover = inject(TuiHintHover);
    this.vvs = inject(TuiVisualViewportService);
    this.viewport = inject(TUI_VIEWPORT);
    this.desktop = {
      value: "",
      params: {
        end: 1,
        start: 1
      }
    };
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED), "cubic-bezier(0.35, 1.3, 0.25, 1)");
    this.pointer = inject(TuiHintPointer, {
      optional: true
    });
    this.accessor = inject(TuiRectAccessor);
    this.hint = injectContext().$implicit;
    this.isMobile = inject(TUI_IS_MOBILE);
    this.content = this.hint.component.component === TuiHintUnstyledComponent ? signal("") : this.hint.content;
    this.appearance = this.hint.appearance || this.hint.el.closest("[tuiTheme]")?.getAttribute("tuiTheme");
    inject(TuiPositionService).pipe(takeWhile(() => this.hint.el.isConnected), map((point) => this.vvs.correct(point)), takeUntilDestroyed()).subscribe({
      next: ([top, left]) => this.update(top, left),
      complete: () => this.hover.toggle(false)
    });
    inject(TuiHoveredService).pipe(takeUntilDestroyed()).subscribe((hover) => this.hover.toggle(hover));
  }
  onClick(target) {
    if (!target.closest("tui-hint") && !this.hint.el.contains(target) || tuiIsObscured(this.hint.el)) {
      this.hover.toggle(false);
    }
  }
  apply(top, left, beakTop, beakLeft) {
    this.el.style.top = top;
    this.el.style.left = left;
    this.el.style.setProperty("--top", `${beakTop}%`);
    this.el.style.setProperty("--left", `${beakLeft}%`);
    this.el.style.setProperty("--rotate", !beakLeft || Math.ceil(beakLeft) === 100 ? "90deg" : "0deg");
  }
  update(top, left) {
    const {
      clientHeight,
      clientWidth
    } = this.el;
    const rect = this.accessor.getClientRect();
    const viewport = this.viewport.getClientRect();
    if (rect === EMPTY_CLIENT_RECT || !clientHeight || !clientWidth) {
      return;
    }
    const safeLeft = tuiClamp(left, GAP, viewport.width - clientWidth - GAP);
    const [beakTop, beakLeft] = this.vvs.correct([rect.top + rect.height / 2 - top, rect.left + rect.width / 2 - safeLeft]);
    this.apply(tuiPx(Math.round(top)), tuiPx(Math.round(safeLeft)), Math.round(tuiClamp(beakTop, 0, clientHeight) / clientHeight * 100), Math.round(tuiClamp(beakLeft, 0, clientWidth) / clientWidth * 100));
  }
  static {
    this.ɵfac = function TuiHintComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHintComponent,
      selectors: [["tui-hint"]],
      hostVars: 8,
      hostBindings: function TuiHintComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiHintComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiScaleIn", ctx.isMobile ? ctx.options : ctx.desktop)("@tuiFadeIn", ctx.options);
          ɵɵattribute("data-appearance", ctx.appearance)("tuiTheme", ctx.appearance);
          ɵɵclassProp("_untouchable", ctx.pointer)("_mobile", ctx.isMobile);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature(TUI_HINT_PROVIDERS), ɵɵStandaloneFeature],
      ngContentSelectors: _c02,
      decls: 2,
      vars: 2,
      consts: [[3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "innerHTML"]],
      template: function TuiHintComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiHintComponent_span_1_Template, 1, 1, "span", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.content())("polymorpheusOutletContext", ctx.hint.context);
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: [`[_nghost-%COMP%]{position:absolute;max-inline-size:18rem;padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--left) var(--top)}[_nghost-%COMP%]:before{content:"";position:absolute;top:var(--top);left:var(--left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');transform:translate(-50%,-50%) rotate(var(--rotate))}._mobile[_nghost-%COMP%]{font:var(--tui-font-text-m)}._mobile[_nghost-%COMP%]:before{inline-size:1.5rem;block-size:1.125rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>')}[data-appearance=error][_nghost-%COMP%]{background:var(--tui-status-negative)}[data-appearance=dark][_nghost-%COMP%]{background:var(--tui-background-accent-opposite-hover);color:var(--tui-background-base);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}`],
      data: {
        animation: [tuiFadeIn, tuiScaleIn]
      },
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiHintComponent.prototype, "apply", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-hint",
      imports: [PolymorpheusOutlet],
      template: `
        <ng-content />
        <span
            *polymorpheusOutlet="content() as text; context: hint.context"
            [innerHTML]="text"
        ></span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_HINT_PROVIDERS,
      animations: [tuiFadeIn, tuiScaleIn],
      host: {
        "[@tuiScaleIn]": "isMobile ? options : desktop",
        "[@tuiFadeIn]": "options",
        "[class._untouchable]": "pointer",
        "[class._mobile]": "isMobile",
        "[attr.data-appearance]": "appearance",
        "[attr.tuiTheme]": "appearance",
        "(document:click)": "onClick($event.target)"
      },
      styles: [`:host{position:absolute;max-inline-size:18rem;padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--left) var(--top)}:host:before{content:"";position:absolute;top:var(--top);left:var(--left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');transform:translate(-50%,-50%) rotate(var(--rotate))}:host._mobile{font:var(--tui-font-text-m)}:host._mobile:before{inline-size:1.5rem;block-size:1.125rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>')}:host[data-appearance=error]{background:var(--tui-status-negative)}:host[data-appearance=dark]{background:var(--tui-background-accent-opposite-hover);color:var(--tui-background-base);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}:host:not([style*=top]){visibility:hidden}:host._untouchable{pointer-events:none}
`]
    }]
  }], function() {
    return [];
  }, {
    apply: []
  });
})();
var TuiHintDescribe = class _TuiHintDescribe extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.zone = inject(NgZone);
    this.id$ = new BehaviorSubject("");
    this.stream$ = this.id$.pipe(distinctUntilChanged(), tuiIfMap(() => fromEvent(this.doc, "keydown", {
      capture: true
    }), tuiIsPresent), switchMap(() => this.focused ? of(false) : merge(tuiTypedFromEvent(this.doc, "keyup"), tuiTypedFromEvent(this.element, "blur")).pipe(map(() => this.focused))), debounce((visible) => visible ? timer(1e3, tuiZonefreeScheduler(this.zone)) : of(null)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized());
    this.type = "hint";
  }
  set tuiHintDescribe(id) {
    this.id$.next(id || "");
  }
  get element() {
    return this.doc.getElementById(this.id$.value || "") || this.el;
  }
  get focused() {
    return tuiIsNativeFocused(this.element);
  }
  static {
    this.ɵfac = function TuiHintDescribe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintDescribe)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDescribe,
      selectors: [["", "tuiHintDescribe", ""]],
      inputs: {
        tuiHintDescribe: "tuiHintDescribe"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintDescribe)]), ɵɵInheritDefinitionFeature]
    });
  }
};
__decorate([tuiPure], TuiHintDescribe.prototype, "element", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDescribe, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintDescribe]",
      providers: [tuiAsDriver(TuiHintDescribe)]
    }]
  }], function() {
    return [];
  }, {
    tuiHintDescribe: [{
      type: Input
    }],
    element: []
  });
})();
var TuiHintHost = class _TuiHintHost extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.type = "hint";
  }
  getClientRect() {
    return this.tuiHintHost?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintHost_BaseFactory;
      return function TuiHintHost_Factory(__ngFactoryType__) {
        return (ɵTuiHintHost_BaseFactory || (ɵTuiHintHost_BaseFactory = ɵɵgetInheritedFactory(_TuiHintHost)))(__ngFactoryType__ || _TuiHintHost);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintHost,
      selectors: [["", "tuiHint", "", "tuiHintHost", ""]],
      inputs: {
        tuiHintHost: "tuiHintHost"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintHost)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHost, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint][tuiHintHost]",
      providers: [tuiAsRectAccessor(TuiHintHost)]
    }]
  }], null, {
    tuiHintHost: [{
      type: Input
    }]
  });
})();
var TuiHintManual = class _TuiHintManual extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.hover = inject(TuiHintHover);
    this.stream$ = new BehaviorSubject(false);
    this.tuiHintManual = false;
    this.type = "hint";
    this.hover.enabled = false;
  }
  ngOnChanges() {
    this.stream$.next(this.tuiHintManual);
  }
  static {
    this.ɵfac = function TuiHintManual_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintManual)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintManual,
      selectors: [["", "tuiHint", "", "tuiHintManual", ""]],
      inputs: {
        tuiHintManual: "tuiHintManual"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintManual)]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintManual, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint][tuiHintManual]",
      providers: [tuiAsDriver(TuiHintManual)]
    }]
  }], function() {
    return [];
  }, {
    tuiHintManual: [{
      type: Input
    }]
  });
})();
var TuiHintOverflow = class _TuiHintOverflow {
  constructor() {
    this.hint = inject(TuiHintDirective);
  }
  onMouseEnter({
    scrollWidth,
    clientWidth,
    textContent
  }) {
    this.hint.tuiHint = scrollWidth > clientWidth ? textContent : "";
  }
  static {
    this.ɵfac = function TuiHintOverflow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintOverflow)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintOverflow,
      selectors: [["", "tuiHintOverflow", ""]],
      hostBindings: function TuiHintOverflow_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseenter", function TuiHintOverflow_mouseenter_HostBindingHandler($event) {
            return ctx.onMouseEnter($event.currentTarget);
          });
        }
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintAppearance"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintOverflow, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintOverflow]",
      hostDirectives: [{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance"]
      }],
      host: {
        "(mouseenter)": "onMouseEnter($event.currentTarget)"
      }
    }]
  }], null, null);
})();
var TuiHint = [TuiHintComponent, TuiHintDirective, TuiHintOptionsDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer];
var TuiHints = class _TuiHints {
  constructor() {
    this.hints$ = inject(TuiHintService);
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.hints = [];
  }
  ngOnInit() {
    this.hints$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((hints) => {
      this.hints = hints;
      this.cdr.detectChanges();
    });
  }
  static {
    this.ɵfac = function TuiHints_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHints)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHints,
      selectors: [["tui-hints"]],
      hostAttrs: ["aria-live", "polite"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [["role", "tooltip", 3, "tuiActiveZoneParent", 4, "ngFor", "ngForOf"], ["role", "tooltip", 3, "tuiActiveZoneParent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiHints_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiHints_div_0_Template, 2, 6, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.hints);
        }
      },
      dependencies: [NgForOf, PolymorpheusOutlet, TuiActiveZone],
      styles: ["[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;block-size:0}"],
      data: {
        animation: [tuiParentAnimation]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHints, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-hints",
      imports: [NgForOf, PolymorpheusOutlet, PolymorpheusTemplate, TuiActiveZone],
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [tuiParentAnimation],
      host: {
        "aria-live": "polite"
      },
      template: '<div\n    *ngFor="let hint of hints"\n    role="tooltip"\n    @tuiParentAnimation\n    [tuiActiveZoneParent]="hint.activeZone || null"\n>\n    <ng-container *polymorpheusOutlet="hint.component; context: {$implicit: hint}" />\n</div>\n',
      styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;block-size:0}\n"]
    }]
  }], null, null);
})();

export {
  TuiLabel,
  TuiNativeValidator,
  TUI_TEXTFIELD_OPTIONS,
  tuiTextfieldOptionsProvider,
  TuiTextfieldOptionsDirective,
  TuiTextfieldDropdownDirective,
  TuiWithTextfieldDropdown,
  TuiTextfieldComponent,
  TuiTextfieldBase,
  TuiTextfieldDirective,
  TuiSelect,
  TuiTextfield,
  TuiTextfieldContent,
  TUI_HINT_COMPONENT,
  TuiHintService,
  TuiHintDriver,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_OPTIONS,
  tuiHintOptionsProvider,
  TuiHintOptionsDirective,
  TuiHintHover,
  TuiHintPosition,
  TuiHintDirective,
  TuiHintPointer,
  TuiHintUnstyledComponent,
  TuiHintUnstyled,
  TUI_HINT_PROVIDERS,
  TuiHintComponent,
  TuiHintDescribe,
  TuiHintHost,
  TuiHintManual,
  TuiHintOverflow,
  TuiHint,
  TuiHints
};
//# sourceMappingURL=chunk-MIENEZB7.js.map
