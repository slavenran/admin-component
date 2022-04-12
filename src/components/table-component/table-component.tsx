import { h, Component, Host, Prop } from "@stencil/core";

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
                  return <th>{column.label}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              this.dataSet.map((data) => {
                return <tr>
                  {/* TODO add checkbox */}
                  <td>+</td>
                  {
                    this.columns.map((column) => {
                      return <td>{data[column.dataField]}</td>
                    })
                  }
                </tr>
              })
            }
          </tbody>
        </table>
      </Host>
    )
  }
}