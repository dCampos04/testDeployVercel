import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformationResponseDTO } from '../interfaces/InformationResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl: string = environment.backend_principal_url;

  constructor(private http: HttpClient) { }

  getInformationByUser(): Observable<InformationResponseDTO> {
    return this.http.get<InformationResponseDTO>(`${this.baseUrl}/api/users/info`);
  }

}
