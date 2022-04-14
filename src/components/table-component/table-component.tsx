import { h, Component, Host, Prop, State, Watch } from "@stencil/core";
import LeftArrow from "../../assets/images/left-arrow.svg";
import RightArrow from "../../assets/images/right-arrow.svg";
import NoSort from "../../assets/images/no-sort.svg";

export interface Column {
  label: string;
  dataField: string;
}

@Component({
  tag: 'table-component',
  styleUrl: 'table-component.scss',
  scoped: true
})
export class TableComponent {

  checkboxRef!: HTMLInputElement;

  @Prop({ mutable: true }) columns: Array<Column>;
  @Prop({ mutable: true }) dataSet: Array<Object>;
  @Prop() dataApi?: String;

  @State() checkedEntries: Array<any> = [];

  @Watch('checkedEntries')
  checkedEntriesHandler(currValue: Array<any>) {
    if (currValue.length > 0) {
      this.checkboxRef.indeterminate = true;
    } else {
      this.checkboxRef.indeterminate = false;
    }
  }

  render() {
    return (
      <Host>
        <table>
          <thead>
            <tr>
              <th><div class="checkbox"><input ref={(el) => this.checkboxRef = el as HTMLInputElement} type="checkbox" /></div></th>
              {
                this.columns.map((column) => {
                  return <th key={column.label}><div>{column.label} <img src={NoSort} alt='leftArrow' /></div></th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              this.dataSet.map((data) => {
                return <tr key={data['CustomerID']}>
                  <td><div class="checkbox"><input type="checkbox" onClick={(e) => {
                    (e.target as HTMLInputElement).checked ?
                      this.checkedEntries = [...this.checkedEntries, data['CustomerID']]
                      :
                      this.checkedEntries = [...this.checkedEntries.filter((entry) => entry !== data['CustomerID'])];
                  }} /></div></td>
                  {
                    this.columns.map((column) => {
                      return <td key={column.label} title={data[column.dataField]}>{data[column.dataField]}</td>
                    })
                  }
                </tr>
              })
            }
          </tbody>
        </table>
        <div class="pagination">
          <div class="pagination-button"><img src={LeftArrow} alt='leftArrow' /></div>
          <div class="divider" />
          <div class="pagination-button">1</div>
          <div class="pagination-button">2</div>
          <div class="pagination-button">3</div>
          <div class="pagination-button">4</div>
          <div class="pagination-button">5</div>
          <div class="divider" />
          <div class="pagination-button"><img src={RightArrow} alt='rightArrow' /></div>
        </div>
      </Host>
    )
  }
}