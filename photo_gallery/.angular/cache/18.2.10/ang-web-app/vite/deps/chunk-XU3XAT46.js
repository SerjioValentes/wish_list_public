import {
  BaseComponent
} from "./chunk-AHFUDMJ3.js";
import {
  BaseStyle,
  DomHandler,
  ObjectUtils,
  SharedModule,
  UniqueComponentId
} from "./chunk-74ZWUWHX.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle
} from "./chunk-KGDCZKEW.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-76OY5WKA.js";

// node_modules/primeng/fesm2022/primeng-badge.mjs
function Badge_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.styleClass);
    ɵɵproperty("ngClass", ctx_r0.containerClass())("ngStyle", ctx_r0.style);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.value);
  }
}
var theme = ({
  dt
}) => `
.p-badge {
    display: inline-flex;
    border-radius: ${dt("badge.border.radius")};
    justify-content: center;
    padding: ${dt("badge.padding")};
    background: ${dt("badge.primary.background")};
    color: ${dt("badge.primary.color")};
    font-size: ${dt("badge.font.size")};
    font-weight: ${dt("badge.font.weight")};
    min-width: ${dt("badge.min.width")};
    height: ${dt("badge.height")};
    line-height: ${dt("badge.height")};
}

.p-badge-dot {
    width: ${dt("badge.dot.size")};
    min-width: ${dt("badge.dot.size")};
    height: ${dt("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${dt("badge.secondary.background")};
    color: ${dt("badge.secondary.color")};
}

.p-badge-success {
    background: ${dt("badge.success.background")};
    color: ${dt("badge.success.color")};
}

.p-badge-info {
    background: ${dt("badge.info.background")};
    color: ${dt("badge.info.color")};
}

.p-badge-warn {
    background: ${dt("badge.warn.background")};
    color: ${dt("badge.warn.color")};
}

.p-badge-danger {
    background: ${dt("badge.danger.background")};
    color: ${dt("badge.danger.color")};
}

.p-badge-contrast {
    background: ${dt("badge.contrast.background")};
    color: ${dt("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${dt("badge.sm.font.size")};
    min-width: ${dt("badge.sm.min.width")};
    height: ${dt("badge.sm.height")};
    line-height: ${dt("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${dt("badge.lg.font.size")};
    min-width: ${dt("badge.lg.min.width")};
    height: ${dt("badge.lg.height")};
    line-height: ${dt("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${dt("badge.xl.font.size")};
    min-width: ${dt("badge.xl.min.width")};
    height: ${dt("badge.xl.height")};
    line-height: ${dt("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
   position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`;
