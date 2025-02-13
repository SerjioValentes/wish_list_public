import {
  Tooltip,
  TooltipModule
} from "./chunk-GPKDLZQ6.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-THMBHM36.js";
import "./chunk-TN25JJIX.js";
import "./chunk-RVTDKNMX.js";
import {
  AutoFocus,
  AutoFocusModule,
  ButtonDirective,
  ButtonModule
} from "./chunk-J53G47ZT.js";
import "./chunk-XU3XAT46.js";
import {
  Ripple,
  RippleModule
} from "./chunk-FFQXQZRF.js";
import {
  BaseIcon
} from "./chunk-FI4RUM3N.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-DZ7TM7Y2.js";
import {
  BaseComponent
} from "./chunk-AHFUDMJ3.js";
import {
  BaseStyle,
  ConnectedOverlayScrollHandler,
  DomHandler,
  ObjectUtils,
  OverlayService,
  PrimeTemplate,
  SharedModule,
  UniqueComponentId,
  zindexutils
} from "./chunk-74ZWUWHX.js";
import "./chunk-FY443DCF.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-KGDCZKEW.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  effect,
  forwardRef,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-76OY5WKA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-icons-chevrondown.mjs
var ChevronDownIcon = class _ChevronDownIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵChevronDownIcon_BaseFactory;
    return function ChevronDownIcon_Factory(__ngFactoryType__) {
      return (ɵChevronDownIcon_BaseFactory || (ɵChevronDownIcon_BaseFactory = ɵɵgetInheritedFactory(_ChevronDownIcon)))(__ngFactoryType__ || _ChevronDownIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ChevronDownIcon,
    selectors: [["ChevronDownIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z", "fill", "currentColor"]],
    template: function ChevronDownIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronDownIcon, [{
    type: Component,
    args: [{
      selector: "ChevronDownIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            [attr.aria-label]="ariaLabel"
            [attr.aria-hidden]="ariaHidden"
            [attr.role]="role"
            [class]="getClassNames()"
        >
            <path
                d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-angleright.mjs
var AngleRightIcon = class _AngleRightIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAngleRightIcon_BaseFactory;
    return function AngleRightIcon_Factory(__ngFactoryType__) {
      return (ɵAngleRightIcon_BaseFactory || (ɵAngleRightIcon_BaseFactory = ɵɵgetInheritedFactory(_AngleRightIcon)))(__ngFactoryType__ || _AngleRightIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _AngleRightIcon,
    selectors: [["AngleRightIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z", "fill", "currentColor"]],
    template: function AngleRightIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleRightIcon, [{
    type: Component,
    args: [{
      selector: "AngleRightIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            [attr.aria-label]="ariaLabel"
            [attr.aria-hidden]="ariaHidden"
            [attr.role]="role"
            [class]="getClassNames()"
        >
            <path
                d="M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/@primeuix/utils/dom/index.mjs
function getViewport() {
  let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
  return {
    width: w,
    height: h
  };
}
function addStyle(element, style2) {
  if (element) {
    if (typeof style2 === "string") {
      element.style.cssText = style2;
    } else {
      Object.entries(style2 || {}).forEach(([key, value]) => element.style[key] = value);
    }
  }
}
function getOuterWidth(element, margin) {
  if (element instanceof HTMLElement) {
    let width = element.offsetWidth;
    if (margin) {
      let style2 = getComputedStyle(element);
      width += parseFloat(style2.marginLeft) + parseFloat(style2.marginRight);
    }
    return width;
  }
  return 0;
}
var calculatedScrollbarWidth = void 0;
function calculateScrollbarWidth(element) {
  if (element) {
    let style2 = getComputedStyle(element);
    return element.offsetWidth - element.clientWidth - parseFloat(style2.borderLeftWidth) - parseFloat(style2.borderRightWidth);
  } else {
    if (calculatedScrollbarWidth != null) return calculatedScrollbarWidth;
    let scrollDiv = document.createElement("div");
    addStyle(scrollDiv, {
      width: "100px",
      height: "100px",
      overflow: "scroll",
      position: "absolute",
      top: "-9999px"
    });
    document.body.appendChild(scrollDiv);
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    calculatedScrollbarWidth = scrollbarWidth;
    return scrollbarWidth;
  }
}
function getHiddenElementOuterWidth(element) {
  if (element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementWidth = element.offsetWidth;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementWidth;
  }
  return 0;
}
function getOffset(element) {
  if (element) {
    let rect = element.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function nestedPosition(element, level) {
  var _a;
  if (element) {
    const parentItem = element.parentElement;
    const elementOffset = getOffset(parentItem);
    const viewport = getViewport();
    const sublistWidth = element.offsetParent ? element.offsetWidth : getHiddenElementOuterWidth(element);
    const itemOuterWidth = getOuterWidth((_a = parentItem == null ? void 0 : parentItem.children) == null ? void 0 : _a[0]);
    let left = "";
    if (elementOffset.left + itemOuterWidth + sublistWidth > viewport.width - calculateScrollbarWidth()) {
      if (elementOffset.left < sublistWidth) {
        if (level % 2 === 1) {
          left = elementOffset.left ? "-" + elementOffset.left + "px" : "100%";
        } else if (level % 2 === 0) {
          left = viewport.width - sublistWidth - calculateScrollbarWidth() + "px";
        }
      } else {
        left = "-100%";
      }
    } else {
      left = "100%";
    }
    element.style.top = "0px";
    element.style.left = left;
  }
}

// node_modules/primeng/fesm2022/primeng-tieredmenu.mjs
var _c0 = ["sublist"];
var _c1 = (a0, a1) => ({
  "p-tieredmenu-submenu": a0,
  "p-tieredmenu-root-list": a1
});
var _c2 = (a0) => ({
  "p-tieredmenu-item-link": true,
  "p-disabled": a0
});
var _c3 = () => ({
  exact: false
});
var _c4 = (a0, a1) => ({
  $implicit: a0,
  hasSubmenu: a1
});
var _c5 = (a0) => ({
  display: a0
});
function TieredMenuSub_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 7);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r2.getItemProp(processedItem_r2, "style"));
    ɵɵproperty("ngClass", ctx_r2.getSeparatorItemClass(processedItem_r2));
    ɵɵattribute("id", ctx_r2.getItemId(processedItem_r2))("data-pc-section", "separator");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r2, "icon"))("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("tabindex", -1);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getItemLabel(processedItem_r2), " ");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r2.getItemLabel(processedItem_r2), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r2, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(processedItem_r2, "badge"));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 24);
  }
  if (rf & 2) {
    ɵɵproperty("ngClass", "p-tieredmenu-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 25);
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_AngleRightIcon_1_Template, 1, 3, "AngleRightIcon", 22)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 2, null, 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.tieredMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.tieredMenu.submenuIconTemplate);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 14);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_1_Template, 1, 4, "span", 15)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_2_Template, 2, 2, "span", 16)(3, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_span_5_Template, 2, 2, "span", 17)(6, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r5 = ɵɵreference(4);
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("target", ctx_r2.getItemProp(processedItem_r2, "target"))("ngClass", ɵɵpureFunction1(11, _c2, ctx_r2.getItemProp(processedItem_r2, "disabled")));
    ɵɵattribute("href", ctx_r2.getItemProp(processedItem_r2, "url"), ɵɵsanitizeUrl)("data-automationid", ctx_r2.getItemProp(processedItem_r2, "automationId"))("data-pc-section", "action")("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "escape"))("ngIfElse", htmlLabel_r5);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemGroup(processedItem_r2));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r2, "icon"))("ngStyle", ctx_r2.getItemProp(processedItem_r2, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("aria-hidden", true)("tabindex", -1);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getItemLabel(processedItem_r2), " ");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r2.getItemLabel(processedItem_r2), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.getItemProp(processedItem_r2, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(processedItem_r2, "badge"));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 24);
  }
  if (rf & 2) {
    ɵɵproperty("ngClass", "p-tieredmenu-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 25);
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_AngleRightIcon_1_Template, 1, 3, "AngleRightIcon", 22)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 2, null, 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.tieredMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.tieredMenu.submenuIconTemplate);
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 26);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_1_Template, 1, 5, "span", 15)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_2_Template, 2, 2, "span", 16)(3, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_span_5_Template, 2, 2, "span", 17)(6, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = ɵɵreference(4);
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("routerLink", ctx_r2.getItemProp(processedItem_r2, "routerLink"))("queryParams", ctx_r2.getItemProp(processedItem_r2, "queryParams"))("routerLinkActive", "p-tieredmenu-item-link-active")("routerLinkActiveOptions", ctx_r2.getItemProp(processedItem_r2, "routerLinkActiveOptions") || ɵɵpureFunction0(20, _c3))("target", ctx_r2.getItemProp(processedItem_r2, "target"))("ngClass", ɵɵpureFunction1(21, _c2, ctx_r2.getItemProp(processedItem_r2, "disabled")))("fragment", ctx_r2.getItemProp(processedItem_r2, "fragment"))("queryParamsHandling", ctx_r2.getItemProp(processedItem_r2, "queryParamsHandling"))("preserveFragment", ctx_r2.getItemProp(processedItem_r2, "preserveFragment"))("skipLocationChange", ctx_r2.getItemProp(processedItem_r2, "skipLocationChange"))("replaceUrl", ctx_r2.getItemProp(processedItem_r2, "replaceUrl"))("state", ctx_r2.getItemProp(processedItem_r2, "state"));
    ɵɵattribute("data-automationid", ctx_r2.getItemProp(processedItem_r2, "automationId"))("tabindex", -1)("data-pc-section", "action");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "escape"))("ngIfElse", htmlLabel_r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemGroup(processedItem_r2));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_1_Template, 7, 13, "a", 12)(2, TieredMenuSub_ng_template_2_li_1_ng_container_3_a_2_Template, 7, 23, "a", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.getItemProp(processedItem_r2, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getItemProp(processedItem_r2, "routerLink"));
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function TieredMenuSub_ng_template_2_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TieredMenuSub_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TieredMenuSub_ng_template_2_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TieredMenuSub_ng_template_2_li_1_ng_container_4_1_Template, 1, 0, null, 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c4, processedItem_r2.item, ctx_r2.getItemProp(processedItem_r2, "items")));
  }
}
function TieredMenuSub_ng_template_2_li_1_p_tieredmenu_sub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-tieredmenu-sub", 28);
    ɵɵlistener("itemClick", function TieredMenuSub_ng_template_2_li_1_p_tieredmenu_sub_5_Template_p_tieredmenu_sub_itemClick_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.itemClick.emit($event));
    })("itemMouseEnter", function TieredMenuSub_ng_template_2_li_1_p_tieredmenu_sub_5_Template_p_tieredmenu_sub_itemMouseEnter_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onItemMouseEnter($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("items", processedItem_r2.items)("itemTemplate", ctx_r2.itemTemplate)("autoDisplay", ctx_r2.autoDisplay)("menuId", ctx_r2.menuId)("activeItemPath", ctx_r2.activeItemPath())("focusedItemId", ctx_r2.focusedItemId)("ariaLabelledBy", ctx_r2.getItemId(processedItem_r2))("level", ctx_r2.level + 1)("inlineStyles", ɵɵpureFunction1(9, _c5, ctx_r2.isItemActive(processedItem_r2) ? "flex" : "none"));
  }
}
function TieredMenuSub_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8, 1)(2, "div", 9);
    ɵɵlistener("click", function TieredMenuSub_ng_template_2_li_1_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick($event, processedItem_r2));
    })("mouseenter", function TieredMenuSub_ng_template_2_li_1_Template_div_mouseenter_2_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemMouseEnter({
        $event,
        processedItem: processedItem_r2
      }));
    });
    ɵɵtemplate(3, TieredMenuSub_ng_template_2_li_1_ng_container_3_Template, 3, 2, "ng-container", 10)(4, TieredMenuSub_ng_template_2_li_1_ng_container_4_Template, 2, 5, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵtemplate(5, TieredMenuSub_ng_template_2_li_1_p_tieredmenu_sub_5_Template, 1, 11, "p-tieredmenu-sub", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const processedItem_r2 = ctx_r7.$implicit;
    const index_r9 = ctx_r7.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.getItemProp(processedItem_r2, "styleClass"));
    ɵɵproperty("ngStyle", ctx_r2.getItemProp(processedItem_r2, "style"))("ngClass", ctx_r2.getItemClass(processedItem_r2))("tooltipOptions", ctx_r2.getItemProp(processedItem_r2, "tooltipOptions"));
    ɵɵattribute("id", ctx_r2.getItemId(processedItem_r2))("data-pc-section", "menuitem")("data-p-highlight", ctx_r2.isItemActive(processedItem_r2))("data-p-focused", ctx_r2.isItemFocused(processedItem_r2))("data-p-disabled", ctx_r2.isItemDisabled(processedItem_r2))("aria-label", ctx_r2.getItemLabel(processedItem_r2))("aria-disabled", ctx_r2.isItemDisabled(processedItem_r2) || void 0)("aria-haspopup", ctx_r2.isItemGroup(processedItem_r2) && !ctx_r2.getItemProp(processedItem_r2, "to") ? "menu" : void 0)("aria-expanded", ctx_r2.isItemGroup(processedItem_r2) ? ctx_r2.isItemActive(processedItem_r2) : void 0)("aria-setsize", ctx_r2.getAriaSetSize())("aria-posinset", ctx_r2.getAriaPosInset(index_r9));
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && ctx_r2.isItemGroup(processedItem_r2));
  }
}
function TieredMenuSub_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TieredMenuSub_ng_template_2_li_0_Template, 1, 5, "li", 5)(1, TieredMenuSub_ng_template_2_li_1_Template, 6, 20, "li", 6);
  }
  if (rf & 2) {
    const processedItem_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && ctx_r2.getItemProp(processedItem_r2, "separator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r2) && !ctx_r2.getItemProp(processedItem_r2, "separator"));
  }
}
var _c6 = ["rootmenu"];
var _c7 = ["container"];
var _c8 = (a0) => ({
  "p-tieredmenu p-component": true,
  "p-tieredmenu-overlay": a0
});
var _c9 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c10 = (a0) => ({
  value: "visible",
  params: a0
});
function TieredMenu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3, 0);
    ɵɵlistener("click", function TieredMenu_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function TieredMenu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function TieredMenu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    ɵɵelementStart(2, "p-tieredmenu-sub", 4, 1);
    ɵɵlistener("itemClick", function TieredMenu_div_0_Template_p_tieredmenu_sub_itemClick_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event));
    })("menuFocus", function TieredMenu_div_0_Template_p_tieredmenu_sub_menuFocus_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMenuFocus($event));
    })("menuBlur", function TieredMenu_div_0_Template_p_tieredmenu_sub_menuBlur_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMenuBlur($event));
    })("menuKeydown", function TieredMenu_div_0_Template_p_tieredmenu_sub_menuKeydown_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeyDown($event));
    })("itemMouseEnter", function TieredMenu_div_0_Template_p_tieredmenu_sub_itemMouseEnter_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemMouseEnter($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("id", ctx_r1.id)("ngClass", ɵɵpureFunction1(22, _c8, ctx_r1.popup))("ngStyle", ctx_r1.style)("@overlayAnimation", ɵɵpureFunction1(27, _c10, ɵɵpureFunction2(24, _c9, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.popup !== true);
    ɵɵattribute("data-pc-section", "root")("data-pc-name", "tieredmenu");
    ɵɵadvance(2);
    ɵɵproperty("root", true)("items", ctx_r1.processedItems)("itemTemplate", ctx_r1.itemTemplate)("menuId", ctx_r1.id)("tabindex", !ctx_r1.disabled ? ctx_r1.tabindex : -1)("ariaLabel", ctx_r1.ariaLabel)("ariaLabelledBy", ctx_r1.ariaLabelledBy)("baseZIndex", ctx_r1.baseZIndex)("autoZIndex", ctx_r1.autoZIndex)("autoDisplay", ctx_r1.autoDisplay)("popup", ctx_r1.popup)("focusedItemId", ctx_r1.focused ? ctx_r1.focusedItemId : void 0)("activeItemPath", ctx_r1.activeItemPath());
  }
}
var theme = ({
  dt
}) => `
.p-tieredmenu {
    background: ${dt("tieredmenu.background")};
    color: ${dt("tieredmenu.color")};
    border: 1px solid ${dt("tieredmenu.border.color")};
    border-radius: ${dt("tieredmenu.border.radius")};
    min-width: 12.5rem;
}

.p-tieredmenu-root-list,
.p-tieredmenu-submenu {
    margin: 0;
    padding: ${dt("tieredmenu.list.padding")};
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: ${dt("tieredmenu.list.gap")};
}

.p-tieredmenu-submenu {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    background: ${dt("tieredmenu.background")};
    color: ${dt("tieredmenu.color")};
    border: 1px solid ${dt("tieredmenu.border.color")};
    border-radius: ${dt("tieredmenu.border.radius")};
    box-shadow: ${dt("tieredmenu.shadow")};
}

.p-tieredmenu-item {
    position: relative;
}

.p-tieredmenu-item-content {
    transition: background ${dt("tieredmenu.transition.duration")}, color ${dt("tieredmenu.transition.duration")};
    border-radius: ${dt("tieredmenu.item.border.radius")};
    color: ${dt("tieredmenu.item.color")};
}

.p-tieredmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${dt("tieredmenu.item.padding")};
    gap: ${dt("tieredmenu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-tieredmenu-item-label {
    line-height: 1;
}

.p-tieredmenu-item-icon {
    color: ${dt("tieredmenu.item.icon.color")};
}

.p-tieredmenu-submenu-icon {
    color: ${dt("tieredmenu.submenu.icon.color")};
    margin-left: auto;
    font-size: ${dt("tieredmenu.submenu.icon.size")};
    width: ${dt("tieredmenu.submenu.icon.size")};
    height: ${dt("tieredmenu.submenu.icon.size")};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
    color: ${dt("tieredmenu.item.focus.color")};
    background: ${dt("tieredmenu.item.focus.background")};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: ${dt("tieredmenu.item.icon.focus.color")};
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: ${dt("tieredmenu.submenu.icon.focus.color")};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
    color: ${dt("tieredmenu.item.focus.color")};
    background: ${dt("tieredmenu.item.focus.background")};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
    color: ${dt("tieredmenu.item.icon.focus.color")};
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
    color: ${dt("tieredmenu.submenu.icon.focus.color")};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content {
    color: ${dt("tieredmenu.item.active.color")};
    background: ${dt("tieredmenu.item.active.background")};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: ${dt("tieredmenu.item.icon.active.color")};
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: ${dt("tieredmenu.submenu.icon.active.color")};
}

.p-tieredmenu-separator {
    border-top: 1px solid ${dt("tieredmenu.separator.border.color")};
}

.p-tieredmenu-overlay {
    position: absolute;
    box-shadow: ${dt("tieredmenu.shadow")};
}

.p-tieredmenu-enter-from,
.p-tieredmenu-leave-active {
    opacity: 0;
}

.p-tieredmenu-enter-active {
    transition: opacity 250ms;
}
`;
var classes = {
  root: ({
    instance,
    props
  }) => ["p-tieredmenu p-component", {
    "p-tieredmenu-overlay": props.popup
  }],
  start: "p-tieredmenu-start",
  rootList: "p-tieredmenu-root-list",
  item: ({
    instance,
    processedItem
  }) => ["p-tieredmenu-item", {
    "p-tieredmenu-item-active": instance.isItemActive(processedItem),
    "p-focus": instance.isItemFocused(processedItem),
    "p-disabled": instance.isItemDisabled(processedItem)
  }],
  itemContent: "p-tieredmenu-item-content",
  itemLink: "p-tieredmenu-item-link",
  itemIcon: "p-tieredmenu-item-icon",
  itemLabel: "p-tieredmenu-item-label",
  submenuIcon: "p-tieredmenu-submenu-icon",
  submenu: "p-tieredmenu-submenu",
  separator: "p-tieredmenu-separator",
  end: "p-tieredmenu-end"
};
var TieredMenuStyle = class _TieredMenuStyle extends BaseStyle {
  name = "tieredmenu";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTieredMenuStyle_BaseFactory;
    return function TieredMenuStyle_Factory(__ngFactoryType__) {
      return (ɵTieredMenuStyle_BaseFactory || (ɵTieredMenuStyle_BaseFactory = ɵɵgetInheritedFactory(_TieredMenuStyle)))(__ngFactoryType__ || _TieredMenuStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _TieredMenuStyle,
    factory: _TieredMenuStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenuStyle, [{
    type: Injectable
  }], null, null);
})();
var TieredMenuClasses;
(function(TieredMenuClasses2) {
  TieredMenuClasses2["root"] = "p-tieredmenu";
  TieredMenuClasses2["start"] = "p-tieredmenu-start";
  TieredMenuClasses2["rootList"] = "p-tieredmenu-root-list";
  TieredMenuClasses2["item"] = "p-tieredmenu-item";
  TieredMenuClasses2["itemContent"] = "p-tieredmenu-item-content";
  TieredMenuClasses2["itemLink"] = "p-tieredmenu-item-link";
  TieredMenuClasses2["itemIcon"] = "p-tieredmenu-item-icon";
  TieredMenuClasses2["itemLabel"] = "p-tieredmenu-item-label";
  TieredMenuClasses2["submenuIcon"] = "p-tieredmenu-submenu-icon";
  TieredMenuClasses2["submenu"] = "p-tieredmenu-submenu";
  TieredMenuClasses2["separator"] = "p-tieredmenu-separator";
  TieredMenuClasses2["end"] = "p-tieredmenu-end";
})(TieredMenuClasses || (TieredMenuClasses = {}));
var TieredMenuSub = class _TieredMenuSub {
  el;
  renderer;
  tieredMenu;
  items;
  itemTemplate;
  root = false;
  autoDisplay;
  autoZIndex = true;
  baseZIndex = 0;
  popup;
  menuId;
  ariaLabel;
  ariaLabelledBy;
  level = 0;
  focusedItemId;
  activeItemPath = input([]);
  tabindex = 0;
  inlineStyles;
  itemClick = new EventEmitter();
  itemMouseEnter = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeydown = new EventEmitter();
  sublistViewChild;
  constructor(el, renderer, tieredMenu) {
    this.el = el;
    this.renderer = renderer;
    this.tieredMenu = tieredMenu;
    effect(() => {
      const path = this.activeItemPath();
      if (ObjectUtils.isNotEmpty(path)) {
        this.positionSubmenu();
      }
    });
  }
  positionSubmenu() {
    if (isPlatformBrowser(this.tieredMenu.platformId)) {
      const sublist = this.sublistViewChild && this.sublistViewChild.nativeElement;
      if (sublist) {
        nestedPosition(sublist, this.level);
      }
    }
  }
  getItemProp(processedItem, name, params = null) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : void 0;
  }
  getItemId(processedItem) {
    return processedItem.item?.id ?? `${this.menuId}_${processedItem.key}`;
  }
  getItemKey(processedItem) {
    return this.getItemId(processedItem);
  }
  getItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-tieredmenu-item": true,
      "p-tieredmenu-item-active": this.isItemActive(processedItem),
      "p-focus": this.isItemFocused(processedItem),
      "p-disabled": this.isItemDisabled(processedItem)
    });
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  getSeparatorItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-tieredmenu-separator": true
    });
  }
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => {
      const isItemVisible = this.isItemVisible(processedItem);
      const isVisibleSeparator = isItemVisible && this.getItemProp(processedItem, "separator");
      return !isItemVisible || isVisibleSeparator;
    }).length + 1;
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    if (this.activeItemPath()) {
      return this.activeItemPath().some((path) => path.key === processedItem.key);
    }
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemFocused(processedItem) {
    return this.focusedItemId === this.getItemId(processedItem);
  }
  isItemGroup(processedItem) {
    return ObjectUtils.isNotEmpty(processedItem.items);
  }
  onItemMouseEnter(param) {
    if (this.autoDisplay) {
      const {
        event,
        processedItem
      } = param;
      this.itemMouseEnter.emit({
        originalEvent: event,
        processedItem
      });
    }
  }
  onItemClick(event, processedItem) {
    this.getItemProp(processedItem, "command", {
      originalEvent: event,
      item: processedItem.item
    });
    this.itemClick.emit({
      originalEvent: event,
      processedItem,
      isFocus: true
    });
  }
  static ɵfac = function TieredMenuSub_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TieredMenuSub)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(forwardRef(() => TieredMenu)));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TieredMenuSub,
    selectors: [["p-tieredMenuSub"], ["p-tieredmenu-sub"]],
    viewQuery: function TieredMenuSub_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sublistViewChild = _t.first);
      }
    },
    inputs: {
      items: "items",
      itemTemplate: "itemTemplate",
      root: [2, "root", "root", booleanAttribute],
      autoDisplay: [2, "autoDisplay", "autoDisplay", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      popup: [2, "popup", "popup", booleanAttribute],
      menuId: "menuId",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      level: [2, "level", "level", numberAttribute],
      focusedItemId: "focusedItemId",
      activeItemPath: [1, "activeItemPath"],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inlineStyles: "inlineStyles"
    },
    outputs: {
      itemClick: "itemClick",
      itemMouseEnter: "itemMouseEnter",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeydown: "menuKeydown"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 3,
    vars: 13,
    consts: [["sublist", ""], ["listItem", ""], ["htmlLabel", ""], ["role", "menu", 3, "keydown", "focus", "blur", "ngClass", "id", "tabindex", "ngStyle"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "style", "ngClass", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "class", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "ngClass"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], [1, "p-tieredmenu-item-content", 3, "click", "mouseenter"], [4, "ngIf"], [3, "items", "itemTemplate", "autoDisplay", "menuId", "activeItemPath", "focusedItemId", "ariaLabelledBy", "level", "inlineStyles", "itemClick", "itemMouseEnter", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass"], ["class", "p-tieredmenu-item-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-tieredmenu-item-label", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-tieredmenu-item-icon", 3, "ngClass", "ngStyle"], [1, "p-tieredmenu-item-label"], [1, "p-tieredmenu-item-label", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "ngClass"], [3, "data-pc-section", "aria-hidden"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "itemClick", "itemMouseEnter", "items", "itemTemplate", "autoDisplay", "menuId", "activeItemPath", "focusedItemId", "ariaLabelledBy", "level", "inlineStyles"]],
    template: function TieredMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "ul", 3, 0);
        ɵɵlistener("keydown", function TieredMenuSub_Template_ul_keydown_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuKeydown.emit($event));
        })("focus", function TieredMenuSub_Template_ul_focus_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuFocus.emit($event));
        })("blur", function TieredMenuSub_Template_ul_blur_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.menuBlur.emit($event));
        });
        ɵɵtemplate(2, TieredMenuSub_ng_template_2_Template, 2, 2, "ng-template", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction2(10, _c1, !ctx.root, ctx.root))("id", ctx.menuId + "_list")("tabindex", ctx.tabindex)("ngStyle", ctx.inlineStyles);
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("aria-activedescendant", ctx.focusedItemId)("aria-orientation", "vertical")("data-pc-section", "menu");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.items);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Ripple, Tooltip, AngleRightIcon, _TieredMenuSub],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenuSub, [{
    type: Component,
    args: [{
      selector: "p-tieredMenuSub, p-tieredmenu-sub",
      template: `
        <ul
            #sublist
            role="menu"
            [ngClass]="{ 'p-tieredmenu-submenu': !root, 'p-tieredmenu-root-list': root }"
            [id]="menuId + '_list'"
            [tabindex]="tabindex"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledBy]="ariaLabelledBy"
            [attr.aria-activedescendant]="focusedItemId"
            [attr.aria-orientation]="'vertical'"
            [attr.data-pc-section]="'menu'"
            (keydown)="menuKeydown.emit($event)"
            (focus)="menuFocus.emit($event)"
            (blur)="menuBlur.emit($event)"
            [ngStyle]="inlineStyles"
        >
            <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">
                <li
                    *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                    [attr.id]="getItemId(processedItem)"
                    [style]="getItemProp(processedItem, 'style')"
                    [ngClass]="getSeparatorItemClass(processedItem)"
                    role="separator"
                    [attr.data-pc-section]="'separator'"
                ></li>
                <li
                    #listItem
                    *ngIf="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                    role="menuitem"
                    [attr.id]="getItemId(processedItem)"
                    [attr.data-pc-section]="'menuitem'"
                    [attr.data-p-highlight]="isItemActive(processedItem)"
                    [attr.data-p-focused]="isItemFocused(processedItem)"
                    [attr.data-p-disabled]="isItemDisabled(processedItem)"
                    [attr.aria-label]="getItemLabel(processedItem)"
                    [attr.aria-disabled]="isItemDisabled(processedItem) || undefined"
                    [attr.aria-haspopup]="isItemGroup(processedItem) && !getItemProp(processedItem, 'to') ? 'menu' : undefined"
                    [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                    [attr.aria-setsize]="getAriaSetSize()"
                    [attr.aria-posinset]="getAriaPosInset(index)"
                    [ngStyle]="getItemProp(processedItem, 'style')"
                    [ngClass]="getItemClass(processedItem)"
                    [class]="getItemProp(processedItem, 'styleClass')"
                    pTooltip
                    [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
                >
                    <div
                        [attr.data-pc-section]="'content'"
                        class="p-tieredmenu-item-content"
                        (click)="onItemClick($event, processedItem)"
                        (mouseenter)="onItemMouseEnter({ $event, processedItem })"
                    >
                        <ng-container *ngIf="!itemTemplate">
                            <a
                                *ngIf="!getItemProp(processedItem, 'routerLink')"
                                [attr.href]="getItemProp(processedItem, 'url')"
                                [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                [attr.data-pc-section]="'action'"
                                [target]="getItemProp(processedItem, 'target')"
                                [ngClass]="{ 'p-tieredmenu-item-link': true, 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [attr.tabindex]="-1"
                                pRipple
                            >
                                <span
                                    *ngIf="getItemProp(processedItem, 'icon')"
                                    class="p-tieredmenu-item-icon"
                                    [ngClass]="getItemProp(processedItem, 'icon')"
                                    [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                    [attr.data-pc-section]="'icon'"
                                    [attr.tabindex]="-1"
                                >
                                </span>
                                <span
                                    *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel"
                                    class="p-tieredmenu-item-label"
                                    [attr.data-pc-section]="'label'"
                                >
                                    {{ getItemLabel(processedItem) }}
                                </span>
                                <ng-template #htmlLabel>
                                    <span
                                        class="p-tieredmenu-item-label"
                                        [innerHTML]="getItemLabel(processedItem)"
                                        [attr.data-pc-section]="'label'"
                                    ></span>
                                </ng-template>
                                <span
                                    class="p-menuitem-badge"
                                    *ngIf="getItemProp(processedItem, 'badge')"
                                    [ngClass]="getItemProp(processedItem, 'badgeStyleClass')"
                                    >{{ getItemProp(processedItem, 'badge') }}</span
                                >

                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <AngleRightIcon
                                        *ngIf="!tieredMenu.submenuIconTemplate"
                                        [ngClass]="'p-tieredmenu-submenu-icon'"
                                        [attr.data-pc-section]="'submenuicon'"
                                        [attr.aria-hidden]="true"
                                    />
                                    <ng-template
                                        *ngTemplateOutlet="tieredMenu.submenuIconTemplate"
                                        [attr.data-pc-section]="'submenuicon'"
                                        [attr.aria-hidden]="true"
                                    ></ng-template>
                                </ng-container>
                            </a>
                            <a
                                *ngIf="getItemProp(processedItem, 'routerLink')"
                                [routerLink]="getItemProp(processedItem, 'routerLink')"
                                [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                [attr.tabindex]="-1"
                                [attr.data-pc-section]="'action'"
                                [queryParams]="getItemProp(processedItem, 'queryParams')"
                                [routerLinkActive]="'p-tieredmenu-item-link-active'"
                                [routerLinkActiveOptions]="getItemProp(processedItem, 'routerLinkActiveOptions') || { exact: false }"
                                [target]="getItemProp(processedItem, 'target')"
                                [ngClass]="{ 'p-tieredmenu-item-link': true, 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [fragment]="getItemProp(processedItem, 'fragment')"
                                [queryParamsHandling]="getItemProp(processedItem, 'queryParamsHandling')"
                                [preserveFragment]="getItemProp(processedItem, 'preserveFragment')"
                                [skipLocationChange]="getItemProp(processedItem, 'skipLocationChange')"
                                [replaceUrl]="getItemProp(processedItem, 'replaceUrl')"
                                [state]="getItemProp(processedItem, 'state')"
                                pRipple
                            >
                                <span
                                    *ngIf="getItemProp(processedItem, 'icon')"
                                    class="p-tieredmenu-item-icon"
                                    [ngClass]="getItemProp(processedItem, 'icon')"
                                    [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                    [attr.data-pc-section]="'icon'"
                                    [attr.aria-hidden]="true"
                                    [attr.tabindex]="-1"
                                >
                                </span>
                                <span
                                    *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel"
                                    class="p-tieredmenu-item-label"
                                    [attr.data-pc-section]="'label'"
                                >
                                    {{ getItemLabel(processedItem) }}
                                </span>
                                <ng-template #htmlLabel>
                                    <span
                                        class="p-tieredmenu-item-label"
                                        [innerHTML]="getItemLabel(processedItem)"
                                        [attr.data-pc-section]="'label'"
                                    ></span>
                                </ng-template>
                                <span
                                    class="p-menuitem-badge"
                                    *ngIf="getItemProp(processedItem, 'badge')"
                                    [ngClass]="getItemProp(processedItem, 'badgeStyleClass')"
                                    >{{ getItemProp(processedItem, 'badge') }}</span
                                >

                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <AngleRightIcon
                                        *ngIf="!tieredMenu.submenuIconTemplate"
                                        [ngClass]="'p-tieredmenu-submenu-icon'"
                                        [attr.data-pc-section]="'submenuicon'"
                                        [attr.aria-hidden]="true"
                                    />
                                    <ng-template
                                        *ngTemplateOutlet="tieredMenu.submenuIconTemplate"
                                        [attr.data-pc-section]="'submenuicon'"
                                        [attr.aria-hidden]="true"
                                    ></ng-template>
                                </ng-container>
                            </a>
                        </ng-container>
                        <ng-container *ngIf="itemTemplate">
                            <ng-template
                                *ngTemplateOutlet="
                                    itemTemplate;
                                    context: { $implicit: processedItem.item, hasSubmenu: getItemProp(processedItem, 'items') }
                                "
                            ></ng-template>
                        </ng-container>
                    </div>

                    <p-tieredmenu-sub
                        *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)"
                        [items]="processedItem.items"
                        [itemTemplate]="itemTemplate"
                        [autoDisplay]="autoDisplay"
                        [menuId]="menuId"
                        [activeItemPath]="activeItemPath()"
                        [focusedItemId]="focusedItemId"
                        [ariaLabelledBy]="getItemId(processedItem)"
                        [level]="level + 1"
                        (itemClick)="itemClick.emit($event)"
                        (itemMouseEnter)="onItemMouseEnter($event)"
                        [inlineStyles]="{ display: isItemActive(processedItem) ? 'flex' : 'none' }"
                    ></p-tieredmenu-sub>
                </li>
            </ng-template>
        </ul>
    `,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: TieredMenu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => TieredMenu)]
    }]
  }], {
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoDisplay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    menuId: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusedItemId: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inlineStyles: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemMouseEnter: [{
      type: Output
    }],
    menuFocus: [{
      type: Output
    }],
    menuBlur: [{
      type: Output
    }],
    menuKeydown: [{
      type: Output
    }],
    sublistViewChild: [{
      type: ViewChild,
      args: ["sublist", {
        static: true
      }]
    }]
  });
})();
var TieredMenu = class _TieredMenu extends BaseComponent {
  overlayService;
  /**
   * An array of menuitems.
   * @group Props
   */
  set model(value) {
    this._model = value;
    this._processedItems = this.createProcessedItems(this._model || []);
  }
  get model() {
    return this._model;
  }
  /**
   * Defines if menu would displayed as a popup.
   * @group Props
   */
  popup;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element.
   * @group Props
   */
  appendTo;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Whether to show a root submenu on mouse over.
   * @defaultValue true
   * @group Props
   */
  autoDisplay = true;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  templates;
  rootmenu;
  containerViewChild;
  submenuIconTemplate;
  itemTemplate;
  container;
  outsideClickListener;
  resizeListener;
  scrollHandler;
  target;
  relatedTarget;
  visible;
  relativeAlign;
  dirty = false;
  focused = false;
  activeItemPath = signal([]);
  number = signal(0);
  focusedItemInfo = signal({
    index: -1,
    level: 0,
    parentKey: "",
    item: null
  });
  searchValue = "";
  searchTimeout;
  _processedItems;
  _model;
  _componentStyle = inject(TieredMenuStyle);
  get visibleItems() {
    const processedItem = this.activeItemPath().find((p) => p.key === this.focusedItemInfo().parentKey);
    return processedItem ? processedItem.items : this.processedItems;
  }
  get processedItems() {
    if (!this._processedItems || !this._processedItems.length) {
      this._processedItems = this.createProcessedItems(this.model || []);
    }
    return this._processedItems;
  }
  get focusedItemId() {
    const focusedItemInfo = this.focusedItemInfo();
    return focusedItemInfo.item?.id ? focusedItemInfo.item.id : focusedItemInfo.index !== -1 ? `${this.id}${ObjectUtils.isNotEmpty(focusedItemInfo.parentKey) ? "_" + focusedItemInfo.parentKey : ""}_${focusedItemInfo.index}` : null;
  }
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
    effect(() => {
      const path = this.activeItemPath();
      if (ObjectUtils.isNotEmpty(path)) {
        this.bindOutsideClickListener();
        this.bindResizeListener();
      } else {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
      }
    });
  }
  ngOnInit() {
    super.ngOnInit();
    this.id = this.id || UniqueComponentId();
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "submenuicon":
          this.submenuIconTemplate = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  createProcessedItems(items, level = 0, parent = {}, parentKey = "") {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + index;
      const newItem = {
        item,
        index,
        level,
        key,
        parent,
        parentKey
      };
      newItem["items"] = this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  getItemProp(item, name) {
    return item ? ObjectUtils.getItemValue(item[name]) : void 0;
  }
  getProccessedItemLabel(processedItem) {
    return processedItem ? this.getItemLabel(processedItem.item) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  isProcessedItemGroup(processedItem) {
    return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
  }
  isSelected(processedItem) {
    return this.activeItemPath().some((p) => p.key === processedItem.key);
  }
  isValidSelectedItem(processedItem) {
    return this.isValidItem(processedItem) && this.isSelected(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item) && this.isItemVisible(processedItem.item);
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemVisible(item) {
    return this.getItemProp(item, "visible") !== false;
  }
  isItemSeparator(item) {
    return this.getItemProp(item, "separator");
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isProccessedItemGroup(processedItem) {
    return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
  }
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
  }
  onItemClick(event) {
    const {
      originalEvent,
      processedItem
    } = event;
    const grouped = this.isProcessedItemGroup(processedItem);
    const root = ObjectUtils.isEmpty(processedItem.parent);
    const selected = this.isSelected(processedItem);
    if (selected) {
      const {
        index,
        key,
        level,
        parentKey,
        item
      } = processedItem;
      this.activeItemPath.set(this.activeItemPath().filter((p) => key !== p.key && key.startsWith(p.key)));
      this.focusedItemInfo.set({
        index,
        level,
        parentKey,
        item
      });
      this.dirty = true;
      DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
    } else {
      if (grouped) {
        this.onItemChange(event);
      } else {
        const rootProcessedItem = root ? processedItem : this.activeItemPath().find((p) => p.parentKey === "");
        this.hide(originalEvent);
        this.changeFocusedItemIndex(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
        DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
      }
    }
  }
  onItemMouseEnter(event) {
    if (!DomHandler.isTouchDevice()) {
      if (this.dirty) {
        this.onItemChange(event);
      }
    } else {
      this.onItemChange({
        event,
        processedItem: event.processedItem,
        focus: this.autoDisplay
      });
    }
  }
  onKeyDown(event) {
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "PageDown":
      case "PageUp":
      case "Backspace":
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          this.searchItems(event, event.key);
        }
        break;
    }
  }
  onArrowDownKey(event) {
    const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
    this.changeFocusedItemIndex(event, itemIndex);
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const grouped = this.isProccessedItemGroup(processedItem);
    const item = processedItem?.item;
    if (grouped) {
      this.onItemChange({
        originalEvent: event,
        processedItem
      });
      this.focusedItemInfo.set({
        index: -1,
        parentKey: processedItem.key,
        item
      });
      this.searchValue = "";
      this.onArrowDownKey(event);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey) {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.popup && this.hide(event, true);
      event.preventDefault();
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowLeftKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const parentItem = this.activeItemPath().find((p) => p.key === processedItem.parentKey);
    const root = ObjectUtils.isEmpty(processedItem.parent);
    if (!root) {
      this.focusedItemInfo.set({
        index: -1,
        parentKey: parentItem ? parentItem.parentKey : "",
        item: processedItem.item
      });
      this.searchValue = "";
      this.onArrowDownKey(event);
    }
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== this.focusedItemInfo().parentKey);
    this.activeItemPath.set(activeItemPath);
    event.preventDefault();
  }
  onHomeKey(event) {
    this.changeFocusedItemIndex(event, this.findFirstItemIndex());
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItemIndex(event, this.findLastItemIndex());
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onEscapeKey(event) {
    this.hide(event, true);
    this.focusedItemInfo().index = this.findFirstFocusedItemIndex();
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.onItemChange({
        originalEvent: event,
        processedItem
      });
    }
    this.hide();
  }
  onEnterKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const element = DomHandler.findSingle(this.rootmenu.el.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');
      anchorElement ? anchorElement.click() : element && element.click();
      if (!this.popup) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && (this.focusedItemInfo().index = this.findFirstFocusedItemIndex());
      }
    }
    event.preventDefault();
  }
  onItemChange(event) {
    const {
      processedItem,
      isFocus
    } = event;
    if (ObjectUtils.isEmpty(processedItem)) return;
    const {
      index,
      key,
      level,
      parentKey,
      items,
      item
    } = processedItem;
    const grouped = ObjectUtils.isNotEmpty(items);
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== parentKey && p.parentKey !== key);
    grouped && activeItemPath.push(processedItem);
    this.focusedItemInfo.set({
      index,
      level,
      parentKey,
      item
    });
    this.activeItemPath.set(activeItemPath);
    grouped && (this.dirty = true);
    isFocus && DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
  }
  onMenuFocus(event) {
    this.focused = true;
    if (this.focusedItemInfo().index === -1 && !this.popup) {
    }
  }
  onMenuBlur(event) {
    this.focused = false;
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    this.searchValue = "";
    this.dirty = false;
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (this.popup) {
          this.container = event.element;
          this.moveOnTop();
          this.onShow.emit({});
          this.appendOverlay();
          this.alignOverlay();
          this.bindOutsideClickListener();
          this.bindResizeListener();
          this.bindScrollListener();
          DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
          this.scrollInView();
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onHide.emit({});
        break;
    }
  }
  alignOverlay() {
    if (this.relativeAlign) DomHandler.relativePosition(this.container, this.target);
    else DomHandler.absolutePosition(this.container, this.target);
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(event.element);
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.container);
      else DomHandler.appendChild(this.container, this.appendTo);
    }
  }
  restoreOverlayAppend() {
    if (this.container && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  /**
   * Hides the popup menu.
   * @group Method
   */
  hide(event, isFocus) {
    if (this.popup) {
      this.onHide.emit({});
      this.visible = false;
    }
    this.activeItemPath.set([]);
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: ""
    });
    isFocus && DomHandler.focus(this.relatedTarget || this.target || this.rootmenu.sublistViewChild.nativeElement);
    this.dirty = false;
  }
  /**
   * Toggles the visibility of the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  toggle(event) {
    this.visible ? this.hide(event, true) : this.show(event);
  }
  /**
   * Displays the popup menu.
   * @param {Event} even - Browser event.
   * @group Method
   */
  show(event, isFocus) {
    if (this.popup) {
      this.visible = true;
      this.target = this.target || event.currentTarget;
      this.relatedTarget = event.relatedTarget || null;
      this.relativeAlign = event?.relativeAlign || null;
    }
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: ""
    });
    isFocus && DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
    this.cd.markForCheck();
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let itemIndex = -1;
    let matched = false;
    if (this.focusedItemInfo().index !== -1) {
      itemIndex = this.visibleItems.slice(this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem));
      itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo().index;
    } else {
      itemIndex = this.visibleItems.findIndex((processedItem) => this.isItemMatched(processedItem));
    }
    if (itemIndex !== -1) {
      matched = true;
    }
    if (itemIndex === -1 && this.focusedItemInfo().index === -1) {
      itemIndex = this.findFirstFocusedItemIndex();
    }
    if (itemIndex !== -1) {
      this.changeFocusedItemIndex(event, itemIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  findLastFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
  }
  findLastItemIndex() {
    return ObjectUtils.findLastIndex(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
  }
  findPrevItemIndex(index) {
    const matchedItemIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleItems.slice(0, index), (processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex : index;
  }
  findNextItemIndex(index) {
    const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex((processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
  }
  findFirstFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
  }
  findFirstItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidItem(processedItem));
  }
  findSelectedItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidSelectedItem(processedItem));
  }
  changeFocusedItemIndex(event, index) {
    if (this.focusedItemInfo().index !== index) {
      const focusedItemInfo = this.focusedItemInfo();
      this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
        item: this.visibleItems[index].item,
        index
      }));
      this.scrollInView();
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
    const element = DomHandler.findSingle(this.rootmenu.el.nativeElement, `li[id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, (event) => {
        if (this.visible) {
          this.hide(event, true);
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
      this.scrollHandler = null;
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          if (!DomHandler.isTouchDevice()) {
            this.hide(event, true);
          }
        });
      }
    }
  }
  bindOutsideClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.outsideClickListener) {
        this.outsideClickListener = this.renderer.listen(this.document, "click", (event) => {
          const isOutsideContainer = this.containerViewChild && !this.containerViewChild.nativeElement.contains(event.target);
          const isOutsideTarget = this.popup ? !(this.target && (this.target === event.target || this.target.contains(event.target))) : true;
          if (isOutsideContainer && isOutsideTarget) {
            this.hide();
          }
        });
      }
    }
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      document.removeEventListener("click", this.outsideClickListener);
      this.outsideClickListener = null;
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  onOverlayHide() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindScrollListener();
    if (!this.cd.destroyed) {
      this.target = null;
    }
  }
  ngOnDestroy() {
    if (this.popup) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      if (this.container && this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
    super.ngOnDestroy();
  }
  static ɵfac = function TieredMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TieredMenu)(ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TieredMenu,
    selectors: [["p-tieredMenu"], ["p-tieredmenu"]],
    contentQueries: function TieredMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TieredMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c6, 5);
        ɵɵviewQuery(_c7, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootmenu = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      model: "model",
      popup: [2, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      appendTo: "appendTo",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      autoDisplay: [2, "autoDisplay", "autoDisplay", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      id: "id",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [ɵɵProvidersFeature([TieredMenuStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["rootmenu", ""], [3, "id", "ngClass", "class", "ngStyle", "click", 4, "ngIf"], [3, "click", "id", "ngClass", "ngStyle"], [3, "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter", "root", "items", "itemTemplate", "menuId", "tabindex", "ariaLabel", "ariaLabelledBy", "baseZIndex", "autoZIndex", "autoDisplay", "popup", "focusedItemId", "activeItemPath"]],
    template: function TieredMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, TieredMenu_div_0_Template, 4, 29, "div", 2);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.popup || ctx.visible);
      }
    },
    dependencies: [NgClass, NgIf, NgStyle, TieredMenuSub],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenu, [{
    type: Component,
    args: [{
      selector: "p-tieredMenu, p-tieredmenu",
      template: `
        <div
            #container
            [attr.data-pc-section]="'root'"
            [attr.data-pc-name]="'tieredmenu'"
            [id]="id"
            [ngClass]="{ 'p-tieredmenu p-component': true, 'p-tieredmenu-overlay': popup }"
            [class]="styleClass"
            [ngStyle]="style"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions },
            }"
            [@.disabled]="popup !== true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            *ngIf="!popup || visible"
        >
            <p-tieredmenu-sub
                #rootmenu
                [root]="true"
                [items]="processedItems"
                [itemTemplate]="itemTemplate"
                [menuId]="id"
                [tabindex]="!disabled ? tabindex : -1"
                [ariaLabel]="ariaLabel"
                [ariaLabelledBy]="ariaLabelledBy"
                [baseZIndex]="baseZIndex"
                [autoZIndex]="autoZIndex"
                [autoDisplay]="autoDisplay"
                [popup]="popup"
                [focusedItemId]="focused ? focusedItemId : undefined"
                [activeItemPath]="activeItemPath()"
                (itemClick)="onItemClick($event)"
                (menuFocus)="onMenuFocus($event)"
                (menuBlur)="onMenuBlur($event)"
                (menuKeydown)="onKeyDown($event)"
                (itemMouseEnter)="onItemMouseEnter($event)"
            ></p-tieredmenu-sub>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [TieredMenuStyle]
    }]
  }], () => [{
    type: OverlayService
  }], {
    model: [{
      type: Input
    }],
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autoDisplay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    rootmenu: [{
      type: ViewChild,
      args: ["rootmenu"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
var TieredMenuModule = class _TieredMenuModule {
  static ɵfac = function TieredMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TieredMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TieredMenuModule,
    declarations: [TieredMenu, TieredMenuSub],
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule],
    exports: [TieredMenu, RouterModule, TooltipModule, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule, RouterModule, TooltipModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TieredMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule],
      exports: [TieredMenu, RouterModule, TooltipModule, SharedModule],
      declarations: [TieredMenu, TieredMenuSub]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-splitbutton.mjs
var _c02 = ["container"];
var _c12 = ["defaultbtn"];
var _c22 = ["menu"];
function SplitButton_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SplitButton_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 10);
    ɵɵlistener("click", function SplitButton_ng_container_2_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDefaultButtonClick($event));
    });
    ɵɵtemplate(2, SplitButton_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("severity", ctx_r2.severity)("text", ctx_r2.text)("outlined", ctx_r2.outlined)("size", ctx_r2.size)("icon", ctx_r2.icon)("iconPos", ctx_r2.iconPos)("disabled", ctx_r2.disabled)("ariaLabel", (ctx_r2.buttonProps == null ? null : ctx_r2.buttonProps["ariaLabel"]) || ctx_r2.label)("autofocus", ctx_r2.autofocus)("pTooltip", ctx_r2.tooltip)("tooltipOptions", ctx_r2.tooltipOptions);
    ɵɵattribute("tabindex", ctx_r2.tabindex);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.contentTemplate);
  }
}
function SplitButton_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11, 3);
    ɵɵlistener("click", function SplitButton_ng_template_3_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDefaultButtonClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("severity", ctx_r2.severity)("text", ctx_r2.text)("outlined", ctx_r2.outlined)("size", ctx_r2.size)("icon", ctx_r2.icon)("iconPos", ctx_r2.iconPos)("label", ctx_r2.label)("disabled", ctx_r2.buttonDisabled)("ariaLabel", ctx_r2.buttonProps == null ? null : ctx_r2.buttonProps["ariaLabel"])("autofocus", ctx_r2.autofocus)("pTooltip", ctx_r2.tooltip)("tooltipOptions", ctx_r2.tooltipOptions);
    ɵɵattribute("tabindex", ctx_r2.tabindex);
  }
}
function SplitButton_ChevronDownIcon_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
}
function SplitButton_7_ng_template_0_Template(rf, ctx) {
}
function SplitButton_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SplitButton_7_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var theme2 = ({
  dt
}) => `
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: ${dt("splitbutton.border.radius")};
}

.p-splitbutton-button.p-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-button.p-button:focus-visible,
.p-splitbutton-dropdown.p-button:focus-visible {
    z-index: 1;
}

.p-splitbutton-button.p-button:not(:disabled):hover,
.p-splitbutton-button.p-button:not(:disabled):active {
    border-right: 0 none;
}

.p-splitbutton-dropdown.p-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-splitbutton-fluid {
    display: flex;
}

.p-splitbutton-rounded .p-splitbutton-dropdown {
    border-top-right-radius: ${dt("splitbutton.rounded.border.radius")};
    border-bottom-right-radius: ${dt("splitbutton.rounded.border.radius")};
}

.p-splitbutton-rounded > .p-splitbutton-button {
    border-top-left-radius: ${dt("splitbutton.rounded.border.radius")};
    border-bottom-left-radius: ${dt("splitbutton.rounded.border.radius")};
}

.p-splitbutton-raised {
    box-shadow: ${dt("splitbutton.raised.shadow")};
}
`;
var classes2 = {
  root: ({
    props
  }) => ["p-splitbutton p-component", {
    "p-splitbutton-raised": props.raised,
    "p-splitbutton-rounded": props.rounded,
    "p-splitbutton-fluid": props.fluid
  }],
  pcButton: "p-splitbutton-button",
  pcDropdown: "p-splitbutton-dropdown"
};
var SplitButtonStyle = class _SplitButtonStyle extends BaseStyle {
  name = "splitbutton";
  theme = theme2;
  classes = classes2;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSplitButtonStyle_BaseFactory;
    return function SplitButtonStyle_Factory(__ngFactoryType__) {
      return (ɵSplitButtonStyle_BaseFactory || (ɵSplitButtonStyle_BaseFactory = ɵɵgetInheritedFactory(_SplitButtonStyle)))(__ngFactoryType__ || _SplitButtonStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _SplitButtonStyle,
    factory: _SplitButtonStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var SplitButtonClasses;
(function(SplitButtonClasses2) {
  SplitButtonClasses2["root"] = "p-splitbutton";
  SplitButtonClasses2["pcButton"] = "p-splitbutton-button";
  SplitButtonClasses2["pcDropdown"] = "p-splitbutton-dropdown";
})(SplitButtonClasses || (SplitButtonClasses = {}));
var SplitButton = class _SplitButton extends BaseComponent {
  /**
   * MenuModel instance to define the overlay items.
   * @group Props
   */
  model;
  /**
   * Defines the style of the button.
   * @group Props
   */
  severity;
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size = null;
  /**
   * Add a plain textual class to the button without a background initially.
   * @group Props
   */
  plain = false;
  /**
   * Name of the icon.
   * @group Props
   */
  icon;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Text of the button.
   * @group Props
   */
  label;
  /**
   * Tooltip for the main button.
   * @group Props
   */
  tooltip;
  /**
   * Tooltip options for the main button.
   * @group Props
   */
  tooltipOptions;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the overlay menu.
   * @group Props
   */
  menuStyle;
  /**
   * Style class of the overlay menu.
   * @group Props
   */
  menuStyleClass;
  /**
   *  Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Indicates the direction of the element.
   * @group Props
   */
  dir;
  /**
   * Defines a string that labels the expand button for accessibility.
   * @group Props
   */
  expandAriaLabel;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Button Props
   */
  buttonProps;
  /**
   * Menu Button Props
   */
  menuButtonProps;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  set disabled(v) {
    this._disabled = v;
    this._buttonDisabled = v;
    this.menuButtonDisabled = v;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * When present, it specifies that the menu button element should be disabled.
   * @group Props
   */
  set menuButtonDisabled(v) {
    if (this.disabled) {
      this._menuButtonDisabled = this.disabled;
    } else this._menuButtonDisabled = v;
  }
  get menuButtonDisabled() {
    return this._menuButtonDisabled;
  }
  /**
   * When present, it specifies that the button element should be disabled.
   * @group Props
   */
  set buttonDisabled(v) {
    if (this.disabled) {
      this.buttonDisabled = this.disabled;
    } else this._buttonDisabled = v;
  }
  get buttonDisabled() {
    return this._buttonDisabled;
  }
  /**
   * Callback to invoke when default command button is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onMenuHide = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onMenuShow = new EventEmitter();
  /**
   * Callback to invoke when dropdown button is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onDropdownClick = new EventEmitter();
  containerViewChild;
  buttonViewChild;
  menu;
  templates;
  contentTemplate;
  dropdownIconTemplate;
  ariaId;
  isExpanded = signal(false);
  _disabled;
  _buttonDisabled;
  _menuButtonDisabled;
  _componentStyle = inject(SplitButtonStyle);
  ngOnInit() {
    super.ngOnInit();
    this.ariaId = UniqueComponentId();
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  get containerClass() {
    const cls = {
      "p-splitbutton p-component": true,
      "p-splitbutton-raised": this.raised,
      "p-splitbutton-rounded": this.rounded,
      "p-splitbutton-outlined": this.outlined,
      "p-splitbutton-text": this.text,
      [`p-splitbutton-${this.size === "small" ? "sm" : "lg"}`]: this.size
    };
    return __spreadValues({}, cls);
  }
  onDefaultButtonClick(event) {
    this.onClick.emit(event);
    this.menu.hide();
  }
  onDropdownButtonClick(event) {
    this.onDropdownClick.emit(event);
    this.menu?.toggle({
      currentTarget: this.containerViewChild?.nativeElement,
      relativeAlign: this.appendTo == null
    });
  }
  onDropdownButtonKeydown(event) {
    if (event.code === "ArrowDown" || event.code === "ArrowUp") {
      this.onDropdownButtonClick();
      event.preventDefault();
    }
  }
  onHide() {
    this.isExpanded.set(false);
    this.onMenuHide.emit();
  }
  onShow() {
    this.isExpanded.set(true);
    this.onMenuShow.emit();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSplitButton_BaseFactory;
    return function SplitButton_Factory(__ngFactoryType__) {
      return (ɵSplitButton_BaseFactory || (ɵSplitButton_BaseFactory = ɵɵgetInheritedFactory(_SplitButton)))(__ngFactoryType__ || _SplitButton);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SplitButton,
    selectors: [["p-splitButton"], ["p-splitbutton"]],
    contentQueries: function SplitButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function SplitButton_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c02, 5);
        ɵɵviewQuery(_c12, 5);
        ɵɵviewQuery(_c22, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menu = _t.first);
      }
    },
    inputs: {
      model: "model",
      severity: "severity",
      raised: [2, "raised", "raised", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      text: [2, "text", "text", booleanAttribute],
      outlined: [2, "outlined", "outlined", booleanAttribute],
      size: "size",
      plain: [2, "plain", "plain", booleanAttribute],
      icon: "icon",
      iconPos: "iconPos",
      label: "label",
      tooltip: "tooltip",
      tooltipOptions: "tooltipOptions",
      style: "style",
      styleClass: "styleClass",
      menuStyle: "menuStyle",
      menuStyleClass: "menuStyleClass",
      appendTo: "appendTo",
      dir: "dir",
      expandAriaLabel: "expandAriaLabel",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      buttonProps: "buttonProps",
      menuButtonProps: "menuButtonProps",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      menuButtonDisabled: "menuButtonDisabled",
      buttonDisabled: "buttonDisabled"
    },
    outputs: {
      onClick: "onClick",
      onMenuHide: "onMenuHide",
      onMenuShow: "onMenuShow",
      onDropdownClick: "onDropdownClick"
    },
    features: [ɵɵProvidersFeature([SplitButtonStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature],
    decls: 10,
    vars: 26,
    consts: [["container", ""], ["defaultButton", ""], ["menu", ""], ["defaultbtn", ""], [3, "ngClass", "ngStyle"], [4, "ngIf", "ngIfElse"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-splitbutton-dropdown", "p-button-icon-only", 3, "click", "keydown", "size", "severity", "text", "outlined", "disabled", "ariaLabel"], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "onHide", "onShow", "id", "popup", "model", "styleClass", "appendTo", "showTransitionOptions", "hideTransitionOptions"], ["type", "button", "pButton", "", "pRipple", "", "pAutoFocus", "", 1, "p-splitbutton-button", 3, "click", "severity", "text", "outlined", "size", "icon", "iconPos", "disabled", "ariaLabel", "autofocus", "pTooltip", "tooltipOptions"], ["type", "button", "pButton", "", "pRipple", "", "pAutoFocus", "", 1, "p-splitbutton-button", 3, "click", "severity", "text", "outlined", "size", "icon", "iconPos", "label", "disabled", "ariaLabel", "autofocus", "pTooltip", "tooltipOptions"]],
    template: function SplitButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 4, 0);
        ɵɵtemplate(2, SplitButton_ng_container_2_Template, 3, 13, "ng-container", 5)(3, SplitButton_ng_template_3_Template, 2, 13, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementStart(5, "button", 6);
        ɵɵlistener("click", function SplitButton_Template_button_click_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onDropdownButtonClick($event));
        })("keydown", function SplitButton_Template_button_keydown_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onDropdownButtonKeydown($event));
        });
        ɵɵtemplate(6, SplitButton_ChevronDownIcon_6_Template, 1, 0, "ChevronDownIcon", 7)(7, SplitButton_7_Template, 1, 0, null, 8);
        ɵɵelementEnd();
        ɵɵelementStart(8, "p-tieredmenu", 9, 2);
        ɵɵlistener("onHide", function SplitButton_Template_p_tieredmenu_onHide_8_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onHide());
        })("onShow", function SplitButton_Template_p_tieredmenu_onShow_8_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onShow());
        });
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        const defaultButton_r5 = ɵɵreference(4);
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.contentTemplate)("ngIfElse", defaultButton_r5);
        ɵɵadvance(3);
        ɵɵproperty("size", ctx.size)("severity", ctx.severity)("text", ctx.text)("outlined", ctx.outlined)("disabled", ctx.menuButtonDisabled)("ariaLabel", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaLabel"]) || ctx.expandAriaLabel);
        ɵɵattribute("aria-haspopup", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaHasPopup"]) || true)("aria-expanded", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaExpanded"]) || ctx.isExpanded())("aria-controls", (ctx.menuButtonProps == null ? null : ctx.menuButtonProps["ariaControls"]) || ctx.ariaId);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.dropdownIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.dropdownIconTemplate);
        ɵɵadvance();
        ɵɵstyleMap(ctx.menuStyle);
        ɵɵproperty("id", ctx.ariaId)("popup", true)("model", ctx.model)("styleClass", ctx.menuStyleClass)("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, ButtonDirective, TieredMenu, Tooltip, AutoFocus, ChevronDownIcon, Ripple],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButton, [{
    type: Component,
    args: [{
      selector: "p-splitButton, p-splitbutton",
      template: `
        <div #container [ngClass]="containerClass" [class]="styleClass" [ngStyle]="style">
            <ng-container *ngIf="contentTemplate; else defaultButton">
                <button
                    class="p-splitbutton-button"
                    type="button"
                    pButton
                    pRipple
                    [severity]="severity"
                    [text]="text"
                    [outlined]="outlined"
                    [size]="size"
                    [icon]="icon"
                    [iconPos]="iconPos"
                    (click)="onDefaultButtonClick($event)"
                    [disabled]="disabled"
                    [attr.tabindex]="tabindex"
                    [ariaLabel]="buttonProps?.['ariaLabel'] || label"
                    pAutoFocus
                    [autofocus]="autofocus"
                    [pTooltip]="tooltip"
                    [tooltipOptions]="tooltipOptions"
                >
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </button>
            </ng-container>
            <ng-template #defaultButton>
                <button
                    #defaultbtn
                    class="p-splitbutton-button"
                    type="button"
                    pButton
                    pRipple
                    [severity]="severity"
                    [text]="text"
                    [outlined]="outlined"
                    [size]="size"
                    [icon]="icon"
                    [iconPos]="iconPos"
                    [label]="label"
                    (click)="onDefaultButtonClick($event)"
                    [disabled]="buttonDisabled"
                    [attr.tabindex]="tabindex"
                    [ariaLabel]="buttonProps?.['ariaLabel']"
                    pAutoFocus
                    [autofocus]="autofocus"
                    [pTooltip]="tooltip"
                    [tooltipOptions]="tooltipOptions"
                ></button>
            </ng-template>
            <button
                type="button"
                pButton
                pRipple
                [size]="size"
                [severity]="severity"
                [text]="text"
                [outlined]="outlined"
                class="p-splitbutton-dropdown p-button-icon-only"
                (click)="onDropdownButtonClick($event)"
                (keydown)="onDropdownButtonKeydown($event)"
                [disabled]="menuButtonDisabled"
                [ariaLabel]="menuButtonProps?.['ariaLabel'] || expandAriaLabel"
                [attr.aria-haspopup]="menuButtonProps?.['ariaHasPopup'] || true"
                [attr.aria-expanded]="menuButtonProps?.['ariaExpanded'] || isExpanded()"
                [attr.aria-controls]="menuButtonProps?.['ariaControls'] || ariaId"
            >
                <ChevronDownIcon *ngIf="!dropdownIconTemplate" />
                <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
            </button>
            <p-tieredmenu
                [id]="ariaId"
                #menu
                [popup]="true"
                [model]="model"
                [style]="menuStyle"
                [styleClass]="menuStyleClass"
                [appendTo]="appendTo"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onHide)="onHide()"
                (onShow)="onShow()"
            ></p-tieredmenu>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [SplitButtonStyle],
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, {
    model: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    icon: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipOptions: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    menuStyle: [{
      type: Input
    }],
    menuStyleClass: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    dir: [{
      type: Input
    }],
    expandAriaLabel: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    buttonProps: [{
      type: Input
    }],
    menuButtonProps: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    menuButtonDisabled: [{
      type: Input,
      args: ["menuButtonDisabled"]
    }],
    buttonDisabled: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    onMenuHide: [{
      type: Output
    }],
    onMenuShow: [{
      type: Output
    }],
    onDropdownClick: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    buttonViewChild: [{
      type: ViewChild,
      args: ["defaultbtn"]
    }],
    menu: [{
      type: ViewChild,
      args: ["menu"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var SplitButtonModule = class _SplitButtonModule {
  static ɵfac = function SplitButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SplitButtonModule,
    declarations: [SplitButton],
    imports: [CommonModule, ButtonModule, TieredMenuModule, AutoFocusModule, ChevronDownIcon, RippleModule],
    exports: [SplitButton, ButtonModule, TieredMenuModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, ButtonModule, TieredMenuModule, AutoFocusModule, ChevronDownIcon, RippleModule, ButtonModule, TieredMenuModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonModule, TieredMenuModule, AutoFocusModule, ChevronDownIcon, RippleModule],
      exports: [SplitButton, ButtonModule, TieredMenuModule],
      declarations: [SplitButton]
    }]
  }], null, null);
})();
export {
  SplitButton,
  SplitButtonModule
};
//# sourceMappingURL=primeng_splitbutton.js.map
