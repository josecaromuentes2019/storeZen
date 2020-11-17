import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyStore';

  public categorias: string[] =[
    "Sofas & Couches",
    "Living Room Furniture",
    "Television Stands",
    "Bedroom Furniture",
    "Coffee Tables</a>",
    "Kitchen & Dining Room",
    "Chests of Drawers",
    "Ottomans",
    "Kids' Furniture & Decor",
    "Media Storage",
  ];
}
