import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList : HousingLocation[] = [
    {
      id: 0,
      name: "CGC",
      city: "Palembang",
      state: "Sumsel",
      photo: "https://i.ytimg.com/vi/4IUQcHt1ONk/maxresdefault.jpg",
      availableUnit: 12,
      wifi: true,
      laundry: true
    },
    {
      id: 0,
      name: "Citra Land",
      city: "Palembang",
      state: "Sumsel",
      photo: "https://i.ytimg.com/vi/4IUQcHt1ONk/maxresdefault.jpg",
      availableUnit: 12,
      wifi: true,
      laundry: true
    }
]
}
