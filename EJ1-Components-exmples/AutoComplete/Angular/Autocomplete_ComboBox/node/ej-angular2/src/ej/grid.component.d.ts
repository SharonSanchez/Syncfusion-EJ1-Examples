import 'syncfusion-javascript/Scripts/ej/web/ej.grid.min';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, ElementRef, ChangeDetectorRef } from '@angular/core';
export declare class GridCommandDirective extends ComplexTagElement {
    buttonOptions: any;
    type: any;
    constructor(widget: EJComponents<any, any>);
}
export declare class GridCommandsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(widget: EJComponents<any, any>);
}
export declare class GridColumnDirective extends ComplexTagElement {
    clipMode: any;
    allowEditing: any;
    allowFiltering: any;
    allowGrouping: any;
    allowSorting: any;
    allowResizing: any;
    commands: any;
    cssClass: any;
    customAttributes: any;
    dataSource: any;
    defaultValue: any;
    disableHtmlEncode: any;
    displayAsCheckbox: any;
    editParams: any;
    editTemplate: any;
    editType: any;
    enableGroupByFormat: any;
    field: any;
    filterBarTemplate: any;
    filterType: any;
    foreignKeyField: any;
    foreignKeyValue: any;
    format: any;
    headerTemplateID: any;
    headerText: any;
    headerTextAlign: any;
    headerTooltip: any;
    isFrozen: any;
    isIdentity: any;
    isPrimaryKey: any;
    priority: any;
    showInColumnChooser: any;
    template: any;
    textAlign: any;
    tooltip: any;
    type: any;
    validationRules: any;
    visible: any;
    width: any;
    tag_commands: any;
    constructor(widget: EJComponents<any, any>);
}
export declare class GridColumnsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(widget: EJComponents<any, any>);
}
export declare class GridSummaryColumnDirective extends ComplexTagElement {
    customSummaryValue: any;
    dataMember: any;
    displayColumn: any;
    format: any;
    prefix: any;
    suffix: any;
    summaryType: any;
    template: any;
    constructor(widget: EJComponents<any, any>);
}
export declare class GridSummaryColumnsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(widget: EJComponents<any, any>);
}
export declare class GridSummaryRowDirective extends ComplexTagElement {
    showCaptionSummary: any;
    showGroupSummary: any;
    showTotalSummary: any;
    summaryColumns: any;
    title: any;
    titleColumn: any;
    tag_summaryColumns: any;
    constructor(widget: EJComponents<any, any>);
}
export declare class GridSummaryRowsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(widget: EJComponents<any, any>);
}
export declare class GridStackedHeaderColumnDirective extends ComplexTagElement {
    column: any;
    cssClass: any;
    headerText: any;
    textAlign: any;
    tooltip: any;
    constructor(widget: EJComponents<any, any>);
}
export declare class GridStackedHeaderColumnsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(widget: EJComponents<any, any>);
}
export declare class GridStackedHeaderRowDirective extends ComplexTagElement {
    stackedHeaderColumns: any;
    tag_stackedHeaderColumns: any;
    constructor(widget: EJComponents<any, any>);
}
export declare class GridStackedHeaderRowsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(widget: EJComponents<any, any>);
}
export declare class GridComponent extends EJComponents<any, any> {
    el: ElementRef;
    cdRef: ChangeDetectorRef;
    private _ejIterableDiffers;
    private _ejkeyvaluediffers;
    allowCellMerging_input: any;
    allowGrouping_input: any;
    allowKeyboardNavigation_input: any;
    allowFiltering_input: any;
    allowSorting_input: any;
    allowMultiSorting_input: any;
    allowPaging_input: any;
    allowReordering_input: any;
    allowResizeToFit_input: any;
    allowResizing_input: any;
    allowRowDragAndDrop_input: any;
    allowScrolling_input: any;
    allowSearching_input: any;
    allowSelection_input: any;
    allowTextWrap_input: any;
    allowMultipleExporting_input: any;
    commonWidth_input: any;
    gridLines_input: any;
    childGrid_input: any;
    columnLayout_input: any;
    contextMenuSettings_input: any;
    cssClass_input: any;
    detailsTemplate_input: any;
    editSettings_input: any;
    enableAltRow_input: any;
    enableAutoSaveOnSelectionChange_input: any;
    enableHeaderHover_input: any;
    enablePersistence_input: any;
    enableResponsiveRow_input: any;
    enableRowHover_input: any;
    enableRTL_input: any;
    enableTouch_input: any;
    enableToolbarItems_input: any;
    exportToExcelAction_input: any;
    exportToPdfAction_input: any;
    exportToWordAction_input: any;
    filterSettings_input: any;
    groupSettings_input: any;
    isResponsive_input: any;
    keySettings_input: any;
    locale_input: any;
    minWidth_input: any;
    pageSettings_input: any;
    query_input: any;
    resizeSettings_input: any;
    rowTemplate_input: any;
    rowDropSettings_input: any;
    searchSettings_input: any;
    selectedRecords_input: any;
    selectedRowIndex_input: any;
    selectedRowIndices_input: any;
    selectionSettings_input: any;
    selectionType_input: any;
    scrollSettings_input: any;
    showColumnChooser_input: any;
    showStackedHeader_input: any;
    showSummary_input: any;
    sortSettings_input: any;
    textWrapSettings_input: any;
    toolbarSettings_input: any;
    contextMenuSettings_contextMenuItems_input: any;
    contextMenuSettings_customContextMenuItems_input: any;
    contextMenuSettings_enableContextMenu_input: any;
    contextMenuSettings_disableDefaultItems_input: any;
    editSettings_allowAdding_input: any;
    editSettings_allowDeleting_input: any;
    editSettings_allowEditing_input: any;
    editSettings_allowEditOnDblClick_input: any;
    editSettings_dialogEditorTemplateID_input: any;
    editSettings_editMode_input: any;
    editSettings_externalFormTemplateID_input: any;
    editSettings_formPosition_input: any;
    editSettings_inlineFormTemplateID_input: any;
    editSettings_rowPosition_input: any;
    editSettings_showConfirmDialog_input: any;
    editSettings_showDeleteConfirmDialog_input: any;
    editSettings_titleColumn_input: any;
    editSettings_showAddNewRow_input: any;
    filterSettings_enableCaseSensitivity_input: any;
    filterSettings_enableInterDeterminateState_input: any;
    filterSettings_filterBarMode_input: any;
    filterSettings_filterType_input: any;
    filterSettings_immediateModeDelay_input: any;
    filterSettings_maxFilterChoices_input: any;
    filterSettings_showFilterBarStatus_input: any;
    filterSettings_showPredicate_input: any;
    groupSettings_captionFormat_input: any;
    groupSettings_enableDropAreaAutoSizing_input: any;
    groupSettings_groupedColumns_input: any;
    groupSettings_showDropArea_input: any;
    groupSettings_showGroupedColumn_input: any;
    groupSettings_showToggleButton_input: any;
    groupSettings_showUngroupButton_input: any;
    pageSettings_enableQueryString_input: any;
    pageSettings_enableTemplates_input: any;
    pageSettings_pageCount_input: any;
    pageSettings_pageSize_input: any;
    pageSettings_pageSizeList_input: any;
    pageSettings_showDefaults_input: any;
    pageSettings_template_input: any;
    pageSettings_totalPages_input: any;
    pageSettings_totalRecordsCount_input: any;
    pageSettings_printMode_input: any;
    resizeSettings_resizeMode_input: any;
    rowDropSettings_dropTargetID_input: any;
    rowDropSettings_dragMapper_input: any;
    rowDropSettings_dropMapper_input: any;
    rowDropSettings_dragBehavior_input: any;
    searchSettings_fields_input: any;
    searchSettings_key_input: any;
    searchSettings_operator_input: any;
    searchSettings_ignoreCase_input: any;
    selectionSettings_cellSelectionMode_input: any;
    selectionSettings_enableToggle_input: any;
    selectionSettings_allowDragSelection_input: any;
    selectionSettings_selectionMode_input: any;
    scrollSettings_allowVirtualScrolling_input: any;
    scrollSettings_autoHide_input: any;
    scrollSettings_buttonSize_input: any;
    scrollSettings_enableTouchScroll_input: any;
    scrollSettings_frozenColumns_input: any;
    scrollSettings_frozenRows_input: any;
    scrollSettings_height_input: any;
    scrollSettings_scrollerSize_input: any;
    scrollSettings_virtualScrollMode_input: any;
    scrollSettings_enableVirtualization_input: any;
    scrollSettings_width_input: any;
    scrollSettings_scrollOneStepBy_input: any;
    textWrapSettings_wrapMode_input: any;
    toolbarSettings_showToolbar_input: any;
    toolbarSettings_toolbarItems_input: any;
    columns_input: any;
    stackedHeaderRows_input: any;
    summaryRows_input: any;
    contextMenuSettings_subContextMenu_input: any;
    filterSettings_filteredColumns_input: any;
    sortSettings_sortedColumns_input: any;
    toolbarSettings_customToolbarItems_input: any;
    options: any;
    dataSource_two: any;
    dataSource_twoChange: EventEmitter<any>;
    pageSettings_currentPage_two: any;
    pageSettings_currentPage_twoChange: EventEmitter<any>;
    actionBegin_output: EventEmitter<{}>;
    actionComplete_output: EventEmitter<{}>;
    actionFailure_output: EventEmitter<{}>;
    batchAdd_output: EventEmitter<{}>;
    batchDelete_output: EventEmitter<{}>;
    beforeBatchAdd_output: EventEmitter<{}>;
    beforeBatchDelete_output: EventEmitter<{}>;
    beforeBatchSave_output: EventEmitter<{}>;
    beforePrint_output: EventEmitter<{}>;
    beforeRowDrop_output: EventEmitter<{}>;
    beginEdit_output: EventEmitter<{}>;
    cellEdit_output: EventEmitter<{}>;
    cellSave_output: EventEmitter<{}>;
    cellSelected_output: EventEmitter<{}>;
    cellSelecting_output: EventEmitter<{}>;
    cellDeselected_output: EventEmitter<{}>;
    cellDeselecting_output: EventEmitter<{}>;
    columnDrag_output: EventEmitter<{}>;
    columnDragStart_output: EventEmitter<{}>;
    columnDrop_output: EventEmitter<{}>;
    columnSelected_output: EventEmitter<{}>;
    columnSelecting_output: EventEmitter<{}>;
    columnDeselected_output: EventEmitter<{}>;
    columnDeselecting_output: EventEmitter<{}>;
    contextClick_output: EventEmitter<{}>;
    contextOpen_output: EventEmitter<{}>;
    create_output: EventEmitter<{}>;
    dataBound_output: EventEmitter<{}>;
    destroy_output: EventEmitter<{}>;
    detailsCollapse_output: EventEmitter<{}>;
    detailsDataBound_output: EventEmitter<{}>;
    detailsExpand_output: EventEmitter<{}>;
    endAdd_output: EventEmitter<{}>;
    endDelete_output: EventEmitter<{}>;
    endEdit_output: EventEmitter<{}>;
    load_output: EventEmitter<{}>;
    mergeHeaderCellInfo_output: EventEmitter<{}>;
    mergeCellInfo_output: EventEmitter<{}>;
    queryCellInfo_output: EventEmitter<{}>;
    recordClick_output: EventEmitter<{}>;
    recordDoubleClick_output: EventEmitter<{}>;
    resized_output: EventEmitter<{}>;
    resizeEnd_output: EventEmitter<{}>;
    resizeStart_output: EventEmitter<{}>;
    rightClick_output: EventEmitter<{}>;
    rowDataBound_output: EventEmitter<{}>;
    rowSelected_output: EventEmitter<{}>;
    rowSelecting_output: EventEmitter<{}>;
    rowDeselected_output: EventEmitter<{}>;
    rowDeselecting_output: EventEmitter<{}>;
    rowDrag_output: EventEmitter<{}>;
    rowDragStart_output: EventEmitter<{}>;
    rowDrop_output: EventEmitter<{}>;
    rowHover_output: EventEmitter<{}>;
    templateRefresh_output: EventEmitter<{}>;
    toolbarClick_output: EventEmitter<{}>;
    tag_columns: any;
    tag_summaryRows: any;
    tag_stackedHeaderRows: any;
    constructor(el: ElementRef, cdRef: ChangeDetectorRef, _ejIterableDiffers: IterableDiffers, _ejkeyvaluediffers: KeyValueDiffers);
}
export declare var EJ_GRID_COMPONENTS: Type<any>[];