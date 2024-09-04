import { Injectable } from '@angular/core';
import { Animal } from '../animal.interface'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalRemotionService {
  private apiUrl: string = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => a.name !== animal.name);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }

  getItem(id: Number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
}