var classes = {
  root: ({
    props,
    instance
  }) => ["p-badge p-component", {
    "p-badge-circle": ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
    "p-badge-dot": ObjectUtils.isEmpty(props.value) && !instance.$slots.default,
    "p-badge-sm": props.size === "small",
    "p-badge-lg": props.size === "large",
    "p-badge-xl": props.size === "xlarge",
    "p-badge-info": props.severity === "info",
    "p-badge-success": props.severity === "success",
    "p-badge-warn": props.severity === "warn",
    "p-badge-danger": props.severity === "danger",
    "p-badge-secondary": props.severity === "secondary",
    "p-badge-contrast": props.severity === "contrast"
  }]
};
var BadgeStyle = class _BadgeStyle extends BaseStyle {
  name = "badge";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵBadgeStyle_BaseFactory;
    return function BadgeStyle_Factory(__ngFactoryType__) {
      return (ɵBadgeStyle_BaseFactory || (ɵBadgeStyle_BaseFactory = ɵɵgetInheritedFactory(_BadgeStyle)))(__ngFactoryType__ || _BadgeStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _BadgeStyle,
    factory: _BadgeStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeStyle, [{
    type: Injectable
  }], null, null);
})();
var BadgeClasses;
(function(BadgeClasses2) {
  BadgeClasses2["root"] = "p-badge";
})(BadgeClasses || (BadgeClasses = {}));
var BadgeDirective = class _BadgeDirective extends BaseComponent {
  /**
   * When specified, disables the component.
   * @group Props
   */
  disabled;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   * @deprecated use badgeSize instead.
   */
  set size(value) {
    this._size = value;
    console.log("size property is deprecated and will removed in v18, use badgeSize instead.");
  }
  get size() {
    return this._size;
  }
  _size;
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value;
  id;
  _componentStyle = inject(BadgeStyle);
  get activeElement() {
    return this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
  }
  get canUpdateBadge() {
    return this.id && !this.disabled;
  }
  constructor() {
    super();
  }
  ngOnChanges({
    value,
    size,
    severity,
    disabled
  }) {
    super.ngOnChanges({
      value,
      size,
      severity,
      disabled
    });
    if (disabled) {
      this.toggleDisableState();
    }
    if (!this.canUpdateBadge) {
      return;
    }
    if (severity) {
      this.setSeverity(severity.previousValue);
    }
    if (size) {
      this.setSizeClasses();
    }
    if (value) {
      this.setValue();
    }
  }
  ngAfterViewInit() {
    this.id = UniqueComponentId() + "_badge";
    this.renderBadgeContent();
  }
  setValue(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.value != null) {
      if (DomHandler.hasClass(badge, "p-badge-dot")) {
        DomHandler.removeClass(badge, "p-badge-dot");
      }
      if (this.value && String(this.value).length === 1) {
        DomHandler.addClass(badge, "p-badge-circle");
      } else {
        DomHandler.removeClass(badge, "p-badge-circle");
      }
    } else {
      if (!DomHandler.hasClass(badge, "p-badge-dot")) {
        DomHandler.addClass(badge, "p-badge-dot");
      }
      DomHandler.removeClass(badge, "p-badge-circle");
    }
    badge.innerHTML = "";
    const badgeValue = this.value != null ? String(this.value) : "";
    this.renderer.appendChild(badge, this.document.createTextNode(badgeValue));
  }
  setSizeClasses(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.badgeSize) {
      if (this.badgeSize === "large") {
        DomHandler.addClass(badge, "p-badge-lg");
        DomHandler.removeClass(badge, "p-badge-xl");
      }
      if (this.badgeSize === "xlarge") {
        DomHandler.addClass(badge, "p-badge-xl");
        DomHandler.removeClass(badge, "p-badge-lg");
      }
    } else if (this.size && !this.badgeSize) {
      if (this.size === "large") {
        DomHandler.addClass(badge, "p-badge-lg");
        DomHandler.removeClass(badge, "p-badge-xl");
      }
      if (this.size === "xlarge") {
        DomHandler.addClass(badge, "p-badge-xl");
        DomHandler.removeClass(badge, "p-badge-lg");
      }
    } else {
      DomHandler.removeClass(badge, "p-badge-lg");
      DomHandler.removeClass(badge, "p-badge-xl");
    }
  }
  renderBadgeContent() {
    if (this.disabled) {
      return null;
    }
    const el = this.activeElement;
    const badge = this.document.createElement("span");
    badge.id = this.id;
    badge.className = "p-badge p-component";
    this.setSeverity(null, badge);
    this.setSizeClasses(badge);
    this.setValue(badge);
    DomHandler.addClass(el, "p-overlay-badge");
    this.renderer.appendChild(el, badge);
  }
  setSeverity(oldSeverity, element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.severity) {
      DomHandler.addClass(badge, `p-badge-${this.severity}`);
    }
    if (oldSeverity) {
      DomHandler.removeClass(badge, `p-badge-${oldSeverity}`);
    }
  }
  toggleDisableState() {
    if (!this.id) {
      return;
    }
    if (this.disabled) {
      const badge = this.activeElement?.querySelector(`#${this.id}`);
      if (badge) {
        this.renderer.removeChild(this.activeElement, badge);
      }
    } else {
      this.renderBadgeContent();
    }
  }
  static ɵfac = function BadgeDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _BadgeDirective,
    selectors: [["", "pBadge", ""]],
    inputs: {
      disabled: [0, "badgeDisabled", "disabled"],
      badgeSize: "badgeSize",
      size: "size",
      severity: "severity",
      value: "value"
    },
    features: [ɵɵProvidersFeature([BadgeStyle]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeDirective, [{
    type: Directive,
    args: [{
      selector: "[pBadge]",
      providers: [BadgeStyle]
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: ["badgeDisabled"]
    }],
    badgeSize: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var Badge = class _Badge extends BaseComponent {
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize;
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value;
  /**
   * When specified, disables the component.
   * @group Props
   */
  badgeDisabled = false;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   * @deprecated use badgeSize instead.
   */
  set size(value) {
    this._size = value;
    !this.badgeSize && this.size && console.log("size property is deprecated and will removed in v18, use badgeSize instead.");
  }
  get size() {
    return this._size;
  }
  _size;
  _componentStyle = inject(BadgeStyle);
  containerClass() {
    return {
      "p-badge p-component": true,
      "p-badge-circle": ObjectUtils.isNotEmpty(this.value) && String(this.value).length === 1,
      "p-badge-lg": this.badgeSize === "large" || this.size === "large",
      "p-badge-xl": this.badgeSize === "xlarge" || this.size === "xlarge",
      "p-badge-sm": this.badgeSize === "small" || this.size === "small",
      "p-badge-dot": ObjectUtils.isEmpty(this.value),
      [`p-badge-${this.severity}`]: this.severity
    };
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵBadge_BaseFactory;
    return function Badge_Factory(__ngFactoryType__) {
      return (ɵBadge_BaseFactory || (ɵBadge_BaseFactory = ɵɵgetInheritedFactory(_Badge)))(__ngFactoryType__ || _Badge);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Badge,
    selectors: [["p-badge"]],
    inputs: {
      styleClass: "styleClass",
      style: "style",
      badgeSize: "badgeSize",
      severity: "severity",
      value: "value",
      badgeDisabled: [2, "badgeDisabled", "badgeDisabled", booleanAttribute],
      size: "size"
    },
    features: [ɵɵProvidersFeature([BadgeStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"]],
    template: function Badge_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Badge_span_0_Template, 2, 5, "span", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.badgeDisabled);
      }
    },
    dependencies: [NgClass, NgIf, NgStyle],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Badge, [{
    type: Component,
    args: [{
      selector: "p-badge",
      template: ` <span *ngIf="!badgeDisabled" [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">{{ value }}</span> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [BadgeStyle]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    badgeSize: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    badgeDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }]
  });
})();
var BadgeModule = class _BadgeModule {
  static ɵfac = function BadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BadgeModule,
    declarations: [Badge, BadgeDirective],
    imports: [CommonModule],
    exports: [Badge, BadgeDirective, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Badge, BadgeDirective, SharedModule],
      declarations: [Badge, BadgeDirective]
    }]
  }], null, null);
})();

export {
  Badge,
  BadgeModule
};
//# sourceMappingURL=chunk-XU3XAT46.js.map
