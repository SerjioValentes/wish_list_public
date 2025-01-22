import {
  TuiPortalService
} from "./chunk-IQQZLQHI.js";
import {
  Directive,
  Injectable,
  Input,
  TemplateRef,
  inject,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-FW6GFWFQ.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-popup.mjs
var TuiPopupService = class _TuiPopupService extends TuiPortalService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPopupService_BaseFactory;
      return function TuiPopupService_Factory(__ngFactoryType__) {
        return (ɵTuiPopupService_BaseFactory || (ɵTuiPopupService_BaseFactory = ɵɵgetInheritedFactory(_TuiPopupService)))(__ngFactoryType__ || _TuiPopupService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPopupService,
      factory: _TuiPopupService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiPopup = class _TuiPopup {
  constructor() {
    this.template = inject(TemplateRef);
    this.service = inject(TuiPopupService);
  }
  set tuiPopup(show) {
    this.viewRef?.destroy();
    if (show) {
      this.viewRef = this.service.addTemplate(this.template);
    }
  }
  ngOnDestroy() {
    this.viewRef?.destroy();
  }
  static {
    this.ɵfac = function TuiPopup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPopup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPopup,
      selectors: [["ng-template", "tuiPopup", ""]],
      inputs: {
        tuiPopup: "tuiPopup"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopup, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiPopup]"
    }]
  }], null, {
    tuiPopup: [{
      type: Input
    }]
  });
})();

export {
  TuiPopupService,
  TuiPopup
};
//# sourceMappingURL=chunk-O2JYSILV.js.map
