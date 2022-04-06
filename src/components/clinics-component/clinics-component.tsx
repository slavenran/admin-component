import { h, Component } from "@stencil/core";

@Component({
  tag: 'clinics-component',
  styleUrl: 'clinics-component.scss',
  scoped: true
})
export class ClinicsComponent {

  render() {
    return (
      <table-component></table-component>
    )
  }
}