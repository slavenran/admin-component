import { h, Component, Prop, Host } from "@stencil/core";
import { GridColumn } from 'smart-webcomponents/source/typescript/smart.elements';
import 'smart-webcomponents/source/components/smart.ui.grid.js';

const w = window as any;

const dataSet = [
  {
      "CustomerID": "ALFKI",
      "CompanyName": "Alfreds Futterkiste",
      "ContactName": "Maria Anders",
      "ContactTitle": "Sales Representative",
      "Address": "Obere Str. 57",
      "City": "Berlin",
      "Country": "Germany",
      "Status": "Active"
  },
  {
      "CustomerID": "ANATR",
      "CompanyName": "Ana Trujillo Emparedados y helados",
      "ContactName": "Ana Trujillo",
      "ContactTitle": "Owner",
      "Address": "Avda. de la Constitucin 2222",
      "City": "Mxico D.F.",
      "Country": "Mexico",
      "Status": "Active"
  },
  {
  "CustomerID": "ANTON",
      "CompanyName": "Antonio Moreno Taquera",
      "ContactName": "Antonio Moreno",
      "ContactTitle": "Owner",
      "Address": "Mataderos 2312",
      "City": "Mxico D.F.",
      "Country": "Mexico",
      "Status": "Active"
  },
  {
  "CustomerID": "AROUT",
      "CompanyName": "Around the Horn",
      "ContactName": "Thomas Hardy",
      "ContactTitle": "Sales Representative",
      "Address": "120 Hanover Sq.",
      "City": "London",
      "Country": "UK",
      "Status": "Active"
  },
  {
  "CustomerID": "BERGS",
      "CompanyName": "Berglunds snabbkp",
      "ContactName": "Christina Berglund",
      "ContactTitle": "Order Administrator",
      "Address": "Berguvsvgen 8",
      "City": "Lule",
      "Country": "Sweden",
      "Status": "Inactive"
  },
  {
  "CustomerID": "BLAUS",
      "CompanyName": "Blauer See Delikatessen",
      "ContactName": "Hanna Moos",
      "ContactTitle": "Sales Representative",
      "Address": "Forsterstr. 57",
      "City": "Mannheim",
      "Country": "Germany",
      "Status": "Inactive"
  },
  {
  "CustomerID": "BLONP",
      "CompanyName": "Blondesddsl pre et fils",
      "ContactName": "Frdrique Citeaux",
      "ContactTitle": "Marketing Manager",
      "Address": "24, place Klber",
      "City": "Strasbourg",
      "Country": "France",
      "Status": "Inactive"
  },
  {
    "CustomerID": "BOLID",
     "CompanyName": "Blido Comidas preparadas",
      "ContactName": "Martn Sommer",
      "ContactTitle": "Owner",
      "Address": "C/ Araquil, 67",
      "City": "Madrid",
      "Country": "Spain",
      "Status": "Inactive"
  },
  {
  "CustomerID": "BONAP",
      "CompanyName": "Bon app'",
      "ContactName": "Laurence Lebihan",
      "ContactTitle": "Owner",
      "Address": "12, rue des Bouchers",
      "City": "Marseille",
      "Country": "France",
      "Status": "Inactive"
  },
  {
  "CustomerID": "BOTTM",
      "CompanyName": "Bottom-Dollar Markets",
      "ContactName": "Elizabeth Lincoln",
      "ContactTitle": "Accounting Manager",
      "Address": "23 Tsawassen Blvd.",
      "City": "Tsawassen",
      "Country": "Canada",
      "Status": "Inactive"
  },
  {
   "CustomerID": "BSBEV",
      "CompanyName": "B's Beverages",
      "ContactName": "Victoria Ashworth",
      "ContactTitle": "Sales Representative",
      "Address": "Fauntleroy Circus",
      "City": "London",
      "Country": "UK",
      "Status": "Inactive"
  },
  {
   "CustomerID": "CACTU",
      "CompanyName": "Cactus Comidas para llevar",
      "ContactName": "Patricio Simpson",
      "ContactTitle": "Sales Agent",
      "Address": "Cerrito 333",
      "City": "Buenos Aires",
      "Country": "Argentina",
      "Status": "Inactive"
  },
  {
  "CustomerID": "CENTC",
      "CompanyName": "Centro comercial Moctezuma",
      "ContactName": "Francisco Chang",
      "ContactTitle": "Marketing Manager",
      "Address": "Sierras de Granada 9993",
      "City": "Mxico D.F.",
      "Country": "Mexico",
      "Status": "Inactive"
  },
  {
  "CustomerID": "CHOPS",
      "CompanyName": "Chop-suey Chinese",
      "ContactName": "Yang Wang",
      "ContactTitle": "Owner",
      "Address": "Hauptstr. 29",
      "City": "Bern",
      "Country": "Switzerland",
      "Status": "Inactive"
  },
  {
  "CustomerID": "COMMI",
      "CompanyName": "Comrcio Mineiro",
      "ContactName": "Pedro Afonso",
      "ContactTitle": "Sales Associate",
      "Address": "Av. dos Lusadas, 23",
      "City": "Sao Paulo",
      "Country": "Brazil",
      "Status": "Inactive"
  },
  {
  "CustomerID": "CONSH",
      "CompanyName": "Consolidated Holdings",
      "ContactName": "Elizabeth Brown",
      "ContactTitle": "Sales Representative",
      "Address": "Berkeley Gardens 12 Brewery",
      "City": "London",
      "Country": "UK",
      "Status": "Inactive"
  },
  {
  "CustomerID": "DRACD",
      "CompanyName": "Drachenblut Delikatessen",
      "ContactName": "Sven Ottlieb",
      "ContactTitle": "Order Administrator",
      "Address": "Walserweg 21",
      "City": "Aachen",
      "Country": "Germany",
      "Status": "Inactive"
  },
  {
  "CustomerID": "DUMON",
      "CompanyName": "Du monde entier",
      "ContactName": "Janine Labrune",
      "ContactTitle": "Owner",
      "Address": "67, rue des Cinquante Otages",
      "City": "Nantes",
      "Country": "France",
      "Status": "Inactive"
  },
  {
  "CustomerID": "EASTC",
      "CompanyName": "Eastern Connection",
      "ContactName": "Ann Devon",
      "ContactTitle": "Sales Agent",
      "Address": "35 King George",
      "City": "London",
      "Country": "UK",
      "Status": "Inactive"
  },
  {
  "CustomerID": "ERNSH",
      "CompanyName": "Ernst Handel",
      "ContactName": "Roland Mendel",
      "ContactTitle": "Sales Manager",
      "Address": "Kirchgasse 6",
      "City": "Graz",
      "Country": "Austria",
      "Status": <a href="#">Brt</a>
  }
]

