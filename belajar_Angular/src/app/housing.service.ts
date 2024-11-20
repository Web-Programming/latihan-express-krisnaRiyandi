import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocationList : HousingLocation[] = [
    {
      id: 0,
      name: "CGC",
      city: "Palembang",
      state: "Sumsel",
      photo: "https://i.ytimg.com/vi/nyFaGh4aFbY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGIgYihiMA8=&rs=AOn4CLDjCxoSz-d6JGFwRCuYN11dt9RZwQ",
      availableUnit: 12,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: "Citra Land",
      city: "Palembang",
      state: "Sumsel",
      photo: "https://awsimages.detik.net.id/community/media/visual/2023/07/13/rumah-murahdok-sikumbang-kementerian-pupr-4_169.jpeg?w=600&q=90",
      availableUnit: 12,
      wifi: true,
      laundry: true
    }
];

  constructor() { }

  getAllHousingLocations(): HousingLocation[]{
    return this.housingLocationList;
  }
  getHousingLocationById(id: number) : HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id == id);
  }

  submitApplication(firstName: String, lastName: String, email: String){
    console.log(firstName, lastName, email);

  }
}
