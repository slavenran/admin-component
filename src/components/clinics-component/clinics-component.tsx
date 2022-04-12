import { h, Component } from "@stencil/core";
import { dataSet } from "../../utils/const";

@Component({
  tag: 'clinics-component',
  styleUrl: 'clinics-component.scss',
  scoped: true
})
export class ClinicsComponent {

  columns = [
    { label: 'Id', dataField: 'CustomerID' },
    { label: 'Company Name', dataField: 'CompanyName' },
    { label: 'Contact Name', dataField: 'ContactName' },
    { label: 'Contact Title', dataField: 'ContactTitle' },
    { label: 'Address', dataField: 'Address' },
    { label: 'City', dataField: 'City' },
    { label: 'Country', dataField: 'Country' },
    { label: 'Status', dataField: 'Status' }
  ];

  render() {
    return (
      <table-component columns={this.columns} dataSet={dataSet}></table-component>
    )
  }
}