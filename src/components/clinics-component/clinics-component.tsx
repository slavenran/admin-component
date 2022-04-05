import { h, Component } from "@stencil/core";

@Component({
  tag: 'clinics-component',
  styleUrl: 'clinics-component.scss'
})
export class ClinicsComponent {

  render() {
    return (
      <div>Hi, I am a Clinics component!</div>
    )
  }
}