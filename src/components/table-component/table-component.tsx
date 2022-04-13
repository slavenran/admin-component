import { h, Component, Host, Prop } from "@stencil/core";
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

  @Prop({ mutable: true }) columns: Array<Column>;
  @Prop({ mutable: true }) dataSet: Array<Object>;
  @Prop() dataApi?: String;

  render() {
    return (
      <Host>
        <table>
          <thead>
            <tr>
              {/* TODO add checkbox */}
              <th>+</th>
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
                return <tr key={data['CustomerId']}>
                  {/* TODO add checkbox */}
                  <td>+</td>
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