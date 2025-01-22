import {
  TuiSwipe
} from "./chunk-7PD4JICN.js";
import {
  WaIntersectionObservee,
  WaIntersectionObserver,
  WaIntersectionObserverDirective
} from "./chunk-TJLUG3UG.js";
import {
  TuiPopupService
} from "./chunk-O2JYSILV.js";
import {
  TUI_DIALOGS,
  TuiDialogService
} from "./chunk-RO4MD6JN.js";
import {
  TUI_DAY_CAPS_MAPPER,
  calculateDisabledItemHandler,
  tuiToggleDay
} from "./chunk-BV2AAQTA.js";
import {
  TUI_CALENDAR_DATE_STREAM,
  TUI_CANCEL_WORD,
  TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
  TUI_DONE_WORD,
  TUI_MOBILE_CALENDAR
} from "./chunk-C6YM2PII.js";
import {
  TuiCalendarSheet,
  TuiCalendarSheetPipe,
  TuiLet,
  TuiLink,
  TuiMapperPipe,
  TuiMonthPipe,
  TuiOrderWeekDaysPipe,
  TuiPopoverDirective,
  TuiRepeatTimes,
  coerceElement,
  coerceNumberProperty
} from "./chunk-5JIKOIFA.js";
import {
  EMPTY_QUERY,
  MONTHS_IN_YEAR,
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  SCROLL_REF_SELECTOR,
  TUI_ANIMATIONS_SPEED,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DROPDOWN_COMPONENT,
  TUI_FALSE_HANDLER,
  TUI_FIRST_DAY,
  TUI_IS_E2E,
  TUI_IS_IOS,
  TUI_IS_MOBILE,
  TUI_LAST_DAY,
  TUI_SCROLL_REF,
  TUI_SHORT_WEEK_DAYS,
  TuiActiveZone,
  TuiButton,
  TuiControl,
  TuiDay,
  TuiDayRange,
  TuiDropdownDirective,
  TuiIcon,
  TuiLoader,
  TuiMonth,
  TuiPopoverService,
  TuiScrollService,
  TuiThemeColorService,
  WaResizeObserver,
  injectContext,
  takeUntilDestroyed,
  tuiAsPopover,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiFadeIn,
  tuiGetActualTarget,
  tuiGetDuration,
  tuiGetElementOffset,
  tuiGetNativeFocused,
  tuiInjectElement,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsString,
  tuiProvideOptions,
  tuiPure,
  tuiPx,
  tuiScaleIn,
  tuiScrollFrom,
  tuiSlideIn,
  tuiSlideInTop,
  tuiToAnimationOptions,
  tuiTypedFromEvent,
  tuiWatch,
  tuiWithStyles,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler
} from "./chunk-IQQZLQHI.js";
import "./chunk-NMSKESTK.js";
import {
  RouterLinkActive
} from "./chunk-FT4RLWON.js";
import "./chunk-UH2ALZYR.js";
import {
  shouldCall
} from "./chunk-QRS6BKMF.js";
import "./chunk-ZD5X4FM7.js";
import "./chunk-UICX62P2.js";
import {
  AsyncPipe,
  DOCUMENT,
  NgForOf,
  NgIf,
  NgStyle,
  isPlatformBrowser
} from "./chunk-GWZ3OMU7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  INJECTOR$1,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  afterNextRender,
  booleanAttribute,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-FW6GFWFQ.js";
import {
  BehaviorSubject,
  ConnectableObservable,
  EMPTY,
  Observable,
  Subject,
  Subscription,
  __decorate,
  __spreadProps,
  __spreadValues,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  debounceTime,
  delay,
  distinctUntilChanged,
  endWith,
  filter,
  first,
  fromEvent,
  identity,
  isObservable,
  map,
  merge,
  mergeMap,
  of,
  pairwise,
  race,
  scan,
  share,
  shareReplay,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  timer,
  windowToggle
} from "./chunk-D5M5KKRG.js";