@Component({
  tag: 'test-table-smart',
  styleUrl: 'test-table-smart.scss',
  scoped: true
})
export class TestTableSmart {
  @Prop({mutable: true}) columns: GridColumn[];
  @Prop({mutable: true}) dataSource;
  @Prop({mutable: true}) appearance;
  @Prop({mutable: true}) paging;
  @Prop({mutable: true}) pager;
  @Prop({mutable: true}) sorting;
  @Prop({mutable: true}) editing;
  @Prop({mutable: true}) selection;
  @Prop({mutable: true}) conditionalFormatting;

  componentDidLoad() {
    this.appearance = {
      showTooltips: true,
      showColumnLines: false,
      showColumnHeaderLines: false,
      showColumnActionButton: false
    }

    this.sorting = {
      enabled: true
    }

    this.editing = {
      enabled: false
    }

    this.selection = {
      enabled: true,
      checkBoxes: {
        enabled: true
      },
      allowRowHeaderSelection: true,
      allowRowSelection: false,
      mode: 'many'
    }

    this.columns = [
      { label: 'Id', dataField: 'CustomerID' },
      { label: 'Company Name', dataField: 'CompanyName' },
      { label: 'Contact Name', dataField: 'ContactName' },
      { label: 'Contact Title', dataField: 'ContactTitle' },
      { label: 'Address', dataField: 'Address' },
      { label: 'City', dataField: 'City' },
      { label: 'Country', dataField: 'Country' },
      { label: 'Status', dataField: 'Status'}
    ];
    
    this.paging = {
      enabled: true,
      pageSize: 10
    }

    this.pager = {
      visible: true
    }

    this.dataSource = new w.Smart.DataAdapter({
      dataSource: dataSet,
      id: 'CustomerID',
      dataFields: ['CustomerID: string', 'CompanyName: string', 'ContactName: string', 'ContactTitle: string', 'Address: string', 'City: string', 'Country: string', 'Status: string'],
    });

    this.conditionalFormatting = [
      {
        column: "Status",
        condition: "equal",
        firstValue: "Inactive",
        text: "red"
      },
      {
        column: "Status",
        condition: "equal",
        firstValue: "Active",
        text: "green"
      }
    ]
  }

  render() {
    return (
      <Host>
        <smart-ui-grid conditionalFormatting={this.conditionalFormatting} appearance={this.appearance} sorting={this.sorting} selection={this.selection} editing={this.editing} dataSource={this.dataSource} columns={this.columns} paging={this.paging} pager={this.pager} id="grid"></smart-ui-grid>
      </Host>
    );
  }
}