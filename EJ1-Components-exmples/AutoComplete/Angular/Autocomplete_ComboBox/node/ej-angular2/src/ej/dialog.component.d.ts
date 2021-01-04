import 'syncfusion-javascript/Scripts/ej/web/ej.dialog.min';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, ElementRef, ChangeDetectorRef } from '@angular/core';
export declare class DialogComponent extends EJComponents<any, any> {
    el: ElementRef;
    cdRef: ChangeDetectorRef;
    private _ejIterableDiffers;
    private _ejkeyvaluediffers;
    actionButtons_input: any;
    ajaxSettings_input: any;
    allowDraggable_input: any;
    allowKeyboardNavigation_input: any;
    animation_input: any;
    backgroundScroll_input: any;
    closeOnEscape_input: any;
    containment_input: any;
    contentType_input: any;
    contentUrl_input: any;
    cssClass_input: any;
    enableAnimation_input: any;
    enabled_input: any;
    enableModal_input: any;
    enablePersistence_input: any;
    enableResize_input: any;
    enableRTL_input: any;
    faviconCSS_input: any;
    height_input: any;
    htmlAttributes_input: any;
    isResponsive_input: any;
    locale_input: any;
    maxHeight_input: any;
    maxWidth_input: any;
    minHeight_input: any;
    minWidth_input: any;
    position_input: any;
    showHeader_input: any;
    showOnInit_input: any;
    showRoundedCorner_input: any;
    target_input: any;
    title_input: any;
    tooltip_input: any;
    width_input: any;
    zIndex_input: any;
    showFooter_input: any;
    footerTemplateId_input: any;
    ajaxSettings_async_input: any;
    ajaxSettings_cache_input: any;
    ajaxSettings_contentType_input: any;
    ajaxSettings_data_input: any;
    ajaxSettings_dataType_input: any;
    ajaxSettings_type_input: any;
    options: any;
    actionButtonClick_output: EventEmitter<{}>;
    ajaxError_output: EventEmitter<{}>;
    ajaxSuccess_output: EventEmitter<{}>;
    beforeOpen_output: EventEmitter<{}>;
    beforeClose_output: EventEmitter<{}>;
    close_output: EventEmitter<{}>;
    collapse_output: EventEmitter<{}>;
    contentLoad_output: EventEmitter<{}>;
    create_output: EventEmitter<{}>;
    destroy_output: EventEmitter<{}>;
    drag_output: EventEmitter<{}>;
    dragStart_output: EventEmitter<{}>;
    dragStop_output: EventEmitter<{}>;
    expand_output: EventEmitter<{}>;
    open_output: EventEmitter<{}>;
    resize_output: EventEmitter<{}>;
    resizeStart_output: EventEmitter<{}>;
    resizeStop_output: EventEmitter<{}>;
    constructor(el: ElementRef, cdRef: ChangeDetectorRef, _ejIterableDiffers: IterableDiffers, _ejkeyvaluediffers: KeyValueDiffers);
}
export declare var EJ_DIALOG_COMPONENTS: Type<any>[];