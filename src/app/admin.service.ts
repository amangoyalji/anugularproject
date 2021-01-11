import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public registerAdmin(admin:Admin):Observable<Admin>{
    return this.http.post<Admin>('http://localhost:8080/addAdmin',admin);
  }

  public loginAdmin(adminEmail:string,adminPassword:string):Observable<Admin>{
    return this.http.get<Admin>('http://localhost:8080/loginAdmin/'+adminEmail+'/'+adminPassword);
  }




}
