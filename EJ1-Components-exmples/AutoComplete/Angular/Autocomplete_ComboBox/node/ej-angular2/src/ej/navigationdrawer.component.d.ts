import 'syncfusion-javascript/Scripts/ej/web/ej.navigationdrawer.min';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, ElementRef, ChangeDetectorRef } from '@angular/core';
export declare class NavigationDrawerComponent extends EJComponents<any, any> {
    el: ElementRef;
    cdRef: ChangeDetectorRef;
    private _ejIterableDiffers;
    private _ejkeyvaluediffers;
    ajaxSettings_input: any;
    contentId_input: any;
    cssClass_input: any;
    direction_input: any;
    enableListView_input: any;
    items_input: any;
    listViewSettings_input: any;
    position_input: any;
    targetId_input: any;
    type_input: any;
    width_input: any;
    isPaneOpen_input: any;
    ajaxSettings_async_input: any;
    ajaxSettings_cache_input: any;
    ajaxSettings_contentType_input: any;
    ajaxSettings_data_input: any;
    ajaxSettings_dataType_input: any;
    ajaxSettings_type_input: any;
    options: any;
    ajaxComplete_output: EventEmitter<{}>;
    ajaxError_output: EventEmitter<{}>;
    ajaxSuccess_output: EventEmitter<{}>;
    beforeClose_output: EventEmitter<{}>;
    open_output: EventEmitter<{}>;
    swipe_output: EventEmitter<{}>;
    constructor(el: ElementRef, cdRef: ChangeDetectorRef, _ejIterableDiffers: IterableDiffers, _ejkeyvaluediffers: KeyValueDiffers);
}
export declare var EJ_NAVIGATIONDRAWER_COMPONENTS: Type<any>[];