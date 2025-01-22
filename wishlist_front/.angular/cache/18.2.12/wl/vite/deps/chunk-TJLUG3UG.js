import {
  WA_WINDOW
} from "./chunk-IQQZLQHI.js";
import {
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-FW6GFWFQ.js";
import {
  Observable,
  share
} from "./chunk-D5M5KKRG.js";

// node_modules/@ng-web-apis/intersection-observer/fesm2022/ng-web-apis-intersection-observer.mjs
var SafeObserver = typeof IntersectionObserver !== "undefined" ? IntersectionObserver : class {
  root = null;
  rootMargin = "";
  thresholds = [];
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
};
var WA_INTERSECTION_ROOT = new InjectionToken("[WA_INTERSECTION_ROOT]");
var INTERSECTION_ROOT = WA_INTERSECTION_ROOT;
var WA_INTERSECTION_ROOT_MARGIN_DEFAULT = "0px 0px 0px 0px";
var INTERSECTION_ROOT_MARGIN_DEFAULT = WA_INTERSECTION_ROOT_MARGIN_DEFAULT;
var WA_INTERSECTION_ROOT_MARGIN = new InjectionToken("[WA_INTERSECTION_ROOT_MARGIN]", {
  providedIn: "root",
  factory: () => INTERSECTION_ROOT_MARGIN_DEFAULT
});
var INTERSECTION_ROOT_MARGIN = WA_INTERSECTION_ROOT_MARGIN;
function rootMarginFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionRootMargin") || INTERSECTION_ROOT_MARGIN_DEFAULT;
}
var WA_INTERSECTION_THRESHOLD_DEFAULT = 0;
var INTERSECTION_THRESHOLD_DEFAULT = WA_INTERSECTION_THRESHOLD_DEFAULT;
var WA_INTERSECTION_THRESHOLD = new InjectionToken("[WA_INTERSECTION_THRESHOLD]", {
  providedIn: "root",
  factory: () => INTERSECTION_THRESHOLD_DEFAULT
});
var INTERSECTION_THRESHOLD = WA_INTERSECTION_THRESHOLD;
function thresholdFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionThreshold")?.split(",").map(parseFloat) || INTERSECTION_THRESHOLD_DEFAULT;
}
var WaIntersectionObserverDirective = class _WaIntersectionObserverDirective extends SafeObserver {
  callbacks = /* @__PURE__ */ new Map();
  margin = "";
  threshold = "";
  constructor() {
    const root = inject(INTERSECTION_ROOT, {
      optional: true
    });
    super((entries) => {
      this.callbacks.forEach((callback, element) => {
        const filtered = entries.filter(({
          target
        }) => target === element);
        return filtered.length && callback(filtered, this);
      });
    }, {
      root: root?.nativeElement,
      rootMargin: rootMarginFactory(),
      threshold: thresholdFactory()
    });
  }
  observe(target, callback = () => {
  }) {
    super.observe(target);
    this.callbacks.set(target, callback);
  }
  unobserve(target) {
    super.unobserve(target);
    this.callbacks.delete(target);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function WaIntersectionObserverDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObserverDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObserverDirective,
    selectors: [["", "waIntersectionObserver", ""]],
    inputs: {
      margin: [0, "waIntersectionRootMargin", "margin"],
      threshold: [0, "waIntersectionThreshold", "threshold"]
    },
    exportAs: ["IntersectionObserver"],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserverDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionObserver]",
      inputs: ["margin: waIntersectionRootMargin", "threshold: waIntersectionThreshold"],
      exportAs: "IntersectionObserver"
    }]
  }], function() {
    return [];
  }, null);
})();
var IntersectionObserveeService = class _IntersectionObserveeService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const observer = inject(WaIntersectionObserverDirective);
    super((subscriber) => {
      observer.observe(nativeElement, (entries) => {
        subscriber.next(entries);
      });
      return () => {
        observer.unobserve(nativeElement);
      };
    });
    return this.pipe(share());
  }
  static ɵfac = function IntersectionObserveeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserveeService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _IntersectionObserveeService,
    factory: _IntersectionObserveeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserveeService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var WaIntersectionObservee = class _WaIntersectionObservee {
  waIntersectionObservee = inject(IntersectionObserveeService);
  static ɵfac = function WaIntersectionObservee_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObservee)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObservee,
    selectors: [["", "waIntersectionObservee", ""]],
    outputs: {
      waIntersectionObservee: "waIntersectionObservee"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([IntersectionObserveeService])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObservee, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionObservee]",
      outputs: ["waIntersectionObservee"],
      providers: [IntersectionObserveeService]
    }]
  }], null, null);
})();
var WaIntersectionRoot = class _WaIntersectionRoot {
  static ɵfac = function WaIntersectionRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionRoot)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionRoot,
    selectors: [["", "waIntersectionRoot", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: INTERSECTION_ROOT,
      useExisting: ElementRef
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionRoot, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionRoot]",
      providers: [{
        provide: INTERSECTION_ROOT,
        useExisting: ElementRef
      }]
    }]
  }], null, null);
})();
var WaIntersectionObserver = [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot];
var IntersectionObserverModule = class _IntersectionObserverModule {
  static ɵfac = function IntersectionObserverModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserverModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _IntersectionObserverModule,
    imports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot],
    exports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserverModule, [{
    type: NgModule,
    args: [{
      imports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot],
      exports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot]
    }]
  }], null, null);
})();
var IntersectionObserverService = class _IntersectionObserverService extends Observable {
  nativeElement = inject(ElementRef).nativeElement;
  rootMargin = inject(INTERSECTION_ROOT_MARGIN);
  threshold = inject(INTERSECTION_THRESHOLD);
  root = inject(INTERSECTION_ROOT, {
    optional: true
  })?.nativeElement ?? null;
  constructor() {
    super((subscriber) => {
      const observer = new SafeObserver((entries) => {
        subscriber.next(entries);
      }, {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      });
      observer.observe(this.nativeElement);
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function IntersectionObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _IntersectionObserverService,
    factory: _IntersectionObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserverService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var WA_INTERSECTION_OBSERVER_SUPPORT = new InjectionToken("[WA_INTERSECTION_OBSERVER_SUPPORT]: [INTERSECTION_OBSERVER_SUPPORT]", {
  providedIn: "root",
  factory: () => !!inject(WA_WINDOW).IntersectionObserver
});

export {
  WaIntersectionObserverDirective,
  WaIntersectionObservee,
  WaIntersectionRoot,
  WaIntersectionObserver,
  IntersectionObserverService
};
//# sourceMappingURL=chunk-TJLUG3UG.js.map
