import {
  TUI_HINT_OPTIONS,
  TuiHintDescribe,
  TuiHintDirective,
  TuiHintHover,
  TuiTextfieldComponent
} from "./chunk-MIENEZB7.js";
import {
  TUI_ICON_END,
  TUI_ICON_START,
  TUI_IS_MOBILE,
  TuiDropdownDirective,
  TuiWithAppearance,
  toSignal,
  tuiAppearanceOptionsProvider,
  tuiAppearanceState,
  tuiCreateOptions,
  tuiCreateToken,
  tuiInjectElement,
  tuiProvide,
  tuiWatch,
  tuiWithStyles
} from "./chunk-IQQZLQHI.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  ViewEncapsulation$1,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-FW6GFWFQ.js";
import {
  map
} from "./chunk-D5M5KKRG.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-chevron.mjs
var TUI_CHEVRON = tuiCreateToken("@tui.chevron-down");
var TuiChevronStyles = class _TuiChevronStyles {
  static {
    this.ɵfac = function TuiChevronStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChevronStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiChevronStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-chevron"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiChevronStyles_Template(rf, ctx) {
      },
      styles: ["[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:inline-block;cursor:pointer}[tuiChevron][tuiIcons]:after{block-size:1rem}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChevronStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-chevron"
      },
      styles: ["[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:inline-block;cursor:pointer}[tuiChevron][tuiIcons]:after{block-size:1rem}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}\n"]
    }]
  }], null, null);
})();
var TuiChevron = class _TuiChevron {
  constructor() {
    this.el = tuiInjectElement();
    this.dropdown = inject(TuiDropdownDirective, {
      optional: true
    });
    this.nothing = tuiWithStyles(TuiChevronStyles);
    this.toggle = effect(() => this.el.classList.toggle("_chevron-rotated", this.chevron() || this.chevron() === "" && !!this.dropdown?.ref()));
    this.chevron = signal("");
  }
  set tuiChevron(chevron) {
    this.chevron.set(chevron);
  }
  static {
    this.ɵfac = function TuiChevron_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChevron)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiChevron,
      selectors: [["", "tuiChevron", ""]],
      hostAttrs: ["tuiChevron", ""],
      inputs: {
        tuiChevron: "tuiChevron"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_ICON_END, TUI_CHEVRON)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChevron, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiChevron]",
      providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)],
      host: {
        tuiChevron: ""
      }
    }]
  }], null, {
    tuiChevron: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-tooltip.mjs
var [TUI_TOOLTIP_OPTIONS, tuiTooltipOptionsProvider] = tuiCreateOptions({
  icon: "",
  appearance: "icon"
});
var TuiTooltipStyles = class _TuiTooltipStyles {
  static {
    this.ɵfac = function TuiTooltipStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTooltipStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTooltipStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-tooltip"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiTooltipStyles_Template(rf, ctx) {
      },
      styles: ["[tuiTooltip]{border-width:.125rem;border-radius:100%;cursor:pointer;pointer-events:auto;background-clip:content-box!important}[tuiTooltip] [tuiBlock],[tuiTooltip] [tuiCell][data-size=s],[tuiLabel][data-orientation=horizontal] [tuiTooltip]{border-width:.25rem}[tuiTitle] [tuiTooltip]{font-size:1rem;border:none}[tuiTooltip]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:1rem;block-size:1rem}@media (hover: hover) and (pointer: fine){tui-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-textarea:hover [tuiTooltip][data-appearance=icon]:after,tui-primitive-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-input-tag:hover [tuiTooltip][data-appearance=icon]:after{color:var(--tui-text-secondary)}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTooltipStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-tooltip"
      },
      styles: ["[tuiTooltip]{border-width:.125rem;border-radius:100%;cursor:pointer;pointer-events:auto;background-clip:content-box!important}[tuiTooltip] [tuiBlock],[tuiTooltip] [tuiCell][data-size=s],[tuiLabel][data-orientation=horizontal] [tuiTooltip]{border-width:.25rem}[tuiTitle] [tuiTooltip]{font-size:1rem;border:none}[tuiTooltip]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:1rem;block-size:1rem}@media (hover: hover) and (pointer: fine){tui-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-textarea:hover [tuiTooltip][data-appearance=icon]:after,tui-primitive-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-input-tag:hover [tuiTooltip][data-appearance=icon]:after{color:var(--tui-text-secondary)}}\n"]
    }]
  }], null, null);
})();
var TuiTooltip = class _TuiTooltip {
  constructor() {
    this.textfield = inject(TuiTextfieldComponent, {
      optional: true
    });
    this.isMobile = inject(TUI_IS_MOBILE);
    this.describe = inject(TuiHintDescribe);
    this.driver = inject(TuiHintHover);
    this.nothing = tuiWithStyles(TuiTooltipStyles);
    this.state = tuiAppearanceState(toSignal(inject(TuiHintHover).pipe(map((hover) => hover ? "hover" : null), tuiWatch()), {
      initialValue: null
    }));
  }
  ngDoCheck() {
    if (this.textfield?.id) {
      this.describe.tuiHintDescribe = this.textfield.id;
    }
  }
  onClick(event) {
    if (this.isMobile) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.driver.toggle();
    }
  }
  static {
    this.ɵfac = function TuiTooltip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTooltip)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTooltip,
      selectors: [["tui-icon", "tuiTooltip", ""]],
      hostAttrs: ["tuiTooltip", ""],
      hostBindings: function TuiTooltip_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click.prevent", function TuiTooltip_click_prevent_HostBindingHandler() {
            return 0;
          })("mousedown", function TuiTooltip_mousedown_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_TOOLTIP_OPTIONS), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_TOOLTIP_OPTIONS).icon || inject(TUI_HINT_OPTIONS).icon
      }]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
        directive: TuiHintDescribe,
        inputs: ["tuiHintDescribe", "tuiTooltipDescribe"]
      }, {
        directive: TuiHintDirective,
        inputs: ["tuiHint", "tuiTooltip", "tuiHintAppearance", "tuiHintAppearance", "tuiHintContext", "tuiHintContext"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTooltip, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-icon[tuiTooltip]",
      providers: [tuiAppearanceOptionsProvider(TUI_TOOLTIP_OPTIONS), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_TOOLTIP_OPTIONS).icon || inject(TUI_HINT_OPTIONS).icon
      }],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiHintDescribe,
        inputs: ["tuiHintDescribe: tuiTooltipDescribe"]
      }, {
        directive: TuiHintDirective,
        inputs: ["tuiHint: tuiTooltip", "tuiHintAppearance", "tuiHintContext"]
      }],
      host: {
        tuiTooltip: "",
        "(click.prevent)": "0",
        "(mousedown)": "onClick($event)"
      }
    }]
  }], null, null);
})();

export {
  TUI_CHEVRON,
  TuiChevron,
  TUI_TOOLTIP_OPTIONS,
  tuiTooltipOptionsProvider,
  TuiTooltip
};
//# sourceMappingURL=chunk-3IUFGMYA.js.map
