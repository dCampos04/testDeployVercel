import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServicioMecanicoDTO } from '../interfaces/ServicioMecanicoDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  public baseUrl: string = environment.backend_principal_url;

  constructor(private http: HttpClient) { }

  getAllWorkshopAssignments(): Observable<ServicioMecanicoDTO[]> {
    return this.http.get<ServicioMecanicoDTO[]>(`${this.baseUrl}/api/assignments/todas`)
  }

}