// node_modules/@angular/cdk/fesm2022/platform.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
  static {
    this.ɵfac = function Platform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Platform)(ɵɵinject(PLATFORM_ID));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Platform,
      factory: _Platform.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var PlatformModule = class _PlatformModule {
  static {
    this.ɵfac = function PlatformModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlatformModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PlatformModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  constructor(_document) {
    this.value = "ltr";
    this.change = new EventEmitter();
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static {
    this.ɵfac = function Directionality_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Directionality)(ɵɵinject(DIR_DOCUMENT, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Directionality,
      factory: _Directionality.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DIR_DOCUMENT]
    }]
  }], null);
})();
var Dir = class _Dir {
  constructor() {
    this._dir = "ltr";
    this._isInitialized = false;
    this.change = new EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static {
    this.ɵfac = function Dir_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Dir)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _Dir,
      selectors: [["", "dir", ""]],
      hostVars: 1,
      hostBindings: function Dir_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("dir", ctx._rawDir);
        }
      },
      inputs: {
        dir: "dir"
      },
      outputs: {
        change: "dirChange"
      },
      exportAs: ["dir"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: Directionality,
        useExisting: _Dir
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir",
      standalone: true
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static {
    this.ɵfac = function BidiModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BidiModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BidiModule,
      imports: [Dir],
      exports: [Dir]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/collections.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
var ArrayDataSource = class extends DataSource {
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
var _RecycleViewRepeaterStrategy = class {
  constructor() {
    this.viewCacheSize = 20;
    this._viewCache = [];
  }
  /** Apply changes to the DOM. */
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  constructor() {
    this._listeners = [];
  }
  /**
   * Notify other items that selection for the given name has been set.
   * @param id ID of the item.
   * @param name Name of the item.
   */
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  /**
   * Listen for future changes to item selection.
   * @return Function used to deregister listener
   */
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static {
    this.ɵfac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UniqueSelectionDispatcher)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UniqueSelectionDispatcher,
      factory: _UniqueSelectionDispatcher.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._scrolledIndexChange = new Subject();
    this.scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
    this._viewport = null;
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  constructor() {
    this._itemSize = 20;
    this._minBufferPx = 100;
    this._maxBufferPx = 200;
    this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  /** The size of the items in the list (in pixels). */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static {
    this.ɵfac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      standalone: true,
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  constructor(_ngZone, _platform, document2) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._scrolled = new Subject();
    this._globalSubscription = null;
    this._scrolledCount = 0;
    this.scrollContainers = /* @__PURE__ */ new Map();
    this._document = document2;
  }
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  /**
   * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
   * @param scrollable Scrollable instance to be deregistered.
   */
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   */
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._globalSubscription) {
        this._addGlobalListener();
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._removeGlobalListener();
        }
      };
    });
  }
  ngOnDestroy() {
    this._removeGlobalListener();
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param elementOrElementRef Element whose ancestors to listen for.
   * @param auditTimeInMs Time to throttle the scroll events.
   */
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => {
      return !target || ancestors.indexOf(target) > -1;
    }));
  }
  /** Returns all registered Scrollables that contain the provided element. */
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Returns true if the element is contained within the provided Scrollable. */
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  /** Sets up the global scroll listeners. */
  _addGlobalListener() {
    this._globalSubscription = this._ngZone.runOutsideAngular(() => {
      const window2 = this._getWindow();
      return fromEvent(window2.document, "scroll").subscribe(() => this._scrolled.next());
    });
  }
  /** Cleans up the global scroll listener. */
  _removeGlobalListener() {
    if (this._globalSubscription) {
      this._globalSubscription.unsubscribe();
      this._globalSubscription = null;
    }
  }
  static {
    this.ɵfac = function ScrollDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollDispatcher)(ɵɵinject(NgZone), ɵɵinject(Platform), ɵɵinject(DOCUMENT, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ScrollDispatcher,
      factory: _ScrollDispatcher.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CdkScrollable = class _CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    this.elementRef = elementRef;
    this.scrollDispatcher = scrollDispatcher;
    this.ngZone = ngZone;
    this.dir = dir;
    this._destroyed = new Subject();
    this._elementScrolled = new Observable((observer) => this.ngZone.runOutsideAngular(() => fromEvent(this.elementRef.nativeElement, "scroll").pipe(takeUntil(this._destroyed)).subscribe(observer)));
  }
  ngOnInit() {
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Returns observable that emits when a scroll event is fired on the host element. */
  elementScrolled() {
    return this._elementScrolled;
  }
  /** Gets the ElementRef for the viewport. */
  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param options specified the offsets to scroll to.
   */
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param from The edge to measure from.
   */
  measureScrollOffset(from) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from == "top") {
      return el.scrollTop;
    }
    if (from == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from == "start") {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static {
    this.ɵfac = function CdkScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkScrollable)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  constructor(_platform, ngZone, document2) {
    this._platform = _platform;
    this._change = new Subject();
    this._changeListener = (event) => {
      this._change.next(event);
    };
    this._document = document2;
    ngZone.runOutsideAngular(() => {
      if (_platform.isBrowser) {
        const window2 = this._getWindow();
        window2.addEventListener("resize", this._changeListener);
        window2.addEventListener("orientationchange", this._changeListener);
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    if (this._platform.isBrowser) {
      const window2 = this._getWindow();
      window2.removeEventListener("resize", this._changeListener);
      window2.removeEventListener("orientationchange", this._changeListener);
    }
    this._change.complete();
  }
  /** Returns the viewport's width and height. */
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  /** Gets a DOMRect for the viewport's bounds. */
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /** Gets the (top, left) scroll position of the viewport. */
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * This stream emits outside of the Angular zone.
   * @param throttleTime Time in milliseconds to throttle the stream.
   */
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Updates the cached viewport size. */
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static {
    this.ɵfac = function ViewportRuler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewportRuler)(ɵɵinject(Platform), ɵɵinject(NgZone), ɵɵinject(DOCUMENT, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ViewportRuler,
      factory: _ViewportRuler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  /**
   * Measure the viewport size for the provided orientation.
   *
   * @param orientation The orientation to measure the size from.
   */
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static {
    this.ɵfac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkVirtualScrollable)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkVirtualScrollable,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  /** The direction the viewport scrolls. */
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler, scrollable) {
    super(elementRef, scrollDispatcher, ngZone, dir);
    this.elementRef = elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollStrategy = _scrollStrategy;
    this.scrollable = scrollable;
    this._platform = inject(Platform);
    this._detachedSubject = new Subject();
    this._renderedRangeSubject = new Subject();
    this._orientation = "vertical";
    this.appendOnly = false;
    this.scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
    this.renderedRangeStream = this._renderedRangeSubject;
    this._totalContentSize = 0;
    this._totalContentWidth = "";
    this._totalContentHeight = "";
    this._renderedRange = {
      start: 0,
      end: 0
    };
    this._dataLength = 0;
    this._viewportSize = 0;
    this._renderedContentOffset = 0;
    this._renderedContentOffsetNeedsRewrite = false;
    this._isChangeDetectionPending = false;
    this._runAfterChangeDetection = [];
    this._viewportChanges = Subscription.EMPTY;
    this._injector = inject(Injector);
    this._isDestroyed = false;
    if (!_scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(
        // Start off with a fake scroll event so we properly detect our initial position.
        startWith(null),
        // Collect multiple events into one until the next animation frame. This way if
        // there are multiple scroll events in the same frame we only need to recheck
        // our layout once.
        auditTime(0, SCROLL_SCHEDULER),
        // Usually `elementScrolled` is completed when the scrollable is destroyed, but
        // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
        // to unsubscribe here just in case.
        takeUntil(this._destroyed)
      ).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  /** Detaches the current `CdkVirtualForOf`. */
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  /** Gets the length of the data bound to this viewport (in number of items). */
  getDataLength() {
    return this._dataLength;
  }
  /** Gets the size of the viewport (in pixels). */
  getViewportSize() {
    return this._viewportSize;
  }
  // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
  /** Get the current rendered range of items. */
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   */
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  /** Sets the currently rendered range of indices. */
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   */
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   */
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param offset The offset to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the scrollable (in pixels).
   * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   */
  measureScrollOffset(from) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  /**
   * Measures the offset of the viewport from the scrolling container
   * @param from The edge to measure from.
   */
  measureViewportOffset(from) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from) {
      fromRect = from;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  /** Measure the combined size of all of the rendered items. */
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   */
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  /** Update the viewport dimensions and re-render. */
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  /** Measure the viewport size. */
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  /** Queue up change detection to run. */
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (!this._isChangeDetectionPending) {
      this._isChangeDetectionPending = true;
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._doChangeDetection();
      }));
    }
  }
  /** Run change detection. */
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      afterNextRender(() => {
        this._isChangeDetectionPending = false;
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  /** Calculates the `style.width` and `style.height` for the spacer element. */
  _calculateSpacerSize() {
    this._totalContentHeight = this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`;
    this._totalContentWidth = this.orientation === "horizontal" ? `${this._totalContentSize}px` : "";
  }
  static {
    this.ɵfac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkVirtualScrollViewport)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(VIRTUAL_SCROLL_STRATEGY, 8), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(VIRTUAL_SCROLLABLE, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation",
        appendOnly: [2, "appendOnly", "appendOnly", booleanAttribute]
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
      }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
          ɵɵelement(3, "div", 2);
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵstyleProp("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      providers: [{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth" [style.height]="_totalContentHeight"></div>\n',
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [VIRTUAL_SCROLL_STRATEGY]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ScrollDispatcher
  }, {
    type: ViewportRuler
  }, {
    type: CdkVirtualScrollable,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [VIRTUAL_SCROLLABLE]
    }]
  }], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  /** The DataSource to display. */
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   */
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  /** The template used to stamp out new elements. */
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * The size of the cache used to store templates that are not being used for re-use later.
   * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
   */
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  constructor(_viewContainerRef, _template, _differs, _viewRepeater, _viewport, ngZone) {
    this._viewContainerRef = _viewContainerRef;
    this._template = _template;
    this._differs = _differs;
    this._viewRepeater = _viewRepeater;
    this._viewport = _viewport;
    this.viewChange = new Subject();
    this._dataSourceChanges = new Subject();
    this.dataStream = this._dataSourceChanges.pipe(
      // Start off with null `DataSource`.
      startWith(null),
      // Bundle up the previous and current data sources so we can work with both.
      pairwise(),
      // Use `_changeDataSource` to disconnect from the previous data source and connect to the
      // new one, passing back a stream of data changes which we run through `switchMap` to give
      // us a data stream that emits the latest data from whatever the current `DataSource` is.
      switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
      // Replay the last emitted data when someone subscribes.
      shareReplay(1)
    );
    this._differ = null;
    this._needsUpdate = false;
    this._destroyed = new Subject();
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   */
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  /** React to scroll state changes in the viewport. */
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  /** Swap out one `DataSource` for another. */
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  /** Update the `CdkVirtualForOfContext` for all views. */
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  /** Apply changes to the DOM. */
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  /** Update the computed properties on the `CdkVirtualForOfContext`. */
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        // It's guaranteed that the iterable is not "undefined" or "null" because we only
        // generate views for elements if the "cdkVirtualForOf" iterable has elements.
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static {
    this.ɵfac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkVirtualForOf)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(_VIEW_REPEATER_STRATEGY), ɵɵdirectiveInject(CdkVirtualScrollViewport, 4), ɵɵdirectiveInject(NgZone));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate",
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: _RecycleViewRepeaterStrategy,
    decorators: [{
      type: Inject,
      args: [_VIEW_REPEATER_STRATEGY]
    }]
  }, {
    type: CdkVirtualScrollViewport,
    decorators: [{
      type: SkipSelf
    }]
  }, {
    type: NgZone
  }], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
  }
  static {
    this.ɵfac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkVirtualScrollableElement)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkVirtualScrollableElement,
      selectors: [["", "cdkVirtualScrollingElement", ""]],
      hostAttrs: [1, "cdk-virtual-scrollable"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: _CdkVirtualScrollableElement
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      standalone: true,
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor(scrollDispatcher, ngZone, dir) {
    super(new ElementRef(document.documentElement), scrollDispatcher, ngZone, dir);
    this._elementScrolled = new Observable((observer) => this.ngZone.runOutsideAngular(() => fromEvent(document, "scroll").pipe(takeUntil(this._destroyed)).subscribe(observer)));
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  static {
    this.ɵfac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)(ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkVirtualScrollableWindow,
      selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: _CdkVirtualScrollableWindow
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }],
      standalone: true
    }]
  }], () => [{
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static {
    this.ɵfac = function CdkScrollableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkScrollableModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdkScrollableModule,
      imports: [CdkScrollable],
      exports: [CdkScrollable]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static {
    this.ɵfac = function ScrollingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ScrollingModule,
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-services.mjs
var TuiKeyboardService = class _TuiKeyboardService {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.sub = merge(fromEvent(this.doc, "focusout"), fromEvent(this.doc, "mousedown").pipe(filter((e) => Object.is(e.target, this.element)))).subscribe(() => {
      this.show();
    });
    this.inputMode = "";
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.show();
  }
  toggle() {
    if (this.element) {
      this.show();
    } else {
      this.hide();
    }
  }
  hide() {
    const focused = tuiGetNativeFocused(this.doc);
    if (focused?.inputMode === void 0 || this.element) {
      return;
    }
    this.element = focused;
    this.inputMode = focused.inputMode;
    focused.inputMode = "none";
  }
  show() {
    if (!this.element) {
      return;
    }
    this.element.inputMode = "none";
    this.element.inputMode = this.inputMode;
    this.element = void 0;
  }
  static {
    this.ɵfac = function TuiKeyboardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiKeyboardService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiKeyboardService,
      factory: _TuiKeyboardService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiKeyboardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-directives-dropdown-mobile.mjs
function TuiDropdownMobileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("touchstart.prevent", function TuiDropdownMobileComponent_div_0_Template_div_touchstart_prevent_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.close());
    })("waIntersectionObservee", function TuiDropdownMobileComponent_div_0_Template_div_waIntersectionObservee_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView($event[0] && ctx_r2.onIntersection($event[0]));
    });
    ɵɵelementEnd();
  }
}
function TuiDropdownMobileComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h2", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.directive.tuiDropdownMobile, " ");
  }
}
function TuiDropdownMobileComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r5 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r5, " ");
  }
}
var TuiDropdownMobile = class _TuiDropdownMobile {
  constructor() {
    this.isMobile = inject(TUI_IS_MOBILE);
    this.tuiDropdownMobile = "";
  }
  onMouseDown(event) {
    if (!this.isMobile || !tuiIsHTMLElement(event.target) || !event.target.matches("input,textarea")) {
      return;
    }
    event.preventDefault();
    event.target.focus({
      preventScroll: true
    });
  }
  static {
    this.ɵfac = function TuiDropdownMobile_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownMobile)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownMobile,
      selectors: [["", "tuiDropdownMobile", ""]],
      hostVars: 2,
      hostBindings: function TuiDropdownMobile_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown", function TuiDropdownMobile_mousedown_HostBindingHandler($event) {
            return ctx.onMouseDown($event);
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("visibility", "visible");
        }
      },
      inputs: {
        tuiDropdownMobile: "tuiDropdownMobile"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: TUI_DROPDOWN_COMPONENT,
        useFactory: () => inject(TUI_IS_MOBILE) ? TuiDropdownMobileComponent : inject(TUI_DROPDOWN_COMPONENT, {
          skipSelf: true
        })
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownMobile, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownMobile]",
      providers: [{
        provide: TUI_DROPDOWN_COMPONENT,
        useFactory: () => inject(TUI_IS_MOBILE) ? TuiDropdownMobileComponent : inject(TUI_DROPDOWN_COMPONENT, {
          skipSelf: true
        })
      }],
      host: {
        "[style.visibility]": '"visible"',
        "(mousedown)": "onMouseDown($event)"
      }
    }]
  }], null, {
    tuiDropdownMobile: [{
      type: Input
    }]
  });
})();
var GAP = 16;
var TuiDropdownMobileComponent = class _TuiDropdownMobileComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.keyboard = inject(TuiKeyboardService);
    this.doc = inject(DOCUMENT);
    this.scrollTop = this.doc.documentElement.scrollTop;
    this.observer = new ResizeObserver(() => this.refresh(this.doc.defaultView.visualViewport));
    this.directive = inject(TuiDropdownMobile);
    this.dropdown = inject(TuiDropdownDirective);
    this.animation = {
      value: "",
      params: {
        start: "100vh",
        duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED))
      }
    };
    this.observer.observe(this.dropdown.el);
    this.doc.documentElement.style.setProperty("scroll-behavior", "initial");
  }
  ngAfterViewInit() {
    this.el.scrollTop = this.directive.tuiDropdownMobile ? this.el.clientHeight : 0;
  }
  ngOnDestroy() {
    this.observer.disconnect();
    this.doc.body.classList.remove("t-dropdown-mobile");
    this.doc.body.style.removeProperty("--t-root-top");
    this.doc.documentElement.scrollTop = this.scrollTop;
    this.doc.documentElement.style.removeProperty("scroll-behavior");
    if (this.focused) {
      this.keyboard.hide();
    }
  }
  onClick(event) {
    if (tuiIsElement(event.target) && !this.el.contains(event.target) && (!this.dropdown.el.contains(event.target) || event.target.matches("input,textarea"))) {
      event.stopPropagation();
    }
  }
  onSwipe({
    direction
  }, el) {
    if (direction === "bottom" && el.getBoundingClientRect().bottom > Number(this.doc.defaultView?.innerHeight)) {
      this.close();
    }
  }
  onIntersection({
    isIntersecting
  }) {
    if (isIntersecting) {
      this.close();
    }
  }
  close() {
    this.dropdown.toggle(false);
  }
  refresh({
    offsetTop,
    height
  }) {
    this.doc.body.style.removeProperty("--t-root-top");
    if (!this.focused || this.directive.tuiDropdownMobile || !this.doc.documentElement.style.getPropertyValue("scroll-behavior")) {
      return;
    }
    this.doc.documentElement.scrollTop = 0;
    const rect = this.dropdown.el.getBoundingClientRect();
    const top = offsetTop + GAP - rect.top;
    const offset = rect.height + GAP * 2;
    this.el.style.setProperty("top", tuiPx(offsetTop + offset));
    this.el.style.setProperty("height", tuiPx(height - offset));
    this.doc.body.classList.add("t-dropdown-mobile");
    this.doc.body.style.setProperty("--t-root-top", tuiPx(top));
  }
  get focused() {
    return this.dropdown.el.contains(tuiGetNativeFocused(this.doc));
  }
  static {
    this.ɵfac = function TuiDropdownMobileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownMobileComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDropdownMobileComponent,
      selectors: [["tui-dropdown-mobile"]],
      hostVars: 4,
      hostBindings: function TuiDropdownMobileComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click.silent.capture", function TuiDropdownMobileComponent_click_silent_capture_HostBindingHandler($event) {
            return ctx.onClick($event);
          }, false, ɵɵresolveDocument)("window>scroll.silent.capture", function TuiDropdownMobileComponent_window_scroll_silent_capture_HostBindingHandler($event) {
            return ctx.refresh($event.currentTarget.visualViewport);
          })("visualViewport>resize.silent", function TuiDropdownMobileComponent_visualViewport_resize_silent_HostBindingHandler($event) {
            return ctx.refresh($event.target);
          })("visualViewport>scroll.silent", function TuiDropdownMobileComponent_visualViewport_scroll_silent_HostBindingHandler($event) {
            return ctx.refresh($event.target);
          });
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiFadeIn", ctx.animation)("@tuiSlideInTop", ctx.animation);
          ɵɵclassProp("_sheet", ctx.directive.tuiDropdownMobile);
        }
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([TuiActiveZone]), ɵɵStandaloneFeature],
      decls: 6,
      vars: 3,
      consts: [["container", ""], ["waIntersectionObserver", "", "waIntersectionThreshold", "1", "class", "t-filler", 3, "touchstart.prevent", "waIntersectionObservee", 4, "ngIf"], [1, "t-container", 3, "tuiSwipe"], ["class", "t-heading", 4, "ngIf"], [1, "t-content"], [4, "polymorpheusOutlet"], ["waIntersectionObserver", "", "waIntersectionThreshold", "1", 1, "t-filler", 3, "touchstart.prevent", "waIntersectionObservee"], [1, "t-heading"]],
      template: function TuiDropdownMobileComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵtemplate(0, TuiDropdownMobileComponent_div_0_Template, 1, 0, "div", 1);
          ɵɵelementStart(1, "div", 2, 0);
          ɵɵlistener("tuiSwipe", function TuiDropdownMobileComponent_Template_div_tuiSwipe_1_listener($event) {
            ɵɵrestoreView(_r1);
            const container_r4 = ɵɵreference(2);
            return ɵɵresetView(ctx.onSwipe($event, container_r4));
          });
          ɵɵtemplate(3, TuiDropdownMobileComponent_h2_3_Template, 2, 1, "h2", 3);
          ɵɵelementStart(4, "div", 4);
          ɵɵtemplate(5, TuiDropdownMobileComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.directive.tuiDropdownMobile);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.directive.tuiDropdownMobile);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.dropdown.content);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiSwipe, WaIntersectionObserverDirective, WaIntersectionObservee],
      styles: ['tui-dropdown-mobile:not(._sheet){scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;inline-size:100%;block-size:100%;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;visibility:visible!important;transform:translateZ(0);background:var(--tui-background-base);overscroll-behavior:contain;overflow:auto;box-shadow:0 -.5rem .5rem var(--tui-background-base),0 10rem var(--tui-background-base),0 20rem var(--tui-background-base),0 30rem var(--tui-background-base)}tui-dropdown-mobile:not(._sheet)::-webkit-scrollbar,tui-dropdown-mobile:not(._sheet)::-webkit-scrollbar-thumb{display:none}tui-dropdown-mobile:not(._sheet):after{content:"";display:block;block-size:1px}tui-dropdown-mobile:not(._sheet)>.t-container{scrollbar-width:none;-ms-overflow-style:none;position:sticky;top:0;block-size:100%;overflow:auto;margin:0 .75rem;touch-action:pan-y!important}tui-dropdown-mobile:not(._sheet)>.t-container::-webkit-scrollbar,tui-dropdown-mobile:not(._sheet)>.t-container::-webkit-scrollbar-thumb{display:none}tui-dropdown-mobile:not(._sheet) [tuiDropdownButton][tuiDropdownButton]{position:fixed;right:1rem;bottom:1rem;display:inline-flex}tui-dropdown-mobile._sheet{position:fixed;top:0;left:0;bottom:0;right:0;scrollbar-width:none;-ms-overflow-style:none;overflow:auto;background:var(--tui-service-backdrop);box-shadow:0 -80vh 0 5rem var(--tui-service-backdrop);overflow-y:scroll;scroll-snap-type:y mandatory;overscroll-behavior:none}tui-dropdown-mobile._sheet::-webkit-scrollbar,tui-dropdown-mobile._sheet::-webkit-scrollbar-thumb{display:none}tui-dropdown-mobile._sheet>.t-filler{block-size:100%;scroll-snap-stop:always;scroll-snap-align:start}tui-dropdown-mobile._sheet>.t-container{display:flex;max-block-size:calc(100% - 1rem);flex-direction:column;border-top-left-radius:1rem;border-top-right-radius:1rem;padding:0 .5rem;scroll-snap-stop:always;scroll-snap-align:start;background:var(--tui-background-elevation-1)}tui-dropdown-mobile._sheet>.t-container>.t-heading{position:relative;margin:0;padding:2rem .5rem .75rem;font:var(--tui-font-heading-6)}tui-dropdown-mobile._sheet>.t-container>.t-heading:before{content:"";position:absolute;left:50%;top:.75rem;inline-size:2rem;block-size:.25rem;border-radius:1rem;background:var(--tui-background-neutral-2);transform:translate(-50%,-50%)}tui-dropdown-mobile._sheet>.t-container>.t-content{scrollbar-width:none;-ms-overflow-style:none;overflow:auto}tui-dropdown-mobile._sheet>.t-container>.t-content::-webkit-scrollbar,tui-dropdown-mobile._sheet>.t-container>.t-content::-webkit-scrollbar-thumb{display:none}.t-dropdown-mobile{touch-action:none;visibility:hidden}.t-dropdown-mobile *{touch-action:inherit;visibility:inherit}.t-dropdown-mobile tui-root{visibility:visible}.t-dropdown-mobile tui-root .t-root-content{visibility:hidden}\n'],
      encapsulation: 2,
      data: {
        animation: [tuiSlideInTop, tuiFadeIn]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownMobileComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dropdown-mobile",
      imports: [NgIf, PolymorpheusOutlet, PolymorpheusTemplate, TuiSwipe, WaIntersectionObserver],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiSlideInTop, tuiFadeIn],
      hostDirectives: [TuiActiveZone],
      host: {
        "[@tuiFadeIn]": "animation",
        "[@tuiSlideInTop]": "animation",
        "[class._sheet]": "directive.tuiDropdownMobile",
        "(document:click.silent.capture)": "onClick($event)",
        "(window>scroll.silent.capture)": "refresh($event.currentTarget.visualViewport)",
        "(visualViewport>resize.silent)": "refresh($event.target)",
        "(visualViewport>scroll.silent)": "refresh($event.target)"
      },
      template: '<div\n    *ngIf="directive.tuiDropdownMobile"\n    waIntersectionObserver\n    waIntersectionThreshold="1"\n    class="t-filler"\n    (touchstart.prevent)="close()"\n    (waIntersectionObservee)="$event[0] && onIntersection($event[0])"\n></div>\n<div\n    #container\n    class="t-container"\n    (tuiSwipe)="onSwipe($event, container)"\n>\n    <h2\n        *ngIf="directive.tuiDropdownMobile"\n        class="t-heading"\n    >\n        {{ directive.tuiDropdownMobile }}\n    </h2>\n    <div class="t-content">\n        <ng-container *polymorpheusOutlet="dropdown.content as text">\n            {{ text }}\n        </ng-container>\n    </div>\n</div>\n',
      styles: ['tui-dropdown-mobile:not(._sheet){scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;inline-size:100%;block-size:100%;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;visibility:visible!important;transform:translateZ(0);background:var(--tui-background-base);overscroll-behavior:contain;overflow:auto;box-shadow:0 -.5rem .5rem var(--tui-background-base),0 10rem var(--tui-background-base),0 20rem var(--tui-background-base),0 30rem var(--tui-background-base)}tui-dropdown-mobile:not(._sheet)::-webkit-scrollbar,tui-dropdown-mobile:not(._sheet)::-webkit-scrollbar-thumb{display:none}tui-dropdown-mobile:not(._sheet):after{content:"";display:block;block-size:1px}tui-dropdown-mobile:not(._sheet)>.t-container{scrollbar-width:none;-ms-overflow-style:none;position:sticky;top:0;block-size:100%;overflow:auto;margin:0 .75rem;touch-action:pan-y!important}tui-dropdown-mobile:not(._sheet)>.t-container::-webkit-scrollbar,tui-dropdown-mobile:not(._sheet)>.t-container::-webkit-scrollbar-thumb{display:none}tui-dropdown-mobile:not(._sheet) [tuiDropdownButton][tuiDropdownButton]{position:fixed;right:1rem;bottom:1rem;display:inline-flex}tui-dropdown-mobile._sheet{position:fixed;top:0;left:0;bottom:0;right:0;scrollbar-width:none;-ms-overflow-style:none;overflow:auto;background:var(--tui-service-backdrop);box-shadow:0 -80vh 0 5rem var(--tui-service-backdrop);overflow-y:scroll;scroll-snap-type:y mandatory;overscroll-behavior:none}tui-dropdown-mobile._sheet::-webkit-scrollbar,tui-dropdown-mobile._sheet::-webkit-scrollbar-thumb{display:none}tui-dropdown-mobile._sheet>.t-filler{block-size:100%;scroll-snap-stop:always;scroll-snap-align:start}tui-dropdown-mobile._sheet>.t-container{display:flex;max-block-size:calc(100% - 1rem);flex-direction:column;border-top-left-radius:1rem;border-top-right-radius:1rem;padding:0 .5rem;scroll-snap-stop:always;scroll-snap-align:start;background:var(--tui-background-elevation-1)}tui-dropdown-mobile._sheet>.t-container>.t-heading{position:relative;margin:0;padding:2rem .5rem .75rem;font:var(--tui-font-heading-6)}tui-dropdown-mobile._sheet>.t-container>.t-heading:before{content:"";position:absolute;left:50%;top:.75rem;inline-size:2rem;block-size:.25rem;border-radius:1rem;background:var(--tui-background-neutral-2);transform:translate(-50%,-50%)}tui-dropdown-mobile._sheet>.t-container>.t-content{scrollbar-width:none;-ms-overflow-style:none;overflow:auto}tui-dropdown-mobile._sheet>.t-container>.t-content::-webkit-scrollbar,tui-dropdown-mobile._sheet>.t-container>.t-content::-webkit-scrollbar-thumb{display:none}.t-dropdown-mobile{touch-action:none;visibility:hidden}.t-dropdown-mobile *{touch-action:inherit;visibility:inherit}.t-dropdown-mobile tui-root{visibility:visible}.t-dropdown-mobile tui-root .t-root-content{visibility:hidden}\n']
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-directives-elastic-sticky.mjs
var TuiElasticStickyService = class _TuiElasticStickyService extends Observable {
  constructor() {
    super((subscriber) => {
      const subscription = new Subscription();
      afterNextRender(() => {
        const host = this.el.closest(SCROLL_REF_SELECTOR) || this.scrollRef;
        const {
          offsetTop
        } = tuiGetElementOffset(host, this.el);
        const {
          offsetHeight
        } = this.el;
        const teardown = tuiScrollFrom(host).pipe(map(() => Math.max(1 - Math.max(Math.round(host.scrollTop) - offsetTop, 0) / offsetHeight, 0)), distinctUntilChanged(), tuiZoneOptimized(this.zone), takeUntilDestroyed(this.destroyRef)).subscribe(subscriber);
        if (!subscription.closed) {
          subscription.add(teardown);
        } else {
          teardown.unsubscribe();
        }
      }, {
        injector: this.injector
      });
      return subscription;
    });
    this.injector = inject(INJECTOR$1);
    this.el = tuiInjectElement();
    this.scrollRef = inject(TUI_SCROLL_REF).nativeElement;
    this.destroyRef = inject(DestroyRef);
    this.zone = inject(NgZone);
  }
  static {
    this.ɵfac = function TuiElasticStickyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiElasticStickyService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiElasticStickyService,
      factory: _TuiElasticStickyService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElasticStickyService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiElasticSticky = class _TuiElasticSticky {
  constructor() {
    this.tuiElasticSticky = inject(TuiElasticStickyService);
  }
  static {
    this.ɵfac = function TuiElasticSticky_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiElasticSticky)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiElasticSticky,
      selectors: [["", "tuiElasticSticky", ""]],
      outputs: {
        tuiElasticSticky: "tuiElasticSticky"
      },
      exportAs: ["tuiElasticSticky"],
      standalone: true,
      features: [ɵɵProvidersFeature([TuiElasticStickyService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElasticSticky, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiElasticSticky]",
      providers: [TuiElasticStickyService],
      exportAs: "tuiElasticSticky"
    }]
  }], null, {
    tuiElasticSticky: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-components-sheet-dialog.mjs
var _c02 = ["stops"];
function TuiSheetDialogComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8, 0);
  }
  if (rf & 2) {
    const stop_r1 = ctx.$implicit;
    ɵɵstyleProp("margin-top", stop_r1);
  }
}
function TuiSheetDialogComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 9);
  }
}
function TuiSheetDialogComponent_h2_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const label_r2 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", label_r2, " ");
  }
}
function TuiSheetDialogComponent_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h2", 10);
    ɵɵtemplate(1, TuiSheetDialogComponent_h2_4_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r2.context.id);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.context.label)("polymorpheusOutletContext", ctx_r2.context);
  }
}
function TuiSheetDialogComponent_ng_container_6_Template(rf, ctx) {
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
function isCloseable() {
  return this.context.closeable === true;
}
var TuiSheetDialogComponent = class _TuiSheetDialogComponent {
  constructor() {
    this.stops = EMPTY_QUERY;
    this.el = tuiInjectElement();
    this.pointers = 0;
    this.slideInTop = {
      value: "",
      params: {
        start: "100vh",
        duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED))
      }
    };
    this.context = injectContext();
  }
  ngAfterViewInit() {
    this.el.scrollTop = [...this.stops.map((e) => e.nativeElement.offsetTop - this.context.offset), this.el.clientHeight ?? Infinity][this.context.initial] ?? 0;
  }
  close() {
    this.context.$implicit.complete();
  }
  onPointerChange(delta) {
    this.pointers += delta;
    if (!this.pointers && this.el.scrollTop <= 0) {
      this.close();
    }
  }
  static {
    this.ɵfac = function TuiSheetDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSheetDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSheetDialogComponent,
      selectors: [["tui-sheet-dialog"]],
      viewQuery: function TuiSheetDialogComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c02, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stops = _t);
        }
      },
      hostVars: 5,
      hostBindings: function TuiSheetDialogComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("touchstart.passive.silent", function TuiSheetDialogComponent_touchstart_passive_silent_HostBindingHandler() {
            return ctx.onPointerChange(1);
          }, false, ɵɵresolveDocument)("touchend.silent", function TuiSheetDialogComponent_touchend_silent_HostBindingHandler() {
            return ctx.onPointerChange(-1);
          }, false, ɵɵresolveDocument)("touchcancel.silent", function TuiSheetDialogComponent_touchcancel_silent_HostBindingHandler() {
            return ctx.onPointerChange(-1);
          }, false, ɵɵresolveDocument)("scroll.silent", function TuiSheetDialogComponent_scroll_silent_HostBindingHandler() {
            return ctx.onPointerChange(0);
          })("click.self", function TuiSheetDialogComponent_click_self_HostBindingHandler() {
            return ctx.close();
          });
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiSlideInTop", ctx.slideInTop);
          ɵɵstyleProp("--tui-offset", ctx.context.offset, "px");
          ɵɵclassProp("_closeable", ctx.context.closeable === true);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 7,
      vars: 5,
      consts: [["stops", ""], [1, "t-stops"], ["class", "t-stop", 3, "margin-top", 4, "ngFor", "ngForOf"], [1, "t-sheet"], ["class", "t-top", 4, "ngIf"], ["class", "t-heading", 3, "id", 4, "ngIf"], [1, "t-content"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-stop"], [1, "t-top"], [1, "t-heading", 3, "id"]],
      template: function TuiSheetDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1);
          ɵɵtemplate(1, TuiSheetDialogComponent_div_1_Template, 2, 2, "div", 2);
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 3);
          ɵɵtemplate(3, TuiSheetDialogComponent_div_3_Template, 1, 0, "div", 4)(4, TuiSheetDialogComponent_h2_4_Template, 2, 3, "h2", 5);
          ɵɵelementStart(5, "div", 6);
          ɵɵtemplate(6, TuiSheetDialogComponent_ng_container_6_Template, 2, 1, "ng-container", 7);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.context.stops);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.context.bar);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.context.label);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
        }
      },
      dependencies: [NgForOf, NgIf, PolymorpheusOutlet],
      styles: ['[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;display:flex;inline-size:100%;max-inline-size:40rem;block-size:calc(100% - var(--tui-offset));flex-direction:column;font:var(--tui-font-text-m);overflow-y:scroll;scroll-snap-type:y mandatory;margin:var(--tui-offset) auto 0;border-radius:.75rem .75rem 0 0}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";z-index:-1}._closeable[_nghost-%COMP%]{display:block}._closeable[_nghost-%COMP%]   .t-stops[_ngcontent-%COMP%]{display:flex}.t-stops[_ngcontent-%COMP%]{display:none;block-size:100%;scroll-snap-stop:always;scroll-snap-align:start;pointer-events:none}.t-stop[_ngcontent-%COMP%]{position:relative;top:env(safe-area-inset-bottom);scroll-snap-stop:normal;scroll-snap-align:start;block-size:1rem;inline-size:1rem}.t-sheet[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;inline-size:100%;box-shadow:var(--tui-shadow-small);border-radius:inherit;padding:0 1rem;margin-block-start:auto;background:var(--tui-background-elevation-1);box-sizing:border-box;scroll-snap-stop:always;scroll-snap-align:start}.t-sheet[_ngcontent-%COMP%]::-webkit-scrollbar, .t-sheet[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-top[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;block-size:1.5rem;margin:0 -1rem;border-radius:inherit;background:var(--tui-background-elevation-1)}.t-top[_ngcontent-%COMP%]:after{content:"";position:absolute;top:.5rem;left:50%;inline-size:2rem;block-size:.25rem;transform:translate(-50%);background:var(--tui-background-neutral-2);border-radius:1rem}.t-heading[_ngcontent-%COMP%]{position:sticky;top:1.5rem;z-index:1;margin:0 -1rem;padding:.75rem 1rem;font:var(--tui-font-heading-6);background:var(--tui-background-elevation-1)}.t-heading[_ngcontent-%COMP%]:first-child{top:0;border-radius:inherit}.t-heading[_ngcontent-%COMP%]:last-child{padding-block-end:1.5rem}.t-content[_ngcontent-%COMP%]{position:relative;isolation:isolate;padding-block-end:calc(1.5em + env(safe-area-inset-bottom))}.t-content[_ngcontent-%COMP%]:after{content:"";position:relative;top:calc(1.5em + env(safe-area-inset-bottom));z-index:-1;display:block;scroll-snap-stop:always;scroll-snap-align:end;border-image:conic-gradient(var(--tui-background-elevation-1) 0 0) fill 0/0/0 100vh 100vh}'],
      data: {
        animation: [tuiSlideInTop]
      },
      changeDetection: 0
    });
  }
};
__decorate([shouldCall(isCloseable)], TuiSheetDialogComponent.prototype, "close", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-sheet-dialog",
      imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiSlideInTop],
      host: {
        "[@tuiSlideInTop]": "slideInTop",
        "[style.--tui-offset.px]": "context.offset",
        "[class._closeable]": "context.closeable === true",
        "(document:touchstart.passive.silent)": "onPointerChange(1)",
        "(document:touchend.silent)": "onPointerChange(-1)",
        "(document:touchcancel.silent)": "onPointerChange(-1)",
        "(scroll.silent)": "onPointerChange(0)",
        "(click.self)": "close()"
      },
      template: '<div class="t-stops">\n    <div\n        *ngFor="let stop of context.stops"\n        #stops\n        class="t-stop"\n        [style.margin-top]="stop"\n    ></div>\n</div>\n<div class="t-sheet">\n    <div\n        *ngIf="context.bar"\n        class="t-top"\n    ></div>\n    <h2\n        *ngIf="context.label"\n        class="t-heading"\n        [id]="context.id"\n    >\n        <ng-container *polymorpheusOutlet="context.label as label; context: context">\n            {{ label }}\n        </ng-container>\n    </h2>\n    <div class="t-content">\n        <ng-container *polymorpheusOutlet="context.content as text; context: context">\n            {{ text }}\n        </ng-container>\n    </div>\n</div>\n',
      styles: [':host{scrollbar-width:none;-ms-overflow-style:none;display:flex;inline-size:100%;max-inline-size:40rem;block-size:calc(100% - var(--tui-offset));flex-direction:column;font:var(--tui-font-text-m);overflow-y:scroll;scroll-snap-type:y mandatory;margin:var(--tui-offset) auto 0;border-radius:.75rem .75rem 0 0}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";z-index:-1}:host._closeable{display:block}:host._closeable .t-stops{display:flex}.t-stops{display:none;block-size:100%;scroll-snap-stop:always;scroll-snap-align:start;pointer-events:none}.t-stop{position:relative;top:env(safe-area-inset-bottom);scroll-snap-stop:normal;scroll-snap-align:start;block-size:1rem;inline-size:1rem}.t-sheet{scrollbar-width:none;-ms-overflow-style:none;inline-size:100%;box-shadow:var(--tui-shadow-small);border-radius:inherit;padding:0 1rem;margin-block-start:auto;background:var(--tui-background-elevation-1);box-sizing:border-box;scroll-snap-stop:always;scroll-snap-align:start}.t-sheet::-webkit-scrollbar,.t-sheet::-webkit-scrollbar-thumb{display:none}.t-top{position:sticky;top:0;z-index:1;block-size:1.5rem;margin:0 -1rem;border-radius:inherit;background:var(--tui-background-elevation-1)}.t-top:after{content:"";position:absolute;top:.5rem;left:50%;inline-size:2rem;block-size:.25rem;transform:translate(-50%);background:var(--tui-background-neutral-2);border-radius:1rem}.t-heading{position:sticky;top:1.5rem;z-index:1;margin:0 -1rem;padding:.75rem 1rem;font:var(--tui-font-heading-6);background:var(--tui-background-elevation-1)}.t-heading:first-child{top:0;border-radius:inherit}.t-heading:last-child{padding-block-end:1.5rem}.t-content{position:relative;isolation:isolate;padding-block-end:calc(1.5em + env(safe-area-inset-bottom))}.t-content:after{content:"";position:relative;top:calc(1.5em + env(safe-area-inset-bottom));z-index:-1;display:block;scroll-snap-stop:always;scroll-snap-align:end;border-image:conic-gradient(var(--tui-background-elevation-1) 0 0) fill 0/0/0 100vh 100vh}\n']
    }]
  }], null, {
    stops: [{
      type: ViewChildren,
      args: ["stops"]
    }],
    close: []
  });
})();
var TUI_SHEET_DIALOG_DEFAULT_OPTIONS = {
  label: "",
  stops: [],
  initial: 0,
  offset: 16,
  closeable: true,
  data: void 0,
  bar: true
};
var TUI_SHEET_DIALOG_OPTIONS = tuiCreateToken(TUI_SHEET_DIALOG_DEFAULT_OPTIONS);
function tuiSheetDialogOptionsProvider(options) {
  return tuiProvideOptions(TUI_SHEET_DIALOG_OPTIONS, options, TUI_SHEET_DIALOG_DEFAULT_OPTIONS);
}
var THEME = "#404040";
var TuiSheetDialogService = class _TuiSheetDialogService extends TuiPopoverService {
  constructor() {
    super(...arguments);
    this.theme = inject(TuiThemeColorService);
    this.initial = this.theme.color;
    this.$ = this.items$.pipe(startWith([]), pairwise(), takeUntilDestroyed()).subscribe(([prev, next]) => {
      if (!prev.length && next.length) {
        this.initial = this.theme.color;
        this.theme.color = THEME;
      }
      if (!next.length && prev.length) {
        this.theme.color = this.initial;
      }
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSheetDialogService_BaseFactory;
      return function TuiSheetDialogService_Factory(__ngFactoryType__) {
        return (ɵTuiSheetDialogService_BaseFactory || (ɵTuiSheetDialogService_BaseFactory = ɵɵgetInheritedFactory(_TuiSheetDialogService)))(__ngFactoryType__ || _TuiSheetDialogService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiSheetDialogService,
      factory: () => (() => new _TuiSheetDialogService(TUI_DIALOGS, TuiSheetDialogComponent, inject(TUI_SHEET_DIALOG_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiSheetDialogService(TUI_DIALOGS, TuiSheetDialogComponent, inject(TUI_SHEET_DIALOG_OPTIONS))
    }]
  }], null, null);
})();
var TuiSheetDialog = class _TuiSheetDialog extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSheetDialog_BaseFactory;
      return function TuiSheetDialog_Factory(__ngFactoryType__) {
        return (ɵTuiSheetDialog_BaseFactory || (ɵTuiSheetDialog_BaseFactory = ɵɵgetInheritedFactory(_TuiSheetDialog)))(__ngFactoryType__ || _TuiSheetDialog);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSheetDialog,
      selectors: [["ng-template", "tuiSheetDialog", ""]],
      inputs: {
        options: [0, "tuiSheetDialogOptions", "options"],
        open: [0, "tuiSheetDialog", "open"]
      },
      outputs: {
        openChange: "tuiSheetDialogChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiSheetDialogService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetDialog, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiSheetDialog]",
      inputs: ["options: tuiSheetDialogOptions", "open: tuiSheetDialog"],
      outputs: ["openChange: tuiSheetDialogChange"],
      providers: [tuiAsPopover(TuiSheetDialogService)]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-directives-responsive-dialog.mjs
var TuiResponsiveDialogService = class _TuiResponsiveDialogService {
  constructor() {
    this.isMobile = inject(TUI_IS_MOBILE);
    this.dialogs = inject(TuiDialogService);
    this.sheets = inject(TuiSheetDialogService);
  }
  open(content, options = {}) {
    return this.isMobile ? this.sheets.open(content, options) : this.dialogs.open(content, __spreadProps(__spreadValues({}, options), {
      label: tuiIsString(options.label) ? options.label : ""
    }));
  }
  static {
    this.ɵfac = function TuiResponsiveDialogService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiResponsiveDialogService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiResponsiveDialogService,
      factory: _TuiResponsiveDialogService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResponsiveDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiResponsiveDialog = class _TuiResponsiveDialog extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiResponsiveDialog_BaseFactory;
      return function TuiResponsiveDialog_Factory(__ngFactoryType__) {
        return (ɵTuiResponsiveDialog_BaseFactory || (ɵTuiResponsiveDialog_BaseFactory = ɵɵgetInheritedFactory(_TuiResponsiveDialog)))(__ngFactoryType__ || _TuiResponsiveDialog);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiResponsiveDialog,
      selectors: [["ng-template", "tuiResponsiveDialog", ""]],
      inputs: {
        options: [0, "tuiResponsiveDialogOptions", "options"],
        open: [0, "tuiResponsiveDialog", "open"]
      },
      outputs: {
        openChange: "tuiResponsiveDialogChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiResponsiveDialogService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResponsiveDialog, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiResponsiveDialog]",
      inputs: ["options: tuiResponsiveDialogOptions", "open: tuiResponsiveDialog"],
      outputs: ["openChange: tuiResponsiveDialogChange"],
      providers: [tuiAsPopover(TuiResponsiveDialogService)]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-directives-ripple.mjs
var TO_KEYFRAMES = [{
  transform: "scale(0)",
  opacity: "0.12"
}, {
  opacity: "0.12"
}];
var FROM_KEYFRAMES = [{
  opacity: "0.12"
}, {
  opacity: "0"
}];
var TuiRippleStyles = class _TuiRippleStyles {
  static {
    this.ɵfac = function TuiRippleStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRippleStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRippleStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-ripple-styles"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiRippleStyles_Template(rf, ctx) {
      },
      styles: [".tui-ripple{position:absolute;z-index:100;opacity:.12;border-radius:100%;background:var(--tui-ripple-background, currentColor);animation-fill-mode:forwards;pointer-events:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRippleStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-ripple-styles"
      },
      styles: [".tui-ripple{position:absolute;z-index:100;opacity:.12;border-radius:100%;background:var(--tui-ripple-background, currentColor);animation-fill-mode:forwards;pointer-events:none}\n"]
    }]
  }], null, null);
})();
var TuiRipple = class _TuiRipple {
  constructor() {
    this.document = inject(DOCUMENT);
    this.destroyRef = inject(DestroyRef);
    this.animationOptions = {
      duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED))
    };
    this.nothing = tuiWithStyles(TuiRippleStyles);
    this.tuiRipple = "";
  }
  start(x, y, target, el) {
    const element = this.tuiRipple ? target.closest(this.tuiRipple) : el;
    if (!tuiIsHTMLElement(element)) {
      return;
    }
    const ripple = this.createRipple(x, y, element.getBoundingClientRect());
    const touchEnd$ = merge(tuiTypedFromEvent(element, "pointerup"), tuiTypedFromEvent(element, "pointercancel"), tuiTypedFromEvent(element, "pointermove"));
    element.appendChild(ripple);
    const animationEndOn$ = tuiTypedFromEvent(ripple.animate(TO_KEYFRAMES, this.animationOptions), "finish");
    race(touchEnd$.pipe(switchMap(() => animationEndOn$)), animationEndOn$.pipe(switchMap(() => touchEnd$))).pipe(first(), switchMap(() => tuiTypedFromEvent(ripple.animate(FROM_KEYFRAMES, this.animationOptions), "finish")), first(), tap(() => element.removeChild(ripple)), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  createRipple(clientX, clientY, {
    width,
    height,
    top,
    left
  }) {
    const ripple = this.document.createElement("div");
    const radius = Math.sqrt(width * width + height * height);
    const dimension = radius * 2;
    const x = clientX - left - radius;
    const y = clientY - top - radius;
    Object.assign(ripple.style, {
      position: "absolute",
      top: tuiPx(y),
      left: tuiPx(x),
      width: tuiPx(dimension),
      height: tuiPx(dimension),
      zIndex: 100,
      opacity: 0.12,
      borderRadius: "100%",
      background: "var(--tui-ripple-background, currentColor)",
      animationFillMode: "forwards",
      pointerEvents: "none"
    });
    return ripple;
  }
  static {
    this.ɵfac = function TuiRipple_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRipple)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiRipple,
      selectors: [["", "tuiRipple", ""]],
      hostBindings: function TuiRipple_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.silent", function TuiRipple_pointerdown_silent_HostBindingHandler($event) {
            return ctx.start($event.clientX, $event.clientY, $event.target, $event.currentTarget);
          });
        }
      },
      inputs: {
        tuiRipple: "tuiRipple"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRipple, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiRipple]",
      host: {
        "(pointerdown.silent)": "start($event.clientX, $event.clientY, $event.target, $event.currentTarget)"
      }
    }]
  }], null, {
    tuiRipple: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-directives-sidebar.mjs
var _c03 = ["tuiSidebar", ""];
function TuiSidebarComponent_ng_container_1_Template(rf, ctx) {
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
var TuiSidebarDirective = class _TuiSidebarDirective extends PolymorpheusTemplate {
  constructor() {
    super(...arguments);
    this.injector = inject(INJECTOR$1);
    this.service = inject(TuiPopupService);
    this.component = new PolymorpheusComponent(TuiSidebarComponent, this.injector);
    this.sidebarRef = null;
    this.direction = "left";
    this.autoWidth = false;
    this.content = inject(TemplateRef);
  }
  set tuiSidebar(open) {
    if (open) {
      this.show();
    } else {
      this.hide();
    }
  }
  ngOnDestroy() {
    this.hide();
  }
  show() {
    if (this.sidebarRef !== null) {
      return;
    }
    this.sidebarRef = this.service.add(this.component);
    this.sidebarRef.changeDetectorRef.detectChanges();
  }
  hide() {
    if (this.sidebarRef === null) {
      return;
    }
    this.service.remove(this.sidebarRef);
    this.sidebarRef = null;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSidebarDirective_BaseFactory;
      return function TuiSidebarDirective_Factory(__ngFactoryType__) {
        return (ɵTuiSidebarDirective_BaseFactory || (ɵTuiSidebarDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiSidebarDirective)))(__ngFactoryType__ || _TuiSidebarDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSidebarDirective,
      selectors: [["", "tuiSidebar", ""]],
      inputs: {
        direction: [0, "tuiSidebarDirection", "direction"],
        autoWidth: [0, "tuiSidebarAutoWidth", "autoWidth"],
        tuiSidebar: "tuiSidebar"
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSidebarDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiSidebar]"
    }]
  }], null, {
    direction: [{
      type: Input,
      args: ["tuiSidebarDirection"]
    }],
    autoWidth: [{
      type: Input,
      args: ["tuiSidebarAutoWidth"]
    }],
    tuiSidebar: [{
      type: Input
    }]
  });
})();
var TuiSidebarComponent = class _TuiSidebarComponent {
  constructor() {
    this.directive = inject(TuiSidebarDirective);
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.left = __spreadProps(__spreadValues({}, this.options), {
      value: "left"
    });
    this.right = __spreadProps(__spreadValues({}, this.options), {
      value: "right"
    });
  }
  ngDoCheck() {
    this.directive.check();
  }
  get animation() {
    return this.direction === "left" ? this.left : this.right;
  }
  get direction() {
    return this.directive.direction;
  }
  get content() {
    return this.directive.content;
  }
  get autoWidth() {
    return this.directive.autoWidth;
  }
  static {
    this.ɵfac = function TuiSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSidebarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSidebarComponent,
      selectors: [["aside", "tuiSidebar", ""]],
      hostVars: 3,
      hostBindings: function TuiSidebarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiSlideIn", ctx.animation);
          ɵɵclassMap("t-" + ctx.direction);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c03,
      decls: 2,
      vars: 3,
      consts: [["tuiActiveZone", "", 1, "t-wrapper"], [4, "polymorpheusOutlet"]],
      template: function TuiSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, TuiSidebarComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassProp("t-wrapper_auto-width", ctx.autoWidth);
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.content);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiActiveZone],
      styles: ['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;content:"";block-size:100%;background:#00000061;animation:tuiFadeIn var(--tui-duration)}[_nghost-%COMP%]:before{left:-100%;inline-size:200%}[_nghost-%COMP%]:after{left:100%}.ng-animating[_nghost-%COMP%]:before, .ng-animating[_nghost-%COMP%]:after{opacity:0;transition:opacity var(--tui-duration)}.t-right[_nghost-%COMP%]{justify-content:flex-end}.t-left[_nghost-%COMP%]{justify-content:flex-start}.t-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;background:var(--tui-background-base);box-shadow:0 10rem var(--tui-background-base);inline-size:17.25rem}.t-wrapper_auto-width[_ngcontent-%COMP%]{inline-size:auto}'],
      data: {
        animation: [tuiSlideIn]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSidebarComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "aside[tuiSidebar]",
      imports: [PolymorpheusOutlet, TuiActiveZone],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiSlideIn],
      host: {
        "[class]": '"t-" + direction',
        "[@tuiSlideIn]": "animation"
      },
      template: '<div\n    tuiActiveZone\n    class="t-wrapper"\n    [class.t-wrapper_auto-width]="autoWidth"\n>\n    <ng-container *polymorpheusOutlet="content as text">\n        {{ text }}\n    </ng-container>\n</div>\n',
      styles: [':host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex}:host:before,:host:after{position:absolute;top:0;left:0;inline-size:100%;content:"";block-size:100%;background:#00000061;animation:tuiFadeIn var(--tui-duration)}:host:before{left:-100%;inline-size:200%}:host:after{left:100%}:host.ng-animating:before,:host.ng-animating:after{opacity:0;transition:opacity var(--tui-duration)}:host.t-right{justify-content:flex-end}:host.t-left{justify-content:flex-start}.t-wrapper{position:relative;display:flex;flex-direction:column;background:var(--tui-background-base);box-shadow:0 10rem var(--tui-background-base);inline-size:17.25rem}.t-wrapper_auto-width{inline-size:auto}\n']
    }]
  }], null, null);
})();
var TuiSidebar = [TuiSidebarComponent, TuiSidebarDirective];

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-directives-touchable.mjs
var STYLE = {
  transform: "scale(0.95)",
  opacity: "0.6",
  background: "rgba(146, 153, 162, 0.12)"
};
function tuiFindTouchIndex(touches, id) {
  for (let i = 0; i < touches.length; i++) {
    if (touches[i]?.identifier === id) {
      return i;
    }
  }
  return -1;
}
var TuiTouchable = class _TuiTouchable {
  constructor() {
    this.isIOS = inject(TUI_IS_IOS);
    this.el = tuiInjectElement();
    this.tuiTouchable = "";
    if (!this.isIOS) {
      return;
    }
    tuiTypedFromEvent(this.el, "touchstart", {
      passive: true
    }).pipe(tap(() => this.onTouchStart()), map(({
      touches
    }) => touches[touches.length - 1]?.identifier), switchMap((identifier) => race(tuiTypedFromEvent(this.el, "touchmove", {
      passive: true
    }).pipe(filter(({
      touches
    }) => this.hasTouchLeft(this.el, touches, identifier ?? 0))), tuiTypedFromEvent(this.el, "touchend")).pipe(take(1))), takeUntilDestroyed()).subscribe(() => {
      this.el.style.removeProperty("transform");
      this.el.style.removeProperty("opacity");
      this.el.style.removeProperty("background");
    });
  }
  get style() {
    return this.tuiTouchable || "transform";
  }
  hasTouchLeft(element, touches, identifier) {
    const {
      ownerDocument
    } = element;
    const id = tuiFindTouchIndex(touches, identifier);
    if (!ownerDocument || id === -1) {
      return true;
    }
    const {
      clientX = 0,
      clientY = 0
    } = touches[id] ?? {};
    return !element.contains(ownerDocument.elementFromPoint(clientX, clientY));
  }
  onTouchStart() {
    if (this.style !== "transform") {
      this.el.style.removeProperty("transition");
    } else {
      this.el.style.setProperty("transition", "transform 0.2s");
    }
    this.el.style.setProperty(this.style, STYLE[this.style]);
  }
  static {
    this.ɵfac = function TuiTouchable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTouchable)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTouchable,
      selectors: [["", "tuiTouchable", ""]],
      inputs: {
        tuiTouchable: "tuiTouchable"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTouchable, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTouchable]"
    }]
  }], function() {
    return [];
  }, {
    tuiTouchable: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-components-mobile-calendar-sheet.mjs
function TuiMobileCalendarSheet_ng_container_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
}
function TuiMobileCalendarSheet_ng_container_0_div_1_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵlistener("click", function TuiMobileCalendarSheet_ng_container_0_div_1_ng_container_2_div_1_Template_div_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.onItemClick(item_r2));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵclassProp("t-cell_disabled", ctx_r2.disabledItemHandler(item_r2))("t-cell_today", ctx_r2.itemIsToday(item_r2));
    ɵɵattribute("data-range", ctx_r2.getItemRange(item_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r2.day, " ");
  }
}
function TuiMobileCalendarSheet_ng_container_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiMobileCalendarSheet_ng_container_0_div_1_ng_container_2_div_1_Template, 2, 6, "div", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const colIndex_r4 = ctx.$implicit;
    const rowIndex_r5 = ɵɵnextContext().$implicit;
    const sheet_r6 = ɵɵnextContext().tuiLet;
    ɵɵadvance();
    ɵɵproperty("ngIf", sheet_r6[rowIndex_r5] == null ? null : sheet_r6[rowIndex_r5][colIndex_r4]);
  }
}
function TuiMobileCalendarSheet_ng_container_0_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
}
function TuiMobileCalendarSheet_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, TuiMobileCalendarSheet_ng_container_0_div_1_div_1_Template, 1, 0, "div", 3)(2, TuiMobileCalendarSheet_ng_container_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 4)(3, TuiMobileCalendarSheet_ng_container_0_div_1_div_3_Template, 1, 0, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const rowIndex_r5 = ctx.$implicit;
    const sheet_r6 = ɵɵnextContext().tuiLet;
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", 7 - ((tmp_4_0 = sheet_r6[rowIndex_r5] == null ? null : sheet_r6[rowIndex_r5].length) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0));
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", (tmp_5_0 = sheet_r6[rowIndex_r5] == null ? null : sheet_r6[rowIndex_r5].length) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : 0);
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", 7 - ((tmp_6_0 = sheet_r6[rowIndex_r5] == null ? null : sheet_r6[rowIndex_r5].length) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0));
  }
}
function TuiMobileCalendarSheet_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiMobileCalendarSheet_ng_container_0_div_1_Template, 4, 3, "div", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const sheet_r6 = ctx.tuiLet;
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", sheet_r6.length);
  }
}
var TuiMobileCalendarSheet = class _TuiMobileCalendarSheet extends TuiCalendarSheet {
  constructor() {
    super(...arguments);
    this.isIOS = inject(TUI_IS_IOS);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiMobileCalendarSheet_BaseFactory;
      return function TuiMobileCalendarSheet_Factory(__ngFactoryType__) {
        return (ɵTuiMobileCalendarSheet_BaseFactory || (ɵTuiMobileCalendarSheet_BaseFactory = ɵɵgetInheritedFactory(_TuiMobileCalendarSheet)))(__ngFactoryType__ || _TuiMobileCalendarSheet);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiMobileCalendarSheet,
      selectors: [["tui-mobile-calendar-sheet"]],
      hostVars: 2,
      hostBindings: function TuiMobileCalendarSheet_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_ios", ctx.isIOS);
        }
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [[4, "tuiLet"], ["automation-id", "tui-primitive-calendar-mobile__row", "class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-primitive-calendar-mobile__row", 1, "t-row"], ["class", "t-cell t-cell_empty", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [1, "t-cell", "t-cell_empty"], ["automation-id", "tui-primitive-calendar-mobile__cell", "tuiRipple", "", "class", "t-cell", 3, "t-cell_disabled", "t-cell_today", "click", 4, "ngIf"], ["automation-id", "tui-primitive-calendar-mobile__cell", "tuiRipple", "", 1, "t-cell", 3, "click"]],
      template: function TuiMobileCalendarSheet_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiMobileCalendarSheet_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "tuiCalendarSheet");
        }
        if (rf & 2) {
          ɵɵproperty("tuiLet", ɵɵpipeBind1(1, 1, ctx.month));
        }
      },
      dependencies: [NgIf, TuiCalendarSheetPipe, TuiLet, TuiRepeatTimes, TuiRipple],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{right:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{left:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}[_nghost-%COMP%]{display:block;inline-size:20.75rem;max-inline-size:100vw}._ios[_nghost-%COMP%]{inline-size:22.625rem}._ios[_nghost-%COMP%]   .t-row[_ngcontent-%COMP%]{block-size:3.125rem;font-size:1.0625rem}._ios[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%], ._ios[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%], ._ios[_nghost-%COMP%]   .t-cell[data-range=active][_ngcontent-%COMP%]{font-weight:600}.t-row[_ngcontent-%COMP%]{block-size:3rem;justify-content:space-between!important;font-family:inherit;font-size:1.125rem;padding:.125rem;box-sizing:border-box}.t-row[_ngcontent-%COMP%]:first-child   .t-cell[_ngcontent-%COMP%]:not(.t-cell_empty) ~ .t-cell_empty[_ngcontent-%COMP%], .t-row[_ngcontent-%COMP%]:last-child   .t-cell_empty[_ngcontent-%COMP%]{display:none}.t-row[_ngcontent-%COMP%]:last-child   .t-cell[_ngcontent-%COMP%]:not(.t-cell_empty) ~ .t-cell_empty[_ngcontent-%COMP%]{display:flex}.t-cell[_ngcontent-%COMP%]{inline-size:2.5rem;block-size:2.5rem;border-radius:100%;overflow:hidden;-webkit-mask:none;mask:none;border:none;text-decoration:none}.t-cell_empty[_ngcontent-%COMP%]{visibility:hidden}.t-cell_today[_ngcontent-%COMP%]:after{content:"\\2022";text-align:center;line-height:4rem;font-size:1.5rem;color:var(--tui-text-action)}.t-cell_today[data-range=start][_ngcontent-%COMP%]:after, .t-cell_today[data-range=end][_ngcontent-%COMP%]:after, .t-cell_today[data-range=active][_ngcontent-%COMP%]:after{color:inherit}.t-cell[data-range=start][_ngcontent-%COMP%], .t-cell[data-range=end][_ngcontent-%COMP%], .t-cell[data-range=active][_ngcontent-%COMP%]{font-weight:500}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask:none;mask:none}`],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMobileCalendarSheet, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-mobile-calendar-sheet",
      imports: [NgIf, TuiCalendarSheetPipe, TuiLet, TuiRepeatTimes, TuiRipple],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._ios]": "isIOS"
      },
      template: '<ng-container *tuiLet="month | tuiCalendarSheet as sheet">\n    <div\n        *tuiRepeatTimes="let rowIndex of sheet.length"\n        automation-id="tui-primitive-calendar-mobile__row"\n        class="t-row"\n    >\n        <div\n            *tuiRepeatTimes="let index of 7 - (sheet[rowIndex]?.length ?? 0)"\n            class="t-cell t-cell_empty"\n        ></div>\n        <ng-container *tuiRepeatTimes="let colIndex of sheet[rowIndex]?.length ?? 0">\n            <div\n                *ngIf="sheet[rowIndex]?.[colIndex] as item"\n                automation-id="tui-primitive-calendar-mobile__cell"\n                tuiRipple\n                class="t-cell"\n                [attr.data-range]="getItemRange(item)"\n                [class.t-cell_disabled]="disabledItemHandler(item)"\n                [class.t-cell_today]="itemIsToday(item)"\n                (click)="onItemClick(item)"\n            >\n                {{ item.day }}\n            </div>\n        </ng-container>\n        <div\n            *tuiRepeatTimes="let index of 7 - (sheet[rowIndex]?.length ?? 0)"\n            class="t-cell t-cell_empty"\n        ></div>\n    </div>\n</ng-container>\n',
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;inline-size:20.75rem;max-inline-size:100vw}:host._ios{inline-size:22.625rem}:host._ios .t-row{block-size:3.125rem;font-size:1.0625rem}:host._ios .t-cell[data-range=start],:host._ios .t-cell[data-range=end],:host._ios .t-cell[data-range=active]{font-weight:600}.t-row{block-size:3rem;justify-content:space-between!important;font-family:inherit;font-size:1.125rem;padding:.125rem;box-sizing:border-box}.t-row:first-child .t-cell:not(.t-cell_empty)~.t-cell_empty,.t-row:last-child .t-cell_empty{display:none}.t-row:last-child .t-cell:not(.t-cell_empty)~.t-cell_empty{display:flex}.t-cell{inline-size:2.5rem;block-size:2.5rem;border-radius:100%;overflow:hidden;-webkit-mask:none;mask:none;border:none;text-decoration:none}.t-cell_empty{visibility:hidden}.t-cell_today:after{content:"\\2022";text-align:center;line-height:4rem;font-size:1.5rem;color:var(--tui-text-action)}.t-cell_today[data-range=start]:after,.t-cell_today[data-range=end]:after,.t-cell_today[data-range=active]:after{color:inherit}.t-cell[data-range=start],.t-cell[data-range=end],.t-cell[data-range=active]{font-weight:500}.t-cell:after{-webkit-mask:none;mask:none}
`]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-components-mobile-calendar.mjs
var _c04 = ["yearsScrollRef"];
var _c12 = ["monthsScrollRef"];
function TuiMobileCalendar_header_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "header", 10)(1, "button", 11);
    ɵɵlistener("click", function TuiMobileCalendar_header_0_Template_button_click_1_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClose());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 12);
    ɵɵlistener("click", function TuiMobileCalendar_header_0_Template_button_click_4_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClose());
    });
    ɵɵtext(5);
    ɵɵpipe(6, "async");
    ɵɵelementEnd();
    ɵɵelementStart(7, "h2", 13);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 14);
    ɵɵlistener("click", function TuiMobileCalendar_header_0_Template_button_click_9_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onConfirm());
    });
    ɵɵtext(10);
    ɵɵpipe(11, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const texts_r4 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("border-radius", 100, "%");
    ɵɵproperty("iconStart", ctx_r2.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 7, ctx_r2.closeWord$), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 9, ctx_r2.cancelWord$), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r2.single ? texts_r4[0] : ctx_r2.multi ? texts_r4[2] : texts_r4[1], " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 11, ctx_r2.doneWord$), " ");
  }
}
function TuiMobileCalendar_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function TuiMobileCalendar_button_5_Template_button_click_0_listener() {
      const index_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.setYear(index_r6));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const index_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("data-state", ctx_r2.getState(index_r6));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", index_r6, " ");
  }
}
function TuiMobileCalendar_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", day_r7, " ");
  }
}
function TuiMobileCalendar_section_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "section", 17)(1, "h2", 18);
    ɵɵtext(2);
    ɵɵpipe(3, "tuiMonth");
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
    ɵɵelementStart(5, "tui-mobile-calendar-sheet", 19);
    ɵɵpipe(6, "tuiMapper");
    ɵɵlistener("dayClick", function TuiMobileCalendar_section_12_Template_tui_mobile_calendar_sheet_dayClick_5_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDayClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const month_r9 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 6, ɵɵpipeBind1(3, 4, month_r9)));
    ɵɵadvance(3);
    ɵɵproperty("disabledItemHandler", ɵɵpipeBind4(6, 8, ctx_r2.disabledItemHandler, ctx_r2.disabledItemHandlerMapper, ctx_r2.min, ctx_r2.max))("month", month_r9)("value", ctx_r2.value);
  }
}
function getCycle(options) {
  return Array.from({
    length: options.yearCycle
  }, (_, i) => Array.from({
    length: MONTHS_IN_YEAR
  }, (_2, month) => options.label + weekCount({
    year: i,
    month,
    startingYear: options.startingYear
  }) * options.week));
}
function weekCount(options) {
  const firstOfMonth = new Date(options.year + options.startingYear, options.month, 1);
  const lastOfMonth = new Date(options.year + options.startingYear, options.month + 1, 0);
  const days = lastOfMonth.getDate() + (firstOfMonth.getDay() || 7) - 1;
  return Math.ceil(days / 7);
}
var SCROLL_DEBOUNCE_TIME = 80;
var YEARS_IN_ROW = 5;
var STARTING_YEAR = 1900;
var RANGE = 196;
var BUFFER = 500;
var ANDROID_LABEL = 64;
var ANDROID_WEEK = 48;
var IOS_LABEL = 50;
var IOS_WEEK = 50;
var YEARLY_CYCLE = 28;
var ANDROID_CYCLE = getCycle({
  label: ANDROID_LABEL,
  week: ANDROID_WEEK,
  yearCycle: YEARLY_CYCLE,
  startingYear: STARTING_YEAR
});
var IOS_CYCLE = getCycle({
  label: IOS_LABEL,
  week: IOS_WEEK,
  yearCycle: YEARLY_CYCLE,
  startingYear: STARTING_YEAR
});
var ANDROID_CYCLE_HEIGHT = reduceCycle(ANDROID_CYCLE);
var IOS_CYCLE_HEIGHT = reduceCycle(IOS_CYCLE);
function reduceCycle(cycle, lastYear = 28, lastMonth = 12) {
  return cycle.reduce((total, year, yearIndex) => yearIndex <= lastYear ? total + year.reduce((sum, month, monthIndex) => yearIndex < lastYear || yearIndex === lastYear && monthIndex < lastMonth ? sum + month : sum, 0) : total, 0);
}
var TuiMobileCalendarStrategy = class {
  constructor(isIOS, scrollService) {
    this.isIOS = isIOS;
    this.scrollService = scrollService;
    this.index$ = new Subject();
    this.viewport = null;
    this.destroy$ = new Subject();
  }
  get scrolledIndexChange() {
    return this.index$.pipe(distinctUntilChanged());
  }
  attach(viewport) {
    const cycle = this.isIOS ? IOS_CYCLE_HEIGHT : ANDROID_CYCLE_HEIGHT;
    this.viewport = viewport;
    this.viewport.setTotalContentSize(cycle * 7);
    this.updateRenderedRange(this.viewport);
  }
  detach() {
    this.index$.complete();
    this.viewport = null;
    this.destroy$.next();
    this.destroy$.complete();
  }
  onContentScrolled() {
    if (this.viewport) {
      this.updateRenderedRange(this.viewport);
    }
  }
  /** These do not matter for this case */
  onDataLengthChanged() {
  }
  onContentRendered() {
  }
  onRenderedOffsetChanged() {
  }
  scrollToIndex(index, behavior) {
    if (!this.viewport) {
      return;
    }
    const scrollTop = this.getOffsetForIndex(index);
    if (behavior !== "smooth") {
      this.viewport.scrollToOffset(scrollTop, behavior);
      return;
    }
    this.scrollService.scroll$(this.viewport.elementRef.nativeElement, scrollTop).pipe(takeUntil(this.destroy$)).subscribe();
  }
  getOffsetForIndex(index) {
    const month = index % MONTHS_IN_YEAR;
    const year = (index - month) / MONTHS_IN_YEAR;
    return this.computeHeight(year, month);
  }
  getIndexForOffset(offset) {
    const cycle = this.isIOS ? IOS_CYCLE : ANDROID_CYCLE;
    const cycleHeight = this.isIOS ? IOS_CYCLE_HEIGHT : ANDROID_CYCLE_HEIGHT;
    const remainder = offset % cycleHeight;
    const years = (offset - remainder) / cycleHeight * YEARLY_CYCLE;
    let accumulator = 0;
    for (let year = 0; year < cycle.length; year++) {
      for (let month = 0; month < (cycle[year]?.length ?? 0); month++) {
        accumulator += cycle[year]?.[month] ?? 0;
        if (accumulator - (cycle[year]?.[month] ?? 0) / 2 > remainder) {
          return Math.max((years + year) * MONTHS_IN_YEAR + month, 0);
        }
      }
    }
    return RANGE;
  }
  computeHeight(year, month) {
    const cycle = this.isIOS ? IOS_CYCLE : ANDROID_CYCLE;
    const remainder = year % YEARLY_CYCLE;
    const remainderHeight = reduceCycle(cycle, remainder, month);
    const fullCycles = (year - remainder) / YEARLY_CYCLE;
    const fullCyclesHeight = this.isIOS ? fullCycles * IOS_CYCLE_HEIGHT : fullCycles * ANDROID_CYCLE_HEIGHT;
    return fullCyclesHeight + remainderHeight;
  }
  updateRenderedRange(viewport) {
    const offset = viewport.measureScrollOffset();
    const {
      start,
      end
    } = viewport.getRenderedRange();
    const viewportSize = viewport.getViewportSize();
    const dataLength = viewport.getDataLength();
    const newRange = {
      start,
      end
    };
    const firstVisibleIndex = this.getIndexForOffset(offset);
    const startBuffer = offset - this.getOffsetForIndex(start);
    if (startBuffer < BUFFER && start !== 0) {
      newRange.start = Math.max(0, this.getIndexForOffset(offset - BUFFER * 2));
      newRange.end = Math.min(dataLength, this.getIndexForOffset(offset + viewportSize + BUFFER));
    } else {
      const endBuffer = this.getOffsetForIndex(end) - offset - viewportSize;
      if (endBuffer < BUFFER && end !== dataLength) {
        newRange.start = Math.max(0, this.getIndexForOffset(offset - BUFFER));
        newRange.end = Math.min(dataLength, this.getIndexForOffset(offset + viewportSize + BUFFER * 2));
      }
    }
    viewport.setRenderedRange(newRange);
    viewport.setRenderedContentOffset(this.getOffsetForIndex(newRange.start));
    this.index$.next(firstVisibleIndex);
  }
};
__decorate([tuiPure], TuiMobileCalendarStrategy.prototype, "scrolledIndexChange", null);
var TUI_VALUE_STREAM = tuiCreateToken();
var TUI_MOBILE_CALENDAR_PROVIDERS = [TuiScrollService, {
  provide: VIRTUAL_SCROLL_STRATEGY,
  deps: [TUI_IS_IOS, TuiScrollService],
  useClass: TuiMobileCalendarStrategy
}, {
  provide: TUI_VALUE_STREAM,
  deps: [[new Optional(), TUI_CALENDAR_DATE_STREAM]],
  useFactory: (value$) => (value$ || EMPTY).pipe(tuiWatch(), takeUntilDestroyed())
}];
var TuiMobileCalendar = class _TuiMobileCalendar {
  constructor() {
    this.value$ = new BehaviorSubject(null);
    this.today = TuiDay.currentLocal();
    this.activeYear = 0;
    this.activeMonth = 0;
    this.destroyRef = inject(DestroyRef);
    this.doc = inject(DOCUMENT);
    this.speed = inject(TUI_ANIMATIONS_SPEED);
    this.ngZone = inject(NgZone);
    this.initialized = false;
    this.isIOS = inject(TUI_IS_IOS);
    this.isE2E = inject(TUI_IS_E2E);
    this.icons = inject(TUI_COMMON_ICONS);
    this.closeWord$ = inject(TUI_CLOSE_WORD);
    this.cancelWord$ = inject(TUI_CANCEL_WORD);
    this.doneWord$ = inject(TUI_DONE_WORD);
    this.unorderedWeekDays$ = inject(TUI_SHORT_WEEK_DAYS);
    this.chooseDayOrRangeTexts$ = inject(TUI_CHOOSE_DAY_OR_RANGE_TEXTS, {
      optional: true
    });
    this.years = Array.from({
      length: RANGE
    }, (_, i) => i + STARTING_YEAR);
    this.months = Array.from({
      length: RANGE * 12
    }, (_, i) => new TuiMonth(Math.floor(i / MONTHS_IN_YEAR) + STARTING_YEAR, i % MONTHS_IN_YEAR));
    this.single = true;
    this.multi = false;
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.cancel = new EventEmitter();
    this.confirm = new EventEmitter();
    this.valueChange = this.value$.pipe(skip(1), distinctUntilChanged((a, b) => a?.toString() === b?.toString()), takeUntilDestroyed());
    this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => (item) => item.dayBefore(min) || max !== null && item.dayAfter(max) || disabledItemHandler(item);
    inject(TUI_VALUE_STREAM).pipe(takeUntilDestroyed()).subscribe((value) => {
      this.value = value;
    });
  }
  ngAfterViewInit() {
    this.activeYear = this.initialYear;
    this.activeMonth = this.initialMonth;
    this.waitScrolledChange();
  }
  setYear(year) {
    if (this.activeYear === year) {
      return;
    }
    this.activeMonth += this.getMonthOffset(year);
    this.activeYear = year;
    this.scrollToActiveYear("smooth");
    timer(0, tuiZonefreeScheduler(this.ngZone)).pipe(tuiZonefree(this.ngZone), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.scrollToActiveMonth());
  }
  set value(value) {
    this.value$.next(value);
  }
  get value() {
    return this.value$.value;
  }
  get yearWidth() {
    return this.doc.documentElement.clientWidth / YEARS_IN_ROW;
  }
  onClose() {
    this.cancel.emit();
  }
  onConfirm() {
    if (this.value) {
      this.confirm.emit(this.value);
    } else {
      this.cancel.emit();
    }
  }
  onDayClick(day) {
    if (this.single) {
      this.value = day;
    } else if (this.isMultiValue(this.value)) {
      this.value = tuiToggleDay(this.value, day);
    } else if (this.value instanceof TuiDay) {
      this.value = TuiDayRange.sort(this.value, day);
    } else if (this.value instanceof TuiDayRange && !this.value.isSingleDay) {
      this.value = day;
    } else if (this.value instanceof TuiDayRange) {
      this.value = TuiDayRange.sort(this.value.from, day);
    } else if (!this.value) {
      this.value = day;
    }
  }
  getState(index) {
    if (this.isYearActive(index)) {
      return "active";
    }
    if (this.isYearActive(index - 1) || this.isYearActive(index + 1)) {
      return "adjacent";
    }
    return null;
  }
  onMonthChange(month) {
    if (!month || this.activeMonth === month) {
      return;
    }
    this.activeMonth = month;
    const activeYear = this.monthToYear(month);
    if (activeYear === this.activeYear) {
      return;
    }
    this.activeYear = activeYear;
    this.scrollToActiveYear();
  }
  get initialYear() {
    if (!this.value) {
      return this.today.year;
    }
    if (this.value instanceof TuiDay) {
      return this.value.year;
    }
    if (!(this.value instanceof TuiDayRange)) {
      return this.value?.[0]?.year ?? this.today.year;
    }
    return this.value.to.year;
  }
  get initialMonth() {
    if (!this.value) {
      return this.today.month + (this.today.year - STARTING_YEAR) * MONTHS_IN_YEAR;
    }
    if (this.value instanceof TuiDay) {
      return this.value.month + (this.value.year - STARTING_YEAR) * MONTHS_IN_YEAR;
    }
    if (!(this.value instanceof TuiDayRange)) {
      return (this.value?.[0]?.month ?? this.today.month) + ((this.value?.[0]?.year ?? this.today.year) - STARTING_YEAR) * MONTHS_IN_YEAR;
    }
    return this.value.to.month + (this.value.to.year - STARTING_YEAR) * MONTHS_IN_YEAR;
  }
  isMultiValue(day) {
    return !(day instanceof TuiDay) && !(day instanceof TuiDayRange) && this.multi;
  }
  getYearsViewportSize() {
    return this.yearsScrollRef?.getViewportSize() || 0;
  }
  updateViewportDimension() {
    this.yearsScrollRef?.checkViewportSize();
    this.monthsScrollRef?.checkViewportSize();
  }
  lateInit() {
    return this.getYearsViewportSize() > 0 ? identity : delay(200);
  }
  waitScrolledChange() {
    this.updateViewportDimension();
    this.monthsScrollRef?.scrolledIndexChange.pipe(delay(tuiGetDuration(this.speed)), this.lateInit(), take(1), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.initialized = true;
      this.updateViewportDimension();
      this.initYearScroll();
      this.initMonthScroll();
      this.scrollToActiveYear();
      this.scrollToActiveMonth();
    });
  }
  initYearScroll() {
    const {
      yearsScrollRef
    } = this;
    if (!yearsScrollRef) {
      return;
    }
    const touchstart$ = tuiTypedFromEvent(yearsScrollRef.elementRef.nativeElement, "touchstart", {
      passive: true
    });
    const touchend$ = tuiTypedFromEvent(yearsScrollRef.elementRef.nativeElement, "touchend", {
      passive: true
    });
    const click$ = tuiTypedFromEvent(yearsScrollRef.elementRef.nativeElement, "click");
    yearsScrollRef.elementScrolled().pipe(
      // Ignore smooth scroll resulting from click on the exact year
      windowToggle(touchstart$, () => click$),
      mergeMap((x) => x),
      // Delay is required to run months scroll in the next frame to prevent flicker
      delay(0),
      map(() => Math.round(yearsScrollRef.measureScrollOffset() / this.yearWidth) + Math.floor(YEARS_IN_ROW / 2) + STARTING_YEAR),
      filter((activeYear) => activeYear !== this.activeYear),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((activeYear) => {
      this.activeMonth += this.getMonthOffset(activeYear);
      this.activeYear = activeYear;
      this.scrollToActiveMonth();
    });
    touchstart$.pipe(switchMap(() => touchend$), switchMap(() => race(yearsScrollRef.elementScrolled(), timer(SCROLL_DEBOUNCE_TIME, tuiZonefreeScheduler(this.ngZone))).pipe(debounceTime(SCROLL_DEBOUNCE_TIME * 2, tuiZonefreeScheduler(this.ngZone)), take(1), takeUntil(touchstart$))), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.scrollToActiveYear("smooth"));
  }
  initMonthScroll() {
    const {
      monthsScrollRef
    } = this;
    if (!monthsScrollRef) {
      return;
    }
    const touchstart$ = tuiTypedFromEvent(monthsScrollRef.elementRef.nativeElement, "touchstart", {
      passive: true
    });
    const touchend$ = tuiTypedFromEvent(monthsScrollRef.elementRef.nativeElement, "touchend", {
      passive: true
    });
    touchstart$.pipe(switchMap(() => touchend$), switchMap(() => race(monthsScrollRef.elementScrolled(), timer(SCROLL_DEBOUNCE_TIME, tuiZonefreeScheduler(this.ngZone))).pipe(debounceTime(SCROLL_DEBOUNCE_TIME * 2, tuiZonefreeScheduler(this.ngZone)), take(1), takeUntil(touchstart$))), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.scrollToActiveMonth("smooth"));
  }
  scrollToActiveYear(behavior = "auto") {
    this.yearsScrollRef?.scrollToIndex(Math.max(this.activeYear - STARTING_YEAR - 2, 0), this.isE2E ? "auto" : behavior);
  }
  scrollToActiveMonth(behavior = "auto") {
    this.monthsScrollRef?.scrollToIndex(this.activeMonth, this.isE2E ? "auto" : behavior);
  }
  isYearActive(index) {
    return index === this.activeYear;
  }
  monthToYear(month) {
    return Math.ceil((month + 1) / MONTHS_IN_YEAR) + STARTING_YEAR - 1;
  }
  getMonthOffset(year) {
    return (year - this.activeYear) * MONTHS_IN_YEAR;
  }
  static {
    this.ɵfac = function TuiMobileCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMobileCalendar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiMobileCalendar,
      selectors: [["tui-mobile-calendar"]],
      viewQuery: function TuiMobileCalendar_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c04, 5);
          ɵɵviewQuery(_c12, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.yearsScrollRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monthsScrollRef = _t.first);
        }
      },
      hostVars: 4,
      hostBindings: function TuiMobileCalendar_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown.prevent", function TuiMobileCalendar_mousedown_prevent_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_ios", ctx.isIOS)("_initialized", ctx.initialized);
        }
      },
      inputs: {
        single: "single",
        multi: "multi",
        min: "min",
        max: "max",
        disabledItemHandler: "disabledItemHandler",
        value: "value"
      },
      outputs: {
        cancel: "cancel",
        confirm: "confirm",
        valueChange: "valueChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature(TUI_MOBILE_CALENDAR_PROVIDERS), ɵɵStandaloneFeature],
      decls: 13,
      vars: 12,
      consts: [["yearsScrollRef", ""], ["monthsScrollRef", ""], ["class", "t-header", 4, "ngIf"], ["orientation", "horizontal", 1, "t-years", 3, "itemSize"], [1, "t-years-wrapper"], ["type", "button", "class", "t-year", 3, "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "t-week"], ["class", "t-day", 4, "ngFor", "ngForOf"], [1, "t-months", 3, "scrolledIndexChange"], ["class", "t-month-wrapper", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTemplateCacheSize"], [1, "t-header"], ["appearance", "", "automation-id", "tui-mobile-calendar__cancel", "tuiIconButton", "", "tuiRipple", "", "type", "button", 1, "t-close", 3, "click", "iconStart"], ["tuiLink", "", "tuiTouchable", "opacity", "type", "button", 1, "t-link", "t-link_close", 3, "click"], ["automation-id", "tui-mobile-calendar__label", 1, "t-label"], ["automation-id", "tui-mobile-calendar__confirm", "tuiLink", "", "tuiTouchable", "opacity", "type", "button", 1, "t-link", 3, "click"], ["type", "button", 1, "t-year", 3, "click"], [1, "t-day"], [1, "t-month-wrapper"], [1, "t-month"], [1, "t-calendar", 3, "dayClick", "disabledItemHandler", "month", "value"]],
      template: function TuiMobileCalendar_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵtemplate(0, TuiMobileCalendar_header_0_Template, 12, 13, "header", 2);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "cdk-virtual-scroll-viewport", 3, 0)(4, "div", 4);
          ɵɵtemplate(5, TuiMobileCalendar_button_5_Template, 2, 2, "button", 5);
          ɵɵelementEnd()();
          ɵɵelementStart(6, "div", 6);
          ɵɵtemplate(7, TuiMobileCalendar_div_7_Template, 2, 1, "div", 7);
          ɵɵpipe(8, "tuiOrderWeekDays");
          ɵɵpipe(9, "async");
          ɵɵelementEnd();
          ɵɵelementStart(10, "cdk-virtual-scroll-viewport", 8, 1);
          ɵɵlistener("scrolledIndexChange", function TuiMobileCalendar_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_10_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onMonthChange($event));
          });
          ɵɵtemplate(12, TuiMobileCalendar_section_12_Template, 7, 13, "section", 9);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 6, ctx.chooseDayOrRangeTexts$));
          ɵɵadvance(2);
          ɵɵproperty("itemSize", ctx.yearWidth);
          ɵɵadvance(3);
          ɵɵproperty("cdkVirtualForOf", ctx.years);
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ɵɵpipeBind1(9, 10, ɵɵpipeBind1(8, 8, ctx.unorderedWeekDays$)));
          ɵɵadvance(5);
          ɵɵproperty("cdkVirtualForOf", ctx.months)("cdkVirtualForTemplateCacheSize", 10);
        }
      },
      dependencies: [AsyncPipe, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, NgForOf, NgIf, TuiButton, TuiLink, TuiMapperPipe, TuiMobileCalendarSheet, TuiMonthPipe, TuiOrderWeekDaysPipe, TuiRipple, TuiTouchable],
      styles: ["[_nghost-%COMP%]{display:block;block-size:100%;font-family:-apple-system,BlinkMacSystemFont,Roboto,sans-serif;color:var(--tui-text-primary);-webkit-tap-highlight-color:transparent}.t-header[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;block-size:3.5rem;padding:0 1rem;border-bottom:.5px solid var(--tui-border-normal)}._ios[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{block-size:2.75rem;border-bottom:none}.t-close[_ngcontent-%COMP%]{inline-size:1.5rem;block-size:1.5rem;margin-right:2rem}._ios[_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{display:none}.t-link[_ngcontent-%COMP%]{margin-left:auto;flex-shrink:0;font-size:.875rem;line-height:1rem;font-weight:500;text-transform:uppercase;color:var(--tui-text-action)}.t-link_close[_ngcontent-%COMP%]{display:none}._ios[_nghost-%COMP%]   .t-link[_ngcontent-%COMP%]{min-inline-size:3.75rem;text-align:end;font-size:.9375rem;line-height:1.125rem;font-weight:400;letter-spacing:.018125rem;text-transform:none}._ios[_nghost-%COMP%]   .t-link_close[_ngcontent-%COMP%]{display:block;margin:0 auto 0 0;text-align:start}.t-label[_ngcontent-%COMP%]{flex-grow:1;margin:0;font-size:1.25rem;line-height:3.5rem;font-weight:500;letter-spacing:-.0125rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-label[_ngcontent-%COMP%] + .t-link[_ngcontent-%COMP%]{padding-left:1rem}._ios[_nghost-%COMP%]   .t-label[_ngcontent-%COMP%]{font-size:1.0625rem;font-weight:600;letter-spacing:-.025625rem;text-align:center}.t-years[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;block-size:4.0625rem;background-color:var(--tui-background-base);box-shadow:0 .5px var(--tui-border-normal)}.t-years[_ngcontent-%COMP%]::-webkit-scrollbar, .t-years[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}._ios[_nghost-%COMP%]   .t-years[_ngcontent-%COMP%]{background-color:transparent}.t-years-wrapper[_ngcontent-%COMP%]{display:flex;block-size:4.0625rem}.t-year[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;outline:none;inline-size:20vw;flex-shrink:0;font-size:.9375rem;font-weight:700;letter-spacing:.015625rem;cursor:pointer;opacity:.1;transform:scale(.73);transition:color,opacity,transform .2s}.t-year[data-state=adjacent][_ngcontent-%COMP%]{transform:scale(.86);opacity:.3}.t-year[data-state=active][_ngcontent-%COMP%]{color:var(--tui-text-action);opacity:1;transform:scale(1)}.t-week[_ngcontent-%COMP%]{display:flex;align-items:center;block-size:1.875rem;inline-size:20.75rem;max-inline-size:100%;margin:0 auto;font-size:.75rem}._ios[_nghost-%COMP%]   .t-week[_ngcontent-%COMP%]{inline-size:22.625rem;font-size:.6875rem;font-weight:500;color:var(--tui-text-secondary)}.t-day[_ngcontent-%COMP%]{flex:1;text-align:center}.t-months[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;block-size:calc(100% - 9.5rem);box-shadow:0 -1px var(--tui-border-normal);overflow-x:hidden}.t-months[_ngcontent-%COMP%]::-webkit-scrollbar, .t-months[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}._ios[_nghost-%COMP%]   .t-months[_ngcontent-%COMP%]{block-size:calc(100% - 8.75rem)}.t-month-wrapper[_ngcontent-%COMP%]{margin:.625rem 0 -.625rem}.t-month[_ngcontent-%COMP%]{block-size:2.75rem;line-height:2.75rem;padding-left:1rem;font-size:.875rem;font-weight:500;text-transform:uppercase;margin:0 0 1.25rem;box-sizing:border-box;border-bottom:.5px solid var(--tui-border-normal)}._ios[_nghost-%COMP%]   .t-month[_ngcontent-%COMP%]{block-size:3.125rem;margin:0;border-bottom:none;text-transform:none;font-size:1.375rem;line-height:3.125rem;letter-spacing:.02rem;font-weight:700}.t-calendar[_ngcontent-%COMP%]{margin:0 auto;transition:opacity .2s}.t-week[_ngcontent-%COMP%], .t-years[_ngcontent-%COMP%], .t-months[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}._initialized[_nghost-%COMP%]   .t-week[_ngcontent-%COMP%], ._initialized[_nghost-%COMP%]   .t-years[_ngcontent-%COMP%], ._initialized[_nghost-%COMP%]   .t-months[_ngcontent-%COMP%]{opacity:1}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMobileCalendar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-mobile-calendar",
      imports: [AsyncPipe, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, NgForOf, NgIf, TuiButton, TuiLink, TuiMapperPipe, TuiMobileCalendarSheet, TuiMonthPipe, TuiOrderWeekDaysPipe, TuiRipple, TuiTouchable],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_MOBILE_CALENDAR_PROVIDERS,
      host: {
        "[class._ios]": "isIOS",
        "[class._initialized]": "initialized",
        "(mousedown.prevent)": "0"
      },
      template: '<header\n    *ngIf="chooseDayOrRangeTexts$ | async as texts"\n    class="t-header"\n>\n    <button\n        appearance=""\n        automation-id="tui-mobile-calendar__cancel"\n        tuiIconButton\n        tuiRipple\n        type="button"\n        class="t-close"\n        [iconStart]="icons.close"\n        [style.border-radius.%]="100"\n        (click)="onClose()"\n    >\n        {{ closeWord$ | async }}\n    </button>\n    <button\n        tuiLink\n        tuiTouchable="opacity"\n        type="button"\n        class="t-link t-link_close"\n        (click)="onClose()"\n    >\n        {{ cancelWord$ | async }}\n    </button>\n    <h2\n        automation-id="tui-mobile-calendar__label"\n        class="t-label"\n    >\n        {{ single ? texts[0] : multi ? texts[2] : texts[1] }}\n    </h2>\n    <button\n        automation-id="tui-mobile-calendar__confirm"\n        tuiLink\n        tuiTouchable="opacity"\n        type="button"\n        class="t-link"\n        (click)="onConfirm()"\n    >\n        {{ doneWord$ | async }}\n    </button>\n</header>\n<cdk-virtual-scroll-viewport\n    #yearsScrollRef\n    orientation="horizontal"\n    class="t-years"\n    [itemSize]="yearWidth"\n>\n    <div class="t-years-wrapper">\n        <button\n            *cdkVirtualFor="let index of years"\n            type="button"\n            class="t-year"\n            [attr.data-state]="getState(index)"\n            (click)="setYear(index)"\n        >\n            {{ index }}\n        </button>\n    </div>\n</cdk-virtual-scroll-viewport>\n<div class="t-week">\n    <div\n        *ngFor="let day of unorderedWeekDays$ | tuiOrderWeekDays | async"\n        class="t-day"\n    >\n        {{ day }}\n    </div>\n</div>\n<cdk-virtual-scroll-viewport\n    #monthsScrollRef\n    class="t-months"\n    (scrolledIndexChange)="onMonthChange($event)"\n>\n    <section\n        *cdkVirtualFor="let month of months; templateCacheSize: 10"\n        class="t-month-wrapper"\n    >\n        <h2 class="t-month">{{ month | tuiMonth | async }}</h2>\n        <tui-mobile-calendar-sheet\n            class="t-calendar"\n            [disabledItemHandler]="disabledItemHandler | tuiMapper: disabledItemHandlerMapper : min : max"\n            [month]="month"\n            [value]="value"\n            (dayClick)="onDayClick($event)"\n        />\n    </section>\n</cdk-virtual-scroll-viewport>\n',
      styles: [":host{display:block;block-size:100%;font-family:-apple-system,BlinkMacSystemFont,Roboto,sans-serif;color:var(--tui-text-primary);-webkit-tap-highlight-color:transparent}.t-header{position:relative;display:flex;align-items:center;block-size:3.5rem;padding:0 1rem;border-bottom:.5px solid var(--tui-border-normal)}:host._ios .t-header{block-size:2.75rem;border-bottom:none}.t-close{inline-size:1.5rem;block-size:1.5rem;margin-right:2rem}:host._ios .t-close{display:none}.t-link{margin-left:auto;flex-shrink:0;font-size:.875rem;line-height:1rem;font-weight:500;text-transform:uppercase;color:var(--tui-text-action)}.t-link_close{display:none}:host._ios .t-link{min-inline-size:3.75rem;text-align:end;font-size:.9375rem;line-height:1.125rem;font-weight:400;letter-spacing:.018125rem;text-transform:none}:host._ios .t-link_close{display:block;margin:0 auto 0 0;text-align:start}.t-label{flex-grow:1;margin:0;font-size:1.25rem;line-height:3.5rem;font-weight:500;letter-spacing:-.0125rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-label+.t-link{padding-left:1rem}:host._ios .t-label{font-size:1.0625rem;font-weight:600;letter-spacing:-.025625rem;text-align:center}.t-years{scrollbar-width:none;-ms-overflow-style:none;block-size:4.0625rem;background-color:var(--tui-background-base);box-shadow:0 .5px var(--tui-border-normal)}.t-years::-webkit-scrollbar,.t-years::-webkit-scrollbar-thumb{display:none}:host._ios .t-years{background-color:transparent}.t-years-wrapper{display:flex;block-size:4.0625rem}.t-year{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;outline:none;inline-size:20vw;flex-shrink:0;font-size:.9375rem;font-weight:700;letter-spacing:.015625rem;cursor:pointer;opacity:.1;transform:scale(.73);transition:color,opacity,transform .2s}.t-year[data-state=adjacent]{transform:scale(.86);opacity:.3}.t-year[data-state=active]{color:var(--tui-text-action);opacity:1;transform:scale(1)}.t-week{display:flex;align-items:center;block-size:1.875rem;inline-size:20.75rem;max-inline-size:100%;margin:0 auto;font-size:.75rem}:host._ios .t-week{inline-size:22.625rem;font-size:.6875rem;font-weight:500;color:var(--tui-text-secondary)}.t-day{flex:1;text-align:center}.t-months{scrollbar-width:none;-ms-overflow-style:none;block-size:calc(100% - 9.5rem);box-shadow:0 -1px var(--tui-border-normal);overflow-x:hidden}.t-months::-webkit-scrollbar,.t-months::-webkit-scrollbar-thumb{display:none}:host._ios .t-months{block-size:calc(100% - 8.75rem)}.t-month-wrapper{margin:.625rem 0 -.625rem}.t-month{block-size:2.75rem;line-height:2.75rem;padding-left:1rem;font-size:.875rem;font-weight:500;text-transform:uppercase;margin:0 0 1.25rem;box-sizing:border-box;border-bottom:.5px solid var(--tui-border-normal)}:host._ios .t-month{block-size:3.125rem;margin:0;border-bottom:none;text-transform:none;font-size:1.375rem;line-height:3.125rem;letter-spacing:.02rem;font-weight:700}.t-calendar{margin:0 auto;transition:opacity .2s}.t-week,.t-years,.t-months{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host(._initialized) .t-week,:host(._initialized) .t-years,:host(._initialized) .t-months{opacity:1}\n"]
    }]
  }], function() {
    return [];
  }, {
    yearsScrollRef: [{
      type: ViewChild,
      args: ["yearsScrollRef"]
    }],
    monthsScrollRef: [{
      type: ViewChild,
      args: ["monthsScrollRef"]
    }],
    single: [{
      type: Input
    }],
    multi: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    cancel: [{
      type: Output
    }],
    confirm: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-components-mobile-calendar-dropdown.mjs
var TuiMobileCalendarDropdown = class _TuiMobileCalendarDropdown {
  constructor() {
    this.dropdown = inject(TuiDropdownDirective, {
      optional: true
    });
    this.keyboard = inject(TuiKeyboardService);
    this.context = injectContext({
      optional: true
    });
    this.observer = this.context?.$implicit;
    this.data = this.context?.data || {};
    this.selectedPeriod = null;
    this.animation = {
      value: "",
      params: {
        start: "100vh",
        duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED))
      }
    };
    this.control = inject(TuiControl, {
      optional: true
    });
    this.range = this.is("tui-input-date-range");
    this.multi = this.data.multi || this.is("tui-input-date[multiple]");
    this.single = this.data.single || this.is("tui-input-date:not([multiple])");
    this.keyboard.hide();
  }
  max() {
    return this.data.max || (this.range ? TUI_DAY_CAPS_MAPPER(this.control.max, this.selectedPeriod, this.control.maxLength, false) : this.control?.max) || TUI_LAST_DAY;
  }
  min() {
    return this.data.min || (this.range ? TUI_DAY_CAPS_MAPPER(this.control.min, this.selectedPeriod, this.control.maxLength, true) : this.control?.min) || TUI_FIRST_DAY;
  }
  onValueChange(value) {
    if (!this.range) {
      return;
    }
    if (value === null || value instanceof TuiDayRange) {
      this.selectedPeriod = value;
    } else if (value instanceof TuiDay) {
      this.selectedPeriod = new TuiDayRange(value, value);
    }
  }
  get calculatedDisabledItemHandler() {
    return this.calculateDisabledItemHandler(this.data.disabledItemHandler || this.control?.disabledItemHandler || TUI_FALSE_HANDLER, this.selectedPeriod, this.control?.minLength ?? null);
  }
  close() {
    this.dropdown?.toggle(false);
    this.observer?.complete();
    this.keyboard.show();
  }
  confirm(value) {
    const normalizedValue = this.range ? this.selectedPeriod : value;
    if (this.control) {
      this.control.value = normalizedValue;
    }
    this.observer?.next(normalizedValue);
    this.close();
  }
  calculateDisabledItemHandler(disabledItemHandler, value, minLength) {
    return calculateDisabledItemHandler(disabledItemHandler, value, minLength);
  }
  is(selector) {
    return !!this.dropdown?.el.closest(selector);
  }
  static {
    this.ɵfac = function TuiMobileCalendarDropdown_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMobileCalendarDropdown)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiMobileCalendarDropdown,
      selectors: [["tui-mobile-calendar-dropdown"]],
      hostVars: 2,
      hostBindings: function TuiMobileCalendarDropdown_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiSlideInTop", ctx.animation)("@tuiFadeIn", ctx.animation);
        }
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([TuiActiveZone]), ɵɵStandaloneFeature],
      decls: 1,
      vars: 5,
      consts: [[3, "cancel", "confirm", "valueChange", "disabledItemHandler", "max", "min", "multi", "single"]],
      template: function TuiMobileCalendarDropdown_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-mobile-calendar", 0);
          ɵɵlistener("cancel", function TuiMobileCalendarDropdown_Template_tui_mobile_calendar_cancel_0_listener() {
            return ctx.close();
          })("confirm", function TuiMobileCalendarDropdown_Template_tui_mobile_calendar_confirm_0_listener($event) {
            return ctx.confirm($event);
          })("valueChange", function TuiMobileCalendarDropdown_Template_tui_mobile_calendar_valueChange_0_listener($event) {
            return ctx.onValueChange($event);
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("disabledItemHandler", ctx.calculatedDisabledItemHandler)("max", ctx.max())("min", ctx.min())("multi", ctx.multi)("single", ctx.single);
        }
      },
      dependencies: [TuiMobileCalendar],
      styles: ["[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;background:var(--tui-background-elevation-1);box-shadow:0 10rem var(--tui-background-elevation-1),0 -90vh 1rem 2rem var(--tui-service-backdrop)}"],
      data: {
        animation: [tuiSlideInTop, tuiFadeIn]
      },
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiMobileCalendarDropdown.prototype, "calculateDisabledItemHandler", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMobileCalendarDropdown, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-mobile-calendar-dropdown",
      imports: [TuiMobileCalendar],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiSlideInTop, tuiFadeIn],
      hostDirectives: [TuiActiveZone],
      host: {
        "[@tuiSlideInTop]": "animation",
        "[@tuiFadeIn]": "animation"
      },
      template: '<tui-mobile-calendar\n    [disabledItemHandler]="calculatedDisabledItemHandler"\n    [max]="max()"\n    [min]="min()"\n    [multi]="multi"\n    [single]="single"\n    (cancel)="close()"\n    (confirm)="confirm($event)"\n    (valueChange)="onValueChange($event)"\n/>\n',
      styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;background:var(--tui-background-elevation-1);box-shadow:0 10rem var(--tui-background-elevation-1),0 -90vh 1rem 2rem var(--tui-service-backdrop)}\n"]
    }]
  }], function() {
    return [];
  }, {
    calculateDisabledItemHandler: []
  });
})();
function tuiProvideMobileCalendar() {
  return {
    provide: TUI_MOBILE_CALENDAR,
    useValue: TuiMobileCalendarDropdown
  };
}

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-components-mobile-dialog.mjs
function TuiMobileDialog_h2_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h2", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r0.context.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.context.label, "\n");
  }
}
function TuiMobileDialog_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r2, " ");
  }
}
function TuiMobileDialog_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("click", function TuiMobileDialog_button_3_Template_button_click_0_listener() {
      const index_r4 = ɵɵrestoreView(_r3).index;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onAction(index_r4));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r5 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("t-button_column", ctx_r0.context.actions.length > 2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", action_r5, "\n");
  }
}
var TuiMobileDialog = class _TuiMobileDialog {
  constructor() {
    this.isIOS = inject(TUI_IS_IOS);
    this.context = injectContext();
  }
  onAction(index) {
    this.context.completeWith(index);
  }
  static {
    this.ɵfac = function TuiMobileDialog_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMobileDialog)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiMobileDialog,
      selectors: [["tui-mobile-dialog"]],
      hostVars: 2,
      hostBindings: function TuiMobileDialog_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_ios", ctx.isIOS);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 4,
      vars: 4,
      consts: [["automation-id", "tui-mobile-dialog__label", "class", "t-heading", 3, "id", 4, "ngIf"], [1, "t-content"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["appearance", "flat", "size", "s", "tuiButton", "", "tuiRipple", "", "type", "button", "class", "t-button", 3, "t-button_column", "click", 4, "ngFor", "ngForOf"], ["automation-id", "tui-mobile-dialog__label", 1, "t-heading", 3, "id"], ["appearance", "flat", "size", "s", "tuiButton", "", "tuiRipple", "", "type", "button", 1, "t-button", 3, "click"]],
      template: function TuiMobileDialog_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiMobileDialog_h2_0_Template, 2, 2, "h2", 0);
          ɵɵelementStart(1, "div", 1);
          ɵɵtemplate(2, TuiMobileDialog_ng_container_2_Template, 2, 1, "ng-container", 2);
          ɵɵelementEnd();
          ɵɵtemplate(3, TuiMobileDialog_button_3_Template, 2, 3, "button", 3);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", !!ctx.context.label);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.context.actions);
        }
      },
      dependencies: [NgForOf, NgIf, PolymorpheusOutlet, TuiButton, TuiRipple],
      styles: ["[_nghost-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;background:var(--tui-background-base);word-break:break-word;overflow:hidden;padding:1.25rem .75rem 0 1.5rem}[_nghost-%COMP%]:not(._ios){max-inline-size:17.5rem;border-radius:.125rem;text-align:start;box-shadow:0 1.5rem 1.5rem #00000052}._ios[_nghost-%COMP%]{max-inline-size:16.875rem;padding:1.5rem 0 0;border-radius:.75rem;text-align:center}.t-heading[_ngcontent-%COMP%]{font-size:1rem}._ios[_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font-weight:700;font-size:1.125rem}.t-content[_ngcontent-%COMP%]{margin-top:.75rem;font-size:.875rem;line-height:1.25rem;padding-right:.75rem}._ios[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{margin-top:.25rem;padding-left:1.5rem;padding-right:1.5rem}.t-button[_ngcontent-%COMP%]{border-radius:0}._ios[_nghost-%COMP%]   .t-button[_ngcontent-%COMP%]{border-block-start:#b8b8b8 1px solid;block-size:2.625rem;inline-size:100%}._ios[_nghost-%COMP%]   .t-button[_ngcontent-%COMP%]:first-of-type{margin-top:1.125rem}[_nghost-%COMP%]:not(._ios)   .t-button[_ngcontent-%COMP%]{margin:.5rem 0 .5rem .5rem;float:inline-end}[_nghost-%COMP%]:not(._ios)   .t-button_column[_ngcontent-%COMP%]{display:block;float:none;margin-left:auto}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMobileDialog, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-mobile-dialog",
      imports: [NgForOf, NgIf, PolymorpheusOutlet, PolymorpheusTemplate, TuiButton, TuiRipple],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._ios]": "isIOS"
      },
      template: '<h2\n    *ngIf="!!context.label"\n    automation-id="tui-mobile-dialog__label"\n    class="t-heading"\n    [id]="context.id"\n>\n    {{ context.label }}\n</h2>\n<div class="t-content">\n    <ng-container *polymorpheusOutlet="context.content as text; context: context">\n        {{ text }}\n    </ng-container>\n</div>\n<button\n    *ngFor="let action of context.actions; let index = index"\n    appearance="flat"\n    size="s"\n    tuiButton\n    tuiRipple\n    type="button"\n    class="t-button"\n    [class.t-button_column]="context.actions.length > 2"\n    (click)="onAction(index)"\n>\n    {{ action }}\n</button>\n',
      styles: [":host{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;background:var(--tui-background-base);word-break:break-word;overflow:hidden;padding:1.25rem .75rem 0 1.5rem}:host:not(._ios){max-inline-size:17.5rem;border-radius:.125rem;text-align:start;box-shadow:0 1.5rem 1.5rem #00000052}:host._ios{max-inline-size:16.875rem;padding:1.5rem 0 0;border-radius:.75rem;text-align:center}.t-heading{font-size:1rem}:host._ios .t-heading{font-weight:700;font-size:1.125rem}.t-content{margin-top:.75rem;font-size:.875rem;line-height:1.25rem;padding-right:.75rem}:host._ios .t-content{margin-top:.25rem;padding-left:1.5rem;padding-right:1.5rem}.t-button{border-radius:0}:host._ios .t-button{border-block-start:#b8b8b8 1px solid;block-size:2.625rem;inline-size:100%}:host._ios .t-button:first-of-type{margin-top:1.125rem}:host:not(._ios) .t-button{margin:.5rem 0 .5rem .5rem;float:inline-end}:host:not(._ios) .t-button_column{display:block;float:none;margin-left:auto}\n"]
    }]
  }], null, null);
})();
var TUI_MOBILE_DIALOG_DEFAULT_OPTIONS = {
  label: "",
  actions: ["OK"],
  data: void 0
};
var TUI_MOBILE_DIALOG_OPTIONS = tuiCreateToken(TUI_MOBILE_DIALOG_DEFAULT_OPTIONS);
function tuiMobileDialogOptionsProvider(options) {
  return tuiProvideOptions(TUI_MOBILE_DIALOG_OPTIONS, options, TUI_MOBILE_DIALOG_DEFAULT_OPTIONS);
}
var TuiMobileDialogService = class _TuiMobileDialogService extends TuiPopoverService {
  open(content, options = {}) {
    return super.open(content, options);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiMobileDialogService_BaseFactory;
      return function TuiMobileDialogService_Factory(__ngFactoryType__) {
        return (ɵTuiMobileDialogService_BaseFactory || (ɵTuiMobileDialogService_BaseFactory = ɵɵgetInheritedFactory(_TuiMobileDialogService)))(__ngFactoryType__ || _TuiMobileDialogService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiMobileDialogService,
      factory: () => (() => new _TuiMobileDialogService(TUI_DIALOGS, TuiMobileDialog, inject(TUI_MOBILE_DIALOG_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMobileDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiMobileDialogService(TUI_DIALOGS, TuiMobileDialog, inject(TUI_MOBILE_DIALOG_OPTIONS))
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-components-pull-to-refresh.mjs
function TuiMobileLoaderIOS__svg_ng_container_1__svg_g_1__svg_animate_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "animate", 5);
  }
  if (rf & 2) {
    const index_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("begin", ctx_r1.calculateAnimationBegin(index_r1));
  }
}
function TuiMobileLoaderIOS__svg_ng_container_1__svg_g_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "rect", 3);
    ɵɵtemplate(2, TuiMobileLoaderIOS__svg_ng_container_1__svg_g_1__svg_animate_2_Template, 1, 1, "animate", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const index_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("transform", ctx_r1.calculateTransform(index_r1));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.finished);
  }
}
function TuiMobileLoaderIOS__svg_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiMobileLoaderIOS__svg_ng_container_1__svg_g_1_Template, 3, 2, "g", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const index_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isShown(index_r1));
  }
}
function TuiMobileLoaderAndroid__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 3)(1, "defs")(2, "mask", 4);
    ɵɵelement(3, "path", 5);
    ɵɵelementEnd()();
    ɵɵelementStart(4, "g", 6);
    ɵɵelement(5, "path", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("opacity", ctx_r0.opacity);
    ɵɵattribute("transform", ctx_r0.transform);
  }
}
function TuiMobileLoaderAndroid_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-loader", 8);
  }
  if (rf & 2) {
    ɵɵproperty("inheritColor", true);
  }
}
var _c05 = ["*"];
var _c13 = (a0) => ({
  $implicit: a0
});
function TuiPullToRefresh_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var LOADED_STEP = 8;
var ROTATE_X_STEP = 30;
var TuiMobileLoaderIOS = class _TuiMobileLoaderIOS {
  constructor() {
    this.context = injectContext();
    this.threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);
    this.steps = 12;
  }
  get finished() {
    return this.percent >= 100;
  }
  get percent() {
    return this.context.$implicit * 100 / this.threshold;
  }
  isShown(index) {
    return this.percent > (index + 1) * LOADED_STEP;
  }
  calculateTransform(index) {
    return `rotate(${index * ROTATE_X_STEP} 50 50)`;
  }
  calculateAnimationBegin(index) {
    return `${index * LOADED_STEP / 100}s`;
  }
  static {
    this.ɵfac = function TuiMobileLoaderIOS_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMobileLoaderIOS)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiMobileLoaderIOS,
      selectors: [["tui-mobile-ios-loader"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 1,
      consts: [["height", "36", "preserveAspectRatio", "xMidYMid", "viewBox", "0 0 100 100", "width", "36", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "xmlns", "http://www.w3.org/2000/svg"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [4, "ngIf"], ["fill", "#c7c9cc", "height", "16", "rx", "7.05", "ry", "3.3", "width", "6", "x", "47", "y", "22"], ["attributeName", "opacity", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0", 4, "ngIf"], ["attributeName", "opacity", "dur", "1s", "keyTimes", "0;1", "repeatCount", "indefinite", "values", "1;0"]],
      template: function TuiMobileLoaderIOS_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵnamespaceSVG();
          ɵɵelementStart(0, "svg", 0);
          ɵɵtemplate(1, TuiMobileLoaderIOS__svg_ng_container_1_Template, 2, 1, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("tuiRepeatTimesOf", ctx.steps);
        }
      },
      dependencies: [NgIf, TuiRepeatTimes],
      styles: ["[_nghost-%COMP%]{position:absolute;top:-.5rem;left:50%;margin-left:-1.125rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMobileLoaderIOS, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-mobile-ios-loader",
      imports: [NgIf, TuiRepeatTimes],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<svg\n    height="36"\n    preserveAspectRatio="xMidYMid"\n    viewBox="0 0 100 100"\n    width="36"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    xmlns="http://www.w3.org/2000/svg"\n>\n    <ng-container *tuiRepeatTimes="let index of steps">\n        <g\n            *ngIf="isShown(index)"\n            [attr.transform]="calculateTransform(index)"\n        >\n            <rect\n                fill="#c7c9cc"\n                height="16"\n                rx="7.05"\n                ry="3.3"\n                width="6"\n                x="47"\n                y="22"\n            >\n                <animate\n                    *ngIf="finished"\n                    attributeName="opacity"\n                    dur="1s"\n                    keyTimes="0;1"\n                    repeatCount="indefinite"\n                    values="1;0"\n                    [attr.begin]="calculateAnimationBegin(index)"\n                />\n            </rect>\n        </g>\n    </ng-container>\n</svg>\n',
      styles: [":host{position:absolute;top:-.5rem;left:50%;margin-left:-1.125rem}\n"]
    }]
  }], null, null);
})();
var TUI_IOS_LOADER = new PolymorpheusComponent(TuiMobileLoaderIOS);
var TUI_PULL_TO_REFRESH_LOADED = tuiCreateToken(EMPTY);
var TUI_PULL_TO_REFRESH_THRESHOLD = tuiCreateToken(50);
var TUI_PULL_TO_REFRESH_COMPONENT = tuiCreateTokenFromFactory(() => inject(TUI_IS_IOS) ? TUI_IOS_LOADER : TUI_ANDROID_LOADER);
var MICRO_OFFSET = 10 ** -6;
var EXCLUSION_SELECTORS = "tui-dialog, tui-dropdown, tui-dropdown-mobile";
var TuiPullToRefreshService = class _TuiPullToRefreshService extends Observable {
  constructor() {
    const component = inject(TUI_PULL_TO_REFRESH_COMPONENT);
    super((subscriber) => (component ? this.pulling$ : EMPTY).subscribe(subscriber));
    this.el = tuiInjectElement();
    this.scrollRef = inject(TUI_SCROLL_REF);
    this.loaded$ = inject(TUI_PULL_TO_REFRESH_LOADED);
    this.threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);
    this.touched = false;
    this.pulling$ = this.loaded$.pipe(startWith(null), switchMap(() => tuiTypedFromEvent(this.el, "touchstart", {
      passive: true
    }).pipe(filter(() => !this.scrollRef.nativeElement.scrollTop && !this.el.querySelector(EXCLUSION_SELECTORS)), map(({
      touches
    }) => touches[0]?.clientY ?? 0), switchMap((start) => tuiTypedFromEvent(this.el, "touchmove").pipe(tap(() => {
      this.touched = true;
    }), map(({
      touches
    }) => (touches[0]?.clientY ?? 0) - start), filter((distance) => distance > 0), takeUntil(tuiTypedFromEvent(this.el, "touchend").pipe(tap(() => {
      this.touched = false;
    }))), takeUntil(tuiScrollFrom(this.scrollRef.nativeElement)), endWith(0))), scan((prev, current) => !current && !this.touched && prev > this.threshold ? this.threshold : current + current * MICRO_OFFSET, 0), takeWhile((distance) => distance !== this.threshold, true), startWith(0))), debounceTime(0, tuiZonefreeScheduler()), distinctUntilChanged(), tuiZoneOptimized(), share());
  }
  static {
    this.ɵfac = function TuiPullToRefreshService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPullToRefreshService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPullToRefreshService,
      factory: _TuiPullToRefreshService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPullToRefreshService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var ROTATE_X_DEFAULT = 180;
var ROTATE_X_MAX = 500;
var ROTATE_X_MULTIPLIER = 2.3;
var TuiMobileLoaderAndroid = class _TuiMobileLoaderAndroid {
  constructor() {
    this.context = injectContext();
    this.threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);
  }
  get percent() {
    return this.context.$implicit * 100 / this.threshold;
  }
  get dropped() {
    return this.context.$implicit <= MICRO_OFFSET || this.context.$implicit === this.threshold;
  }
  get hostTransform() {
    return `translateY(${Math.min(this.context.$implicit, this.threshold * 1.5)}px)`;
  }
  get opacity() {
    return this.context.$implicit / (this.threshold * 1.5);
  }
  get transform() {
    const rotateX = Math.min(ROTATE_X_DEFAULT + this.percent * ROTATE_X_MULTIPLIER, ROTATE_X_MAX);
    return `rotate(${rotateX} 0 0)`;
  }
  static {
    this.ɵfac = function TuiMobileLoaderAndroid_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMobileLoaderAndroid)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiMobileLoaderAndroid,
      selectors: [["tui-mobile-android-loader"]],
      hostVars: 6,
      hostBindings: function TuiMobileLoaderAndroid_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("transform", ctx.hostTransform);
          ɵɵclassProp("_visible", ctx.percent)("_dropped", ctx.dropped);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 4,
      vars: 2,
      consts: [["loading", ""], [1, "t-wrapper"], ["fill", "none", "height", "24", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg", 3, "opacity", 4, "ngIf", "ngIfElse"], ["fill", "none", "height", "24", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg"], ["id", "mask-1"], ["clip-rule", "evenodd", "d", "M21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C14.06 21 15.96 20.3 17.48 19.14L16.06 17.7C14.91 18.51 13.51 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12H16L20 16L24 12H21Z", "fill", "white", "fill-rule", "evenodd"], ["mask", "url(#mask-1)"], ["clip-rule", "evenodd", "d", "M21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C14.06 21 15.96 20.3 17.48 19.14L16.06 17.7C14.91 18.51 13.51 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12H16L20 16L24 12H21Z", "fill", "black", "fill-rule", "evenodd"], ["size", "s", 1, "t-loader", 3, "inheritColor"]],
      template: function TuiMobileLoaderAndroid_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1);
          ɵɵtemplate(1, TuiMobileLoaderAndroid__svg_svg_1_Template, 6, 3, "svg", 2);
          ɵɵelementEnd();
          ɵɵtemplate(2, TuiMobileLoaderAndroid_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r2 = ɵɵreference(3);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.percent !== 100)("ngIfElse", loading_r2);
        }
      },
      dependencies: [NgIf, TuiLoader],
      styles: ["[_nghost-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;top:0;z-index:1;display:block;block-size:0;opacity:0}._visible[_nghost-%COMP%]{opacity:1}._dropped[_nghost-%COMP%]{transition:transform var(--tui-duration) cubic-bezier(.4,0,.2,1),opacity var(--tui-duration) var(--tui-duration)}.t-wrapper[_ngcontent-%COMP%]{position:absolute;top:-2.5rem;left:50%;display:flex;box-shadow:var(--tui-shadow-medium);block-size:2.25rem;inline-size:2.25rem;background-color:var(--tui-background-neutral-1);border-radius:6.25rem;align-items:center;justify-content:center;margin-left:-1.125rem}.t-loader[_ngcontent-%COMP%]{color:var(--tui-text-primary)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMobileLoaderAndroid, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-mobile-android-loader",
      imports: [NgIf, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._visible]": "percent",
        "[class._dropped]": "dropped",
        "[style.transform]": "hostTransform"
      },
      template: '<div class="t-wrapper">\n    <svg\n        *ngIf="percent !== 100; else loading"\n        fill="none"\n        height="24"\n        viewBox="0 0 24 24"\n        width="24"\n        xmlns="http://www.w3.org/2000/svg"\n        [attr.transform]="transform"\n        [style.opacity]="opacity"\n    >\n        <defs>\n            <mask id="mask-1">\n                <path\n                    clip-rule="evenodd"\n                    d="M21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C14.06 21 15.96 20.3 17.48 19.14L16.06 17.7C14.91 18.51 13.51 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12H16L20 16L24 12H21Z"\n                    fill="white"\n                    fill-rule="evenodd"\n                />\n            </mask>\n        </defs>\n        <g mask="url(#mask-1)">\n            <path\n                clip-rule="evenodd"\n                d="M21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C14.06 21 15.96 20.3 17.48 19.14L16.06 17.7C14.91 18.51 13.51 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12H16L20 16L24 12H21Z"\n                fill="black"\n                fill-rule="evenodd"\n            />\n        </g>\n    </svg>\n</div>\n<ng-template #loading>\n    <tui-loader\n        size="s"\n        class="t-loader"\n        [inheritColor]="true"\n    />\n</ng-template>\n',
      styles: [":host{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;top:0;z-index:1;display:block;block-size:0;opacity:0}:host._visible{opacity:1}:host._dropped{transition:transform var(--tui-duration) cubic-bezier(.4,0,.2,1),opacity var(--tui-duration) var(--tui-duration)}.t-wrapper{position:absolute;top:-2.5rem;left:50%;display:flex;box-shadow:var(--tui-shadow-medium);block-size:2.25rem;inline-size:2.25rem;background-color:var(--tui-background-neutral-1);border-radius:6.25rem;align-items:center;justify-content:center;margin-left:-1.125rem}.t-loader{color:var(--tui-text-primary)}\n"]
    }]
  }], null, null);
})();
var TUI_ANDROID_LOADER = new PolymorpheusComponent(TuiMobileLoaderAndroid);
var TuiPullToRefresh = class _TuiPullToRefresh {
  constructor() {
    this.isIOS = inject(TUI_IS_IOS);
    this.threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);
    this.pulling$ = inject(TuiPullToRefreshService);
    this.component = inject(TUI_PULL_TO_REFRESH_COMPONENT);
    this.dropped$ = this.pulling$.pipe(map((distance) => distance <= MICRO_OFFSET || distance === this.threshold), distinctUntilChanged());
    this.styleHandler = this.isIOS ? (distance) => ({
      top: tuiPx(distance / 2)
    }) : () => null;
    this.pulled = inject(TuiPullToRefreshService).pipe(filter((distance) => distance === this.threshold));
    if (!this.component) {
      return;
    }
    const el = inject(TUI_SCROLL_REF).nativeElement;
    tuiScrollFrom(el).pipe(startWith(null), tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      if (el.scrollTop) {
        el.style.touchAction = "";
      } else {
        el.style.touchAction = "pan-down";
      }
    });
  }
  static {
    this.ɵfac = function TuiPullToRefresh_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPullToRefresh)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPullToRefresh,
      selectors: [["tui-pull-to-refresh"]],
      inputs: {
        styleHandler: "styleHandler"
      },
      outputs: {
        pulled: "pulled"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiPullToRefreshService]), ɵɵStandaloneFeature],
      ngContentSelectors: _c05,
      decls: 6,
      vars: 15,
      consts: [[4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "ngStyle"]],
      template: function TuiPullToRefresh_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiPullToRefresh_ng_container_0_Template, 1, 0, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "div", 1);
          ɵɵpipe(3, "async");
          ɵɵpipe(4, "async");
          ɵɵprojection(5);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.component)("polymorpheusOutletContext", ɵɵpureFunction1(13, _c13, ɵɵpipeBind1(1, 7, ctx.pulling$) || 0));
          ɵɵadvance(2);
          ɵɵstyleProp("position", "relative");
          ɵɵclassProp("t-drop", ɵɵpipeBind1(3, 9, ctx.dropped$));
          ɵɵproperty("ngStyle", ctx.styleHandler(ɵɵpipeBind1(4, 11, ctx.pulling$) || 0));
        }
      },
      dependencies: [AsyncPipe, NgStyle, PolymorpheusOutlet],
      styles: [".t-drop[_ngcontent-%COMP%]{transition:all var(--tui-duration) cubic-bezier(.4,0,.2,1)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPullToRefresh, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-pull-to-refresh",
      imports: [AsyncPipe, NgStyle, PolymorpheusOutlet, PolymorpheusTemplate],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiPullToRefreshService],
      template: `<ng-container *polymorpheusOutlet="component; context: {$implicit: (pulling$ | async) || 0}" />

<div
    [class.t-drop]="dropped$ | async"
    [ngStyle]="styleHandler((pulling$ | async) || 0)"
    [style.position]="'relative'"
>
    <ng-content />
</div>
`,
      styles: [".t-drop{transition:all var(--tui-duration) cubic-bezier(.4,0,.2,1)}\n"]
    }]
  }], function() {
    return [];
  }, {
    styleHandler: [{
      type: Input
    }],
    pulled: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-components-swipe-action.mjs
var _c06 = ["*", [["", "tuiSwipeAction", ""]]];
var _c14 = ["*", "[tuiSwipeAction]"];
var TuiSwipeActions = class _TuiSwipeActions {
  constructor() {
    this.actionsWidth = 0;
    this.cdr = inject(ChangeDetectorRef);
  }
  onResize({
    target
  }) {
    this.actionsWidth = target.clientWidth;
    this.cdr.detectChanges();
  }
  static {
    this.ɵfac = function TuiSwipeActions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSwipeActions)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSwipeActions,
      selectors: [["tui-swipe-actions"]],
      hostVars: 2,
      hostBindings: function TuiSwipeActions_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-actions-width", ctx.actionsWidth);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c14,
      decls: 4,
      vars: 0,
      consts: [[1, "t-content"], [1, "t-actions", 3, "waResizeObserver"]],
      template: function TuiSwipeActions_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c06);
          ɵɵelementStart(0, "div", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 1);
          ɵɵlistener("waResizeObserver", function TuiSwipeActions_Template_div_waResizeObserver_2_listener($event) {
            return $event[0] && ctx.onResize($event[0]);
          });
          ɵɵprojection(3, 1);
          ɵɵelementEnd();
        }
      },
      dependencies: [WaResizeObserver],
      styles: ["[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;--tui-action-gap: 24;--tui-actions-padding: .5rem;--tui-item-size: 44;display:flex;inline-size:-webkit-fill-available;inline-size:-moz-available;inline-size:stretch;align-items:center;overflow-x:scroll;overflow-y:hidden;scroll-snap-type:x mandatory;perspective:1px;perspective-origin:calc(100% + calc(1px * var(--tui-item-size) / 2) + var(--tui-actions-padding))}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-content[_ngcontent-%COMP%]{scroll-snap-align:start;flex-shrink:0;inline-size:100%}.t-actions[_ngcontent-%COMP%]{display:flex;gap:calc(1px * var(--tui-action-gap));padding:0 1rem 0 var(--tui-actions-padding);scroll-snap-align:start;align-items:center;transform-style:preserve-3d}.t-actions[_ngcontent-%COMP%]:empty{display:none}  .t-actions>*:nth-child(2){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 1 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (2 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}  .t-actions>*:nth-child(3){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 2 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (3 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}  .t-actions>*:nth-child(4){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 3 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (4 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}  .t-actions>*:nth-child(5){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 4 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (5 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}  .t-actions>*:nth-child(6){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 5 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (6 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}@media (hover: hover) and (pointer: fine){.t-actions[_ngcontent-%COMP%]{display:none}}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipeActions, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-swipe-actions",
      imports: [WaResizeObserver],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.--t-actions-width]": "actionsWidth"
      },
      template: '<div class="t-content">\n    <ng-content />\n</div>\n\n<div\n    class="t-actions"\n    (waResizeObserver)="$event[0] && onResize($event[0])"\n>\n    <ng-content select="[tuiSwipeAction]" />\n</div>\n',
      styles: [":host{scrollbar-width:none;-ms-overflow-style:none;--tui-action-gap: 24;--tui-actions-padding: .5rem;--tui-item-size: 44;display:flex;inline-size:-webkit-fill-available;inline-size:-moz-available;inline-size:stretch;align-items:center;overflow-x:scroll;overflow-y:hidden;scroll-snap-type:x mandatory;perspective:1px;perspective-origin:calc(100% + calc(1px * var(--tui-item-size) / 2) + var(--tui-actions-padding))}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}.t-content{scroll-snap-align:start;flex-shrink:0;inline-size:100%}.t-actions{display:flex;gap:calc(1px * var(--tui-action-gap));padding:0 1rem 0 var(--tui-actions-padding);scroll-snap-align:start;align-items:center;transform-style:preserve-3d}.t-actions:empty{display:none}::ng-deep .t-actions>*:nth-child(2){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 1 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (2 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}::ng-deep .t-actions>*:nth-child(3){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 2 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (3 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}::ng-deep .t-actions>*:nth-child(4){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 3 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (4 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}::ng-deep .t-actions>*:nth-child(5){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 4 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (5 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}::ng-deep .t-actions>*:nth-child(6){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 5 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (6 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}@media (hover: hover) and (pointer: fine){.t-actions{display:none}}\n"]
    }]
  }], null, null);
})();
var TuiSwipeActionsAutoClose = class _TuiSwipeActionsAutoClose {
  constructor() {
    this.el = tuiInjectElement();
    this.autoClose = true;
  }
  handleEvent(event) {
    if (this.autoClose !== false && !this.el.contains(tuiGetActualTarget(event))) {
      this.el.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    }
  }
  static {
    this.ɵfac = function TuiSwipeActionsAutoClose_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSwipeActionsAutoClose)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSwipeActionsAutoClose,
      selectors: [["tui-swipe-actions", "autoClose", ""]],
      hostBindings: function TuiSwipeActionsAutoClose_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.silent", function TuiSwipeActionsAutoClose_pointerdown_silent_HostBindingHandler($event) {
            return ctx.handleEvent($event);
          }, false, ɵɵresolveDocument)("focusin.silent", function TuiSwipeActionsAutoClose_focusin_silent_HostBindingHandler($event) {
            return ctx.handleEvent($event);
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        autoClose: "autoClose"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipeActionsAutoClose, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-swipe-actions[autoClose]",
      host: {
        "(document:pointerdown.silent)": "handleEvent($event)",
        "(document:focusin.silent)": "handleEvent($event)"
      }
    }]
  }], null, {
    autoClose: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/addon-mobile/fesm2022/taiga-ui-addon-mobile-components-tab-bar.mjs
var _c07 = ["tuiTabBarItem", ""];
var _c15 = ["*"];
function TuiTabBarItem_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const value_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("@tuiScaleIn", ctx_r1.options);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.format(value_r1), " ");
  }
}
var _c2 = ["tuiTabBar", ""];
function TuiTabBarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 2);
  }
}
var TuiTabBarItem = class _TuiTabBarItem {
  constructor() {
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.icon = "";
    this.badge = null;
  }
  format(value) {
    return value > 999 ? "999+" : String(value);
  }
  static {
    this.ɵfac = function TuiTabBarItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabBarItem)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTabBarItem,
      selectors: [["button", "tuiTabBarItem", ""], ["a", "tuiTabBarItem", ""]],
      inputs: {
        icon: "icon",
        badge: "badge"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c07,
      ngContentSelectors: _c15,
      decls: 5,
      vars: 2,
      consts: [[1, "t-icon", 3, "icon"], [1, "t-wrapper"], ["class", "t-badge", 4, "ngIf"], [1, "t-text"], [1, "t-badge"]],
      template: function TuiTabBarItem_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelement(0, "tui-icon", 0);
          ɵɵelementStart(1, "span", 1);
          ɵɵtemplate(2, TuiTabBarItem_span_2_Template, 2, 2, "span", 2);
          ɵɵelementEnd();
          ɵɵelementStart(3, "span", 3);
          ɵɵprojection(4);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("icon", ctx.icon);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.badge);
        }
      },
      dependencies: [NgIf, TuiIcon],
      styles: ["[_nghost-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;flex:1 0;font:inherit;flex-direction:column;align-items:center;overflow:hidden}[_nghost-%COMP%]:nth-child(1){color:var(--tui-tab-1, inherit)}[_nghost-%COMP%]:nth-child(2){color:var(--tui-tab-2, inherit)}[_nghost-%COMP%]:nth-child(3){color:var(--tui-tab-3, inherit)}[_nghost-%COMP%]:nth-child(4){color:var(--tui-tab-4, inherit)}[_nghost-%COMP%]:nth-child(5){color:var(--tui-tab-5, inherit)}[_nghost-%COMP%]:nth-child(6){color:var(--tui-tab-6, inherit)}[_nghost-%COMP%]:nth-child(7){color:var(--tui-tab-7, inherit)}[_nghost-%COMP%]:nth-child(8){color:var(--tui-tab-8, inherit)}[_nghost-%COMP%]:nth-child(9){color:var(--tui-tab-9, inherit)}[_nghost-%COMP%]:nth-child(10){color:var(--tui-tab-10, inherit)}.t-icon[_ngcontent-%COMP%]{inline-size:1.75rem;block-size:1.75rem;margin:.375rem 0 .125rem;pointer-events:none;border:.125rem solid transparent}.t-wrapper[_ngcontent-%COMP%]{position:absolute;top:.125rem;left:1rem;display:flex;inline-size:100%;justify-content:center;pointer-events:none}.t-badge[_ngcontent-%COMP%]{display:flex;block-size:1.125rem;min-inline-size:1.125rem;align-items:center;justify-content:center;padding:0 .25rem;border-radius:1rem;font-size:.8125rem;box-sizing:border-box;color:var(--tui-background-base);background:var(--tui-status-negative)}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-inline-size:100%;pointer-events:none}"],
      data: {
        animation: [tuiScaleIn]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabBarItem, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "button[tuiTabBarItem], a[tuiTabBarItem]",
      imports: [NgIf, TuiIcon],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiScaleIn],
      template: '<tui-icon\n    class="t-icon"\n    [icon]="icon"\n/>\n<span class="t-wrapper">\n    <span\n        *ngIf="badge as value"\n        class="t-badge"\n        [@tuiScaleIn]="options"\n    >\n        {{ format(value) }}\n    </span>\n</span>\n<span class="t-text">\n    <ng-content />\n</span>\n',
      styles: [":host{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;flex:1 0;font:inherit;flex-direction:column;align-items:center;overflow:hidden}:host:nth-child(1){color:var(--tui-tab-1, inherit)}:host:nth-child(2){color:var(--tui-tab-2, inherit)}:host:nth-child(3){color:var(--tui-tab-3, inherit)}:host:nth-child(4){color:var(--tui-tab-4, inherit)}:host:nth-child(5){color:var(--tui-tab-5, inherit)}:host:nth-child(6){color:var(--tui-tab-6, inherit)}:host:nth-child(7){color:var(--tui-tab-7, inherit)}:host:nth-child(8){color:var(--tui-tab-8, inherit)}:host:nth-child(9){color:var(--tui-tab-9, inherit)}:host:nth-child(10){color:var(--tui-tab-10, inherit)}.t-icon{inline-size:1.75rem;block-size:1.75rem;margin:.375rem 0 .125rem;pointer-events:none;border:.125rem solid transparent}.t-wrapper{position:absolute;top:.125rem;left:1rem;display:flex;inline-size:100%;justify-content:center;pointer-events:none}.t-badge{display:flex;block-size:1.125rem;min-inline-size:1.125rem;align-items:center;justify-content:center;padding:0 .25rem;border-radius:1rem;font-size:.8125rem;box-sizing:border-box;color:var(--tui-background-base);background:var(--tui-status-negative)}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-inline-size:100%;pointer-events:none}\n"]
    }]
  }], null, {
    icon: [{
      type: Input
    }],
    badge: [{
      type: Input
    }]
  });
})();
var TuiTabBarComponent = class _TuiTabBarComponent {
  constructor() {
    this.tabs = EMPTY_QUERY;
    this.quantity = 4;
    this.activeItemIndex = NaN;
    this.activeItemIndexChange = new EventEmitter();
  }
  setActive(tab) {
    if (tuiIsElement(tab)) {
      this.updateIndex(this.tabs.toArray().findIndex(({
        nativeElement
      }) => nativeElement === tab));
    }
  }
  get style() {
    return `--tui-tab-${this.activeItemIndex + 1}: var(--tui-active-color)`;
  }
  updateIndex(index) {
    this.activeItemIndex = index;
    this.activeItemIndexChange.emit(index);
  }
  static {
    this.ɵfac = function TuiTabBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabBarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTabBarComponent,
      selectors: [["nav", "tuiTabBar", ""]],
      contentQueries: function TuiTabBarComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTabBarItem, 4, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabs = _t);
        }
      },
      hostVars: 2,
      hostBindings: function TuiTabBarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiTabBarComponent_click_HostBindingHandler($event) {
            return ctx.setActive($event.target);
          });
        }
        if (rf & 2) {
          ɵɵstyleMap(ctx.style);
        }
      },
      inputs: {
        quantity: "quantity",
        activeItemIndex: "activeItemIndex"
      },
      outputs: {
        activeItemIndexChange: "activeItemIndexChange"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c2,
      ngContentSelectors: _c15,
      decls: 3,
      vars: 1,
      consts: [[1, "t-skeletons"], ["class", "t-skeleton", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [1, "t-skeleton"]],
      template: function TuiTabBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵelementStart(1, "div", 0);
          ɵɵtemplate(2, TuiTabBarComponent_div_2_Template, 1, 0, "div", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("tuiRepeatTimesOf", ctx.quantity);
        }
      },
      dependencies: [TuiRepeatTimes],
      styles: ['[_nghost-%COMP%]{--tui-active-color: var(--tui-text-action);position:relative;display:flex;font: .625rem/.75rem -apple-system,BlinkMacSystemFont,system-ui,Roboto,Segoe UI,sans-serif;block-size:var(--tui-height-l);color:var(--tui-text-secondary);-webkit-backdrop-filter:blur(.3125rem);backdrop-filter:blur(.3125rem)}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";background:var(--tui-background-base-alt);box-shadow:inset 0 1px var(--tui-border-normal);opacity:.8}[tuiTheme=dark]   [_nghost-%COMP%]:before{opacity:.7}.t-skeletons[_ngcontent-%COMP%]{display:none;block-size:100%;inline-size:100%;justify-content:space-around}.t-skeletons[_ngcontent-%COMP%]:first-child{display:flex}.t-skeleton[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;animation:tuiSkeletonVibe ease-in-out 1s infinite alternate}.t-skeleton[_ngcontent-%COMP%]:before{content:"";inline-size:1.375rem;block-size:1.375rem;margin-bottom:.5rem;border-radius:100%;background:var(--tui-background-neutral-2)}.t-skeleton[_ngcontent-%COMP%]:after{content:"";inline-size:2.5rem;block-size:.375rem;border-radius:1rem;background:var(--tui-background-neutral-2)}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabBarComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "nav[tuiTabBar]",
      imports: [TuiRepeatTimes],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style]": "style",
        "(click)": "setActive($event.target)"
      },
      template: '<ng-content />\n<div class="t-skeletons">\n    <div\n        *tuiRepeatTimes="let index of quantity"\n        class="t-skeleton"\n    ></div>\n</div>\n',
      styles: [':host{--tui-active-color: var(--tui-text-action);position:relative;display:flex;font: .625rem/.75rem -apple-system,BlinkMacSystemFont,system-ui,Roboto,Segoe UI,sans-serif;block-size:var(--tui-height-l);color:var(--tui-text-secondary);-webkit-backdrop-filter:blur(.3125rem);backdrop-filter:blur(.3125rem)}:host:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";background:var(--tui-background-base-alt);box-shadow:inset 0 1px var(--tui-border-normal);opacity:.8}[tuiTheme=dark] :host:before{opacity:.7}.t-skeletons{display:none;block-size:100%;inline-size:100%;justify-content:space-around}.t-skeletons:first-child{display:flex}.t-skeleton{display:flex;flex-direction:column;align-items:center;justify-content:center;animation:tuiSkeletonVibe ease-in-out 1s infinite alternate}.t-skeleton:before{content:"";inline-size:1.375rem;block-size:1.375rem;margin-bottom:.5rem;border-radius:100%;background:var(--tui-background-neutral-2)}.t-skeleton:after{content:"";inline-size:2.5rem;block-size:.375rem;border-radius:1rem;background:var(--tui-background-neutral-2)}\n']
    }]
  }], null, {
    tabs: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiTabBarItem), {
        read: ElementRef
      }]
    }],
    quantity: [{
      type: Input
    }],
    activeItemIndex: [{
      type: Input
    }],
    activeItemIndexChange: [{
      type: Output
    }]
  });
})();
var TuiTabBarItemDirective = class _TuiTabBarItemDirective {
  constructor() {
    const tabs = inject(TuiTabBarComponent);
    const el = tuiInjectElement();
    const link = inject(RouterLinkActive, {
      optional: true
    })?.isActiveChange || EMPTY;
    link.pipe(filter(Boolean), tuiWatch(), takeUntilDestroyed()).subscribe(() => tabs.setActive(el));
  }
  static {
    this.ɵfac = function TuiTabBarItemDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabBarItemDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabBarItemDirective,
      selectors: [["", "tuiTabBarItem", "", "routerLinkActive", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabBarItemDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTabBarItem][routerLinkActive]"
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiTabBar = [TuiTabBarComponent, TuiTabBarItem, TuiTabBarItemDirective];
export {
  ANDROID_CYCLE,
  ANDROID_LABEL,
  ANDROID_WEEK,
  BUFFER,
  IOS_CYCLE,
  IOS_LABEL,
  IOS_WEEK,
  MICRO_OFFSET,
  RANGE,
  SCROLL_DEBOUNCE_TIME,
  STARTING_YEAR,
  TUI_ANDROID_LOADER,
  TUI_IOS_LOADER,
  TUI_MOBILE_CALENDAR_PROVIDERS,
  TUI_MOBILE_DIALOG_DEFAULT_OPTIONS,
  TUI_MOBILE_DIALOG_OPTIONS,
  TUI_PULL_TO_REFRESH_COMPONENT,
  TUI_PULL_TO_REFRESH_LOADED,
  TUI_PULL_TO_REFRESH_THRESHOLD,
  TUI_SHEET_DIALOG_DEFAULT_OPTIONS,
  TUI_SHEET_DIALOG_OPTIONS,
  TUI_VALUE_STREAM,
  TuiDropdownMobile,
  TuiDropdownMobileComponent,
  TuiElasticSticky,
  TuiElasticStickyService,
  TuiKeyboardService,
  TuiMobileCalendar,
  TuiMobileCalendarDropdown,
  TuiMobileCalendarSheet,
  TuiMobileCalendarStrategy,
  TuiMobileDialog,
  TuiMobileDialogService,
  TuiMobileLoaderAndroid,
  TuiMobileLoaderIOS,
  TuiPullToRefresh,
  TuiPullToRefreshService,
  TuiResponsiveDialog,
  TuiResponsiveDialogService,
  TuiRipple,
  TuiSheetDialog,
  TuiSheetDialogComponent,
  TuiSheetDialogService,
  TuiSidebar,
  TuiSidebarComponent,
  TuiSidebarDirective,
  TuiSwipeActions,
  TuiSwipeActionsAutoClose,
  TuiTabBar,
  TuiTabBarComponent,
  TuiTabBarItem,
  TuiTabBarItemDirective,
  TuiTouchable,
  YEARLY_CYCLE,
  YEARS_IN_ROW,
  tuiFindTouchIndex,
  tuiMobileDialogOptionsProvider,
  tuiProvideMobileCalendar,
  tuiSheetDialogOptionsProvider
};
//# sourceMappingURL=@taiga-ui_addon-mobile.js.map
