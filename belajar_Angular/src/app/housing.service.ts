import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url= "http://localhost:3000/housing";

  // protected housingLocationList : HousingLocation[] = [
  //   {
  //     id: 0,
  //     name: "CGC",
  //     city: "Palembang",
  //     state: "Sumsel",
  //     photo: "https://i.ytimg.com/vi/nyFaGh4aFbY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGIgYihiMA8=&rs=AOn4CLDjCxoSz-d6JGFwRCuYN11dt9RZwQ",
  //     availableUnit: 12,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 1,
  //     name: "Citra Land",
  //     city: "Palembang",
  //     state: "Sumsel",
  //     photo: "https://awsimages.detik.net.id/community/media/visual/2023/07/13/rumah-murahdok-sikumbang-kementerian-pupr-4_169.jpeg?w=600&q=90",
  //     availableUnit: 12,
  //     wifi: true,
  //     laundry: true
  //   }
//];
  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getHousingLocationById(id: Number) : Promise<HousingLocation | undefined>{
    const data = await fetch(`${this.url}/${id}`); // Gunakan backtick
    //const data = await fetch('${this.url}/${id}'); // contohnya http://localhost:3000/housing/1
    console.log(data);
    return (await data.json()) ?? [];
  }

  // submitApplication(firstName: String, lastName: String, email: String){
  //   console.log(firstName, lastName, email);

  // }
  async submitApplication(firstname: String, lastname: String, email: String) {
    try {
        // URL API untuk menginsert data aplikasi ke MongoDB
        const apiURL = "http://localhost:3000/register"; // Ganti dengan URL API yang sesuai

        // Menggunakan fetch untuk memanggil API dengan metode POST
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Mengatur tipe konten ke JSON
            },
            body: JSON.stringify({firstname, lastname, email}), // Mengubah data aplikasi menjadi string JSON
        });

        // Mengecek apakah respons sukses
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Menangani respons dari API
        const result = await response.json();
        console.log("Application submitted successfully:", result);

        // Mengembalikan hasil jika diperlukan
        return result;
    } catch (error) {
        // Menangani error jika terjadi kegagalan dalam proses
        console.error("Failed to submit application:", error);
        throw error;
    }

  }
}
