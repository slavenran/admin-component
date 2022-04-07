import { h, Component, Prop, Host } from "@stencil/core";
import { GridColumn, GridBehavior } from 'smart-webcomponents/source/typescript/smart.elements';
import 'smart-webcomponents/source/components/smart.ui.grid.js';

const w = window as any;

@Component({
  tag: 'test-table-smart',
  styleUrl: 'test-table-smart.scss',
  scoped: true
})
export class TestTableSmart {
  @Prop({mutable: true}) columns: GridColumn[];
  @Prop({mutable: true}) behavior: GridBehavior;
  @Prop({mutable: true}) dataSource;
  @Prop({mutable: true}) appearance;
  @Prop({mutable: true}) paging;
  @Prop({mutable: true}) pager;
  @Prop({mutable: true}) sorting;
  @Prop({mutable: true}) editing;
  @Prop({mutable: true}) selection;

  componentDidLoad() {
    this.appearance = {
      alternationCount: 2,
      showRowHeader: true,
      showRowHeaderSelectIcon: true,
      showRowHeaderFocusIcon: true
    }

    this.sorting = {
      enabled: true
    }

    this.editing = {
      enabled: false
    }

    this.selection = {
      enabled: true,
      allowCellSelection: false,
      allowRowHeaderSelection: true,
      allowColumnHeaderSelection: false,
      mode: 'many'
    }

    this.columns = [
      { label: 'Id', dataField: 'CustomerID' },
      { label: 'Company Name', dataField: 'CompanyName' },
      { label: 'Contact Name', dataField: 'ContactName' },
      { label: 'Contact Title', dataField: 'ContactTitle' },
      { label: 'Address', dataField: 'Address' },
      { label: 'City', dataField: 'City' },
      { label: 'Country', dataField: 'Country' }
    ];
    
    this.paging = {
      enabled: true,
      pageSize: 15
    }

    this.pager = {
      visible: true
    }

    this.behavior = { columnResizeMode: 'growAndShrink' };

    this.dataSource = new w.Smart.DataAdapter({
      dataSource: 'https://raw.githubusercontent.com/HTMLElements/smart-webcomponents/master/sampledata/customers.json',
      id: 'CustomerID',
      dataFields: ['CustomerID: string', 'CompanyName: string', 'ContactName: string', 'ContactTitle: string', 'Address: string', 'City: string', 'Country: string'],
    });
  }

  render() {
    return (
      <Host>
        <smart-ui-grid appearance={this.appearance} sorting={this.sorting} selection={this.selection} editing={this.editing} behavior={this.behavior} dataSource={this.dataSource} columns={this.columns} paging={this.paging} pager={this.pager} id="grid"></smart-ui-grid>
      </Host>
    );
  }
}