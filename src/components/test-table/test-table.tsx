import { h, Component, Prop } from '@stencil/core';
import 'https://unpkg.com/ag-grid-community@27.1.0/dist/ag-grid-community.min.js';

@Component({
  tag: 'test-table',
  styleUrl: 'test-table.scss',
  scoped: false
})
export class TestTable {
  
  @Prop() properties;

  content: null = null;

  gridOptions = {
    rowData: this.content,
    columnDefs: [
      {
        headerName: 'Athlete',
        field: 'athlete',
        minWidth: 180,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
      },
      { field: 'age' },
      { field: 'country', minWidth: 150 },
      { field: 'year' },
      { field: 'date', minWidth: 150 },
      { field: 'sport', minWidth: 150 },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 100,
      resizable: true,
    },
    suppressRowClickSelection: true,
    rowSelection: 'multiple',
  };

  componentWillLoad() {
    return fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then(response => response.json())
        .then(data => {
            this.gridOptions.rowData = data;
        });
  }

  componentDidLoad() {
    const gridDiv = document.querySelector('#myGrid');
    new window['agGrid'].Grid(gridDiv, this.gridOptions);
  }
  
  render() {
    return <div id="myGrid" class="gag-theme-balham"></div>
  }
}