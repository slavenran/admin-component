import { h, Component } from "@stencil/core";

@Component({
  tag: 'table-component',
  styleUrl: 'table-component.scss',
  scoped: true
})
export class TableComponent {

  render() {
    return (
      <div>Hi, I am a table component!</div>
    )
  }
}