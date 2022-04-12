/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Column } from "./components/table-component/table-component";
import { GridColumn } from "smart-webcomponents/source/typescript/smart.elements";
export namespace Components {
    interface ClinicsComponent {
    }
    interface TableComponent {
        "columns": Array<Column>;
        "dataApi"?: String;
        "dataSet": Array<Object>;
    }
    interface TestTable {
        "properties": any;
    }
    interface TestTableSmart {
        "appearance": any;
        "columns": GridColumn[];
        "conditionalFormatting": any;
        "dataSource": any;
        "editing": any;
        "pager": any;
        "paging": any;
        "selection": any;
        "sorting": any;
    }
}
declare global {
    interface HTMLClinicsComponentElement extends Components.ClinicsComponent, HTMLStencilElement {
    }
    var HTMLClinicsComponentElement: {
        prototype: HTMLClinicsComponentElement;
        new (): HTMLClinicsComponentElement;
    };
    interface HTMLTableComponentElement extends Components.TableComponent, HTMLStencilElement {
    }
    var HTMLTableComponentElement: {
        prototype: HTMLTableComponentElement;
        new (): HTMLTableComponentElement;
    };
    interface HTMLTestTableElement extends Components.TestTable, HTMLStencilElement {
    }
    var HTMLTestTableElement: {
        prototype: HTMLTestTableElement;
        new (): HTMLTestTableElement;
    };
    interface HTMLTestTableSmartElement extends Components.TestTableSmart, HTMLStencilElement {
    }
    var HTMLTestTableSmartElement: {
        prototype: HTMLTestTableSmartElement;
        new (): HTMLTestTableSmartElement;
    };
    interface HTMLElementTagNameMap {
        "clinics-component": HTMLClinicsComponentElement;
        "table-component": HTMLTableComponentElement;
        "test-table": HTMLTestTableElement;
        "test-table-smart": HTMLTestTableSmartElement;
    }
}
declare namespace LocalJSX {
    interface ClinicsComponent {
    }
    interface TableComponent {
        "columns"?: Array<Column>;
        "dataApi"?: String;
        "dataSet"?: Array<Object>;
    }
    interface TestTable {
        "properties"?: any;
    }
    interface TestTableSmart {
        "appearance"?: any;
        "columns"?: GridColumn[];
        "conditionalFormatting"?: any;
        "dataSource"?: any;
        "editing"?: any;
        "pager"?: any;
        "paging"?: any;
        "selection"?: any;
        "sorting"?: any;
    }
    interface IntrinsicElements {
        "clinics-component": ClinicsComponent;
        "table-component": TableComponent;
        "test-table": TestTable;
        "test-table-smart": TestTableSmart;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "clinics-component": LocalJSX.ClinicsComponent & JSXBase.HTMLAttributes<HTMLClinicsComponentElement>;
            "table-component": LocalJSX.TableComponent & JSXBase.HTMLAttributes<HTMLTableComponentElement>;
            "test-table": LocalJSX.TestTable & JSXBase.HTMLAttributes<HTMLTestTableElement>;
            "test-table-smart": LocalJSX.TestTableSmart & JSXBase.HTMLAttributes<HTMLTestTableSmartElement>;
        }
    }
}
